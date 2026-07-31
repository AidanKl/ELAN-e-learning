---
volgorde: '02'
menutitel: Fase 2 — Ontwikkeling
titel: 'Fase 2 — Ontwikkelfase: van vraag naar dataverzoek'
toon_balk: true
intro: 'Je vertaalt je onderzoeksvraag naar een concreet dataverzoek: welke definitie, welke tabellen,
  welke variabelen, welke populatie, welke periode.


  Dit is de fase waarin de meeste latere problemen worden voorkomen of veroorzaakt. Werk de zes stappen
  op volgorde door: eerst begrijpen hoe de data ontstaat, dan je concept vastleggen, en pas daarna kiezen
  welke tabellen je nodig hebt.'
benodigdheden:
- Een afgebakende onderzoeksvraag uit fase 1
- Toegang tot het codeboek van de omgeving waarin je gaat werken
- De ICPC-viewer en, bij medicatie, kennis van ATC-codering
- Een concept-inclusie- en exclusiecriterium voor je populatie
subhoofdstukken:
- subtitel: In 30 seconden
  blokken:
  - type: tekst
    inhoud: '- ELAN-data is registratiedata. Wat erin staat, is vastgelegd voor de zorg — niet voor jouw
      vraag. Elke variabele vraagt dus interpretatie.

      - Je werkt van concept (''depressie'') naar codeafspraak: welke ICPC-codes, welke ATC-codes, welk
      tijdvenster, welke aanvullende eis.

      - Een ICPC-code alleen is zelden genoeg. Combineren met medicatie, metingen of verwijzingen geeft
      een betere benadering.

      - Pas als je definitie staat, kies je tabellen. Huisartsdata bestaat uit een set tabellen (onder
      meer PAT, EPS, JRN, MED, LAB, COR); externe bronnen dekken elk hun eigen jaren.

      - Voor veelgebruikte concepten (SES, polyfarmacie, multimorbiditeit, kwetsbaarheid) bestaan al definities
      en soms kant-en-klare syntax. Vraag ernaar voordat je zelf bouwt.'
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
- subtitel: Stap 1 — Begrijp hoe de registratie ontstaat
  blokken:
  - type: tekst
    inhoud: 'Huisartsen leggen elk contact vast in een Huisarts Informatie Systeem (HIS) volgens de SOEP-structuur:
      Subjectief (klachten), Objectief (bevindingen), Evaluatie (werkhypothese of (symptoom)diagnose),
      Plan (behandeling). De E-regel wordt gecodeerd met ICPC.


      Via episodegericht registreren worden losse contacten gekoppeld aan een zorgepisode. Één episode
      beschrijft het beloop van één gezondheidsprobleem over de tijd. De tabellen Journaal (JRN) en Episoden
      (EPS) zijn daardoor verbonden via het episodenummer.'
  - type: inklap
    stijl: example
    kop: Hoe ziet een SOEP-registratie eruit?
    inhoud: 'Voorbeeld uit de ELAN-documentatie:


      - **S** — sinds 3 dagen hoofdpijn

      - **O** — myalgie nek

      - **E** — spierspanningshoofdpijn, met ICPC-code

      - **P** — uitleg, oefeningen, verwijzing naar thuisarts.nl


      Alleen de E-regel is gecodeerd. De rest is vrije tekst, en vrije tekst zit niet in de ELAN-data
      die jij krijgt.'
  - type: inklap
    stijl: note
    kop: Wat gebeurt er als de diagnose gedurende een episode verandert?
    inhoud: 'Stelt de huisarts de diagnose bij — een ‘transitie van diagnose’ — dan wordt de E-regel meestal
      aangepast, bijvoorbeeld van hoofdpijn naar hersentumor nadat de neuroloog dat bevestigt. Ga er niet
      van uit dat dit altijd gebeurt.


      Bij herdefiniëring worden bovendien niet alle historische diagnoses in de episode bewaard. Een journaalregel
      ‘piepende ademhaling’ (R03) kan daardoor onder een episode ‘astma’ (R96) hangen.


      Gevolg voor jouw definitie: de tabel JRN bevat twee ICPC-kolommen — die van de journaalregel zelf,
      en die van de gekoppelde episode. Voor de historische opbouw van samenhangende codes geeft JRN vaak
      een beter beeld dan EPS.'
  - type: inklap
    stijl: note
    kop: Verschilt registratie tussen HIS-systemen?
    inhoud: 'Ja. Episodegericht registreren werkt per HIS net anders, waardoor variabelen anders gevuld
      zijn. Uit een controle van databestand 2018–2020:


      | Variabele | Medicom | Microhis | Prom-ASP | Prom-VDF |

      | --- | --- | --- | --- | --- |

      | depisodetype | E / P | E / P | E / P | ontbreekt |

      | dactief (status bij extractie) | J/N/V | ontbreekt | ontbreekt | J/N |

      | dbegindatum | aanwezig | aanwezig | aanwezig | aanwezig |

      | deinddatum | vaak leeg | sporadisch | aanwezig | vaak 0001-01-01 |


      HIS-systeemcodes: 1 = Medicom, 3 = Promedico VDF, 5 = Microhis, 6 = Omnihis, 7 = Promedico ASP.


      In sommige HIS''en (bijvoorbeeld Medicom) sluit een episode zonder probleemstatus automatisch na
      een periode zonder contact, bijvoorbeeld 18 maanden. De einddatum is dan géén betrouwbare maat voor
      ziekteduur. Het NIVEL gebruikt hiervoor het ‘ziektevrije interval’ (Nielen et al., 2019, JMIR Med
      Inform).'
