---
volgorde: '04'
menutitel: Fase 4 — Start & datalevering
titel: 'Fase 4 — Startfase: datatoegang en datalevering'
toon_balk: true
intro: >-
  Je ontvangt de data en krijgt toegang tot de juiste omgeving. Je leert wat je precies geleverd
  krijgt en in welke omgeving je gaat werken.
benodigdheden:
  - Het proces van datalevering en het format (tabelstructuren)
  - Toegang tot de juiste omgeving (I-schijf of CBS-RA)
  - 'De datadocumentatie: variabelenlijsten, definities, codestelsels'
  - Inzicht in welke datasetversie je krijgt
  - Contactpunten bij technische problemen
subhoofdstukken:
  - subtitel: 'In het kort: wat gebeurt er in deze fase?'
    open: true
    blokken:
      - type: tekst
        inhoud: |-
          Je ontvangt de data en krijgt toegang tot de juiste omgeving. Er zijn er twee:
          - **I-schijf** — de LUMC-interne omgeving;
          - **CBS-RA** — de beveiligde externe omgeving voor CBS-microdata.
      - type: tekst
        inhoud: >-
          De belangrijkste actie: neem contact op met de datamanager en lever een **precieze
          dataspecificatie** aan (welke tabellen, variabelen, populatie, tijdsvenster en omgeving).
      - type: valkuil
        inhoud: >-
          Begin niet met analyseren voordat álle goedkeuringen binnen zijn — ook niet als de data al
          beschikbaar lijkt.
        kop: Niet te vroeg starten
      - type: tip
        inhoud: >-
          Maak overzichten van je data zodat je zeker weet dat die je onderzoeksvraag kan
          beantwoorden. Kijk hiervoor naar de voorbeeld-codeblokken op de GitHub van de DCC
          (github.com/elan-dcc).
        kop: Maak vooraf een data-overzicht
  - subtitel: Contact met de datamanager
    blokken:
      - type: tekst
        inhoud: >-
          Na goedkeuring neem je contact op met de datamanager voor de uitgifte. Geef door: welke
          tabellen, welke variabelen, welke populatie, welk tijdsvenster en in welke omgeving je
          werkt.
      - type: valkuil
        inhoud: >-
          Er zijn twee datamanagers met verschillende werkwijzen: de een filtert de data vóór
          uitgifte, de ander niet. Vraag altijd of de data gefilterd is en vraag de
          filterspecificaties op — zonder die kun je niet valideren wat je ontvangt.
        kop: Vraag altijd naar de filtering
      - type: todo
        inhoud: 'NOG-AAN-TE-VULLEN (visueel): wat je meestuurt bij een data-aanvraag.'
  - subtitel: De schijven in de CBS-RA-omgeving
    blokken:
      - type: tabel
        inhoud: |-
          | Schijf | Functie |
          | --- | --- |
          | **F** | Lijkt persoonlijk, maar is het NIET. Bevat de exportmap. |
          | **G** | CBS-microdata (alleen wat namens ELAN is aangevraagd). |
          | **H** | Shared workspace — hier werk je, in je eigen naammap. |
          | **K** | Metadata. Lees deze vóór gebruik. |
          | L, M, T | Niet nodig. |
      - type: valkuil
        inhoud: >-
          Werk altijd op schijf **H** (in je eigen naammap). Dit is een van de meest gemaakte
          beginnersfouten.
        kop: Schijf F is geen werkschijf
      - type: diagram
        inhoud: >-
          <svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img"
          aria-label="Schijvenindeling in de CBS-RA-omgeving: F, G, H en K">

          <rect class="ebox-accent" x="20" y="16" width="600" height="228" rx="14"/>

          <text class="et" x="320" y="42" text-anchor="middle">CBS-RA-omgeving</text>

          <rect class="ebox-rood" x="44" y="66" width="270" height="76" rx="8"/>

          <text class="et" x="179" y="90" text-anchor="middle">Schijf F — geen werkschijf!</text>

          <text class="ets" x="179" y="110" text-anchor="middle">lijkt persoonlijk, is het
          niet</text>

          <text class="ets" x="179" y="128" text-anchor="middle">alleen de exportmap</text>

          <rect class="ebox" x="326" y="66" width="270" height="76" rx="8"/>

          <text class="et" x="461" y="90" text-anchor="middle">Schijf G</text>

          <text class="ets" x="461" y="110" text-anchor="middle">CBS-microdata</text>

          <text class="ets" x="461" y="128" text-anchor="middle">alleen aangevraagde
          bestanden</text>

          <rect class="ebox-groen" x="44" y="156" width="270" height="76" rx="8"/>

          <text class="et" x="179" y="180" text-anchor="middle">Schijf H — hier werk je</text>

          <text class="ets" x="179" y="200" text-anchor="middle">shared workspace</text>

          <text class="ets" x="179" y="218" text-anchor="middle">eigen naammap gebruiken</text>

          <rect class="ebox" x="326" y="156" width="270" height="76" rx="8"/>

          <text class="et" x="461" y="180" text-anchor="middle">Schijf K</text>

          <text class="ets" x="461" y="200" text-anchor="middle">metadata</text>

          <text class="ets" x="461" y="218" text-anchor="middle">lees dit vóór gebruik</text>

          </svg>
  - subtitel: CBS awareness test
    blokken:
      - type: letop
        inhoud: >-
          Vóór toegang leg je een verplichte awareness test af over databeveiliging. De vragen zijn
          op meerdere manieren interpreteerbaar en de officiële CBS-documenten sluiten daar niet
          altijd op aan. Je krijgt geen feedback op je resultaat.
        kop: Plan er een halve dag voor
  - subtitel: Codeboek per omgeving
    blokken:
      - type: tekst
        inhoud: >-
          Het codeboek (github.com/elan-dcc/org/tree/main/codebooks) helpt je de geleverde tabellen
          te interpreteren. Let op: het codeboek kan per omgeving (I-schijf / CBS-RA) verschillen.
      - type: todo
        inhoud: 'NOG-AAN-TE-VULLEN (visueel): overzicht van welke documentatie in welke omgeving geldt.'
naslag:
  - '**Codeboek per omgeving** — github.com/elan-dcc/org/tree/main/codebooks'
  - '**Voorbeeld-codeblokken** — github.com/elan-dcc (om data-overzichten te maken)'
  - '**CBS-RA-toegang & awareness test** — via datamanager + CBS-helpdesk'
  - '**Diepte — dataleveringsproces & datastromen** — Guidance Document'
  - '**Diepte — versiebeheer datasets** — welke versie, hoe updates (nog aan te vullen)'
  - '**Diepte — wat je exact ontvangt** — format en metadata bij uitgifte (nog aan te vullen)'
  - '**Contact / datamanager** — H. de Jong (I-schijf) / F. Ardesch (CBS-RA): F.H.Ardesch@lumc.nl'
---
