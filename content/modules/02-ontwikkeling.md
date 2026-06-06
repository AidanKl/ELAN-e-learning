---
volgorde: '02'
menutitel: Fase 2 — Ontwikkeling
titel: 'Fase 2 — Ontwikkelfase: van vraag naar dataprotocol'
toon_balk: true
intro: 'Je vertaalt je onderzoeksvraag naar een concreet dataprotocol: welke variabelen, welke coderingen,
  welke populatie en welk tijdsvenster. Hier leg je de basis voor een goede aanvraag.'
benodigdheden:
- De beschikbare databronnen en hun inhoud
- 'Coderingen: ICPC (diagnoses) en ATC (medicatie)'
- 'Definities: hoe wordt een diagnose of uitkomst vastgesteld?'
- De mogelijkheden en beperkingen van de koppeling ELAN–CBS
- 'Operationalisatie: inclusie-/exclusiecriteria, tijdsvensters'
subhoofdstukken:
- subtitel: Hoe is de huisartsendata opgebouwd?
  blokken:
  - type: tekst
    inhoud: 'Huisartsen leggen gegevens vast in een HIS volgens de **SOEP**-structuur. De E-regel wordt
      gecodeerd met **ICPC**. Via episodegericht registreren worden contacten gekoppeld aan zorgepisodes.


      De data wordt door de TTP **STIZON** uit het EPD gehaald en bevat ook bewerkte ''derived'' variabelen
      (herkenbaar aan de **d-prefix**).'
- subtitel: Het ICPC-codeersysteem
  blokken:
  - type: tabel
    inhoud: '| Cijferreeks | Betekenis |

      | --- | --- |

      | 01–29 | Symptomen / klachten |

      | 30–69 | Verrichtingen |

      | 70–99 | Diagnoses |'
  - type: letop
    kop: ICPC is geen harde diagnose
    inhoud: Huisartsen coderen 'niet hoger dan ze waar kunnen maken'. Een symptoomcode wordt pas later
      een diagnosecode — als die zeker is.
  - type: tip
    kop: Gebruik de ICPC-viewer
    inhoud: viewers.nhg.org/icpcviewer
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: concrete voorbeelden van operationalisatie (van ruwe variabele naar uitkomstmaat).'
naslag:
- '**GP-data documentatie** — elan-dcc.github.io/researchers/internal/gp_data/'
- '**Codeboek** — github.com/elan-dcc/org/tree/main/codebooks'
- '**Contact** — F.H.Ardesch@lumc.nl, elan.dcc@lumc.nl'
---