- subtitel: Stap 2 — Leer de codestelsels lezen
  blokken:
  - type: tekst
    inhoud: 'Twee codestelsels bepalen vrijwel elke ELAN-definitie: ICPC voor wat de huisarts registreert,
      en ATC voor medicatie.


      Episodes worden grotendeels gecodeerd met de ICPC (International Classification for Primary Care),
      een classificatie speciaal voor de huisartsgeneeskunde. Een code bestaat uit een letter-as (tractus,
      A t/m Z) en een cijfer-as (component).'
  - type: tabel
    inhoud: '| Cijferreeks | Betekenis |

      | --- | --- |

      | 01–29 | Symptomen en klachten |

      | 30–69 | Verrichtingen (niet bedoeld voor episodes) |

      | 70–99 | Diagnoses |'
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
  - type: inklap
    stijl: info
    kop: Hoe werkt ATC-codering, en waarom is het niveau belangrijk?
    inhoud: 'Medicatie is gecodeerd volgens de ATC-classificatie (Anatomical Therapeutic Chemical). Die
      is hiërarchisch: hoe meer tekens, hoe specifieker. ATC-4 is de therapeutische subgroep, ATC-7 het
      specifieke werkzame middel.


      Het beschikbare niveau verschilt per bron, en dat bepaalt wat je kunt onderzoeken:


      | Bron | Niveau | Wat je ermee kunt |

      | --- | --- | --- |

      | CBS-microdata (MEDICIJNTAB) | ATC-4 | Gedeclareerde medicatie binnen de basisverzekering, geaggregeerd
      per jaar. Geen dosering, hoeveelheid of frequentie. |

      | ELAN-huisartsendata (MED) | ATC-7 | Alle voorschriften per persoon, inclusief dosering en afleverhoeveelheid.
      |


      Praktisch gevolg: gaat je vraag over dosering, therapietrouw of duur van gebruik, dan heb je de
      huisartsendata nodig. Gaat het om ruwer gebruik binnen een therapeutische groep, dan volstaat ATC-4
      — en voorkom je dat wisselen tussen middelen binnen dezelfde groep als nieuw gebruik meetelt.


      Let op: een voorschrift in de huisartsendata betekent niet dat het middel is opgehaald of ingenomen.
      Een declaratie in CBS-microdata betekent dat het is verstrekt, niet dat het is gebruikt.'
  - type: valkuil
    kop: Een lege registratie betekent niet dat de aandoening afwezig is
    inhoud: 'ICPC-codes worden vaker niet dan wel geregistreerd. Bij afwezigheid van informatie mag je
      nooit concluderen dat een diagnose of determinant afwezig is.


      Registratie verschilt bovendien sterk per huisarts: de één codeert keelpijn als ‘verkouden’, de
      ander zet ‘keelpijn’ op de E-regel. Familieanamnese kan in de O-regel staan, in het contextuele
      deel van het HIS (niet terug te vinden in ELAN), of als ICPC-code (wel terug te vinden).


      Benoem dit expliciet in je methodesectie, en houd rekening met onderschatting van prevalenties.'
  - type: inklap
    stijl: note
    kop: Waarom staat er soms een symptoomcode waar je een diagnose verwacht?
    inhoud: 'Het advies aan huisartsen is: codeer niet hoger dan je waar kunt maken. Lagere nummers zijn
      symptomen, hogere diagnoses. Buikpijn met verdenking appendicitis wordt vaak D01 (buikpijn) en pas
      later D88 (appendicitis) — soms pas na de brief uit het ziekenhuis, soms helemaal niet.


      Voor jouw operationalisatie betekent dit meestal: neem zowel symptoom- als diagnosecodes mee, of
      onderbouw expliciet waarom je dat niet doet.'
  - type: inklap
    stijl: note
    kop: Wat is het verschil tussen de probleemlijst en de episodelijst?
    inhoud: 'Om de belangrijkste, vaak chronische aandoeningen te markeren worden episodes gelabeld als
      ‘probleem’. Die selectie heet de probleemlijst — het rijtje dat bijvoorbeeld met een verwijsbrief
      meegaat.


      De meeste HIS''en (uitzondering: Promedico VDF) stellen bepaalde ICPC-codes automatisch voor als
      probleem: een myocardinfarct wel, een zere teen niet.


      Kies bewust: selecteer je op de probleemlijst, dan krijg je een schonere maar kleinere selectie
      chronische aandoeningen. Selecteer je op alle episodes, dan krijg je meer ruis.'
  - type: inklap
    stijl: note
    kop: Waarom staan er zoveel diagnoses op dezelfde begindatum?
    inhoud: 'Bij de aanschaf van een nieuw HIS, of wanneer een patiënt naar een nieuwe praktijk overgaat,
      werd de voorgeschiedenis handmatig ingevoerd. De begindatum werd daarbij vaak niet correct overgenomen;
      je ziet dan veel diagnoses op één datum staan.


      Sinds ongeveer 2023 zijn er afspraken tussen LHV, NHG en HIS-leveranciers om diagnoses automatisch
      in hetzelfde format over te nemen, maar dat werkt volgens de documentatie nog niet foutloos.


      Een patiënt met twintig jaar migraine die nieuw binnenkomt, kan dus een startdatum van vandaag krijgen,
      van twintig jaar geleden, of een fictieve datum in een ver verleden. Wees daarom voorzichtig met
      episodestartdatums als maat voor ziekteduur of incidentie.'
