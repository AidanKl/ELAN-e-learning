# ELAN E-learning voor onderzoekers

Een lineaire e-learning die startende onderzoekers stap voor stap door de
acht fasen van werken met ELAN-data leidt. Gebouwd met
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), met een
eigen ingebouwde beheeromgeving achter een wachtwoordscherm.

> Deze README is **voor beheerders** en verschijnt niet op de website.

---

## Hoe het werkt (in het kort)

```
content/            <- HIER staat de bewerkbare inhoud
  modules/          <- de 8 fasen + welkom, elk als 1 bestand
  naslag/           <- FAQ, contactpersonen, checklists, scripts
        |
        |  scripts/build_content.py  (draait automatisch bij publicatie)
        v
docs/               <- AUTOMATISCH gegenereerd; NIET met de hand bewerken
        |
        |  mkdocs build
        v
website (GitHub Pages)  +  /admin/ (beheeromgeving achter wachtwoord)
```

Je bewerkt dus **nooit** de bestanden in `docs/` met de hand — die worden
telkens opnieuw gegenereerd uit `content/`.

---

## 1. Eerste publicatie op GitHub (eenmalig)

1. Maak een repository aan (bijv. `elan-elearning`) en upload alle bestanden.
2. **Settings → Pages → Source = GitHub Actions**.
3. Pas in `mkdocs.yml` de regel `site_url:` aan naar de definitieve URL.
4. Na de eerste push draait `.github/workflows/deploy.yml`: die zet de
   CMS-content om én bouwt de site. Na enkele minuten staat alles live.

## 2. De beheeromgeving (`/admin/`) en het wachtwoord

Op `https://<organisatie>.github.io/elan-elearning/admin/` staat de
beheeromgeving: een eigen editor in ELAN-stijl (geen externe diensten,
geen GitHub-loginscherm).

- **Wachtwoord:** ELAN (wijzigen: zie commentaar in `docs/admin/index.html`
  — vervang de SHA-256-hash).
- Na het wachtwoord zie je links alle **modules** en **naslagpagina's**.
  Klik erop en bewerk: titels, intro, benodigdheden, subhoofdstukken en
  losse blokken (tekst / tip / let op / valkuil / nog-aan-te-vullen /
  code / inklapbaar / tabel). Blokken en subhoofdstukken kun je
  toevoegen, verwijderen en met ↑↓ herordenen.
- **+ Nieuwe module** maakt een nieuwe fase aan; het menu ordent zich
  automatisch op het volgorde-nummer.

### Opslaan: de beheersleutel (eenmalig)

Opslaan schrijft naar GitHub, en GitHub eist daarvoor een sleutel — een
wachtwoord alleen is voor GitHub niet genoeg. Daarom vraagt de editor bij
de **eerste keer opslaan** eenmalig om een "beheersleutel". Die maak je
zo (2 minuten):

1. GitHub → **Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token**.
2. Bij *Repository access*: kies **alleen deze repo**.
3. Bij *Permissions → Repository permissions*: zet **Contents** op
   **Read and write**. Verder niets.
4. Genereer, kopieer, en plak de sleutel in het venster dat de editor toont.

De sleutel wordt alleen in de browser van die beheerder bewaard (knop
"Beheersleutel…" rechtsboven om hem te vervangen of te verwijderen).
Zonder sleutel kan iedereen met het wachtwoord alles **bekijken** in de
editor, maar niets opslaan.

> **Kanttekening:** het wachtwoordscherm is een drempel, geen zware
> beveiliging. Er kan echter niets worden gewijzigd zonder geldige
> beheersleutel — de echte schrijfbeveiliging ligt dus bij GitHub.

## 3. Inhoud bijwerken — twee manieren

**Via de beheeromgeving (aanbevolen):** `/admin/` → wachtwoord → module
kiezen → bewerken → *Opslaan & publiceren*. De site herbouwt zichzelf in
1–2 minuten.

**Rechtstreeks op GitHub (alternatief):** bewerk de bestanden in
`content/` (potlood-icoon → Commit). Zelfde resultaat.

**Lokaal een voorbeeld bekijken:**

```bash
pip install mkdocs-material pyyaml
python scripts/build_content.py   # zet content/ om naar docs/
mkdocs serve                      # open http://127.0.0.1:8000
```

## 4. De checklist-poort

Onderaan elke fase staat een checklist; de knop **"Volgende fase"** wordt
pas actief als alle vakjes zijn afgevinkt. Voortgang wordt onthouden in de
browser van de gebruiker (geen centrale registratie).

De afvinkpunten staan in `docs/javascripts/checklist-data.js`. Pas die
lijst aan om punten te wijzigen; laat een module weg om geen poort te tonen.

## 5. Een nieuwe module / fase toevoegen

1. Maak in `content/modules/` een nieuw bestand, bijv. `09-nieuwe-fase.md`
   (kopieer een bestaande module als startpunt).
2. Geef het een uniek `volgorde`-nummer (bv. `"09"`). Het menu en de
   navigatieknoppen regelen zich automatisch.
3. Optioneel: voeg checklist-items toe in `checklist-data.js` onder
   dezelfde sleutel (`"09"`).

## 6. Onderdelen die nog moeten worden ingevuld

Door de hele e-learning staan **"Nog aan te vullen"**-blokken (geel).
Zoek in `content/` op `NOG-AAN-TE-VULLEN` om ze allemaal te vinden.

---

Beheer: Aidan Kloots · a.kloots@lumc.nl
