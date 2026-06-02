# Fase 4 — Startfase: datatoegang en datalevering

<div class="fase-balk">
<span>Welkom</span>
<span>1 Oriëntatie</span>
<span>2 Ontwikkeling</span>
<span>3 Voorbereiding</span>
<span class="actief">4 Start</span>
<span>5 Uitvoering</span>
<span>6 Analyse</span>
<span>7 Afronding</span>
<span>8 Disseminatie</span>
</div>

## Wat gebeurt er in deze fase?

Je ontvangt de data en krijgt toegang tot de juiste omgeving. Je leert wat je precies geleverd krijgt en in welke omgeving je gaat werken.

## Wat heb je nodig?

- Het proces van datalevering en het format (tabelstructuren)
- Toegang tot de juiste omgeving (I-schijf of CBS-RA)
- De datadocumentatie: variabelenlijsten, definities, codestelsels
- Inzicht in welke datasetversie je krijgt
- Contactpunten bij technische problemen

## Contact met de data-manager

Na goedkeuring neem je contact op met de data-manager voor de uitgifte. Geef daarbij door: welke tabellen, welke variabelen, welke populatie, welk tijdsvenster en in welke omgeving.

!!! danger "Vraag altijd naar de filtering"
    Er zijn twee data-managers met verschillende werkwijzen: de een filtert de data vóór uitgifte, de ander niet. Vraag altijd: *"Heb jij de data gefilterd, en zo ja, kun je de filterspecificaties meesturen?"* Zonder dit kun je niet valideren wat je hebt ontvangen.

!!! warning "De data-manager kent jouw ticket niet automatisch"
    Stuur bij je data-aanvraag altijd een korte samenvatting van je ticket mee.

## De twee omgevingen

### I-schijf (interne LUMC-omgeving)
Interne schrijfomgeving voor ELAN-analyses, toegankelijk na goedkeuring en aanstelling.

### CBS-RA-omgeving
Beveiligde externe omgeving van het CBS voor analyses met CBS-microdata. Vereist een aparte machtiging en het doorlopen van de **CBS awareness test**.

!!! warning "CBS awareness test"
    Vóór toegang leg je een verplichte awareness test af over databeveiliging. De vragen zijn op meerdere manieren interpreteerbaar en de officiële CBS-documenten sluiten daar niet altijd op aan. Je krijgt geen feedback op je resultaat. Plan er minimaal een halve dag voor.

### De schijven in de CBS-RA-omgeving

| Schijf | Functie |
| --- | --- |
| **F** | Lijkt persoonlijk, maar is het NIET. Bevat alleen de exportmap voor de outputcontrole. |
| **G** | CBS-microdata (alleen wat namens ELAN is aangevraagd). |
| **H** | Shared workspace — hier werk je, in je eigen naammap. |
| **K** | Metadata bij de microdata. Lees deze vóór gebruik. |
| L, M, T | Niet nodig. |

!!! danger "Schijf F is geen werkschijf"
    Werk altijd op schijf **H** (in je eigen naammap). Dit is een van de meest gemaakte beginnersfouten.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: een concreet overzicht van wat je bij uitgifte precies ontvangt (welke datasets, in welk format, met welke metadata) en hoe versiebeheer van datasets werkt. Bekend hiaat uit de gap-analyse.

<div class="naslag" markdown>
**Naslag bij deze fase**

- **Codeboek per omgeving** — github.com/elan-dcc/org/tree/main/codebooks (kan verschillen tussen I-schijf en CBS-RA)
- **CBS-RA-toegang & awareness test** — via datamanager + CBS-helpdesk
- **Guidance Document** — datastromen en doorlooptijd klaarzetten datasets
- **Contact** — datamanager H. de Jong (I-schijf) / F. Ardesch (CBS-RA): F.H.Ardesch@lumc.nl
</div>

[← Fase 3](03-voorbereiding.md){ .md-button } [Volgende: Fase 5 — Uitvoering & voorbewerking →](05-uitvoering.md){ .md-button .md-button--primary }
