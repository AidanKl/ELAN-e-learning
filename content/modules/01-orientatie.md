---
volgorde: '01'
menutitel: Fase 1 — Oriëntatie & idee
titel: Fase 1 — Oriëntatie & ideefase
toon_balk: true
intro: 'Je bepaalt of jouw onderzoeksvraag te beantwoorden is met ELAN-data (en/of met CBS-koppelingen),
  en welke databronnen daarvoor nodig zijn. Dit is een verkenningsfase: nog geen aanvraag, maar uitzoeken
  of het kán.


  *Deze pagina is ook bedoeld voor beleidsmedewerkers en geïnteresseerden die willen weten wat ELAN kan
  betekenen en hoe je kunt aansluiten.*'
benodigdheden:
- Welke databronnen beschikbaar zijn
- 'Een globaal beeld van de inhoud van de datasets: variabelen, dekking en populatie'
- 'De toegangsvoorwaarden: wie krijgt onder welke condities toegang'
- 'Een indicatie van geschiktheid: populatiegrootte en aanwezigheid van sleutelvariabelen'
- 'De belangrijkste restricties: privacybeperkingen en beperkingen in koppelingen'
subhoofdstukken:
- subtitel: 'In het kort: wat is ELAN?'
  blokken:
  - type: tekst
    inhoud: ELAN (Extramuraal LUMC Academisch Netwerk) is een geïntegreerde, geanonimiseerde verzameling
      zorgdata van ruim een miljoen inwoners in de regio Den Haag en Leiden. Data uit verschillende bronnen
      — huisarts, ziekenhuis, GGZ, apotheek en CBS-microdata — wordt gekoppeld en privacy-bestendig beschikbaar
      gemaakt voor onderzoek.
  - type: tekst
    inhoud: ELAN is geschikt voor onder andere **populatie-onderzoek**, **risicofactoren**, **zorggebruik**
      en **verwijzingen**. Minder geschikt is ELAN voor vragen die real-time data of harde diagnosezekerheid
      vereisen — de data komt uit routinezorg en is daar niet primair voor bedoeld.
  - type: letop
    kop: Twee gescheiden omgevingen
    inhoud: 'ELAN kent twee data-omgevingen: de **I-schijf** (LUMC-intern) en de **CBS-RA**-omgeving.
      Niet alle data zit in beide. Wat dit betekent lees je in fase 4 — hier alleen om te weten dat het
      bestaat.'
  - type: letop
    kop: Kosten en aanvraagtraject
    inhoud: Aan datagebruik zijn kosten en een aanvraagtraject verbonden. Reken op een doorlooptijd van
      weken tot maanden. De details staan in fase 3.
  - type: diagram
    inhoud: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ELAN
      datalandschap: databronnen komen samen in ELAN en stromen naar twee omgevingen">

      <defs><marker id="arrow-d1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5"/></marker></defs>

      <line x1="130" y1="90" x2="320" y2="150" class="earr" marker-end="url(#arrow-d1)" stroke="#2E5A9C"/>

      <line x1="320" y1="90" x2="320" y2="150" class="earr" marker-end="url(#arrow-d1)" stroke="#2E5A9C"/>

      <line x1="510" y1="90" x2="320" y2="150" class="earr" marker-end="url(#arrow-d1)" stroke="#2E5A9C"/>

      <line x1="320" y1="206" x2="180" y2="266" class="earr" marker-end="url(#arrow-d1)" stroke="#2E5A9C"/>

      <line x1="320" y1="206" x2="460" y2="266" class="earr" marker-end="url(#arrow-d1)" stroke="#2E5A9C"/>

      <rect class="ebox" x="30" y="38" width="200" height="52" rx="8"/>

      <text class="et" x="130" y="60" text-anchor="middle">Huisartsdata</text>

      <text class="ets" x="130" y="76" text-anchor="middle">Diagnoses, recepten</text>

      <rect class="ebox" x="245" y="38" width="150" height="52" rx="8"/>

      <text class="et" x="320" y="60" text-anchor="middle">Zorginstellingen</text>

      <text class="ets" x="320" y="76" text-anchor="middle">Ziekenhuis, GGZ e.a.</text>

      <rect class="ebox" x="410" y="38" width="200" height="52" rx="8"/>

      <text class="et" x="510" y="60" text-anchor="middle">CBS-microdata</text>

      <text class="ets" x="510" y="76" text-anchor="middle">Inkomen, wonen, SES</text>

      <rect class="ebox-accent" x="200" y="150" width="240" height="56" rx="8"/>

      <text class="et" x="320" y="172" text-anchor="middle">ELAN</text>

      <text class="ets" x="320" y="190" text-anchor="middle">Gekoppeld en geanonimiseerd</text>

      <rect class="ebox" x="50" y="266" width="260" height="56" rx="8"/>

      <text class="et" x="180" y="288" text-anchor="middle">I-schijf</text>

      <text class="ets" x="180" y="306" text-anchor="middle">LUMC-interne omgeving</text>

      <rect class="ebox" x="330" y="266" width="260" height="56" rx="8"/>

      <text class="et" x="460" y="288" text-anchor="middle">CBS-RA</text>

      <text class="ets" x="460" y="306" text-anchor="middle">Beveiligde CBS-omgeving</text>

      </svg>'
