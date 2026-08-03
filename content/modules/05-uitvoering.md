---
volgorde: '05'
menutitel: Fase 5 — Uitvoering & voorbewerking
titel: 'Fase 5 — Uitvoeringsfase: dataverkenning & voorbewerking'
toon_balk: true
intro: >-
  Je maakt de dataset begrijpelijk en analyseklaar. Dit is de fase waarin de meeste stille fouten
  ontstaan — datakwaliteit en interpretatie staan centraal.
benodigdheden:
  - 'Inzicht in datakwaliteit: missings, inconsistenties'
  - Richtlijnen voor data cleaning
  - Begrip van de longitudinale structuur (episodes, consultregels)
  - Kennis van de beperkingen van routinezorgdata
subhoofdstukken:
  - subtitel: Kritieke bijzonderheden in de data
    open: true
    blokken:
      - type: valkuil
        inhoud: >-
          Een HIS wordt bijgehouden voor de zorg, niet voor onderzoek. Een lege registratie betekent
          niet dat een aandoening afwezig is.
        kop: Concludeer nooit afwezigheid uit ontbrekende data
      - type: letop
        inhoud: >-
          Een diagnose kan worden bijgesteld; dat gebeurt niet altijd. JRN bevat daarom twee
          ICPC-kolommen.
        kop: Transitie van diagnose
      - type: letop
        inhoud: >-
          Variabelen zijn net iets anders gevuld per HIS. INS/PAT gescheiden op I-schijf,
          samengevoegd in CBS-RA. Controleer op wáárden, niet alleen op naam.
        kop: Verschillen tussen HIS-systemen en omgevingen
      - type: inklap
        inhoud: >-
          - **Probleemlijst vs. episodelijst:** chronische aandoeningen worden gelabeld als
          'probleem'.

          - **Handmatige voorgeschiedenis:** let op veel diagnoses op één begindatum.

          - **Verwijzingen:** ZorgDomein-verwijzingen zitten in JRN_Zorgdomein, niet in COR.
        kop: Meer bijzonderheden (klik om uit te klappen)
        stijl: note
        open: false
  - subtitel: Validatie vóór analyse
    blokken:
      - type: tekst
        inhoud: |-
          1. Controleer de mappen.
          2. Controleer variabelenamen tegen het codeboek.
          3. Controleer de populatiegrootte.
          4. Controleer het tijdsvenster.
          5. Controleer missende waarden.
  - subtitel: Change tracking & ontdubbelen
    blokken:
      - type: tekst
        inhoud: >-
          STIZON haalt data op in 'snapshots' en voegt `StartDate`/`EndDate` toe. Hierdoor staan er
          mogelijk dubbele records in tabellen als EPS en COR.
      - type: valkuil
        inhoud: >-
          Verwijder records met een `EndDate` en ontdubbel op de sleutelvariabelen. Zie het
          Scriptoverzicht.
        kop: Ontdubbelen is bijna altijd nodig
      - type: todo
        inhoud: >-
          NOG-AAN-TE-VULLEN: centrale lijst met bekende datakwaliteitsproblemen per databron en
          standaard cleaning-workflows.
naslag:
  - '**Codeboek** — github.com/elan-dcc/org/tree/main/codebooks'
  - '**Validatie & ontdubbelen** — zie Scriptoverzicht'
  - '**Contact** — F.H.Ardesch@lumc.nl, elan.dcc@lumc.nl'
---