- subtitel: Stap 3 — Operationaliseer je concept
  blokken:
  - type: tekst
    inhoud: 'Operationaliseren is de vertaling van een abstract concept (‘depressie’, ‘multimorbiditeit’)
      naar een regel die je op de data kunt loslaten. Leg per uitkomst en per determinant vast:


      1. **Welke codes tellen mee** — welke ICPC-codes, welke ATC-codes, welke labbepalingen.

      2. **Welke aanvullende eis geldt** — bijvoorbeeld: alleen tellen als er ook medicatie is voorgeschreven,
      of alleen als de episode op de probleemlijst staat.

      3. **Over welk tijdvenster je meet** — kalenderjaar, periode voor of na een indexdatum, of de hele
      beschikbare historie.

      4. **Wie in- en uitgesloten wordt** — leeftijd, inschrijfduur bij de praktijk, minimale follow-up.


      Schrijf deze regels op voordat je data aanvraagt. Ze bepalen welke tabellen en variabelen je nodig
      hebt, en ze gaan later ongewijzigd je protocol en methodesectie in.'
  - type: inklap
    stijl: example
    kop: Waarom één ICPC-code zelden genoeg is
    inhoud: 'Een ICPC-code registreert de reden van contact of een werkhypothese. Voor een betere benadering
      van een aandoening combineer je codes doorgaans met andere signalen:


      - **medicatie** — is er een bijpassend voorschrift, en hoe lang loopt dat door?

      - **metingen of lab** — is er een bijpassende bepaling of waarde?

      - **verwijzingen** — is de patiënt hiervoor doorverwezen?

      - **herhaling** — komt de code meerdere keren voor, of in meerdere episodes?


      Bespreek je validatiestrategie met de DCC, met de datamanager of met een onderzoeker die eerder
      met dezelfde aandoening werkte.'
  - type: inklap
    stijl: note
    kop: 'Waar komt het recept vandaan: huisarts of specialist?'
    inhoud: 'In de data is niet altijd duidelijk of een recept of verwijzing van de huisarts komt of van
      een medisch specialist. Voor onderzoek naar voorschrijfgedrag of verwijspatronen is dat een wezenlijk
      verschil.


      Controleer welke bron de registratie heeft gegenereerd voordat je hier conclusies aan verbindt.'
  - type: todo
    inhoud: 'NOG-AAN-TE-VULLEN (visueel): schema van ruwe variabele naar uitkomstmaat, met per stap de
      keuze die je vastlegt.'
