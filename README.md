# Oxley Façades — Landing Page

Self-contained, single-file landing page for the Academy of Façade Engineering.

## Deploy (Vercel Drop)

Drag this folder onto https://vercel.com/drop — no build step needed. `index.html` is fully self-contained (fonts, images and styles are inlined), so it deploys as-is.

## Before go-live

- Form endpoint: the enquiry form posts to `/api/enquiry` (see `data-endpoint` on the form element). Wire it to your handler or a service like Formspree.
- Replace the placeholder WhatsApp number, and confirm the prospectus email copy.
- Add real `privacy`, `terms`, `cookies` and `accessibility` pages (footer links are anchored placeholders).
