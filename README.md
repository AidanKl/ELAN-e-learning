# ELAN E-learning voor onderzoekers

Een lineaire e-learning die startende onderzoekers stap voor stap door de
acht fasen van werken met ELAN-data leidt. Gebouwd met
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), met een
ingebouwde beheeromgeving (Decap CMS) achter een eenvoudig wachtwoordscherm.

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
beheeromgeving. Er verschijnt eerst een **wachtwoordscherm**.

- Het huidige wachtwoord is: **ELAN**
- Wachtwoord wijzigen: open `docs/admin/index.html`, maak een SHA-256-hash
  van het nieuwe wachtwoord (bijv. via een online SHA-256 generator) en
  vervang de `HASH`-waarde. De uitleg staat als commentaar in het bestand.

> **Eerlijke kanttekening:** dit wachtwoordscherm is een drempel om
> nieuwsgierigen buiten de editor te houden, geen zware beveiliging (de
> site is statisch, dus technisch onderlegde bezoekers kunnen eromheen).
> Er kan echter **niets gepubliceerd of kapotgemaakt worden** zolang de
> opslag-koppeling (stap 4) niet is geactiveerd — en daarna vereist
> publiceren alsnog GitHub-rechten.

## 3. Inhoud bijwerken (huidige werkwijze)

Zolang de opslag-koppeling nog niet actief is, werk je de inhoud bij door
de bestanden in **`content/`** te bewerken, rechtstreeks op GitHub:

1. Open het bestand (bijv. `content/modules/03-voorbereiding.md`).
2. Klik op het potlood-icoon, pas aan, klik **Commit changes**.
3. De site bouwt zichzelf binnen enkele minuten opnieuw.

Het format wijst zich vanzelf: elk bestand bevat de titel, intro,
benodigdheden, subhoofdstukken en blokken (type: tekst / tip / letop /
valkuil / todo / code / inklap / tabel). Kopieer een bestaand blok om een
nieuw blok toe te voegen.

**Lokaal een voorbeeld bekijken:**

```bash
pip install mkdocs-material pyyaml
python scripts/build_content.py   # zet content/ om naar docs/
mkdocs serve                      # open http://127.0.0.1:8000
```

## 4. Later: publiceren vanuit de admin activeren

De editor op `/admin/` toont nu alles, maar kan nog niet opslaan naar
GitHub. Dat activeer je later (eventueel samen met ICT of bij de overstap
naar de communale Git) in drie stappen:

1. Registreer een **GitHub OAuth App** (GitHub → Settings → Developer
   settings → OAuth Apps).
2. Zet een kleine gratis **auth-helper** online (zoek op
   "decap-cms github oauth provider" — er zijn 1-klik-templates voor
   o.a. Cloudflare Workers en Render).
3. Vul in `docs/admin/config.yml` de regels `repo:` en `base_url:` in.

Daarna kunnen redacteuren via `/admin/` visueel bewerken en publiceren,
met de conceptmodus (*Concept → Ter review → Klaar*) zodat de beheerder
de regie houdt.

## 5. De checklist-poort

Onderaan elke fase staat een checklist; de knop **"Volgende fase"** wordt
pas actief als alle vakjes zijn afgevinkt. Voortgang wordt onthouden in de
browser van de gebruiker (geen centrale registratie).

De afvinkpunten staan in `docs/javascripts/checklist-data.js`. Pas die
lijst aan om punten te wijzigen; laat een module weg om geen poort te tonen.

## 6. Een nieuwe module / fase toevoegen

1. Maak in `content/modules/` een nieuw bestand, bijv. `09-nieuwe-fase.md`
   (kopieer een bestaande module als startpunt).
2. Geef het een uniek `volgorde`-nummer (bv. `"09"`). Het menu en de
   navigatieknoppen regelen zich automatisch.
3. Optioneel: voeg checklist-items toe in `checklist-data.js` onder
   dezelfde sleutel (`"09"`).

## 7. Onderdelen die nog moeten worden ingevuld

Door de hele e-learning staan **"Nog aan te vullen"**-blokken (geel).
Zoek in `content/` op `NOG-AAN-TE-VULLEN` om ze allemaal te vinden.

---

Beheer: Aidan Kloots · a.kloots@lumc.nl
