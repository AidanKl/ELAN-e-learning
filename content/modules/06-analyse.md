---
volgorde: '06'
menutitel: Fase 6 — Analyse
titel: Fase 6 — Analysefase
toon_balk: true
intro: Je voert de statistische analyses uit op ELAN- en/of CBS-data, met aandacht voor de methodologische
  bijzonderheden van routinezorgdata en de beperkingen van de CBS-omgeving.
benodigdheden:
- De analytische mogelijkheden (R, Python, STATA) en restricties
- 'Methodologische aandachtspunten: confounding, bias, clustering op praktijkniveau'
- 'De CBS-beperkingen: disclosure control en outputcontrole'
- Inzicht in de koppelkwaliteit van gecombineerde ELAN–CBS-data
subhoofdstukken:
- subtitel: Reproduceerbaar werken
  blokken:
  - type: tekst
    inhoud: |-
      - **Versiebeheer:** Git of datumstempels in bestandsnamen.
      - **Gescheiden scripts:** inladen, bewerken, analyseren, output apart.
      - **Documenteer je data-ontvangst:** datum, versie en data-manager.
  - type: code
    taal: text
    inhoud: |-
      1_data_inladen      -> inladen + validatiechecks, schone basisset opslaan
      2_data_bewerken     -> hercoderen, samenvoegen, analysevariabelen maken
      3_analyse_<thema>   -> de inhoudelijke analyses (importeer bewerkte set)
      4_output_tabellen   -> output in het format voor CBS-export
- subtitel: Veelgemaakte analysefouten
  blokken:
  - type: valkuil
    kop: De grootste valkuilen
    inhoud: |-
      - ICPC-codes als diagnose zonder validatiestrategie.
      - Geen rekening houden met praktijkvariatie in registratie.
      - Populatiefilter vergeten.
      - Time-to-event zonder volledige follow-up te checken.
- subtitel: Veelgebruikte samengestelde variabelen
  blokken:
  - type: tabel
    inhoud: |-
      | Variabele | Aandachtspunt |
      | --- | --- |
      | SES / etniciteit | In het sterftejaar is inkomen veel te laag — koppel het jaar vóór baseline. |
      | Polyfarmacie | CBS = ATC-4/jaar; ELAN-huisarts = ATC-7 incl. dosering. |
      | Multimorbiditeit | Leidraad: van Oostrom et al., BMC Public Health 2012. |
      | Kwetsbaarheid | Frailty Index via ELAN-huisartsendata (>60 jr); SPSS-syntax via datamanager. |
  - type: letop
    kop: Output kost tijd én geld
    inhoud: CBS heeft officieel 3 werkdagen; reken op een week bij een deadline. Figuren/tabellen kosten
      ±€250; syntax aanbieden is gratis.
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: gecombineerd analysekader voor gekoppelde ELAN–CBS-data en richtlijnen
      voor clustering en bias.'
naslag:
- '**Scriptoverzicht** — zie Naslag'
- '**CBS-gedragsregels** — bijlage 1 Guidance Document'
- '**Contact** — elan.dcc@lumc.nl'
---
