#!/usr/bin/env python3
"""
Zet de CMS-content (content/modules/*.md en content/naslag/*.md) om naar
kant-en-klare MkDocs-pagina's in docs/, inclusief fase-balk, blokken,
naslag en de checklist-poort. Genereert ook het 'nav'-menu in mkdocs.yml.

Dit script draait automatisch tijdens publicatie (zie deploy.yml).
Lokaal draaien kan met:  python scripts/build_content.py
"""
import os, re, glob, yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODULES_DIR = os.path.join(ROOT, "content", "modules")
NASLAG_DIR  = os.path.join(ROOT, "content", "naslag")
DOCS_DIR    = os.path.join(ROOT, "docs")
MKDOCS_YML  = os.path.join(ROOT, "mkdocs.yml")

# Alle fase-labels voor de voortgangsbalk (volgorde -> kort label)
BALK = [
    ("00", "Welkom"), ("01", "1 Oriëntatie"), ("02", "2 Ontwikkeling"),
    ("03", "3 Voorbereiding"), ("04", "4 Start"), ("05", "5 Uitvoering"),
    ("06", "6 Analyse"), ("07", "7 Afronding"), ("08", "8 Disseminatie"),
]

def read_frontmatter(path):
    """Lees een Decap-bestand: YAML-frontmatter + (optioneel) body.
    Splitst alleen op een '---' die op een eigen regel staat, zodat
    Markdown-tabellen (met | --- |) de parser niet in de war brengen."""
    with open(path, encoding="utf-8") as f:
        txt = f.read()
    if txt.startswith("---"):
        lines = txt.splitlines()
        end = None
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                end = i
                break
        if end is not None:
            fm = "\n".join(lines[1:end])
            body = "\n".join(lines[end+1:])
            data = yaml.safe_load(fm) or {}
            data["_body"] = body.strip()
            return data
    return {"_body": txt}

def fase_balk(active_volgorde):
    items = []
    for v, label in BALK:
        cls = ' class="actief"' if v == active_volgorde else ""
        items.append(f"<span{cls}>{label}</span>")
    return '<div class="fase-balk">\n' + "\n".join(items) + "\n</div>\n"

def render_blok(blok):
    t = blok.get("type")
    if t == "tekst":
        return blok.get("inhoud", "").strip() + "\n"
    if t in ("tip", "letop", "valkuil"):
        klass = {"tip": "tip", "letop": "warning", "valkuil": "danger"}[t]
        kop = blok.get("kop", "")
        inhoud = indent(blok.get("inhoud", ""))
        return f'!!! {klass} "{kop}"\n{inhoud}\n'
    if t == "todo":
        inhoud = indent(blok.get("inhoud", ""))
        return f'!!! todo "Nog aan te vullen"\n{inhoud}\n'
    if t == "code":
        taal = blok.get("taal", "text")
        return f'```{taal}\n{blok.get("inhoud","").rstrip()}\n```\n'
    if t == "inklap":
        kop = blok.get("kop", "")
        inhoud = indent(blok.get("inhoud", ""))
        return f'??? note "{kop}"\n{inhoud}\n'
    if t == "tabel":
        return blok.get("inhoud", "").strip() + "\n"
    return ""

def indent(text, spaces=4):
    pad = " " * spaces
    return "\n".join(pad + line if line.strip() else line
                     for line in text.strip().splitlines())

def build_module(data):
    volgorde = str(data.get("volgorde", "")).zfill(2)
    out = []
    out.append(f'# {data.get("titel","")}\n')
    if data.get("toon_balk", True):
        out.append(fase_balk(volgorde))
    if data.get("intro"):
        out.append("## Wat gebeurt er in deze fase?\n")
        out.append(data["intro"].strip() + "\n")
    if data.get("benodigdheden"):
        out.append("## Wat heb je nodig?\n")
        for punt in data["benodigdheden"]:
            out.append(f"- {punt}")
        out.append("")
    for sub in data.get("subhoofdstukken", []) or []:
        out.append(f'## {sub.get("subtitel","")}\n')
        for blok in sub.get("blokken", []) or []:
            out.append(render_blok(blok))
    if data.get("naslag"):
        out.append('<div class="naslag" markdown>')
        out.append("**Naslag bij deze fase**\n")
        for punt in data["naslag"]:
            out.append(f"- {punt}")
        out.append("</div>\n")
    # Checklist-poort (zie checklist.js + extra.css). Niet op de welkompagina.
    if str(data.get("volgorde","")).zfill(2) != "00":
        out.append('<div class="checklist-poort" data-volgorde="%s"></div>\n'
                    % str(data.get("volgorde","")).zfill(2))
    return "\n".join(out)

