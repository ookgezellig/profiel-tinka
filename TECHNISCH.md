# Technische Documentatie

Dit document bevat de technische details van het profiel-tinka project: bestandsstructuur, gebruikte tools, build-logboek en instructies om het project te repliceren.

Zie [README.md](README.md) voor het projectoverzicht en inhoudelijke documentatie.

---

## Inhoudsopgave

- [Bestandsstructuur](#bestandsstructuur)
- [Technische details](#technische-details)
- [Build-logboek](#build-logboek)
- [Zelf repliceren](#zelf-repliceren)

---

## Bestandsstructuur

```
profiel-tinka/
├── index.html                          # Nederlandse profielpagina
├── index-en.html                       # Engelse profielpagina
├── styles.css                          # Externe stylesheet (PPF APG design system)
├── script.js                           # Interactieve JavaScript functionaliteit
├── favicon.svg                         # Favicon (PPF APG huisstijl)
├── README.md                           # Projectoverzicht
├── TECHNISCH.md                        # Dit bestand
├── BUILD-LOGBOEK.md                    # Volledige commit geschiedenis
├── LICENSE                             # CC BY-NC-ND 4.0 licentie
├── .gitignore                          # Git ignore configuratie
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
- CSS Variables voor consistente kleuren (met dark mode varianten)
- Responsive grid layouts met sticky sidebar op desktop
- Print-friendly styling met page-break optimalisatie
- Accessible markup (WCAG 2.0 AA)

### Features
- **Dark mode**: Toggle tussen licht/donker met systeemvoorkeur detectie en localStorage persistentie
- **Meertalig**: Nederlandse en Engelse versie met taalwissel in header
- **Lazy loading**: Afbeeldingen worden pas geladen wanneer ze in beeld komen
- **Interactief**: Screenshot carousel met swipe-support, scroll-animaties, leesvoortgang indicator
- **Disclaimer**: Duidelijke vermelding dat dit geen officiële PPF APG pagina is

---

## Build-logboek

Het volledige build-logboek documenteert elke stap van de ontwikkeling van dit project. Bekijk het complete logboek in [BUILD-LOGBOEK.md](BUILD-LOGBOEK.md) of op de [GitHub commits pagina](https://github.com/ookgezellig/profiel-tinka/commits/main).

---

## Zelf repliceren

Wil je een vergelijkbaar AI-gegenereerd profiel maken? Hier is hoe je dit project kunt repliceren:

### Vereisten
- [Claude Code](https://claude.ai/claude-code) (CLI tool)
- [Exa MCP Server](https://github.com/exa-labs/exa-mcp-server) voor web research
- [Playwright MCP Server](https://github.com/anthropics/anthropic-quickstarts/tree/main/mcp-playwright) voor screenshots
- API keys voor Exa en eventueel andere services

### Stap-voor-stap

**1. MCP Servers instellen**

MCP (Model Context Protocol) servers geven Claude Code extra mogelijkheden zoals web zoeken en browser automatisering. Hier zijn de installatiestappen:

**Officiële documentatie:**
- [Claude Code MCP Guide](https://docs.anthropic.com/en/docs/claude-code/mcp) - Volledige installatiehandleiding
- [MCP Specificatie](https://modelcontextprotocol.io/) - Technische documentatie van het protocol
- [Exa MCP Server](https://github.com/exa-labs/exa-mcp-server) - AI-native web search
- [Playwright MCP Server](https://github.com/executeautomation/mcp-playwright) - Browser automatisering

**Installatie via CLI:**
```bash
# Exa MCP voor web research (HTTP transport)
claude mcp add --transport http exa https://mcp.exa.ai \
  --header "Authorization: Bearer YOUR_EXA_API_KEY"

# Playwright MCP voor screenshots (stdio transport)
claude mcp add --transport stdio playwright -- npx -y @anthropic-ai/mcp-playwright

# Bekijk je geïnstalleerde servers
claude mcp list
```

**Alternatief: configuratie via `.mcp.json`:**
Maak een `.mcp.json` bestand in je project root:
```json
{
  "mcpServers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai",
      "headers": {
        "Authorization": "Bearer ${EXA_API_KEY}"
      }
    },
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-playwright"]
    }
  }
}
```

**Windows-specifiek:** Voor stdio servers op Windows, gebruik `cmd /c` wrapper:
```bash
claude mcp add --transport stdio playwright -- cmd /c npx -y @anthropic-ai/mcp-playwright
```

**Verificatie:** Start Claude Code en typ `/mcp` om de status van je servers te zien.

**2. Start het onderzoek**
Geef Claude Code een prompt zoals:
```
Zoek informatie over [PERSOON] en maak een professioneel profiel.
Gebruik Exa MCP om bronnen te vinden en Playwright voor screenshots.
```

**3. Iteratief verfijnen**
Het proces is iteratief. Geef feedback na elke stap:
- "Kun je de styling aanpassen aan [HUISSTIJL]?"
- "Voeg meer interactieve elementen toe"
- "Maak een Engelse versie"

**4. Documentatie**
Vraag om een README te genereren:
```
Documenteer het volledige proces in een README, inclusief bronnen,
tijdsbesteding en hoe anderen dit kunnen repliceren.
```

### Tips
- Begin met een duidelijke opdracht over wie/wat je wilt profileren
- Geef voorbeelden van de gewenste huisstijl
- Vraag om toegankelijkheid (WCAG) vanaf het begin
- Laat Claude Code de repository structuur bepalen
- Commit regelmatig om voortgang te bewaren

### Voorbeeld prompts
```
"Maak een professioneel profiel van [NAAM] met informatie van LinkedIn,
bedrijfswebsite en nieuwsartikelen. Gebruik de huisstijl van [BEDRIJF]."

"Voeg dark mode toe aan de website"

"Maak een Engelse versie met dezelfde functionaliteit"
```
