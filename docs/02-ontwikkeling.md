# Fase 2 — Ontwikkelfase: van vraag naar dataprotocol

<div class="fase-balk">
<span>Welkom</span>
<span>1 Oriëntatie</span>
<span class="actief">2 Ontwikkeling</span>
<span>3 Voorbereiding</span>
<span>4 Start</span>
<span>5 Uitvoering</span>
<span>6 Analyse</span>
<span>7 Afronding</span>
<span>8 Disseminatie</span>
</div>

## Wat gebeurt er in deze fase?

Je vertaalt je onderzoeksvraag naar een concreet dataprotocol: welke variabelen, welke coderingen, welke populatie en welk tijdsvenster. Hier leg je de basis voor een goede aanvraag.

## Wat heb je nodig?

- De beschikbare databronnen (ELAN, CBS) en hun inhoud
- Coderingen: ICPC (huisartsdiagnoses) en ATC (medicatie)
- Definities: hoe wordt een diagnose of uitkomst eigenlijk vastgesteld?
- De mogelijkheden en beperkingen van de koppeling ELAN–CBS
- Operationalisatie: inclusie- en exclusiecriteria, tijdsvensters
- Een eerste idee van de datakwaliteit en bekende beperkingen

## Hoe is de huisartsendata opgebouwd?

Huisartsen leggen gegevens vast in een Huisarts Informatie Systeem (HIS) volgens de **SOEP**-structuur (Subjectief, Objectief, Evaluatie, Plan). De E-regel wordt gecodeerd met **ICPC**. Via *episodegericht registreren* worden losse contacten gekoppeld aan zorgepisodes, waardoor het beloop van één gezondheidsprobleem zichtbaar wordt.

De ELAN-huisartsendata wordt door de Trusted Third Party **STIZON** uit het EPD gehaald. De bestanden bevatten variabelen die rechtstreeks uit het EPD komen én bewerkte 'derived' variabelen (herkenbaar aan de **d-prefix**, bv. `dDatum`, `dEpisodeICPC`).

## Het ICPC-codeersysteem

| Cijferreeks | Betekenis |
| --- | --- |
| 01–29 | Symptomen / klachten |
| 30–69 | Verrichtingen (niet bedoeld voor episodes) |
| 70–99 | Diagnoses |

Voorbeeld: `P03` = down/depressief gevoel (symptoom), `P76` = depressie (diagnose), `P76.01` = postpartumdepressie (subtitel).

!!! warning "ICPC is geen harde diagnose"
    Huisartsen coderen "niet hoger dan ze waar kunnen maken". Buikpijn met verdenking appendicitis wordt vaak `D01` (buikpijn), en pas later `D88` (appendicitis) — als de diagnose zeker is. Houd hier rekening mee bij het operationaliseren van uitkomsten.

!!! tip "Gebruik de ICPC-viewer"
    Codes opzoeken kan via de NHG ICPC-viewer: viewers.nhg.org/icpcviewer

!!! danger "Documentatie kan technisch zijn"
    De centrale data-documentatie (GitHub/DCC) vereist soms voorkennis. Loop je vast bij het vertalen van variabelen naar onderzoeksvariabelen? Stem dit af met de DCC of datamanager in plaats van zelf te puzzelen.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: concrete voorbeelden van operationalisatie (van ruwe variabele naar onderzoeksvariabele/uitkomstmaat). Dit is een bekend hiaat en wordt later aangevuld.

<div class="naslag" markdown>
**Naslag bij deze fase**

- **Centrale GP-data documentatie** — elan-dcc.github.io/researchers/internal/gp_data/
- **Codeboek ELAN** — github.com/elan-dcc/org/tree/main/codebooks (let op de d-prefix voor derived variabelen)
- **ICPC-viewer** — viewers.nhg.org/icpcviewer
- **Contact** — datamanager / DCC: F.H.Ardesch@lumc.nl, elan.dcc@lumc.nl
</div>

[← Fase 1](01-orientatie.md){ .md-button } [Volgende: Fase 3 — Voorbereiding & toegang →](03-voorbereiding.md){ .md-button .md-button--primary }
