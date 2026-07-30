---
volgorde: '01'
menutitel: Fase 1 — Oriëntatie & idee
titel: Fase 1 — Oriëntatie & ideefase
toon_balk: true
intro: Je verkent of jouw onderzoeksvraag met ELAN-data te beantwoorden is, en welke databronnen
  daarvoor mogelijk nodig zijn. Dit is nog geen aanvraag — je zoekt uit of het kán.
benodigdheden:
- Een globale onderzoeksvraag of onderzoeksidee
- Een eerste beeld van je beoogde populatie en tijdsperiode
- Een idee van de variabelen die je nodig hebt
subhoofdstukken:
- subtitel: In 30 seconden
  blokken:
  - type: tekst
    inhoud: '- ELAN koppelt geanonimiseerde zorgdata uit onder meer huisartsenpraktijk, ziekenhuis,
      GGZ, apotheek en CBS-microdata, voor ruim een miljoen inwoners in de regio Den Haag en Leiden.

      - De data komt uit de routinezorg. Sterk voor vragen over populaties, risicofactoren, zorggebruik
      en verwijzingen; zwakker voor vragen die harde diagnosezekerheid of actuele data vereisen.

      - Er zijn twee gescheiden data-omgevingen: de **I-schijf** (LUMC-intern) en **CBS-RA**. Niet
      alle data zit in beide.

      - Aan datagebruik zijn kosten en een aanvraagtraject verbonden. Houd rekening met een doorlooptijd
      van weken tot maanden.'
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
- subtitel: Wat zit er in ELAN?
  blokken:
  - type: tekst
    inhoud: ELAN (Extramuraal LUMC Academisch Netwerk) brengt zorgdata uit verschillende bronnen
      samen, koppelt die op persoonsniveau en maakt het geheel geanonimiseerd beschikbaar voor
      onderzoek. De precieze dekking verschilt per bron, zowel in periode als in het aantal deelnemende
      praktijken en instellingen.
  - type: inklap
    stijl: info
    open: false
    kop: Welke bron levert wat?
    inhoud: '- **Huisartsdata** — onder meer ICPC-gecodeerde diagnoses en episodes, consulten,
      metingen en voorgeschreven medicatie. De rijkste bron, en het startpunt van de meeste ELAN-onderzoeken.

      - **Ziekenhuis- en specialismedata** — gegevens uit de tweede lijn, waaronder GGZ.

      - **Apotheekdata** — verstrekte medicatie.

      - **Verwijsdata** — verwijzingen vanuit de huisarts, deels via ZorgDomein.

      - **CBS-microdata** — sociaaleconomische en demografische gegevens, zoals inkomen, huishoudsamenstelling,
      herkomst en sterfte. Alleen beschikbaar in de CBS-RA-omgeving.


      Wat een bron precies bevat, staat in het codeboek van de betreffende omgeving. In fase 2
      gaan we hier dieper op in.'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: per databron de dekkingsperiode, het aantal deelnemende praktijken/instellingen
      en de omvang van de populatie. Nu blijft onduidelijk hoe compleet elke bron is.'
- subtitel: Kan ELAN mijn vraag beantwoorden?
  blokken:
  - type: tabel
    inhoud: '| Geschiktheid | Voorbeelden |

      | --- | --- |

      | **Sterk** | Prevalentie, risicofactoren, populatiebeschrijvingen, verwijzingstrajecten,
      longitudinale analyses bij voldoende follow-up |

      | **Beperkt** | Time-to-event analyses — bespreek vooraf met de DCC |

      | **Moeilijk / niet** | Analyses die diagnosezekerheid op basis van ICPC-codes alleen vereisen;
      vragen die real-time of actuele klinische data vereisen |'
  - type: inklap
    stijl: note
    open: false
    kop: Waarom is diagnosezekerheid lastig?
    inhoud: 'Een huisartsinformatiesysteem wordt bijgehouden voor de zorg, niet voor onderzoek.
      Een ICPC-code legt vast waarvoor de huisarts een patiënt behandelt, niet noodzakelijk dat
      een diagnose formeel is gesteld of bevestigd. Codering verschilt bovendien per praktijk en
      per systeem.


      Praktisch betekent dit: een ICPC-code alleen is meestal geen betrouwbare diagnosemaat. Vaak
      is een combinatie nodig, bijvoorbeeld met medicatie of metingen. Hoe je dat opbouwt, staat
      in fase 2.'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: concrete voorbeeldpapers per categorie (recente publicaties met
      ELAN-data), zodat zichtbaar wordt wat in de praktijk mogelijk blijkt.'