- subtitel: Waar begin ik?
  blokken:
  - type: tip
    kop: Drie startpunten
    inhoud: '1. Werk deze e-learning door — die leidt je stap voor stap door alle fasen.

      2. Oriënteer je op de ELAN-DCC documentatie: elan-dcc.github.io/researchers

      3. Vraag bij een concreet idee een oriëntatiegesprek aan met de DCC — zij denken met je mee.'
- subtitel: Wat is mogelijk met ELAN-data?
  blokken:
  - type: tabel
    inhoud: '| Geschiktheid | Voorbeelden |

      | --- | --- |

      | **Sterk** | Prevalentie, risicofactoren, populatiebeschrijvingen, verwijzingstrajecten, longitudinale
      analyses bij voldoende follow-up |

      | **Beperkt** | Time-to-event analyses — bespreek vooraf met de DCC |

      | **Moeilijk / niet** | Analyses die diagnosezekerheid op basis van ICPC-codes alleen vereisen |'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: concrete voorbeeldpapers per categorie toevoegen (recente publicaties
      met ELAN-data), zodat onderzoekers zien wat er in de praktijk mogelijk is.'
  - type: diagram
    inhoud: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wat
      is mogelijk met ELAN-data: sterk, beperkt en moeilijk geschikte onderzoekstypen">

      <rect class="ebox-groen" x="20" y="20" width="190" height="180" rx="10"/>

      <text class="et" x="115" y="46" text-anchor="middle">Sterk geschikt</text>

      <text class="ets" x="115" y="74" text-anchor="middle">Prevalentie</text>

      <text class="ets" x="115" y="94" text-anchor="middle">Risicofactoren</text>

      <text class="ets" x="115" y="114" text-anchor="middle">Populatiebeschrijving</text>

      <text class="ets" x="115" y="134" text-anchor="middle">Verwijzingstrajecten</text>

      <text class="ets" x="115" y="154" text-anchor="middle">Longitudinale analyses</text>

      <rect class="ebox-geel" x="225" y="20" width="190" height="180" rx="10"/>

      <text class="et" x="320" y="46" text-anchor="middle">Beperkt geschikt</text>

      <text class="ets" x="320" y="80" text-anchor="middle">Time-to-event</text>

      <text class="ets" x="320" y="100" text-anchor="middle">analyses</text>

      <text class="ets" x="320" y="130" text-anchor="middle">(altijd vooraf overleg</text>

      <text class="ets" x="320" y="148" text-anchor="middle">met de DCC)</text>

      <rect class="ebox-rood" x="430" y="20" width="190" height="180" rx="10"/>

      <text class="et" x="525" y="46" text-anchor="middle">Moeilijk / niet</text>

      <text class="ets" x="525" y="80" text-anchor="middle">Harde diagnosezekerheid</text>

      <text class="ets" x="525" y="100" text-anchor="middle">op basis van ICPC</text>

      <text class="ets" x="525" y="130" text-anchor="middle">Real-time / actuele</text>

      <text class="ets" x="525" y="148" text-anchor="middle">klinische data</text>

      </svg>'
