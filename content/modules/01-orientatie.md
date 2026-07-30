---
volgorde: '01'
menutitel: Fase 1 — Oriëntatie & idee
titel: Fase 1 — Oriëntatie & ideefase
toon_balk: true
intro: |-
  Je verkent of jouw onderzoeksvraag met ELAN-data te beantwoorden is. Dit is nog geen aanvraag: je zoekt uit of het kán, of je erbij mag, en wat het ongeveer kost.

  Werk de zeven stappen hieronder op volgorde door. Elke stap eindigt met een beslissing: doorgaan, bijsturen, of eerst overleggen.
benodigdheden:
- Een globale onderzoeksvraag of onderzoeksidee
- Een eerste beeld van je beoogde populatie en tijdsperiode
- Een idee van de variabelen die je nodig hebt
- Zicht op je aanstelling en op budget voor datakosten
subhoofdstukken:
- subtitel: In 30 seconden
  blokken:
  - type: tekst
    inhoud: |-
      - ELAN koppelt geanonimiseerde zorgdata uit onder meer huisartsenpraktijk, ziekenhuis, GGZ, apotheek en CBS-microdata, voor ruim een miljoen inwoners in de regio Haaglanden en Hollands-Midden.
      - De data komt uit de routinezorg. Sterk voor vragen over populaties, risicofactoren, zorggebruik en verwijzingen; zwakker voor vragen die harde diagnosezekerheid of actuele data vereisen.
      - Er zijn twee gescheiden data-omgevingen: de **I-schijf** (LUMC-intern) en **CBS-RA**. Niet alle data zit in beide.
      - Je onderzoek moet onder een bestaand ELAN-project vallen, en er moet altijd een LUMC-onderzoeker bij betrokken zijn.
      - Datagebruik kost geld en tijd. Houd rekening met maanden doorlooptijd voordat je data in handen hebt.
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
- subtitel: Stap 1 — Begrijp wat ELAN is
  blokken:
  - type: tekst
    inhoud: |-
      ELAN (Extramuraal LUMC Academisch Netwerk) is een regionale data-infrastructuur, opgezet vanuit Health Campus Den Haag. Routinematig verzamelde zorgdata uit verschillende domeinen wordt privacy-bestendig aan elkaar gekoppeld, zodat gezondheidsverschillen tussen populaties onderzocht kunnen worden.

      ELAN verzamelt zelf geen data. Alles wat erin zit, is ooit vastgelegd voor de zorg of voor beleid — niet voor jouw onderzoeksvraag. Dat verklaart de meeste beperkingen die je verderop tegenkomt.
  - type: inklap
    stijl: info
    kop: Welke bron levert wat?
    inhoud: |-
      - **Huisartsdata (ELAN-H)** — de rijkste bron en het startpunt van de meeste ELAN-onderzoeken. Bevat onder meer ICPC-gecodeerde episodes en journaalregels, consulten, metingen, voorgeschreven medicatie en verwijzingen.
      - **Ziekenhuisdata** — HMC en HagaZiekenhuis, onder meer opnames, polikliniekbezoeken en DBC's.
      - **GGZ-data** — Parnassia Groep.
      - **Apotheekdata** — verstrekte medicatie.
      - **Gemeente Den Haag** — gegevens over de Wmo.
      - **CBS-microdata** — sociaaleconomische en demografische gegevens, bijvoorbeeld inkomen, huishoudsamenstelling, herkomst en sterfte. Alleen beschikbaar in de CBS-RA-omgeving.

      Wat er precies in een bron zit, staat in het codeboek van de betreffende omgeving. In fase 2 werk je dit uit naar variabeleniveau.
  - type: inklap
    stijl: note
    kop: Hoe komt de data in ELAN terecht?
    inhoud: |-
      De huisartsendata wordt door een Trusted Third Party (STIZON) uit het EPD gehaald. In de bestanden zitten twee soorten variabelen: variabelen die rechtstreeks uit het EPD komen, en 'derived' variabelen die STIZON na bewerking en validatie toevoegt. Die laatste herken je aan de prefix `d`, bijvoorbeeld `dDatum` of `dEpisodeICPC`.

      Het koppelen van bronnen op persoonsniveau gebeurt binnen de beveiligde Remote Access-omgeving van het CBS. Daar wordt data gepseudonimiseerd; bestanden zijn onderling koppelbaar via een geanonimiseerd persoonsnummer, het Record Identification Number (RIN).

      Alle externe data komt binnen in een projectdatabase waar alleen de ELAN-datamanager bij kan. Als onderzoeker krijg je daaruit een **subset**. Het koppelen van die subsets doe je vervolgens zelf.
  - type: inklap
    stijl: note
    kop: 'Twee omgevingen: I-schijf en CBS-RA'
    inhoud: |-
      - **I-schijf** — beveiligde LUMC-interne omgeving met ELAN-zorgdata.
      - **CBS-RA** — beveiligde remote-access omgeving van het CBS, waar ELAN-data gekoppeld kan worden aan CBS-microdata.

      De keuze bepaalt welke data je kunt gebruiken, welke software beschikbaar is, wat het kost en hoe je resultaten naar buiten krijgt. Niet alle data zit in beide omgevingen, en variabelen kunnen per omgeving anders zijn opgebouwd of anders heten.

      Wil je CBS-microdata koppelen, dan werk je in CBS-RA. Bespreek de keuze vroeg met de datamanager. Wat het praktisch betekent, staat in fase 4.

      Volgens de Startersgids is nog niet officieel vastgelegd of beide omgevingen permanent naast elkaar blijven bestaan. Houd hier rekening mee bij een langlopend project.