- subtitel: Stap 4 — Kies je tabellen en variabelen
  blokken:
  - type: tekst
    inhoud: Nu je definitie staat, bepaal je welke tabellen je daarvoor nodig hebt. Je vraagt aan wat
      je nodig hebt, niet alles. Onderstaand overzicht komt uit het codeboek van de ELAN-GP-data (DWH).
  - type: tabel
    inhoud: '| Tabel | Inhoud |

      | --- | --- |

      | PAT | Patiëntgegevens |

      | EPS | Episoden |

      | JRN | Journaalregels |

      | MED | Medicatie (voorschriften) |

      | LAB | Laboratorium en diagnostiek |

      | CIA | Contra-indicaties |

      | RUI | Ruiters |

      | COR | Correspondentie |

      | ACT | Verrichtingen |

      | JRN_Roken | Afgeleide tabel: rookstatus uit journaalregels |

      | JRN_ZorgDomein | Afgeleide tabel: ZorgDomein-verwijzingen uit journaalregels |'
  - type: inklap
    stijl: info
    kop: Hoe hangen de tabellen met elkaar samen?
    inhoud: 'Je krijgt losse tabellen aangeleverd; het koppelen doe je zelf. Twee sleutels zijn daarbij
      belangrijk.


      - **Binnen de huisartsendata** koppel je journaalregels (JRN) aan episodes (EPS) via het episodenummer.
      Eén episode beschrijft één gezondheidsprobleem over de tijd; daaronder hangen meerdere journaalregels.

      - **Tussen ELAN-datasets onderling** — bijvoorbeeld huisartsdata, ziekenhuisdata en CBS-microdata
      — koppel je op persoonsniveau via RINPERSOON en RINPERSOONS. Volgens de codeboeken gelden die samen
      als koppelsleutel tussen de ELAN-datasets in de CBS-RA-omgeving.


      Bedenk vooraf op welk niveau je analyse-eenheid ligt: persoon, episode, contact of voorschrift.
      Koppelen van een tabel op contactniveau aan een tabel op persoonsniveau vermenigvuldigt rijen, en
      dat is een veelgemaakte bron van dubbeltellingen.'
  - type: letop
    kop: Controleer variabelen op inhoud, niet op naam
    inhoud: 'Variabelenamen in de data komen soms niet overeen met het codeboek, en kunnen verschillen
      tussen de I-schijf en CBS-RA. Ook de structuur verschilt: op de I-schijf zijn inschrijvingen (INS)
      en patiëntgegevens (PAT) gescheiden, terwijl ze in CBS-RA samengevoegd worden aangeleverd.


      Controleer daarom altijd de wáárden van een variabele, niet alleen de naam.'
  - type: inklap
    stijl: info
    kop: Welke externe bronnen zijn er, en over welke jaren?
    inhoud: 'Naast de huisartsendata zijn er externe bronnen. Elke bron dekt zijn eigen periode; dat is
      vaak bepalend voor de haalbaarheid van je onderzoeksperiode.


      | Bron | Wat erin zit | Dekking volgens codeboek |

      | --- | --- | --- |

      | HagaZiekenhuis | Basisgegevens en DBC''s (specialisme, begindatum), anamnese roken | 2008–2023;
      roken 2016–2023 |

      | HMC | DBC''s met hoofddiagnose en specialisme, roken | 2007–2022; roken alleen 2019 |

      | Wmo Den Haag | Kosten per dienstverlening: huishoudelijke hulp, begeleiding, dagbesteding, beschermd
      wonen | Kosten 2017–2023; AWBZ-overgangsrecht 1994 tot medio 2021 |

      | Perined | Zwangerschap en geboorte: zwangerschapsduur, Apgar, adverse outcomes | 2000–2018 |

      | Parnassia Groep | GGZ-inschrijvingen, zorgtoewijzingen en DBC''s, met achtergrondkenmerken | 2011–2020
      |

      | GGD Haaglanden | Positieve COVID-19-tests en overlijdensdatum | Alleen 2020 |

      | Wijkniveau (open data) | Leefbaarometer, geregistreerde criminaliteit, achterstandsscores, bevolkings-
      en woningdichtheid, luchtkwaliteit | Wisselend per bron |


      Twee dingen om mee te nemen. Ten eerste: toegang tot een externe bron regel je apart per bronhouder,
      ook al zit de data al in ELAN — zie fase 3. Ten tweede: deze dekkingsperioden komen uit de codeboeken,
      en die zijn niet volledig actueel. Verifieer de meest recente jaren bij de datamanager voordat je
      je onderzoeksperiode vastlegt.'
  - type: inklap
    stijl: example
    kop: Maak een mapping-tabel voordat je begint
    inhoud: 'Advies uit de Startersgids: leg bij de start van elke analyse per variabele vast:


      1. naam in de data;

      2. naam in het codeboek;

      3. verwachte waarden;

      4. vulgraad;

      5. tabel waar hij vandaan komt.


      Dit voorkomt stille fouten, en je hebt het document later nodig voor je methodesectie en je ticket.'
  - type: inklap
    stijl: warning
    kop: Onderzoek je verwijzingen? Lees dit eerst
    inhoud: 'Verwijzingen staan op meerdere plekken, en geen enkele bron is volledig.


      | Bron | Wat erin zit en de belangrijkste beperking |

      | --- | --- |

      | COR (correspondentie) | In- en uitgaande correspondentie vanuit de HIS-verwijsmodule. ZorgDomein-verwijzingen
      komen hier niet in terecht; ook niet gevuld voor Promedico (systeem 3 of 7). |

      | JRN_ZorgDomein | Afgeleide tabel met ZorgDomein-verwijzingen, door STIZON via tekstsearch uit
      journaalregels gehaald (sinds begin 2024, voor data vanaf 2005). |

      | ACT / verrichtingen | ZorgDomein-verwijzingen via Vektis-codes (14121, 14609, 14692) of verrichtingcode
      9047. Geen informatie over specialisme, en het aantal records is laag. |

      | Vektis / ziekenhuisdata | MSZPRESTATIESVEKTTAB bevat de (zelf)verwijzer voor een DBC-zorgtraject.
      Vektis-bestanden lopen vaak twee jaar achter. |


      Wie alleen COR gebruikt, mist een groot deel van de verwijzingen. Combineer COR met JRN_ZorgDomein.
      Verwijzingen die intern, mondeling of via briefjes lopen, zitten in geen enkele tabel.


      Vulgraad van COR-variabelen verschilt sterk: dDatum 100%, dEpisodeICPC 69%, dSpecialisme 58%, CorrespondentieICPC
      slechts 2%. Belangrijke variabelen: dRichting (I = inkomend, U = uitgaand), dSpecialisme (gevalideerd
      met NHG-tabel 12) en dEpisodeICPC.'
  - type: inklap
    stijl: info
    kop: Welke codeboeken zijn er, en waarvoor?
    inhoud: 'Elke omgeving en elke bron heeft een eigen codeboek.


      - **Codeboek ELAN-GP (DWH)** — de huisartsentabellen hierboven, met per variabele type, betekenis,
      vulgraad en verschillen tussen HIS-systemen.

      - **Codeboek ELAN-CBS** — per bron een tabblad: CBS-microdata, huisartsen, HagaZiekenhuis, HMC,
      Wmo, Perined, Parnassia Groep, GGD (COVID-19) en variabelen op wijkniveau.


      Werk altijd met de nieuwste versie: github.com/elan-dcc/org/tree/main/codebooks. Verschillen tussen
      de omgevingen staan op elan-dcc.github.io/researchers/environments_overview/.


      Let op: codeboeken lopen achter op de data. Gebruik ze om te begrijpen wat een variabele betekent,
      maar controleer aanwezigheid, vulgraad en meest recente jaar altijd in de data zelf.'
