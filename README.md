# Profiel Tinka den Arend

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://ookgezellig.github.io/profiel-tinka/)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![AI Generated](https://img.shields.io/badge/AI-Generated-blue)](https://claude.ai/)

Een compleet profiel van Tinka den Arend, werkgeversvoorzitter PPF APG en Hoofd Policy & Public Affairs bij APG.

**Live website:** https://ookgezellig.github.io/profiel-tinka/

---

## Inhoudsopgave

- [Over dit project](#over-dit-project)
- [Onderzoeksproces](#onderzoeksproces)
- [Bestandsstructuur](#bestandsstructuur)
- [Technische details](#technische-details)
- [Toegankelijkheid en compliance](#toegankelijkheid-en-compliance)
- [Disclaimer](#disclaimer)
- [Links](#links)

---

## Over dit project

Dit profiel is samengesteld op basis van openbare bronnen om een compleet overzicht te geven van de carrière en activiteiten van Tinka den Arend in de Nederlandse pensioensector.

### Belangrijkste rollen
- **Werkgeversvoorzitter PPF APG** (2019 - heden)
- **Hoofd team Policy and Public Affairs bij APG**

### Prestaties 2025
- PPF APG was een van de drie "koplopers" in de pensioentransitie naar het nieuwe stelsel (Wtp)
- Winnaar Pensioen Pro Award "Pensioenfonds van het Jaar" (25 juni 2025)

---

## Onderzoeksproces

Dit profiel is verzameld via het volgende proces:

### 1. Bronnenonderzoek (Exa MCP Search)

**Wat is Exa MCP?**
[Exa](https://exa.ai/) is een AI-native zoekmachine die semantisch zoeken combineert met traditionele keyword search. Via het [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) kan Claude direct met Exa communiceren om real-time webonderzoek uit te voeren. Dit maakt het mogelijk om tijdens een gesprek automatisch bronnen te verzamelen, feiten te verifiëren en actuele informatie op te halen - zonder handmatig te hoeven zoeken.

**Gebruikte zoekopdrachten:**
- `"Tinka den Arend" APG pensioen` - Algemene context over haar rol bij APG
- `"Tinka den Arend" PPF APG bestuur` - Specifieke bestuursposities
- `site:ppf-apg.nl "Tinka den Arend"` - Directe bronnen van de PPF APG website
- `"Tinka den Arend" LinkedIn` - Professionele achtergrond en netwerk

### 2. Primaire bronnen
| Bron | URL |
|------|-----|
| PPF APG Profiel | https://www.ppf-apg.nl/over-ppf-apg/wie-we-zijn/bestuur/tinka-den-arend |
| LinkedIn | https://nl.linkedin.com/in/tinka-den-arend-3b218b11 |
| The Org | https://theorg.com/org/werkenbijapg/org-chart/tinka-den-arend |
| DNB Register | https://www.dnb.nl/en/public-register/information-detail/?registerCode=PWPNF&relationNumber=02392 |

### 3. Media & Publicaties
- PensioenPro podcast "Twee keer invaren" (14 feb 2025)
- Spreekbeurten op CFA Society ALM Congres, PensioenPro Focuscongres

### 4. Officiële documenten
- PPF APG Jaarverslagen (2021-2024)
- APG Jaarverslag 2024
- Presentaties Instituut Pensioen Educatie

### 5. Screenshots
Screenshots zijn gemaakt met Playwright browser automation van:
- [PPF APG website](https://www.ppf-apg.nl/) (profielpagina, bestuurspagina, nieuwsberichten)
- [APG website](https://www.apg.nl/) (nieuwsartikelen)
- [PensioenPro podcast pagina](https://www.pensioenpro.nl/podcast)
- [DNB Register](https://www.dnb.nl/openbaar-register/)
- [The Org organisatieprofiel](https://theorg.com/org/werkenbijapg/org-chart/tinka-den-arend)
- [CFA Society ALM Congres pagina](https://cfasociety.org/netherlands)

### 6. HTML-generatie

De `index.html` is gegenereerd door [Claude Code](https://claude.ai/claude-code) op basis van het markdown-bronbestand `research/tinka-den-arend-profiel.md`. Dit bestand bevat alle verzamelde informatie in gestructureerde vorm. Claude Code heeft deze markdown omgezet naar een volledig gestylede HTML-pagina met:

- Styling gebaseerd op [PPF APG website](https://www.ppf-apg.nl/) design system
- Kleuren: PPF Blue (#004899), PPF Yellow (#c9d200)
- Font: Source Sans 3 (Google Fonts)
- Responsief ontwerp voor mobile/desktop
- SEO-optimalisatie (meta tags, Open Graph, Schema.org)

**100% AI-gegenereerd**: Dit volledige profiel - van bronnenonderzoek tot HTML-generatie - is gemaakt door AI (Claude) met behulp van MCP-tools (Exa voor zoeken, Playwright voor screenshots). Er is geen handmatige tussenkomst geweest bij het schrijven van code of content. De enige menselijke input bestond uit de initiële opdracht en feedback tijdens het proces.

### Tijdsbesteding

| Fase | Geschatte tijd |
|------|----------------|
| Bronnenonderzoek (Exa MCP) | ~15 min |
| Screenshots maken (Playwright MCP) | ~10 min |
| Markdown profiel schrijven | ~10 min |
| HTML-pagina genereren met styling | ~15 min |
| Repository opzet en eerste commit | ~5 min |
| README documentatie | ~20 min |
| Herstructurering en cleanup | ~15 min |
| SEO, licentie en meta tags | ~10 min |
| WCAG 2.0 toegankelijkheid | ~15 min |
| **Totaal** | **~1 uur 55 min** |

*Gemeten op basis van git commit timestamps (17:33 - 18:47) plus geschatte tijd voor voorbereidend onderzoek.*

---

## Bestandsstructuur

```
profiel-tinka/
├── index.html                          # Gepubliceerde profielpagina
├── README.md                           # Dit bestand
├── screenshots/                        # Afbeeldingen voor de website
│   ├── 01_ppf_apg_tinka_profiel.png
│   ├── 02_ppf_apg_homepage.png
│   ├── 04_apg_award_article.png
│   ├── 05_pensioenpro_podcast.png
│   ├── 06_theorg_profile.png
│   ├── 07_cfa_alm_congres.png
│   ├── 08_ppf_apg_bestuur.png
│   ├── 09_dnb_register.png
│   ├── 10_ppf_apg_nieuws_award.png
│   ├── ppf-apg-news-page.png
│   ├── ppf-apg-styling.png
│   └── tinka_profile_photo.jpg
├── research/                           # Onderzoeksmateriaal
│   ├── tinka-den-arend-profiel.md      # Bronbestand in Markdown
│   └── scripts/                        # Scripts voor dataverzameling
│       ├── capture_screenshots.py      # Screenshot verzameling (Playwright)
│       ├── create_pptx.py              # PowerPoint generatie
│       └── convert_to_pdf.py           # PDF conversie
└── presentation/                       # Gegenereerde presentaties
    ├── tinka_den_arend_profiel.pptx    # PowerPoint presentatie
    ├── tinka_den_arend_profiel.pdf     # PDF versie
    └── notes/                          # Presentatie notities
        ├── slides.md
        ├── notes.md
        └── refs.md
```

---

## Technische details

### Tools gebruikt
- **[Exa MCP Search](https://exa.ai/)**: Web research en bronverzameling
- **[Playwright MCP](https://playwright.dev/)**: Screenshots van bronwebsites
- **[Claude Code](https://claude.ai/claude-code)**: Markdown naar HTML conversie met custom styling

### Styling
De HTML is gestyled naar het [PPF APG](https://www.ppf-apg.nl/) design system:
- CSS Variables voor consistente kleuren
- Responsive grid layouts
- Print-friendly styling
- Accessible markup

---

## Toegankelijkheid en compliance

### Responsief ontwerp
De website is volledig responsief en werkt op alle schermformaten:
- **Desktop**: Volledige layout met navigatie en sidebar
- **Tablet/mobiel** (< 768px): Aangepaste layout met gestapelde elementen, grotere touch-targets
- **Print**: Speciale print-stylesheet zonder navigatie-elementen

### WCAG 2.0 toegankelijkheid
De pagina is geoptimaliseerd voor WCAG 2.0 Level AA toegankelijkheid:

**Structuur & navigatie:**
- Semantische HTML5-elementen met ARIA roles (`role="banner"`, `role="main"`, `role="navigation"`, `role="contentinfo"`)
- Skip-to-content link voor keyboard gebruikers
- Logische koppenstructuur (h1 → h2 → h3)
- Kruimelpad (breadcrumb) navigatie met `aria-label`

**Visueel & interactie:**
- Zichtbare focus states op alle interactieve elementen (3px gele outline)
- Touch targets minimaal 44x44 pixels (WCAG 2.5.5)
- Voldoende kleurcontrast (PPF Blue #004899 op wit = 8.5:1 ratio)
- Leesbare lettergrootte (16px basis, schaalbaar)

**Screenreaders:**
- Alt-teksten op alle afbeeldingen
- `aria-hidden="true"` op decoratieve SVG-iconen
- `aria-label` op knoppen met alleen iconen
- Duidelijke linkteksten

### AVG/GDPR compliance
Deze website bevat persoonsgegevens van een publiek figuur:
- **Rechtsgrondslag**: Legitiem belang - alle informatie is reeds openbaar gepubliceerd door officiële bronnen (PPF APG, APG, DNB Register)
- **Geen verwerking van bijzondere persoonsgegevens**: Alleen zakelijke/professionele informatie
- **Bronvermelding**: Alle bronnen zijn expliciet vermeld en gelinkt
- **Geen cookies of tracking**: De website plaatst geen cookies en verzamelt geen gebruikersdata
- **Contactmogelijkheid**: Bij vragen of verzoeken tot verwijdering kan contact worden opgenomen via GitHub Issues

---

## Disclaimer

Dit document is gegenereerd voor onderzoeksdoeleinden en bevat alleen openbaar beschikbare informatie. Alle informatie is verzameld uit publieke bronnen op 1 december 2025.

---

## Links

- **Live website:** https://ookgezellig.github.io/profiel-tinka/
- **GitHub repo:** https://github.com/ookgezellig/profiel-tinka
