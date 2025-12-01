# Profiel Tinka den Arend

Een compleet profiel van Tinka den Arend, werkgeversvoorzitter PPF APG en Hoofd Policy & Public Affairs bij APG.

**Live website:** https://ookgezellig.github.io/profiel-tinka/

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
- PPF APG website (profielpagina, bestuurspagina, nieuwsberichten)
- APG website (nieuwsartikelen)
- PensioenPro podcast pagina
- DNB Register
- The Org organisatieprofiel
- CFA Society ALM Congres pagina

### 6. HTML-generatie
Het HTML-bestand is gegenereerd met:
- Styling gebaseerd op [PPF APG website](https://www.ppf-apg.nl/) design system
- Kleuren: PPF Blue (#004899), PPF Yellow (#c9d200)
- Font: Source Sans 3 (Google Fonts)
- Responsief ontwerp voor mobile/desktop

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
│   ├── tinka-den-arend-profiel.html    # HTML bronbestand
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
- **Exa MCP Search**: Web research en bronverzameling
- **Playwright MCP**: Screenshots van bronwebsites
- **Claude Code**: Markdown naar HTML conversie met custom styling

### Styling
De HTML is gestyled naar het [PPF APG](https://www.ppf-apg.nl/) design system:
- CSS Variables voor consistente kleuren
- Responsive grid layouts
- Print-friendly styling
- Accessible markup

---

## Disclaimer

Dit document is gegenereerd voor onderzoeksdoeleinden en bevat alleen openbaar beschikbare informatie. Alle informatie is verzameld uit publieke bronnen op 1 december 2025.

---

## Links

- **Live website:** https://ookgezellig.github.io/profiel-tinka/
- **GitHub repo:** https://github.com/ookgezellig/profiel-tinka
