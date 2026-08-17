# Oxley Façades — Landing Page

Landing page for the Academy of Façade Engineering. Static HTML with no build step.

## Structure

```
index.html    the whole page: markup, CSS and JS
assets/       font, photos and their smaller responsive variants
scripts/      one-off tooling, not part of the site
vercel.json   clean URLs and cache headers
robots.txt
```

`assets/` must ship alongside `index.html` — the page references it with relative
paths, so the two travel together. Opening `index.html` straight from disk works.

## Deploy

Push to `main`. Vercel builds from the repo; there is nothing to compile.

## Images

Photos live in `assets/` at full size, each with one smaller variant that the
browser picks via `srcset`. To regenerate the smaller sizes after replacing a
photo:

```bash
npm install
npm run generate-assets
```

`sharp` is a build-time dependency only and never reaches the browser. It is
pinned to 0.33.5 because that is the last release supporting Node 18. On Node 20
or newer, upgrade to `sharp@^0.35` — it clears a libvips advisory that `npm audit`
otherwise reports against the dev tree.

When adding a photo, keep the `width` and `height` attributes on the `<img>` tag.
They are what hold the page's Cumulative Layout Shift at zero.

## Before go-live

- Form endpoint: the enquiry form posts to `/api/enquiry` (see `data-endpoint` on the form element). Wire it to your handler or a service like Formspree. Until then, submitting shows a local confirmation and sends nothing.
- Confirm the WhatsApp number, Student Portal URL and social links.
- Add real `privacy`, `terms`, `cookies` and `accessibility` pages (footer links are anchored placeholders).
