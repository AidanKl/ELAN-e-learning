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

## 3. Lokaal werken met GitHub Desktop (aanbevolen bij grotere wijzigingen)

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

## 4. Checklist-poort

Onderaan elke fase: checklist. Knop "Volgende fase" pas actief als alles
afgevinkt is. Voortgang opgeslagen in browser gebruiker (geen centrale
registratie).

Afvinkpunten aanpassen: `docs/javascripts/checklist-data.js`.
Module weglaten uit dat bestand = geen poort tonen.

## 5. Nieuwe module toevoegen

1. Nieuw bestand in `content/modules/`, bijv. `09-nieuwe-fase.md`
   (kopieer bestaande module als start).
2. Uniek `volgorde`-nummer geven (bv. `"09"`). Menu regelt zich
   automatisch.
3. Optioneel: checklist-items toevoegen in `checklist-data.js` onder
   zelfde sleutel (`"09"`).

## 6. Nog openstaand

Zoek in `content/` op `NOG-AAN-TE-VULLEN` voor onderdelen die nog
ingevuld moeten worden.

---

Beheer: Aidan Kloots · a.a.m.kloots@lumc.nl
