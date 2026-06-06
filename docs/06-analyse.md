# Fase 6 — Analysefase

<div class="fase-balk">
<span>Welkom</span>
<span>1 Oriëntatie</span>
<span>2 Ontwikkeling</span>
<span>3 Voorbereiding</span>
<span>4 Start</span>
<span>5 Uitvoering</span>
<span class="actief">6 Analyse</span>
<span>7 Afronding</span>
<span>8 Disseminatie</span>
</div>

## Wat gebeurt er in deze fase?

Je voert de statistische analyses uit op ELAN- en/of CBS-data, met aandacht voor de methodologische bijzonderheden van routinezorgdata en de beperkingen van de CBS-omgeving.

## Wat heb je nodig?

- De analytische mogelijkheden (R, Python, STATA) en restricties
- Methodologische aandachtspunten: confounding, bias, clustering op praktijkniveau
- De CBS-beperkingen: disclosure control en outputcontrole
- Inzicht in de koppelkwaliteit van gecombineerde ELAN–CBS-data

## Reproduceerbaar werken

- **Versiebeheer:** Git of datumstempels in bestandsnamen.
- **Gescheiden scripts:** inladen, bewerken, analyseren, output apart.
- **Documenteer je data-ontvangst:** datum, versie en data-manager.

```text
1_data_inladen      -> inladen + validatiechecks, schone basisset opslaan
2_data_bewerken     -> hercoderen, samenvoegen, analysevariabelen maken
3_analyse_<thema>   -> de inhoudelijke analyses (importeer bewerkte set)
4_output_tabellen   -> output in het format voor CBS-export
```

## Veelgemaakte analysefouten

!!! danger "De grootste valkuilen"
    - ICPC-codes als diagnose zonder validatiestrategie.
    - Geen rekening houden met praktijkvariatie in registratie.
    - Populatiefilter vergeten.
    - Time-to-event zonder volledige follow-up te checken.

## Veelgebruikte samengestelde variabelen

| Variabele | Aandachtspunt |
| --- | --- |
| SES / etniciteit | In het sterftejaar is inkomen veel te laag — koppel het jaar vóór baseline. |
| Polyfarmacie | CBS = ATC-4/jaar; ELAN-huisarts = ATC-7 incl. dosering. |
| Multimorbiditeit | Leidraad: van Oostrom et al., BMC Public Health 2012. |
| Kwetsbaarheid | Frailty Index via ELAN-huisartsendata (>60 jr); SPSS-syntax via datamanager. |

!!! warning "Output kost tijd én geld"
    CBS heeft officieel 3 werkdagen; reken op een week bij een deadline. Figuren/tabellen kosten ±€250; syntax aanbieden is gratis.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: gecombineerd analysekader voor gekoppelde ELAN–CBS-data en richtlijnen voor clustering en bias.

<div class="naslag" markdown>
**Naslag bij deze fase**

- **Scriptoverzicht** — zie Naslag
- **CBS-gedragsregels** — bijlage 1 Guidance Document
- **Contact** — elan.dcc@lumc.nl
</div>

<div class="checklist-poort" data-volgorde="06"></div>

[← Vorige](05-uitvoering.md){ .md-button } [Volgende fase →](07-afronding.md){ .md-button .md-button--primary }