- subtitel: Stap 2 — Past je vraag bij routinezorgdata?
  blokken:
  - type: tekst
    inhoud: 'Niet elke vraag laat zich met ELAN beantwoorden. Onderstaande indeling geeft een eerste
      richting:'
  - type: tabel
    inhoud: |-
      | Geschiktheid | Voorbeelden |
      | --- | --- |
      | **Sterk** | Prevalentie, risicofactoren, populatiebeschrijvingen, verwijzingstrajecten, longitudinale analyses bij voldoende follow-up |
      | **Beperkt** | Time-to-event analyses — op dit moment lastig uitvoerbaar; bespreek vooraf met de datamanager |
      | **Moeilijk / niet** | Vragen die harde diagnosezekerheid op basis van ICPC-codes alleen vereisen; vragen die actuele of real-time klinische data vereisen |
  - type: inklap
    stijl: note
    kop: Waarom is een ICPC-code geen diagnose?
    inhoud: |-
      Huisartsen registreren per contact volgens de SOEP-structuur. De E-regel (Evaluatie) bevat de werkhypothese of (symptoom)diagnose, en die regel wordt gecodeerd met ICPC.

      Het advies aan huisartsen is: codeer niet hoger dan je waar kunt maken. Lagere ICPC-nummers zijn symptomen, hogere zijn diagnoses. Buikpijn met verdenking appendicitis wordt daarom vaak gecodeerd als D01 (buikpijn), en pas bijgesteld naar D88 (appendicitis) als de diagnose zeker is — soms pas na de brief uit het ziekenhuis, en soms helemaal niet.

      Praktisch: een ICPC-code alleen is meestal geen betrouwbare diagnosemaat. Vaak heb je een combinatie nodig, bijvoorbeeld met medicatie, metingen of ziekenhuisdata. Hoe je zo'n definitie opbouwt, staat in fase 2.
  - type: inklap
    stijl: note
    kop: Wat betekent registratievariatie voor prevalentiecijfers?
    inhoud: |-
      Registratie verschilt per praktijk en per huisartsinformatiesysteem. Volgens de Startersgids was in ELAN in 2019 93% van alle nieuwe episodes gecodeerd, maar liep dat tussen praktijken uiteen van 71% tot 99%.

      Gevolg: een deel van de variatie die je in je uitkomsten ziet, is mogelijk registratievariatie en geen echt verschil in ziektelast. Houd hier rekening mee bij prevalentieschattingen en bij vergelijkingen tussen wijken of praktijken.

      Een lege registratie betekent bovendien niet dat een aandoening afwezig is. Dit punt komt in fase 5 uitgebreid terug.
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: concrete voorbeeldpapers per categorie (recente publicaties met ELAN-data),
      zodat zichtbaar wordt wat in de praktijk mogelijk blijkt.'