- subtitel: Stap 5 — Gebruik bestaande definities waar die er zijn
  blokken:
  - type: tekst
    inhoud: Voor een aantal veelgebruikte concepten liggen er binnen ELAN al keuzes en soms kant-en-klare
      syntax. Zelf opnieuw beginnen kost tijd en maakt je resultaten slechter vergelijkbaar met eerder
      ELAN-onderzoek.
  - type: tip
    kop: Vraag eerst of de definitie al bestaat
    inhoud: Voor SES, etniciteit, polyfarmacie, multimorbiditeit en kwetsbaarheid zijn definities beschreven
      in de ELAN-documentatie. Syntaxen zijn opvraagbaar bij de datamanager (F.H.Ardesch@lumc.nl) of bij
      de auteurs. Voor kwetsbaarheid staat er al een SPSS-syntax in de CBS-RA-omgeving.
  - type: inklap
    stijl: note
    kop: Etniciteit en sociaaleconomische status
    inhoud: '- **Etniciteit** — gebruik GBAHERKOMSTGROEPERING uit GBAPERSOONTAB. Omcoderen naar werelddelen
      kan via de CBS-utility (referentiebestand LANDAKTUEEL). Let op: vanaf 2022 vervangt het CBS de generatie-indeling
      geleidelijk door GBAGEBOORTELANDNL en GBAAANTALOUDERSBUITENLAND.

      - **SES, keuze 1** — huishoudinkomen of persoonlijk inkomen? Huishoudinkomen geeft een betere afspiegeling;
      bij voorkeur het gestandaardiseerde huishoudinkomen.

      - **SES, veelgebruikte variabelen** — INHP100HGEST (gestandaardiseerd inkomen in percentielen) of
      VEHP100WELVAART (inkomen plus vermogen). Na 2011 in INHATAB/INPATAB/VEHTAB, vóór 2011 in IHI/IPI.


      Drie aandachtspunten uit de documentatie:


      - Bij sterfte is het inkomen in het sterftejaar te laag: wie in januari overlijdt heeft maar een
      twaalfde van het jaarinkomen. Koppel inkomen en vermogen daarom van het jaar vóór je baseline.

      - Er bestaan negatieve inkomens, vooral bij zelfstandigen met verlies. Houd hier rekening mee bij
      het maken van inkomensklassen.

      - SES op wijk- of buurtniveau maskeert segregatie binnen een straat; in Den Haag kunnen hoge inkomens
      en bestaansminima naast elkaar wonen. Voorkeur uit de documentatie: huishoudensniveau.

      - Hoogst genoten opleiding heeft in oudere jaren veel missende waarden en is deels geïmputeerd.
      Voor een historische periode vaak niet bruikbaar.'
  - type: inklap
    stijl: note
    kop: Polyfarmacie
    inhoud: 'Kies eerst je bron; die bepaalt wat je kunt onderzoeken.


      - **CBS-microdata (MEDICIJNTAB)** — ATC-4, geaggregeerd per jaar, hele regio Haaglanden, alle binnen
      de basisverzekering gedeclareerde medicatie. Géén dosering, hoeveelheid of frequentie.

      - **ELAN-huisartsendata** — ATC-7, alle voorschriften per persoon inclusief dosering en afleverhoeveelheid.
      Nodig als dosering onderdeel is van je vraag.


      Veelgebruikte definities uit de documentatie: chronisch gebruik = meer dan 90 dagen van het onderzoeksjaar
      en/of meer dan 3 voorschriften in het laatste halfjaar, toegepast op ATC-4-niveau zodat wisselen
      binnen dezelfde therapeutische groep niet dubbel telt. Polyfarmacie = gelijktijdig chronisch gebruik
      van vijf of meer geneesmiddelen, waarbij ATC-codes D, G01, V, Y en Z vaak worden uitgesloten (Oktora
      et al. 2019; Alfian et al. 2019).'
  - type: inklap
    stijl: note
    kop: Multimorbiditeit en kwetsbaarheid
    inhoud: '- **Multimorbiditeit** — er zijn veel definities. Een veelgebruikte leidraad voor de Nederlandse
      populatie, inclusief ICPC-codes, is Van Oostrom et al., BMC Public Health 2012.

      - **Kwetsbaarheid, Frailty Phenotype** — gebaseerd op onder meer gewichtsverlies, uitputting, grijpkracht,
      loopsnelheid en fysieke activiteit. Kan met de huidige ELAN-data niet bepaald worden.

      - **Kwetsbaarheid, Frailty Index** — op basis van 50 deficits uit ICPC- en ATC-codes, score 0–1,
      afkappunt meestal boven 0,20 en alleen voor personen boven de 60. Kan wél met de ELAN-huisartsendata;
      er is een SPSS-syntax beschikbaar in CBS-RA.'
