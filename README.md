# Shelfie marketing/docs site

A Vite + React landing page for Shelfie, the iPhone reading tracker with a 3D bookshelf, plus static **Support**, **Privacy Policy** and **Terms of Service** pages. It's deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Run it

```
npm install        # first time only
npm run dev        # local preview with live reload → http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built dist/ to check it
```

## What's where

- `index.html` → `src/main.jsx`: the landing page (React). The sections, from top to bottom:
  - `Nav.jsx`: sticky nav with section links; it turns into a menu on phones.
  - `Hero.jsx`: headline, App Store button, and a phone with floating streak and pages cards.
  - `Sections.jsx`:
    - benefit cards, then feature rows that alternate with phone mockups;
    - a bento grid: room colors, share your shelf, categories, privacy;
    - how it works, pricing (Starter free, Pro Monthly, Pro Lifetime) and the FAQ accordion;
    - the final call to action and the footer.
  - `Phone.jsx`: the iPhone frame and drawn app screens (shelf, pulled-out book, log reading, calendar).
  - `Bookcase.jsx`: the bookcase drawing, with the app's real proportions.
  - `src/config.js`: **all the copy, the App Store URL, screenshot paths, FAQs and prices.**
  - `src/landing.css`: the layout and look.
- `public/` is copied into the build as-is:
  - `support.html` (FAQs and contact), `privacy.html` and `terms.html`, with their shared `styles.css`;
  - `assets/`: logo, app icon, the self-hosted font, and `screens/` for app screenshots.

Packages:
- `motion`: the entrance animations and the FAQ accordion.
- `lenis`: smooth scrolling.
- `@phosphor-icons/react`: the icons ([Phosphor](https://phosphoricons.com), MIT), the same set as the app. The static pages use inline Phosphor SVGs, and there are no emoji anywhere.
- `@fontsource-variable/plus-jakarta-sans`: the font, self-hosted, so no Google Fonts requests.

All motion respects the Reduce Motion setting.

The page layout follows the section structure of the Mubly Framer template (hero, benefits, features, bento, steps, pricing, FAQ, CTA). The design, code and content are original to Shelfie.

## Real app screenshots

Drop iPhone captures into `public/assets/screens/` as `shelf.png`, `book.png`, `log.png` and `calendar.png`. That's the mapping in `SCREENSHOTS` in `src/config.js`. Each phone shows the real screenshot when the file exists, and otherwise a drawn version of the screen.

## Deploy (one-time setup)

1. Push this folder to `github.com/cmtania/bookshelf-tracker-docs` on the `main` branch.
2. In the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. Every push to `main` then builds and publishes to `https://cmtania.github.io/bookshelf-tracker-docs/`.

Use these URLs in App Store Connect:
- Support: `…/support.html`
- Privacy Policy: `…/privacy.html`

## Still a placeholder

- **App Store link:** `APP_STORE_URL` in `src/config.js`. Replace it once the app is live.
- **Support contact:** Christian Tania, tania.dev.ph@gmail.com. It's set in `SUPPORT_NAME` and `SUPPORT_EMAIL` in `src/config.js` (the footer), and written into `public/support.html`, `privacy.html` and `terms.html`.
- **Pro prices per country:** set in `PRICES` in `src/config.js`, in two tables: `lifetime` and `monthly`.
  - The visitor's region comes from their browser language (`en-US` → US, `fil-PH` → PH), and the price is formatted for their locale.
  - Right now only PH (₱249 lifetime, ₱59/month) and US ($4.99, $0.99/month) are listed. Everyone else sees words instead of a number, so no wrong price is ever shown.
  - "Pays for itself in N months" is worked out from the two prices for that country.
  - Once the products are set up, copy the prices for your main markets from App Store Connect (each product's **Price Schedule**) into those tables.
- **Legal pages:** they're a solid starting point, but they aren't legal advice. Have them reviewed if you can.