- subtitel: Stap 3 — Toets je vraag op de data
  blokken:
  - type: tekst
    inhoud: Loop deze drie punten na. Kun je ze alle drie beantwoorden, dan is je vraag waarschijnlijk
      kansrijk genoeg om verder uit te werken in fase 2.
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
  - type: inklap
    stijl: example
    kop: Hoe controleer ik of mijn populatie erin zit?
    inhoud: |-
      Beschrijf je populatie eerst in gewone taal: leeftijd, regio, aandoening, periode. Vertaal die beschrijving daarna naar wat er in de data staat.

      Aandachtspunten:

      - De ELAN-populatie is regionaal (Haaglanden en Hollands-Midden), niet landelijk. Generaliseren naar heel Nederland is dus niet vanzelfsprekend.
      - Niet elke huisartsenpraktijk in de regio levert data. Je populatie is de populatie van de deelnemende praktijken.
      - Selecteer je op een aandoening, bedenk dan dat je feitelijk selecteert op *geregistreerde* aandoening — zie stap 2.

      Kom je er niet uit, dan is dit een goede vraag voor het oriëntatiegesprek met de DCC.
  - type: inklap
    stijl: example
    kop: Hoe controleer ik of mijn variabelen bestaan?
    inhoud: |-
      Gebruik het codeboek. Elke omgeving heeft een eigen codeboek, en variabelen kunnen per omgeving anders heten.

      - Documentatie huisartsdata: elan-dcc.github.io/researchers/internal/gp_data/
      - Codeboeken: github.com/elan-dcc/org/tree/main/codebooks

      Zoek per sleutelvariabele: staat hij erin, in welke tabel, in welke eenheid, en over welke periode is hij gevuld? Noteer de tabelnaam erbij — die heb je in fase 2 en 3 opnieuw nodig.
  - type: inklap
    stijl: example
    kop: Hoe controleer ik of mijn periode gedekt is?
    inhoud: |-
      Twee vragen tegelijk: loopt de data ver genoeg terug, en is de dekking in die jaren stabiel genoeg om trends te mogen interpreteren?

      Let op: externe bronnen worden doorgaans één keer per jaar bijgewerkt richting ELAN. De meest recente maanden zitten er dus meestal nog niet in. Voor onderzoek met een strakke einddatum is dat een reëel risico.
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN: per databron de dekkingsperiode (van welk jaar tot welk jaar), het
      aantal deelnemende praktijken en instellingen, en de omvang van de populatie. Zonder die cijfers
      blijft stap 3 lastig zelfstandig uit te voeren.'
- subtitel: Stap 4 — Mag jij bij de data?
  blokken:
  - type: tekst
    inhoud: Toegang is niet vrij. Voordat je verder plant, check of je aan de formele voorwaarden
      voldoet. Dit is een knock-out die in de oriëntatiefase makkelijk over het hoofd wordt gezien.
  - type: letop
    kop: Twee harde voorwaarden
    inhoud: |-
      1. **Je instelling moet een overeenkomst met het CBS hebben.** LUMC-onderzoekers voldoen hier sowieso aan.
      2. **Bij elk onderzoek moet een LUMC-onderzoeker betrokken zijn.** Ben je dat zelf niet, dan is een betrokken senior-onderzoeker vanuit het LUMC nodig.
  - type: inklap
    stijl: note
    kop: Ik werk niet bij het LUMC — kan het dan alsnog?
    inhoud: |-
      Waarschijnlijk wel, maar met een extra stap. Onderzoekers van instellingen zonder CBS-overeenkomst kunnen zich aan het LUMC verbinden, bijvoorbeeld via een 0-uren- of stagecontract.

      Een overzicht van instellingen die al een overeenkomst met het CBS hebben, staat op de CBS-website onder 'instellingen en projecten'.

      Regel dit vroeg. Een contractroute kost tijd en loopt via andere mensen dan de dataroute, dus deze twee trajecten kunnen prima naast elkaar lopen.
- subtitel: Stap 5 — Past je vraag onder een bestaand ELAN-project?
  blokken:
  - type: tekst
    inhoud: In de CBS-omgeving bestaat ELAN uit meerdere projecten, elk met een eigen focus en eigen
      aangevraagde microdata. Je onderzoek moet onder één van die projecten vallen. Zoek in deze fase
      alvast op welk project het dichtst bij je vraag ligt.
  - type: tabel
    inhoud: |-
      | Project | Focus |
      | --- | --- |
      | 9002 | Diabetes, hart- en vaatziekten en complicaties (etiologisch onderzoek) |
      | 9003 | Praktijkvariatie en wijkverschillen in Haaglanden en Hollands-Midden |
      | 9004 | COVID-19: sociaal-demografische determinanten van infectie en ernst |
      | 9005 | Transitieproject: verwijzingen en transities tussen eerste lijn, tweede lijn en sociaal domein |
      | 9020 | Population Health Information System |
      | 9269 | GGZ: sociaal-demografische determinanten van het beloop van psychische problemen |
  - type: inklap
    stijl: note
    kop: Wat als mijn vraag nergens onder past?
    inhoud: |-
      Dan is een nieuw project openen mogelijk, maar dat bespreek je eerst met J. Struijs (J.N.Struijs@lumc.nl) en datamanager F. Ardesch (F.H.Ardesch@lumc.nl). Reken op extra doorlooptijd.

      Let op: welke CBS-microdata beschikbaar is, verschilt per project. Niet alle bestanden uit de CBS-microdatacatalogus zijn automatisch beschikbaar — per project is aangevraagd wat dat project nodig had. Welke dat zijn, kun je opzoeken op de CBS-website onder 'instellingen en projecten'.

      Heb je een microdatabestand nodig dat nog niet in je project zit, dan loopt die aanvraag via de datamanager. Dat kost extra tijd en geld.
