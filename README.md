# Profiel Tinka den Arend

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://ookgezellig.github.io/profiel-tinka/)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![AI Generated](https://img.shields.io/badge/AI-Generated-blue)](https://claude.ai/)

Een compleet profiel van Tinka den Arend, werkgeversvoorzitter PPF APG en Hoofd Policy & Public Affairs bij APG.

**Live website:** https://ookgezellig.github.io/profiel-tinka/

---

## Inhoudsopgave

- [English Summary](#english-summary)
- [Over dit project](#over-dit-project)
- [Onderzoeksproces](#onderzoeksproces)
- [Toegankelijkheid en compliance](#toegankelijkheid-en-compliance)
- [Tijdsbesteding](#tijdsbesteding)
- [Voordelen van agentic bouwen](#voordelen-van-agentic-bouwen)
- [Disclaimer](#disclaimer)
- [Links](#links)

Zie [TECHNISCH.md](TECHNISCH.md) voor bestandsstructuur, technische details, build-logboek en replicatie-instructies.

---

## English Summary

*100% AI-Generated Professional Profile Page* — This repository contains a profile page for Tinka den Arend, employer representative chair of PPF APG and Head of Policy & Public Affairs at APG Asset Management.

**Features:** Bilingual (NL/EN), dark mode, WCAG 2.0 AA accessible, responsive, print-friendly.

**Built with:** [Claude Code](https://claude.ai/claude-code), [Exa MCP](https://exa.ai/) (semantic search), [Playwright MCP](https://playwright.dev/) (screenshots).

No human code was written. Human input: initial prompt, feedback, and manual screenshot cropping.

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
[Exa](https://exa.ai/) is een AI-native zoekmachine die semantisch zoeken combineert met traditionele keyword search. Via het [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) kan Claude direct met Exa communiceren om real-time webonderzoek uit te voeren.

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

### 6. HTML-generatie (meerdere stappen)

De website is in **meerdere iteratieve stappen** gegenereerd door [Claude Code](https://claude.ai/claude-code):

**Stap 1: Basis HTML vanuit Markdown**
- Bronbestand: `research/tinka-den-arend-profiel.md`
- Eerste conversie naar HTML met PPF APG styling

**Stap 2: Styling & SEO**
- Styling gebaseerd op [PPF APG website](https://www.ppf-apg.nl/) design system
- Kleuren: PPF Blue (#004899), PPF Yellow (#c9d200)
- Font: Source Sans 3 (Google Fonts)
- SEO-optimalisatie (meta tags, Open Graph, Schema.org)

**Stap 3: Toegankelijkheid (WCAG 2.0)**
- Skip-to-content link
- ARIA labels en roles
- Focus states voor keyboard navigatie
- Minimum touch targets (44x44px)

**Stap 4: Interactieve elementen**
- CSS en JavaScript verplaatst naar aparte bestanden (`styles.css`, `script.js`)
- Scroll-animaties en fade-in effecten
- Lightbox voor afbeeldingen
- Leesvoortgangsindicator
- "Terug naar boven" knop

**Stap 5: Visuele alt-tags**
- Uitgebreide alt-teksten op alle afbeeldingen
- Visuele beschrijvingen in figcaptions

**Stap 6: Verbeteringen en Engelse versie**
- Favicon, dark mode toggle, sticky sidebar
- Lazy loading, print stylesheet
- Volledige Engelse vertaling (`index-en.html`)

**100% AI-gegenereerd**: Dit volledige project is gemaakt door AI (Claude) met behulp van MCP-tools. De menselijke input bestond uit de initiële opdracht, feedback tijdens het iteratieve proces, en het handmatig bijsnijden van screenshots.

---

## Toegankelijkheid en compliance

### Responsief ontwerp
De website is volledig responsief en werkt op alle schermformaten:
- **Desktop**: Volledige layout met navigatie en sidebar
- **Tablet/mobiel** (< 768px): Aangepaste layout met gestapelde elementen, grotere touch-targets
- **Print**: Speciale print-stylesheet zonder navigatie-elementen

### WCAG 2.0 toegankelijkheid
De pagina is geoptimaliseerd voor [WCAG 2.0 Level AA](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23702&levels=aaa) toegankelijkheid:

**Structuur & navigatie:**
- Semantische HTML5-elementen met ARIA roles
- Skip-to-content link voor keyboard gebruikers
- Logische koppenstructuur (h1 → h2 → h3)
- Kruimelpad navigatie met `aria-label`

**Visueel & interactie:**
- Zichtbare focus states op alle interactieve elementen (3px gele outline)
- Touch targets minimaal 44x44 pixels (WCAG 2.5.5)
- Voldoende kleurcontrast (PPF Blue #004899 op wit = 8.5:1 ratio)
- Leesbare lettergrootte (16px basis, schaalbaar)

**Screenreaders:**
- Alt-teksten op alle afbeeldingen
- `aria-hidden="true"` op decoratieve SVG-iconen
- `aria-label` op knoppen met alleen iconen

### AVG/GDPR compliance
Deze website bevat persoonsgegevens van een publiek figuur:
- **Rechtsgrondslag**: Legitiem belang - alle informatie is reeds openbaar gepubliceerd
- **Geen verwerking van bijzondere persoonsgegevens**: Alleen zakelijke/professionele informatie
- **Bronvermelding**: Alle bronnen zijn expliciet vermeld en gelinkt
- **Geen cookies of tracking**: De website verzamelt geen gebruikersdata
- **Contactmogelijkheid**: Via GitHub Issues

---

## Tijdsbesteding

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
| CSS/JS afsplitsen en interactieve features | ~20 min |
| Visuele alt-tags toevoegen | ~10 min |
| Dark mode, favicon, sticky TOC, lazy loading | ~25 min |
| Engelse versie website (index-en.html) | ~20 min |
| README updates (English summary, How to replicate) | ~15 min |
| Screenshot carousel, disclaimer, cleanup | ~15 min |
| Dark mode contrast en whitespace fixes | ~15 min |
| Voordelen agentic bouwen, build-logboek | ~20 min |
| **Totaal** | **~4 uur 15 min** |

*Gemeten op basis van actieve werktijd. Screenshots werden handmatig bijgesneden door de gebruiker.*

**Let op:** Voor de eerste commit was al veel werk gedaan (bronnenonderzoek, markdown profiel schrijven, screenshots verzamelen). Deze pre-commit activiteiten staan bovenaan in de tijdtabel.

---

## Voordelen van agentic bouwen

Dit project demonstreert de kracht van **agentic development** - het bouwen van software met AI als primaire ontwikkelaar.

### 1. Snelle prototyping en experimentatie
Features zoals dark mode, screenshot carousel, en meertaligheid kunnen binnen minuten worden toegevoegd en getest.

### 2. Iteratieve verfijning met directe feedback
Tientallen iteraties - van eerste prototype tot volledig toegankelijke, tweetalige website - binnen enkele uren.

### 3. Consistente kwaliteit en best practices
De AI past automatisch best practices toe:
- **WCAG 2.0 AA toegankelijkheid** vanaf het begin
- **Semantische HTML5** met correcte ARIA labels
- **Responsive design** met mobile-first aanpak
- **SEO-optimalisatie** met meta tags, Open Graph, Schema.org

### 4. Geïntegreerde documentatie
Code, documentatie en commit messages worden in dezelfde sessie gegenereerd, waardoor alles consistent blijft.

### 5. Transparante ontwikkelgeschiedenis
Het volledige [build-logboek](BUILD-LOGBOEK.md) documenteert elke stap van de ontwikkeling.

### 6. Uitgebreide en precieze commit messages
AI-gegenereerde commit messages zijn vele malen uitgebreider dan wat een menselijke ontwikkelaar typisch zou schrijven. Waar een mens kiest voor "fix bug", genereert de AI gedetailleerde beschrijvingen.

**Voorbeeld uit dit project:**
```
Fix desktop whitespace and dark mode contrast

- Reduce excessive margins on h2, h3, h4, p, tables, lists
- Tighten spacing for horizontal rules, info grids, highlight boxes
- Improve dark mode color contrast (WCAG 2.1 AA compliant)
- Use brighter colors for dark mode: blue #6ab0e8, yellow #f0e68c
```

Bekijk alle commits in het [build-logboek](BUILD-LOGBOEK.md).

---

## Disclaimer

Dit document is gegenereerd voor onderzoeksdoeleinden en bevat alleen openbaar beschikbare informatie. Alle informatie is verzameld uit publieke bronnen op 1 december 2025.

---

## Links

- **Live website (NL):** https://ookgezellig.github.io/profiel-tinka/
- **Live website (EN):** https://ookgezellig.github.io/profiel-tinka/index-en.html
- **GitHub repo:** https://github.com/ookgezellig/profiel-tinka
- **Technische docs:** [TECHNISCH.md](TECHNISCH.md)
- **Build-logboek:** [BUILD-LOGBOEK.md](BUILD-LOGBOEK.md)
