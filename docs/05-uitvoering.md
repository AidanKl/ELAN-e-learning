# Fase 5 — Uitvoeringsfase: dataverkenning & voorbewerking

<div class="fase-balk">
<span>Welkom</span>
<span>1 Oriëntatie</span>
<span>2 Ontwikkeling</span>
<span>3 Voorbereiding</span>
<span>4 Start</span>
<span class="actief">5 Uitvoering</span>
<span>6 Analyse</span>
<span>7 Afronding</span>
<span>8 Disseminatie</span>
</div>

## Wat gebeurt er in deze fase?

Je maakt de dataset begrijpelijk en analyseklaar. Dit is de fase waarin de meeste stille fouten ontstaan — datakwaliteit en interpretatie staan centraal.

## Wat heb je nodig?

- Inzicht in datakwaliteit: missings, inconsistenties
- Richtlijnen voor data cleaning
- Begrip van de longitudinale structuur (episodes, consultregels)
- Kennis van de beperkingen van routinezorgdata

## Kritieke bijzonderheden in de data

!!! danger "Concludeer nooit afwezigheid uit ontbrekende data"
    Een HIS wordt bijgehouden voor de zorg, niet voor onderzoek. Er is grote variatie tussen huisartsen in registratie. Een lege registratie betekent **niet** dat een aandoening afwezig is.

!!! warning "Transitie van diagnose"
    Een diagnose kan in de loop van een episode worden bijgesteld (bv. 'hoofdpijn' → 'hersentumor'). Dat gebeurt niet altijd, en bij herdefiniëring worden niet alle historische diagnoses bewaard. De tabel JRN bevat daarom twee ICPC-kolommen (journaalregel én gekoppelde episode).

!!! warning "Verschillen tussen HIS-systemen en omgevingen"
    Variabelen zijn net iets anders gevuld per HIS (Medicom, Microhis, Promedico). En: op de I-schijf zijn INS en PAT gescheiden, in de CBS-RA samengevoegd. Variabelenamen kunnen afwijken van het codeboek — controleer op de wáárden, niet alleen op de naam.

??? note "Meer bijzonderheden (klik om uit te klappen)"
    - **Probleemlijst vs. episodelijst:** belangrijke (chronische) aandoeningen worden gelabeld als 'probleem'. De meeste HIS'en labelen bepaalde ICPC-codes automatisch.
    - **Handmatig ingevoerde voorgeschiedenis:** bij praktijkovergang werd de voorgeschiedenis vaak handmatig ingevoerd — let op veel diagnoses op één begindatum.
    - **Verwijzingen:** ZorgDomein-verwijzingen zitten NIET in de COR-tabel, maar in JRN_Zorgdomein. Combineer beide bronnen.

## Validatie vóór analyse — doe dit altijd

1. Controleer de mappen: kreeg je de tabellen die je verwachtte?
2. Controleer variabelenamen tegen het codeboek.
3. Controleer de populatiegrootte (klopt N globaal?).
4. Controleer het tijdsvenster.
5. Controleer missende waarden.

## Change tracking & ontdubbelen

STIZON haalt de data op in 'snapshots' en voegt een change record toe via `StartDate` en `EndDate`. Hierdoor staan er mogelijk dubbele records in tabellen als EPS en COR.

!!! danger "Ontdubbelen is bijna altijd nodig"
    Verwijder records met een `EndDate` (verouderde versies) en ontdubbel op de sleutelvariabelen. Zie het [Scriptoverzicht](bijlagen/scripts.md) voor een herbruikbaar ontdubbel-script.

!!! tip "Stem aannames af met een expert"
    Een expliciet advies uit de ELAN-documentatie: toets je interpretatie- en validatiestrategie bij iemand die de registratiewerkwijze van huisartsen kent.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: een centrale lijst met bekende datakwaliteitsproblemen per databron, en standaard data-cleaning workflows. Veel van deze kennis zit nu impliciet bij data-analisten.

<div class="naslag" markdown>
**Naslag bij deze fase**

- **Codeboek ELAN** — github.com/elan-dcc/org/tree/main/codebooks
- **Cleaning-scripts** — github.com/elan-dcc
- **Validatie & ontdubbelen** — zie [Scriptoverzicht](bijlagen/scripts.md)
- **Contact** — datamanager / DCC / ervaringsdeskundigen: F.H.Ardesch@lumc.nl, elan.dcc@lumc.nl
</div>

[← Fase 4](04-startfase.md){ .md-button } [Volgende: Fase 6 — Analyse →](06-analyse.md){ .md-button .md-button--primary }
