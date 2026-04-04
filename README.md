# 🩺 Salud Fácil — Bilingual Health Navigator

> **Hackathon Demo** · Connecting uninsured Hispanic adults to affordable care, in their language.

---

## The Problem

- Hispanic adults in the U.S. are **2.7× more likely to be uninsured** than the national average
- **38%** have no regular doctor
- **~30%** have limited English proficiency — and when they need care, they often rely on their children as interpreters, pulling kids from school and burdening them with adult medical decisions
- In the communities this tool targets: **44.8% obesity prevalence**, **12.5% diabetes prevalence**
- No accessible, free, bilingual tool exists to help uninsured or newly insured Spanish-dominant adults find affordable care, prepare for appointments, and understand their health

---

## What It Does

Salud Fácil is a bilingual (English/Spanish) web app with four core features:

### 1. Find Care Near Me
Surfaces federally qualified health centers (FQHCs) near the user that accept uninsured patients on a **sliding-scale fee basis** — meaning cost is based on income, often $0.

- Input: ZIP code + preferred language
- Output: List of clinics with hours, languages spoken, distance, and sliding-scale info
- Data source: [HRSA Health Center Finder API](https://findahealthcenter.hrsa.gov/)

### 2. AI Health Chat Assistant (Bilingual)
A conversational AI powered by the **Anthropic Claude API** that auto-detects and responds in English or Spanish.

- Answers questions like: *"¿Qué documentos necesito para ir al médico sin seguro?"*
- Draws from health literacy content on FQHCs, sliding-scale fees, common conditions (diabetes, obesity, hypertension), medications, and preventive care
- Never diagnoses — guides users to appropriate care

### 3. Appointment Prep Toolkit
Generates a **personalized prep kit** based on the user's stated health concern:

- Checkable "what to bring" list (always includes photo ID, proof of income for sliding-scale, medication list — plus concern-specific items)
- Numbered list of questions to bring to the doctor, tailored to the concern
- Available in English and Spanish

### 4. Data Dashboard
Displays real community health data as visual context:

- Key stats: uninsured rates, diabetes and obesity prevalence, language barriers
- Bar chart of top health conditions
- Donut chart of barriers to care
- Impact estimate: how many uninsured Hispanic adults live within reach of surfaced clinics

---

## Demo

The live hackathon demo is a single-page HTML artifact powered by the Anthropic Claude API. All four features are fully interactive:

1. Open the demo
2. Enter ZIP code `00917` (San Juan, PR) and click **Search** to see FQHC results
3. Switch to **Health Chat** and ask anything in English or Spanish
4. Go to **Appointment Prep**, describe a health concern, and generate a personalized kit
5. Toggle **EN / ES** at the top to switch the full UI language

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS (single-file, no build step) |
| AI Chat | [Anthropic Claude API](https://docs.anthropic.com/) (`claude-sonnet-4-20250514`) |
| Appointment Prep | Anthropic Claude API (JSON-structured output) |
| Clinic Data | [HRSA Health Center Finder API](https://bphc.hrsa.gov/data-reporting/api) |
| Charts | [Chart.js 4.4](https://www.chartjs.org/) |
| Fonts | System / Anthropic Sans (no external dependencies) |

---

## Getting Started

### Prerequisites

- An [Anthropic API key](https://console.anthropic.com/)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Running Locally

```bash
git clone https://github.com/your-org/salud-facil.git
cd salud-facil
```

Open `index.html` in your browser. No build step or server required.

### API Key Setup

The demo calls the Anthropic API directly from the browser using the `anthropic-dangerous-direct-browser-access` header. For local development, add your API key to the fetch headers in `index.html`:

```js
headers: {
  'Content-Type': 'application/json',
  'anthropic-version': '2023-06-01',
  'anthropic-dangerous-direct-browser-access': 'true',
  'x-api-key': 'YOUR_API_KEY_HERE'
}
```

> ⚠️ **Never commit your API key.** For production, route all API calls through a backend proxy.

### Production Deployment

For a production build, replace the direct browser API calls with a lightweight backend proxy (Node/Express, FastAPI, etc.) that holds your API key server-side and forwards requests to Anthropic.

---

## Project Structure

```
salud-facil/
├── index.html          # Full app (single-file demo)
├── README.md
└── assets/
    └── ...             # Icons, screenshots (optional)
```

---

## Community Health Data

The dashboard uses real community health statistics:

| Metric | Value | Source |
|---|---|---|
| Hispanic uninsured rate vs national avg | 2.7× | KFF 2023 |
| Hispanic adults with no regular doctor | 38% | CDC NHIS |
| Limited English proficiency (uninsured) | ~30% | U.S. Census ACS |
| Community obesity prevalence | 44.8% | Hackathon dataset |
| Community diabetes prevalence | 12.5% | Hackathon dataset |

---

## Roadmap

- [ ] Live HRSA API integration (replacing mock clinic data)
- [ ] Geolocation-based clinic search (no ZIP required)
- [ ] Medication lookup and pill identifier (bilingual)
- [ ] Appointment reminder via SMS (Twilio)
- [ ] Offline mode / PWA support for low-connectivity users
- [ ] Voice input for users with low literacy

---

## Acknowledgments

Built at [Hackathon Name] by [Team Name].

Data sources: HRSA, CDC, KFF, U.S. Census Bureau.

Inspired by HHS QuestionBuilder and the real need of 38 million uninsured and underinsured Hispanic adults in the United States.

---

## License

MIT License. See `LICENSE` for details.
