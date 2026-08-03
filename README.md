# ELAN E-learning voor onderzoekers

Lineaire e-learning voor startende onderzoekers. Leidt stap voor stap
door acht fasen van werken met ELAN-data. Gebouwd met
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).
Beheeromgeving ingebouwd, achter wachtwoordscherm.

> Deze README is voor beheerders. Verschijnt niet op de website.

Live: https://aidankl.github.io/ELAN-e-learning/
Repo: https://github.com/AidanKl/ELAN-e-learning

---

## 1. Opbouw van de repository
```
content/
modules/ 8 fasen + welkomstpagina, elk 1 bestand
naslag/ FAQ, contactpersonen, checklists, scripts
scripts/
build_content.py zet content/ om naar docs/ (draait automatisch bij push)
docs/ GEGENEREERD — nooit handmatig bewerken
admin/ beheeromgeving (wachtwoord + editor)
javascripts/
checklist.js logica checklist-poort
checklist-data.js afvinkpunten per fase
mkdocs.yml site-config + menu (nav)
.github/workflows/
deploy.yml bouwt + publiceert bij push naar main
```

Regel: **content/ bewerken, nooit docs/**. docs/ wordt bij elke build
overschreven.

## 2. Inhoud bijwerken — twee manieren

**A. Via beheeromgeving (aanbevolen)**
`https://aidankl.github.io/ELAN-e-learning/admin/`
→ wachtwoord → module kiezen → bewerken → *Opslaan & publiceren*.
Site herbouwt zichzelf in 1–2 minuten.

Wachtwoord: `ELAN`
Wijzigen: hash in `docs/admin/index.html` vervangen (SHA-256, zie
commentaar in bestand).

**Opslaan werkt pas na beheersleutel (eenmalig per beheerder):**
1. GitHub → Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token.
2. Repository access: alleen deze repo.
3. Permissions → Contents: **Read and write**.
4. Sleutel genereren, plakken in editor bij eerste keer opslaan.

Sleutel blijft lokaal in de browser (knop "Beheersleutel…" rechtsboven
om te wijzigen/verwijderen). Zonder sleutel: alles zichtbaar, niets
opslaan.

> Wachtwoord = drempel, geen beveiliging. Echte schrijfbeveiliging zit
> bij de beheersleutel (GitHub-rechten).

**B. Rechtstreeks op GitHub (alternatief)**
Bestand in `content/` openen → potlood-icoon → wijzigen → Commit changes.
Zelfde resultaat, geen editor nodig.

## 3. Subhoofdstuk-velden (laag 2)

Elk subhoofdstuk toont titel + kernzin altijd. De rest (blokken) zit
achter een klik ("Uitwerking tonen"). Zo blijft de pagina scanbaar,
ook voor beleidslezers die alleen fase 1–2 doorlopen.

Velden per subhoofdstuk:
- `subtitel` — verplicht, titel van het subhoofdstuk.
- `kernzin` — één zin, altijd zichtbaar, ook zonder doorklikken.
  **Niet leeg laten** — zonder kernzin ziet de lezer alleen een kop
  en een knop, geen inhoud.
- `uitklap_label` — tekst op de knop. Leeg = "Uitwerking tonen".
  Concreter werkt beter, bv. "De 7 stappen bekijken".
- `open` — `true` = subhoofdstuk staat meteen opengeklapt. Gebruik
  spaarzaam, ondermijnt anders het doel (bewust laten klikken).

De welkompagina (`00`) klapt nooit in — daar blijft alles direct
zichtbaar.

## 4. Lokaal werken met GitHub Desktop (aanbevolen bij grotere wijzigingen)

1. GitHub Desktop openen → **File → Clone repository**.
2. Repo kiezen: `AidanKl/ELAN-e-learning` → lokale map kiezen → Clone.
3. Bestanden in `content/` bewerken met eigen editor (bv. VS Code,
   Notepad).
4. Terug in GitHub Desktop: wijzigingen verschijnen automatisch links.
5. Onderaan: commit-bericht typen → **Commit to main**.
6. **Push origin** rechtsboven.
7. GitHub Action bouwt en publiceert automatisch (1–2 min).

Preview vooraf lokaal bekijken (optioneel, vereist Python):
open map in terminal via GitHub Desktop (**Repository → Open in
Command Prompt/Terminal**), dan:
```
pip install mkdocs-material pyyaml
python scripts/build_content.py
mkdocs serve
```
Browser naar `http://127.0.0.1:8000`.

## 5. Fase-voortgang (stepper bovenaan elke module)

Bolletje per fase, gevuld op basis van de checklist-poort van die fase:
- leeg = nog niets afgevinkt
- half gekleurd = deels afgevinkt ("bezig")
- vinkje = alles afgevinkt ("af")
- donkerblauw + ring = huidige fase

Bron van de status: dezelfde `localStorage`-data als de checklist-poort
(`elan-checklist-XX`). Geen aparte opslag, geen extra werk bij het
schrijven van content. Logica staat in
`docs/javascripts/fase-voortgang.js`, stijl in `docs/stylesheets/extra.css`.

Onder de balk verschijnt automatisch een tellertekst, bv.
"3 van 8 fasen afgerond".

## 6. Checklist-poort

Onderaan elke fase: checklist. Knop "Volgende fase" pas actief als alles
afgevinkt is. Voortgang opgeslagen in browser gebruiker (geen centrale
registratie). Voedt ook de fase-stepper (zie punt 5).

Afvinkpunten aanpassen: `docs/javascripts/checklist-data.js`.
Module weglaten uit dat bestand = geen poort tonen.

## 7. Diagram-voorbeelden (bloktype `diagram`)

SVG plakken bij bloktype `diagram`. Klassen kleuren automatisch mee met
lichte/donkere modus (zie `.edia`-regels in `extra.css`). Drie
kant-en-klare sjablonen, kopiëren en aanpassen:

**Procespijl (stappen na elkaar, één als accent):**
```html
<svg viewBox="0 0 640 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vier processtappen na elkaar">
  <defs>
    <marker id="epijl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path class="epijlkop" d="M0 0 L10 5 L0 10 z"/>
    </marker>
  </defs>
  <rect class="ebox" x="4" y="17" width="128" height="50" rx="4"/>
  <text class="et" x="68" y="39" text-anchor="middle">Stap 1</text>
  <text class="ets" x="68" y="55" text-anchor="middle">korte toelichting</text>
  <path class="earr" d="M136 42 H162" marker-end="url(#epijl)"/>
  <rect class="ebox" x="170" y="17" width="128" height="50" rx="4"/>
  <text class="et" x="234" y="39" text-anchor="middle">Stap 2</text>
  <text class="ets" x="234" y="55" text-anchor="middle">korte toelichting</text>
  <path class="earr" d="M302 42 H328" marker-end="url(#epijl)"/>
  <g class="ebox-accent">
    <rect x="336" y="17" width="128" height="50" rx="4"/>
    <text class="et" x="400" y="39" text-anchor="middle">Stap 3</text>
    <text class="ets" x="400" y="55" text-anchor="middle">korte toelichting</text>
  </g>
  <path class="earr" d="M468 42 H494" marker-end="url(#epijl)"/>
  <rect class="ebox" x="502" y="17" width="128" height="50" rx="4"/>
  <text class="et" x="566" y="39" text-anchor="middle">Stap 4</text>
  <text class="ets" x="566" y="55" text-anchor="middle">korte toelichting</text>
</svg>
```

**Keuzeboom (ja/nee-pad, samenkomend):**
```html
<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Keuzeboom met ja- en nee-pad">
  <defs>
    <marker id="epijl2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path class="epijlkop" d="M0 0 L10 5 L0 10 z"/>
    </marker>
  </defs>
  <g class="ebox-accent">
    <rect x="216" y="8" width="208" height="44" rx="4"/>
    <text class="et" x="320" y="27" text-anchor="middle">Vraag of voorwaarde</text>
    <text class="ets" x="320" y="43" text-anchor="middle">waar hangt de keuze van af?</text>
  </g>

  <path class="earr" d="M320 52 V78 H120 V100" marker-end="url(#epijl2)"/>
  <path class="earr" d="M320 52 V78 H520 V100" marker-end="url(#epijl2)"/>
  <text class="ets" x="212" y="74" text-anchor="middle">ja</text>
  <text class="ets" x="428" y="74" text-anchor="middle">nee</text>

  <rect class="ebox-groen" x="16" y="106" width="208" height="44" rx="4"/>
  <text class="et" x="120" y="125" text-anchor="middle">Route A</text>
  <text class="ets" x="120" y="141" text-anchor="middle">wat je dan doet</text>

  <rect class="ebox-geel" x="416" y="106" width="208" height="44" rx="4"/>
  <text class="et" x="520" y="125" text-anchor="middle">Route B</text>
  <text class="ets" x="520" y="141" text-anchor="middle">wat je dan doet</text>

  <path class="earr" d="M120 150 V176 H320 V196" marker-end="url(#epijl2)"/>
  <path class="earr" d="M520 150 V176 H320 V196" marker-end="url(#epijl2)"/>

  <rect class="ebox" x="216" y="202" width="208" height="40" rx="4"/>
  <text class="et" x="320" y="227" text-anchor="middle">Vervolgstap</text>
</svg>
```

**Tijdlijn (vier mijlpalen):**
```html
<svg viewBox="0 0 640 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tijdlijn met vier mijlpalen">
  <line class="earr" x1="20" y1="60" x2="620" y2="60"/>
  <circle class="ebox-accent" cx="80" cy="60" r="9"/>
  <text class="et" x="80" y="40" text-anchor="middle">Mijlpaal 1</text>
  <text class="ets" x="80" y="88" text-anchor="middle">wat, en wanneer</text>
  <circle class="ebox" cx="253" cy="60" r="9"/>
  <text class="et" x="253" y="40" text-anchor="middle">Mijlpaal 2</text>
  <text class="ets" x="253" y="88" text-anchor="middle">wat, en wanneer</text>
  <circle class="ebox" cx="427" cy="60" r="9"/>
  <text class="et" x="427" y="40" text-anchor="middle">Mijlpaal 3</text>
  <text class="ets" x="427" y="88" text-anchor="middle">wat, en wanneer</text>
  <circle class="ebox" cx="600" cy="60" r="9"/>
  <text class="et" x="600" y="40" text-anchor="middle">Mijlpaal 4</text>
  <text class="ets" x="600" y="88" text-anchor="middle">wat, en wanneer</text>
</svg>
```

Beschikbare klassen: `ebox` (standaard), `ebox-accent` (donkerblauw,
witte tekst), `ebox-groen`/`ebox-geel`/`ebox-rood` (status),
`ebox-neutraal` (grijs), `et` (titel-tekst), `ets` (subtekst), `earr`
(pijllijn), `epijlkop` (pijlpunt, in `<marker>`).

## 8. Nieuwe module toevoegen

1. Nieuw bestand in `content/modules/`, bijv. `09-nieuwe-fase.md`
   (kopieer bestaande module als start).
2. Uniek `volgorde`-nummer geven (bv. `"09"`). Menu regelt zich
   automatisch.
3. Optioneel: checklist-items toevoegen in `checklist-data.js` onder
   zelfde sleutel (`"09"`).

## 9. Nog openstaand

Zoek in `content/` op `NOG-AAN-TE-VULLEN` voor onderdelen die nog
ingevuld moeten worden.

---

Beheer: Aidan Kloots · a.a.m.kloots@lumc.nl

Beheer: Aidan Kloots · a.a.m.kloots@lumc.nl
