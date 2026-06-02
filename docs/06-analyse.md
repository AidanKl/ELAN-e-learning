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

- De analytische mogelijkheden binnen je omgeving (R, Python, STATA) en de restricties
- Methodologische aandachtspunten: confounding, bias, clustering op praktijkniveau
- De CBS-beperkingen: disclosure control en outputcontrole
- Inzicht in de koppelkwaliteit van gecombineerde ELAN–CBS-data

## Reproduceerbaar werken

- **Versiebeheer:** gebruik Git of datumstempels in bestandsnamen.
- **Gescheiden scripts:** houd inladen, bewerken, analyseren en output apart.
- **Documenteer je data-ontvangst:** datum, versie en data-manager.

Aanbevolen scriptstructuur:

```text
1_data_inladen      -> inladen + validatiechecks, schone basisset opslaan
2_data_bewerken     -> hercoderen, samenvoegen, analysevariabelen maken
3_analyse_<thema>   -> de inhoudelijke analyses (importeer bewerkte set)
4_output_tabellen   -> output in het format voor CBS-export
```

## Veelgemaakte analysefouten

!!! danger "De grootste valkuilen"
    - ICPC-codes als diagnose gebruiken zonder validatiestrategie (zie Fase 5).
    - Geen rekening houden met praktijkvariatie in registratievolledigheid.
    - Populatiefilter vergeten (ELAN bevat ook kort-ingeschreven personen).
    - Time-to-event analyses zonder te checken of de follow-up volledig is.

## Veelgebruikte samengestelde variabelen

| Variabele | Aandachtspunt |
| --- | --- |
| SES / etniciteit | Kies huishoud- vs. persoonlijk inkomen bewust. **Let op:** in het sterftejaar is inkomen veel te laag — koppel het jaar vóór baseline. |
| Polyfarmacie | Kies bron (CBS = ATC-4/jaar; ELAN-huisarts = ATC-7 incl. dosering). |
| Multimorbiditeit | Leidraad: van Oostrom et al., BMC Public Health 2012. |
| Kwetsbaarheid (frailty) | Frailty Index kan met ELAN-huisartsendata (>60 jr); SPSS-syntax via datamanager. |

## CBS-outputcontrole

!!! warning "Output kost tijd én geld"
    CBS heeft officieel 3 werkdagen voor de outputcontrole; reken op een week bij een deadline. Het aanbieden van figuren/tabellen kost geld (circa €250 per keer); je syntax aanbieden is gratis. Zorg dat output voldoet aan de celgrootte-eisen.

!!! todo "Nog aan te vullen"
    NOG-AAN-TE-VULLEN: een gecombineerd analysekader voor gekoppelde ELAN–CBS-data en concrete methodologische richtlijnen voor clustering en bias in routinezorgdata.

<div class="naslag" markdown>
**Naslag bij deze fase**

- **Scriptoverzicht** — zie [Scriptoverzicht](bijlagen/scripts.md)
- **CBS-gedragsregels** — bijlage 1 van het Guidance Document
- **K-schijf metadata** — referentietabellen (o.a. LANDAKTUEEL voor herkomst)
- **Contact** — statistici / methodologen / DCC: elan.dcc@lumc.nl
</div>

[← Fase 5](05-uitvoering.md){ .md-button } [Volgende: Fase 7 — Afronding →](07-afronding.md){ .md-button .md-button--primary }