def main():
    # ----- Modules -----
    raw = []
    for path in sorted(glob.glob(os.path.join(MODULES_DIR, "*.md"))):
        data = read_frontmatter(path)
        slug = os.path.splitext(os.path.basename(path))[0]
        data["_slug"] = slug
        raw.append((str(data.get("volgorde", "")).zfill(2), data))
    raw.sort(key=lambda r: r[0])

    modules = []
    for idx, (volgorde, data) in enumerate(raw):
        slug = data["_slug"]
        # De welkompagina (00) wordt index.md (de homepage van de site)
        is_welkom = volgorde == "00"
        docs_slug = "index" if is_welkom else slug
        body = build_module(data)

        # Navigatieknoppen onderaan (vorige / volgende)
        prev_link = None if idx == 0 else (
            "index.md" if raw[idx-1][0] == "00" else raw[idx-1][1]["_slug"] + ".md")
        next_link = None if idx == len(raw)-1 else raw[idx+1][1]["_slug"] + ".md"
        knoppen = []
        if prev_link:
            knoppen.append(f"[← Vorige]({prev_link}){{ .md-button }}")
        if next_link:
            label = "Volgende fase →"
            knoppen.append(f"[{label}]({next_link}){{ .md-button .md-button--primary }}")
        else:
            knoppen.append("[Terug naar Welkom](index.md){ .md-button .md-button--primary }")
        body += "\n" + " ".join(knoppen) + "\n"

        target = os.path.join(DOCS_DIR, f"{docs_slug}.md")
        with open(target, "w", encoding="utf-8") as f:
            f.write(body)
        modules.append((volgorde, data.get("menutitel", data.get("titel", slug)),
                        f"{docs_slug}.md"))
        print("module:", target)

    # ----- Naslagpagina's -----
    naslag = []
    for path in sorted(glob.glob(os.path.join(NASLAG_DIR, "*.md"))):
        data = read_frontmatter(path)
        slug = data.get("slug") or os.path.splitext(os.path.basename(path))[0]
        target = os.path.join(DOCS_DIR, "bijlagen", f"{slug}.md")
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, "w", encoding="utf-8") as f:
            f.write(f'# {data.get("titel","")}\n\n{data.get("_body","") or data.get("body","")}\n')
        naslag.append((data.get("titel", slug), f"bijlagen/{slug}.md"))
        print("naslag:", target)

    # ----- mkdocs.yml nav bijwerken (alleen als er CMS-content is) -----
    if modules:
        modules.sort(key=lambda m: m[0])
        update_nav(modules, naslag)

def update_nav(modules, naslag):
    with open(MKDOCS_YML, encoding="utf-8") as f:
        cfg = f.read()
    nav_lines = ["nav:"]
    for _, titel, fn in modules:
        nav_lines.append(f"  - '{titel}': {fn}")
    if naslag:
        nav_lines.append("  - 'Naslag (alle modules)':")
        for titel, fn in naslag:
            nav_lines.append(f"      - '{titel}': {fn}")
    new_nav = "\n".join(nav_lines) + "\n"
    # vervang bestaande nav: blok
    cfg = re.sub(r"\nnav:.*\Z", "\n" + new_nav, cfg, flags=re.S)
    with open(MKDOCS_YML, "w", encoding="utf-8") as f:
        f.write(cfg)
    print("mkdocs.yml nav bijgewerkt")

if __name__ == "__main__":
    main()
