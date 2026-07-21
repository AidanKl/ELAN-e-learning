---
volgorde: '02'
menutitel: Fase 2 — Ontwikkeling
titel: 'Fase 2 — Ontwikkelfase: van vraag naar dataprotocol'
toon_balk: true
intro: 'Je vertaalt een onderzoeksvraag naar een concreet dataverzoek: welke variabelen, welke populatie,
  welke periode. Hier leg je de basis voor een goede aanvraag.


  *Dit is de laatste fase die voor beleidsmedewerkers relevant is: de kern hieronder laat zien hoe een
  idee een concreet onderzoek wordt. Vanaf ''De data begrijpen'' wordt het onderzoekersmateriaal.*'
benodigdheden:
- De beschikbare databronnen (ELAN, CBS) en hun inhoud
- 'Coderingen: ICPC (huisartsdiagnoses) en ATC (medicatie)'
- 'Definities: hoe wordt een diagnose of uitkomst vastgesteld?'
- De mogelijkheden en beperkingen van de koppeling ELAN–CBS
- 'Operationalisatie: inclusie-/exclusiecriteria, tijdsvensters'
subhoofdstukken:
- subtitel: 'In het kort: wat gebeurt er in deze fase?'
  blokken:
  - type: tekst
    inhoud: 'Je zet je onderzoeksvraag om in een concreet dataverzoek: welke variabelen heb je nodig,
      over welke populatie, en over welke periode. Dit is de brug tussen een idee en een formele aanvraag.'
  - type: letop
    kop: Registratie ≠ waarheid
    inhoud: 'ELAN-data komt uit de routinezorg. Het is vastgelegd voor de behandeling van patiënten, niet
      voor onderzoek. Daardoor vereist het interpretatie: wat er geregistreerd is, is niet altijd wat
      er feitelijk speelde.'
  - type: tip
    kop: Je hoeft dit niet alleen te doen
    inhoud: De datamanager en de DCC helpen je bij het vertalen van je vraag naar data. Betrek hen vroeg.
  - type: tekst
    inhoud: '*Voor beleidslezers: hierna volgt het formele aanvraagtraject (fase 3). De rest van deze
      pagina is technische verdieping voor onderzoekers.*'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN (visueel): data-vertaaldiagram — van patiëntcontact via HIS-registratie
      en episode naar onderzoeksvariabele.'
- subtitel: De huisartsendata begrijpen
  blokken:
  - type: tekst
    inhoud: Huisartsen leggen gegevens vast in een Huisarts Informatie Systeem (HIS) volgens de **SOEP**-structuur
      (Subjectief, Objectief, Evaluatie, Plan). De E-regel wordt gecodeerd met **ICPC**. Via episodegericht
      registreren worden losse contacten gekoppeld aan zorgepisodes, waardoor het beloop van één gezondheidsprobleem
      zichtbaar wordt.
  - type: tekst
    inhoud: De data wordt door de Trusted Third Party **STIZON** uit het EPD gehaald en bevat ook bewerkte
      'derived' variabelen, herkenbaar aan de **d-prefix** (bv. dDatum, dEpisodeICPC).
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN (visueel): schema HIS / SOEP / episodegericht registreren.'
- subtitel: Het ICPC-codeersysteem
  blokken:
  - type: tabel
    inhoud: '| Cijferreeks | Betekenis |

      | --- | --- |

      | 01–29 | Symptomen / klachten |

      | 30–69 | Verrichtingen |

      | 70–99 | Diagnoses |'
  - type: letop
    kop: Symptoom versus diagnose
    inhoud: 'Huisartsen coderen ''niet hoger dan ze waar kunnen maken''. Een symptoomcode wordt pas later
      een diagnosecode — als die zeker is. Dit is cruciaal bij het operationaliseren van uitkomsten: een
      ICPC-code is niet automatisch een bevestigde diagnose.'
  - type: tip
    kop: Gebruik de ICPC-viewer
    inhoud: 'Codes opzoeken kan via de NHG ICPC-viewer: viewers.nhg.org/icpcviewer'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN (visueel): anatomie van een ICPC-code (letter-as tractus, cijfer-as) met
      voorbeeld.'
- subtitel: Ziekenhuis- en specialismedata (waaronder GGZ)
  blokken:
  - type: tekst
    inhoud: 'Naast de huisartsendata breidt ELAN uit met data van zorgverleners uit de regio (bv. HMC,
      Alrijne, HAGA) en van de GGZ. Deze data verken je vooral via de **codeboeken** per aangesloten instantie:
      daarin zie je welke variabelen beschikbaar zijn voor jouw onderzoek.'
  - type: tekst
    inhoud: Voor de GGZ is er een aparte upload vanuit de **Parnassia Groep**, met een eigen codeboek.
      Raadpleeg dat codeboek om te bepalen wat je kunt onderzoeken.
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: uitklapbaar codeboek-overzicht per aangesloten instantie (huisarts, GGZ/Parnassia,
      ziekenhuizen), zodat een onderzoeker per bron kan zien wat beschikbaar is. Inclusief korte uitleg
      van het GGZ-codeboek.'
- subtitel: Van concept naar meetbare variabele
  blokken:
  - type: tekst
    inhoud: 'Operationalisatie is de stap waarin je een abstract concept (bv. ''depressie'' of ''multimorbiditeit'')
      vertaalt naar concrete, meetbare variabelen: welke codes tellen mee, welke inclusie- en exclusiecriteria
      gelden, en over welk tijdsvenster je meet.'
  - type: tip
    kop: Waar vind je wat
    inhoud: Het codeboek (github.com/elan-dcc/org/tree/main/codebooks) geeft de variabelen en definities;
      de ICPC-viewer helpt bij het kiezen van de juiste codes.
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN (visueel): stappen van ruwe variabele naar uitkomstmaat.'
naslag:
- '**ELAN-DCC GP-data** — elan-dcc.github.io/researchers/internal/gp_data/ (huisartsendata, tabellen,
  opbouw)'
- '**Codeboek ELAN** — github.com/elan-dcc/org/tree/main/codebooks (variabelen, definities, d-prefix)'
- '**ICPC-viewer (NHG)** — viewers.nhg.org/icpcviewer/'
- '**Diepte — SOEP & episodegericht registreren** — volledige uitleg met klinisch voorbeeld (nog aan te
  vullen)'
- '**Diepte — ICPC-structuur & ICD-10 in CBS** — volledige codestructuur als naslag (ICPC-1 zoeker)'
- '**Diepte — operationalisatie-voorbeelden** — voorbeeldpapers met links (nog aan te vullen)'
- '**Diepte — koppeling ELAN–CBS** — wat wel/niet combineerbaar is en de technische randvoorwaarden'
- '**Contact / DCC** — F.H.Ardesch@lumc.nl; elan.dcc@lumc.nl'
---
