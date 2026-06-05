# ELAN E-learning voor onderzoekers

Een lineaire e-learning die startende onderzoekers stap voor stap door de
acht fasen van werken met ELAN-data leidt. Gebouwd met
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) en
gepubliceerd via GitHub Pages.

> Deze README is **voor beheerders** en verschijnt niet op de website.

---

## 1. Inhoud bijwerken

Alle inhoud staat als Markdown in de map `docs/`. Eén bestand = één fase.

| Bestand | Verschijnt in menu als |
| --- | --- |
| `docs/index.md` | Welkom |
| `docs/01-orientatie.md` | Fase 1 — Oriëntatie & idee |
| `docs/02-ontwikkeling.md` | Fase 2 — Ontwikkeling |
| `docs/03-voorbereiding.md` | Fase 3 — Voorbereiding & toegang |
| `docs/04-startfase.md` | Fase 4 — Start & datalevering |
| `docs/05-uitvoering.md` | Fase 5 — Uitvoering & voorbewerking |
| `docs/06-analyse.md` | Fase 6 — Analyse |
| `docs/07-afronding.md` | Fase 7 — Afronding |
| `docs/08-disseminatie.md` | Fase 8 — Disseminatie |
| `docs/bijlagen/*.md` | Naslag |

**Bewerken via de website:** open een `.md`-bestand op GitHub, klik op het
potlood-icoon, pas aan en klik **Commit changes**. De site werkt zichzelf
binnen enkele minuten bij.

**Lokaal bewerken (voorbeeld zien vóór publicatie):**

```bash
pip install mkdocs-material
mkdocs serve     # open daarna http://127.0.0.1:8000
```

## 2. Een nieuwe module toevoegen

1. Maak een nieuw bestand in `docs/`, bijv. `09-nieuwe-fase.md`.
2. Voeg het toe aan de `nav:` in `mkdocs.yml` op de gewenste plek.
3. Kopieer de opbouw van een bestaande module (zie hieronder).

## 3. Onderdelen die nog moeten worden ingevuld

Door de hele e-learning staan blokken met de markering **"Nog aan te vullen"**
(geel kader). Dit zijn plekken waar de inhoud nog niet definitief is. Zoek in
de `.md`-bestanden op `NOG-AAN-TE-VULLEN` om ze allemaal te vinden.

## 4. Vaste opbouw van een modulepagina

Elke fase volgt dezelfde structuur:

1. Fase-voortgangsbalk (toont waar je bent in de 8 fasen)
2. **Wat gebeurt er in deze fase?**
3. **Wat heb je nodig?**
4. Inhoud / stappen
5. Tips & valkuilen (`!!! tip`, `!!! warning`, `!!! danger`)
6. **Naslag bij deze fase** (klein blok met bronnen en contact)
7. Link naar de volgende fase

## 5. Iconen / blokken (Markdown-syntax)

```markdown
!!! tip "Tip"
    Praktische tip.

!!! warning "Let op"
    Iets om op te letten.

!!! danger "Valkuil"
    Veelgemaakte fout.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: beschrijf hier wat er nog moet komen.

??? note "Klik om uit te klappen"
    Verborgen tekst.
```

Beheer: Aidan Kloots · a.kloots@lumc.nl