- subtitel: Is mijn vraag kansrijk?
  blokken:
  - type: tekst
    inhoud: 'Een snelle zelftoets voordat je verdergaat. Je vraag is kansrijk als:'
  - type: tekst
    inhoud: '- er een duidelijk afgebakende **populatie** in de data zit;

      - de **sleutelvariabelen** die je nodig hebt aanwezig zijn;

      - de **tijdsperiode** van je onderzoek gedekt is door de data.'
  - type: tip
    kop: Twijfel je?
    inhoud: Heb je een concreet onderzoek in gedachten, neem dan contact op met de DCC. Zij denken met
      je mee over de haalbaarheid op dataniveau.
  - type: diagram
    inhoud: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Checklist:
      is mijn onderzoeksvraag kansrijk voor ELAN">

      <rect class="ebox" x="20" y="16" width="600" height="52" rx="8"/>

      <circle cx="52" cy="42" r="14" fill="#276228"/>

      <path d="M45 42l5 5l10 -11" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round"/>

      <text class="et" x="78" y="38" text-anchor="start">Is er een duidelijk afgebakende populatie?</text>

      <text class="ets" x="78" y="55" text-anchor="start">bv. patiënten van huisartsen in de regio Den
      Haag/Leiden</text>

      <rect class="ebox" x="20" y="76" width="600" height="52" rx="8"/>

      <circle cx="52" cy="102" r="14" fill="#276228"/>

      <path d="M45 102l5 5l10 -11" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round"/>

      <text class="et" x="78" y="98" text-anchor="start">Zijn de sleutelvariabelen aanwezig?</text>

      <text class="ets" x="78" y="115" text-anchor="start">check het codeboek voordat je verder gaat</text>

      <rect class="ebox" x="20" y="136" width="600" height="52" rx="8"/>

      <circle cx="52" cy="162" r="14" fill="#276228"/>

      <path d="M45 162l5 5l10 -11" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round"/>

      <text class="et" x="78" y="158" text-anchor="start">Is de tijdsperiode van je onderzoek gedekt?</text>

      <text class="ets" x="78" y="175" text-anchor="start">ELAN-data is niet voor elke periode even compleet</text>

      </svg>'
- subtitel: Aansluiten als organisatie of beleidspartner
  blokken:
  - type: tekst
    inhoud: Ben je geen onderzoeker, maar wil je vanuit een organisatie of beleidsrol aansluiten bij ELAN
      — bijvoorbeeld om data te leveren of een vraagstuk te laten onderzoeken? Ook dat kan.
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: uitwerken hoe een externe partij betrokken raakt, wat het globaal kost,
      en wie te benaderen. Dit is de beleids-ingang en verdient een concrete, korte beschrijving.'
naslag:
- '**Deze e-learning** — je startpunt; werk de fasen op volgorde door'
- '**ELAN-DCC** — elan-dcc.github.io/researchers (databronnen, toegangsvoorwaarden, doorlooptijden)'
- '**ELAN-DCC datadocumentatie** — elan-dcc.github.io/nl/about_data/ (databronnen en omgevingen)'
- '**Health Campus Den Haag** — healthcampusdenhaag.nl (context data-infrastructuur)'
- '**Infrastructuurpapers** — Kist et al., Int J Epidemiol 2024; Ardesch et al., Health Policy 2023'
- '**Contact / DCC** — F.H.Ardesch@lumc.nl; elan.dcc@lumc.nl (haalbaarheid op dataniveau)'
---