- subtitel: Stap 6 — Leg je dataverzoek vast
  blokken:
  - type: tekst
    inhoud: 'Sluit deze fase af met een document dat je in fase 3 vrijwel ongewijzigd kunt hergebruiken.
      Daarin staat minimaal:


      1. je onderzoeksvraag en beoogde analyse;

      2. je populatie met inclusie- en exclusiecriteria;

      3. je onderzoeksperiode;

      4. per uitkomst en determinant: de operationalisatie uit stap 4;

      5. de tabellen en variabelen die je daarvoor nodig hebt, met tabelnaam;

      6. de omgeving waarin je gaat werken.


      Vraag alleen aan wat je nodig hebt. Meer data betekent langere doorlooptijd, zwaardere governance
      en hogere kosten.


      Ga daarna door naar fase 3, waar dit document de basis vormt voor je protocol en je ticket.'
naslag:
- '**ELAN-DCC GP-data** — elan-dcc.github.io/researchers/internal/gp_data/ (huisartsendata, tabellen,
  opbouw)'
- '**Verschillen tussen omgevingen** — elan-dcc.github.io/researchers/environments_overview/'
- '**Codeboeken** — github.com/elan-dcc/org/tree/main/codebooks (gebruik altijd de nieuwste versie)'
- '**ICPC-viewer (NHG)** — viewers.nhg.org/icpcviewer/'
- '**Multimorbiditeit** — Van Oostrom et al., BMC Public Health 2012 (definitie met ICPC-codes voor de
  Nederlandse populatie)'
- '**Polyfarmacie** — Oktora et al. 2019; Alfian et al. 2019 (uitgesloten ATC-groepen)'
- '**Ziektevrij interval** — Nielen et al., 2019, JMIR Med Inform'
- '**Contact / DCC** — F.H.Ardesch@lumc.nl; elan.dcc@lumc.nl'
---