- subtitel: Toets je vraag
  blokken:
  - type: tekst
    inhoud: Loop deze drie punten na voordat je verdergaat naar fase 2. Kun je ze alle drie beantwoorden,
      dan is je vraag waarschijnlijk kansrijk genoeg om verder uit te werken.
  - type: diagram
    inhoud: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Checklist:
      is mijn onderzoeksvraag kansrijk voor ELAN">

      <rect class="ebox" x="20" y="16" width="600" height="52" rx="8"/>

      <circle cx="52" cy="42" r="14" fill="#276228"/>

      <path d="M45 42l5 5l10 -11" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round"/>

      <text class="et" x="78" y="38" text-anchor="start">Is er een duidelijk afgebakende populatie?</text>

      <text class="ets" x="78" y="55" text-anchor="start">bv. patiënten van huisartsen in de regio
      Den Haag/Leiden</text>

      <rect class="ebox" x="20" y="76" width="600" height="52" rx="8"/>

      <circle cx="52" cy="102" r="14" fill="#276228"/>

      <path d="M45 102l5 5l10 -11" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round"/>

      <text class="et" x="78" y="98" text-anchor="start">Zijn de sleutelvariabelen aanwezig?</text>

      <text class="ets" x="78" y="115" text-anchor="start">check het codeboek voordat je verder
      gaat</text>

      <rect class="ebox" x="20" y="136" width="600" height="52" rx="8"/>

      <circle cx="52" cy="162" r="14" fill="#276228"/>

      <path d="M45 162l5 5l10 -11" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round"/>

      <text class="et" x="78" y="158" text-anchor="start">Is de tijdsperiode van je onderzoek gedekt?</text>

      <text class="ets" x="78" y="175" text-anchor="start">ELAN-data is niet voor elke periode
      even compleet</text>

      </svg>'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: één uitgewerkt voorbeeld van een kansrijke vraag en één van een
      niet-kansrijke vraag, met korte toelichting waarom.'
- subtitel: Waar moet je vooraf rekening mee houden?
  blokken:
  - type: letop
    kop: Kosten en doorlooptijd
    inhoud: Aan datagebruik zijn kosten verbonden, en aan toegang een aanvraagtraject. Houd rekening
      met een doorlooptijd van weken tot maanden. Neem dit mee in je planning en je subsidieaanvraag.
      De details staan in fase 3.
  - type: inklap
    stijl: note
    open: false
    kop: 'Twee omgevingen: I-schijf en CBS-RA'
    inhoud: 'ELAN-data is bereikbaar via twee gescheiden omgevingen.


      - **I-schijf** — beveiligde LUMC-interne omgeving met de ELAN-zorgdata.

      - **CBS-RA** — beveiligde remote-access omgeving van het CBS, waar ELAN-data gekoppeld kan
      worden aan CBS-microdata.


      De keuze bepaalt welke data je kunt gebruiken, welke software beschikbaar is en hoe je resultaten
      naar buiten krijgt. Niet alle data zit in beide omgevingen, en variabelen kunnen per omgeving
      anders zijn opgebouwd. Wat dit praktisch betekent, staat in fase 4.'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: indicatie van de kosten (eenmalig, per jaar, per gebruiker) en
      een realistische doorlooptijd per omgeving, zodat je vroeg kunt begroten.'
- subtitel: Volgende stap
  blokken:
  - type: tip
    kop: Leg je idee voor aan de DCC
    inhoud: 'Heb je een concreet onderzoeksidee, vraag dan een oriëntatiegesprek aan bij het ELAN
      Data Competence Center. Zij denken mee over de haalbaarheid op dataniveau en kunnen vroeg
      aangeven of je vraag met de beschikbare data te beantwoorden is.


      Contact: elan.dcc@lumc.nl. Documentatie: elan-dcc.github.io/researchers.'
naslag:
- '**ELAN-DCC** — elan-dcc.github.io/researchers (databronnen, toegangsvoorwaarden, doorlooptijden)'
- '**ELAN-DCC datadocumentatie** — elan-dcc.github.io/nl/about_data/ (databronnen en omgevingen)'
- '**Health Campus Den Haag** — healthcampusdenhaag.nl (context data-infrastructuur)'
- '**Infrastructuurpapers** — Kist et al., Int J Epidemiol 2024; Ardesch et al., Health Policy 2023'
- '**Contact / DCC** — F.H.Ardesch@lumc.nl; elan.dcc@lumc.nl (haalbaarheid op dataniveau)'
---
