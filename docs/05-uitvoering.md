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
    Een HIS wordt bijgehouden voor de zorg, niet voor onderzoek. Een lege registratie betekent niet dat een aandoening afwezig is.

!!! warning "Transitie van diagnose"
    Een diagnose kan worden bijgesteld; dat gebeurt niet altijd. JRN bevat daarom twee ICPC-kolommen.

!!! warning "Verschillen tussen HIS-systemen en omgevingen"
    Variabelen zijn net iets anders gevuld per HIS. INS/PAT gescheiden op I-schijf, samengevoegd in CBS-RA. Controleer op wáárden, niet alleen op naam.

??? note "Meer bijzonderheden (klik om uit te klappen)"
    - **Probleemlijst vs. episodelijst:** chronische aandoeningen worden gelabeld als 'probleem'.
    - **Handmatige voorgeschiedenis:** let op veel diagnoses op één begindatum.
    - **Verwijzingen:** ZorgDomein-verwijzingen zitten in JRN_Zorgdomein, niet in COR.

## Validatie vóór analyse

1. Controleer de mappen.
2. Controleer variabelenamen tegen het codeboek.
3. Controleer de populatiegrootte.
4. Controleer het tijdsvenster.
5. Controleer missende waarden.

## Change tracking & ontdubbelen

STIZON haalt data op in 'snapshots' en voegt `StartDate`/`EndDate` toe. Hierdoor staan er mogelijk dubbele records in tabellen als EPS en COR.

!!! danger "Ontdubbelen is bijna altijd nodig"
    Verwijder records met een `EndDate` en ontdubbel op de sleutelvariabelen. Zie het Scriptoverzicht.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: centrale lijst met bekende datakwaliteitsproblemen per databron en standaard cleaning-workflows.

<div class="naslag" markdown>
**Naslag bij deze fase**

- **Codeboek** — github.com/elan-dcc/org/tree/main/codebooks
- **Validatie & ontdubbelen** — zie Scriptoverzicht
- **Contact** — F.H.Ardesch@lumc.nl, elan.dcc@lumc.nl
</div>

<div class="checklist-poort" data-volgorde="05"></div>

[← Vorige](04-startfase.md){ .md-button } [Volgende fase →](06-analyse.md){ .md-button .md-button--primary }
