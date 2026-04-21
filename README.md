# AI Literacy @ SF — Landing Page

A polished, Visa-branded landing page for the public **AI Literacy with Visa in San Francisco** event, hosted by Visa. Built on the Visa Product Design System (`@visa/nova-react`) with React + Vite on the client and a small Express API on the server.

## Tech stack

- **Frontend:** React + TypeScript + Vite, routed with `wouter`
- **Design system:** [Visa Nova](https://design.visa.com/) — `@visa/nova-react`, `@visa/nova-icons-react`, VPDS theme tokens (`visa-light`)
- **Backend:** Express (`server/index.ts`), with a single `POST /api/applications` endpoint that validates submissions with `zod` and stores them in memory
- **Tooling:** Single dev process via `npm run dev` (Vite middleware mounted on Express, port `5000`)

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:5000](http://localhost:5000).

## Editing event copy

All event details live in a single config file:

```
client/src/config/event.ts
```

Edit headlines, agenda items, FAQs, badges, and the audience list there — the page reads everything from this object.

## Application form

The "Apply to Attend" form posts JSON to:

```
POST /api/applications
{
  "name": "...",
  "age": 25,
  "affiliation": "...",   // optional, may be null
  "reason": "...",
  "laptopAcknowledged": true
}
```

Submissions are validated server-side and held in memory for the lifetime of the process — replace the in-memory store in `server/routes.ts` with persistent storage (e.g. the included Drizzle / Postgres setup) if you need durability.

To submit somewhere else instead, set `VITE_FORM_ENDPOINT` at build/dev time:

```bash
VITE_FORM_ENDPOINT=https://example.com/forms/ai-literacy npm run dev
```

The form will POST the same JSON payload to that URL.

## Deploying as a public landing page

This project is configured to run with a single command and bind to `0.0.0.0:5000`, which is what Replit Deployments expects.

1. Open the project on Replit.
2. Use the **Publish** button to deploy as an Autoscale or Reserved VM deployment — Replit will run `npm run build` followed by `npm run start`.
3. Once deployed, share the resulting `*.replit.app` URL (or attach a custom domain).

For non-Replit hosts, any platform that can run a Node 20+ server works:

```bash
npm install
npm run build
npm run start
```

## Brand and accessibility notes

- Visa logo, Visa Blue (`#1434CB`), and Visa Gold (`#FCC015`) come directly from the official VPDS theme — no recoloring or distortion.
- Layout is built with the VPDS `Utility` component (no Tailwind spacing classes) so it stays consistent with Visa's design tokens.
- The hero is the only blue-background section; inputs and forms live exclusively on white surfaces.
- Headings are semantic (`h1`/`h2`/`h3`), every form control has a `Label`, and validation messages are linked via `aria-describedby` for screen readers.

## Project layout

```
client/
  src/
    config/event.ts        # All event copy lives here
    components/            # Header, hero, sections, form, FAQ
    pages/landing.tsx      # The landing page composition
    App.tsx                # Router
server/
  routes.ts                # POST /api/applications
  index.ts                 # Express + Vite middleware entry
shared/
  schema.ts                # Drizzle schema (unused by the form by default)
```
