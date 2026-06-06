# ELAN E-learning voor onderzoekers

Een lineaire e-learning die startende onderzoekers stap voor stap door de
acht fasen van werken met ELAN-data leidt. Gebouwd met
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), met een
**ingebouwde beheeromgeving (Decap CMS)** zodat de inhoud zonder code en
zonder GitHub-kennis kan worden uitgebreid.

> Deze README is **voor beheerders** en verschijnt niet op de website.

---

## Hoe het werkt (in het kort)

```
content/            <- HIER staat de bewerkbare inhoud (door de CMS beheerd)
  modules/          <- de 8 fasen + welkom, elk als 1 bestand
  naslag/           <- FAQ, contactpersonen, checklists, scripts
        |
        |  scripts/build_content.py  (draait automatisch bij publicatie)
        v
docs/               <- AUTOMATISCH gegenereerd; NIET met de hand bewerken
        |
        |  mkdocs build
        v
website (GitHub Pages)
```

Je bewerkt dus **nooit** de bestanden in `docs/` met de hand — die worden
telkens opnieuw gegenereerd uit `content/`. Bewerken doe je via de
beheeromgeving op `/admin/` (of rechtstreeks in `content/`).

---

## 1. De beheeromgeving (`/admin/`)

Op `https://<organisatie>.github.io/elan-elearning/admin/` staat een
grafische editor (Decap CMS). Wie inlogt kan:

- **Modules** bewerken: titel, intro, "wat heb je nodig", subhoofdstukken.
- Per subhoofdstuk **blokken** toevoegen en herordenen (slepen):
  Tekst · Tip · Let op · Valkuil · Nog-aan-te-vullen · Codeblok ·
  Inklapbaar blok · Tabel.
- **Naslagpagina's** (FAQ, contactpersonen, scripts, checklists) bewerken.

Wijzigingen komen binnen via de **conceptmodus** (editorial workflow):
*Concept → Ter review → Klaar*. Pas bij "Klaar" wordt het gepubliceerd.
Zo houd jij de regie over wat live gaat.

## 2. Wie mag bewerken? (toegang beheren)

Toegang loopt via **GitHub-login**: iedereen gebruikt zijn eigen
GitHub-account. Iemand mag bewerken zodra die **lid is van de repository**
(of van de organisatie). Toevoegen/verwijderen = lid toevoegen/verwijderen
in **Settings → Collaborators** (of via het team in de organisatie).

Voordeel: je ziet in de historie wie wat wijzigde, en er is geen gedeeld
wachtwoord dat kan uitlekken.

### Eenmalig: de auth-helper instellen

Decap heeft een kleine dienst nodig die de GitHub-login afhandelt. Dit is
gratis te hosten (bijv. via een kant-en-klare "Decap/Netlify OAuth"-helper).
Stappen:

1. Registreer een **GitHub OAuth App** (Settings → Developer settings →
   OAuth Apps). Vul als callback-URL de URL van je auth-helper in.
2. Zet de auth-helper online (bijv. op Render/Cloudflare Workers; er zijn
   gratis 1-klik-templates voor "decap-cms github oauth").
3. Vul in `docs/admin/config.yml` bij `base_url:` de URL van je helper in,
   en bij `repo:` jouw `organisatie/repo`.

> Tot de auth-helper er is, werkt de site gewoon; alleen `/admin/` kan dan
> nog niet inloggen. De rest van de e-learning is volledig functioneel.

## 3. Eerste publicatie op GitHub

1. Maak een repository aan (bijv. `elan-elearning`) en upload alle bestanden.
2. **Settings → Pages → Source = GitHub Actions**.
3. Pas in `mkdocs.yml` de regel `site_url:` aan en in `docs/admin/config.yml`
   de regels `repo:` en `base_url:`.
4. Na de eerste push draait `.github/workflows/deploy.yml`: die zet de
   CMS-content om én bouwt de site. Klaar.

## 4. Inhoud bijwerken zonder de CMS (alternatief)

Je kunt ook rechtstreeks de bestanden in `content/` bewerken op GitHub
(potlood-icoon → Commit). Het format staat in elk bestand voorgedaan.

Lokaal voorbeeld bekijken:

```bash
pip install mkdocs-material pyyaml
python scripts/build_content.py   # zet content/ om naar docs/
mkdocs serve                      # open http://127.0.0.1:8000
```

## 5. De checklist-poort

Onderaan elke fase staat een checklist. De knop **"Volgende fase"** wordt
pas actief als alle vakjes zijn afgevinkt. De voortgang wordt onthouden in
de browser van de gebruiker (geen centrale registratie — dat zou een
leerplatform/LMS vereisen).

De afvinkpunten staan in `docs/javascripts/checklist-data.js`. Pas die lijst
aan om punten te wijzigen, of laat een module weg om daar geen poort te tonen.

## 6. Een nieuwe module / fase toevoegen

Via `/admin/`: klik op **Modules → New Module**, vul "volgorde" in (bv. `09`)
en de velden. Het menu en de volgorde regelen zich automatisch op basis van
het volgorde-nummer. Wil je er een checklist bij? Voeg een blok toe in
`checklist-data.js` met dezelfde volgorde als sleutel.

## 7. Onderdelen die nog moeten worden ingevuld

Door de hele e-learning staan **"Nog aan te vullen"**-blokken (geel). Zoek in
`content/` op `NOG-AAN-TE-VULLEN` om ze allemaal te vinden.

---

Beheer: Aidan Kloots · a.kloots@lumc.nl
