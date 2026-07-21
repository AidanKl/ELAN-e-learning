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
  - type: diagram
    inhoud: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Van
      patiëntcontact naar onderzoeksvariabele: het vertaalproces van routinezorgdata">

      <defs><marker id="arrow-d4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5"/></marker></defs>

      <line x1="320" y1="60" x2="320" y2="88" class="earr" marker-end="url(#arrow-d4)" stroke="#2E5A9C"/>

      <line x1="320" y1="140" x2="320" y2="168" class="earr" marker-end="url(#arrow-d4)" stroke="#2E5A9C"/>

      <line x1="320" y1="220" x2="320" y2="248" class="earr" marker-end="url(#arrow-d4)" stroke="#2E5A9C"/>

      <line x1="320" y1="300" x2="320" y2="328" class="earr" marker-end="url(#arrow-d4)" stroke="#2E5A9C"/>

      <rect class="ebox-neutraal" x="140" y="8" width="360" height="52" rx="8"/>

      <text class="et" x="320" y="30" text-anchor="middle">Patiëntcontact</text>

      <text class="ets" x="320" y="48" text-anchor="middle">de feitelijke gebeurtenis bij de huisarts</text>

      <rect class="ebox" x="140" y="88" width="360" height="52" rx="8"/>

      <text class="et" x="320" y="110" text-anchor="middle">HIS-registratie (SOEP)</text>

      <text class="ets" x="320" y="128" text-anchor="middle">vastgelegd door de huisarts, met ICPC-code</text>

      <rect class="ebox" x="140" y="168" width="360" height="52" rx="8"/>

      <text class="et" x="320" y="190" text-anchor="middle">Episode (tabel EPS)</text>

      <text class="ets" x="320" y="208" text-anchor="middle">contacten gekoppeld tot één zorgepisode</text>

      <rect class="ebox" x="140" y="248" width="360" height="52" rx="8"/>

      <text class="et" x="320" y="270" text-anchor="middle">Extractie door STIZON</text>

      <text class="ets" x="320" y="288" text-anchor="middle">ruwe + ''derived'' (d-prefix) variabelen</text>

      <rect class="ebox-accent" x="140" y="328" width="360" height="52" rx="8"/>

      <text class="et" x="320" y="350" text-anchor="middle">Onderzoeksvariabele</text>

      <text class="ets" x="320" y="368" text-anchor="middle">pas na jouw interpretatie en operationalisatie</text>

      </svg>'
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
  - type: diagram
    inhoud: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomie
      van een ICPC-code: letter-as en cijfer-as, met voorbeeld L76.5">

      <rect class="ebox-accent" x="240" y="90" width="160" height="60" rx="8"/>

      <text x="320" y="130" text-anchor="middle" font-size="26" font-weight="700" fill="#fff">L76.5</text>

      <line x1="270" y1="90" x2="150" y2="40" stroke="#2E5A9C" stroke-width="1"/>

      <circle cx="270" cy="90" r="3" fill="#2E5A9C"/>

      <rect class="ebox" x="20" y="10" width="230" height="52" rx="8"/>

      <text class="et" x="135" y="32" text-anchor="middle">Letter L = tractus</text>

      <text class="ets" x="135" y="50" text-anchor="middle">L = bewegingsapparaat</text>

      <line x1="330" y1="90" x2="470" y2="40" stroke="#2E5A9C" stroke-width="1"/>

      <circle cx="330" cy="90" r="3" fill="#2E5A9C"/>

      <rect class="ebox" x="390" y="10" width="230" height="52" rx="8"/>

      <text class="et" x="505" y="32" text-anchor="middle">Cijfer 76 = component</text>

      <text class="ets" x="505" y="50" text-anchor="middle">70–99 = diagnose-range</text>

      <line x1="320" y1="150" x2="320" y2="188" stroke="#2E5A9C" stroke-width="1"/>

      <circle cx="320" cy="150" r="3" fill="#2E5A9C"/>

      <rect class="ebox" x="205" y="188" width="230" height="52" rx="8"/>

      <text class="et" x="320" y="210" text-anchor="middle">.5 = subtitel</text>

      <text class="ets" x="320" y="228" text-anchor="middle">L76.5 = fractuur rib</text>

      </svg>'
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