- subtitel: Stap 6 — Wat kost het en hoe lang duurt het?
  blokken:
  - type: tekst
    inhoud: |-
      Werken in de CBS-RA-omgeving kost geld. Het gaat om eenmalige aanmeldkosten, kosten per maand dat je als actieve gebruiker staat aangemeld, en kosten per keer dat je output uit de omgeving laat halen. Voor een onderzoeker die een jaar actief is, komt dat volgens het Guidance Document in de orde van enkele duizenden euro's per jaar uit.

      Kosten worden per kwartaal doorbelast aan de onderzoeker. Regel dus vóór je aanvraag dat er budget is, en neem het mee in je subsidieaanvraag. De actuele tarieven en een uitgewerkt rekenvoorbeeld staan in fase 3.
  - type: valkuil
    kop: Reken niet op de kortste doorlooptijd
    inhoud: |-
      Het Guidance Document houdt aan: ongeveer een maand per externe data-aanvraag, plus maximaal twee weken om de datasets klaar te zetten, plus ongeveer twee weken voor je CBS-RA-aanmelding.

      In de praktijk kan het langer duren. In het knelpuntenrapport is een aanvraag beschreven die meer dan drie maanden op formele goedkeuring wachtte. Plan hier ruimte voor in, zeker als je onderzoek aan een promotietraject of subsidiedeadline hangt.
  - type: inklap
    stijl: note
    kop: Waar komen die kosten vandaan?
    inhoud: |-
      De kosten komen vrijwel volledig voort uit het gebruik van de CBS-RA-infrastructuur, niet uit ELAN zelf. Kostenposten zijn onder meer:

      - eenmalige aanmeldkosten per onderzoeker;
      - een bedrag per maand dat je als actieve gebruiker staat aangemeld;
      - een bedrag per keer dat je output laat controleren en exporteren;
      - geheugenkosten per maand;
      - eventueel: het aanvragen van extra microdatabestanden, of het importeren van eigen bestanden.

      Ondersteuning door de ELAN-datamanager wordt volgens het Guidance Document niet doorbelast.

      Twee praktische gevolgen: bundel je output zoveel mogelijk in plaats van vaak kleine exports aan te vragen, en meld je af als actieve gebruiker zodra je een langere periode niet werkt. Zie fase 7.
- subtitel: Stap 7 — Leg je idee voor
  blokken:
  - type: tekst
    inhoud: |-
      Kwam je door de stappen heen, dan is dit het moment om je idee te toetsen bij mensen die de data kennen — vóór je begint met protocol en ticket. Dat scheelt later iteratierondes.

      Ga daarna door naar fase 2, waar je je vraag vertaalt naar concrete variabelen.
  - type: tip
    kop: Vraag een oriëntatiegesprek aan
    inhoud: |-
      Neem contact op met het ELAN Data Competence Center (elan.dcc@lumc.nl) of met datamanager F. Ardesch (F.H.Ardesch@lumc.nl). Zij denken mee over de haalbaarheid op dataniveau.

      Neem mee naar dat gesprek: je onderzoeksvraag in één zin, je beoogde populatie en periode, je sleutelvariabelen, en het ELAN-project waar je vraag volgens jou onder valt.
naslag:
- '**ELAN-DCC voor onderzoekers** — elan-dcc.github.io/researchers (databronnen, documentatie, toegangsvoorwaarden)'
- '**Documentatie huisartsdata** — elan-dcc.github.io/researchers/internal/gp_data/'
- '**Codeboeken** — github.com/elan-dcc/org/tree/main/codebooks'
- '**ELAN-onderzoeksportaal** — elanresearch.nl (oriëntatie op databronnen; later ook ticketindiening)'
- '**ICPC-viewer (NHG)** — viewers.nhg.org/icpcviewer/'
- '**CBS instellingen en projecten** — overzicht van instellingen met CBS-overeenkomst en van de microdata per project'
- '**CBS-microdatacatalogus** — welke microdatabestanden er bestaan (niet alles is per project beschikbaar)'
- '**Infrastructuurpapers** — Kist et al., Int J Epidemiol 2024; Ardesch et al., Health Policy 2023'
- '**Contact / DCC** — elan.dcc@lumc.nl; F.H.Ardesch@lumc.nl (haalbaarheid op dataniveau)'
---
