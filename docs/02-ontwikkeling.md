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

- De beschikbare databronnen en hun inhoud
- Coderingen: ICPC (diagnoses) en ATC (medicatie)
- Definities: hoe wordt een diagnose of uitkomst vastgesteld?
- De mogelijkheden en beperkingen van de koppeling ELAN–CBS
- Operationalisatie: inclusie-/exclusiecriteria, tijdsvensters

## Hoe is de huisartsendata opgebouwd?

Huisartsen leggen gegevens vast in een HIS volgens de **SOEP**-structuur. De E-regel wordt gecodeerd met **ICPC**. Via episodegericht registreren worden contacten gekoppeld aan zorgepisodes.

De data wordt door de TTP **STIZON** uit het EPD gehaald en bevat ook bewerkte 'derived' variabelen (herkenbaar aan de **d-prefix**).

## Het ICPC-codeersysteem

| Cijferreeks | Betekenis |
| --- | --- |
| 01–29 | Symptomen / klachten |
| 30–69 | Verrichtingen |
| 70–99 | Diagnoses |

!!! warning "ICPC is geen harde diagnose"
    Huisartsen coderen 'niet hoger dan ze waar kunnen maken'. Een symptoomcode wordt pas later een diagnosecode — als die zeker is.

!!! tip "Gebruik de ICPC-viewer"
    viewers.nhg.org/icpcviewer

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: concrete voorbeelden van operationalisatie (van ruwe variabele naar uitkomstmaat).

<div class="naslag" markdown>
**Naslag bij deze fase**

- **GP-data documentatie** — elan-dcc.github.io/researchers/internal/gp_data/
- **Codeboek** — github.com/elan-dcc/org/tree/main/codebooks
- **Contact** — F.H.Ardesch@lumc.nl, elan.dcc@lumc.nl
</div>

<div class="checklist-poort" data-volgorde="02"></div>

[← Vorige](01-orientatie.md){ .md-button } [Volgende fase →](03-voorbereiding.md){ .md-button .md-button--primary }
