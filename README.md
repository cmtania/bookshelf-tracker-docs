# Shelfie marketing/docs site

A Vite + React landing page for Shelfie, the iPhone and iPad reading tracker with a 3D bookshelf, plus static **Support**, **Privacy Policy** and **Terms of Service** pages. It's deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Run it

```
npm install        # first time only
npm run dev        # local preview with live reload → http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built dist/ to check it
```

## What's where

- `index.html` → `src/main.jsx`: the landing page (React). The sections, from top to bottom:
  - `Nav.jsx`: a floating glass nav capsule; it turns into a menu on phones.
  - `Hero.jsx`: the headline, App Store button, and an iPad + iPhone stage with real screenshots. It tilts into place on scroll and leans toward the cursor.
  - `Sections.jsx` → `Ribbon`: an endless strip of what's inside.
  - `Tour.jsx`: the sticky product tour. The phone stays put while four chapters scroll past, and its screen follows the chapter. On phones, each chapter has its own screenshot.
  - `IpadStage.jsx`: a dark stage with one big iPad and tabs for four iPad screens. It advances every 5 s until the visitor interacts.
  - `Sections.jsx`: the numbers band, benefits, the bento grid (room colors, sharing, categories, privacy), pricing (Starter, Pro Monthly, Pro Lifetime), the FAQ, the final call to action and the footer.
  - `Device.jsx`: CSS iPhone and iPad frames around a screenshot. Bezels and corners scale with the frame's width (container query units), and a new screen cross-fades in.
  - `Bookcase.jsx`: the bookcase drawing, used in the share bento card.
  - `src/config.js`: **all the copy, the App Store URL, the screenshot list (`SCREENS`), tour chapters, FAQs and prices.**
  - `src/landing.css`: the layout and look. Warm editorial: cream paper with a light grain, logo orange, cocoa ink, Plus Jakarta Sans, and Instrument Serif italic for accent words.
- `public/` is copied into the build as-is:
  - `support.html` (FAQs and contact), `privacy.html` and `terms.html`, with their shared `styles.css`;
  - `assets/`: logo, app icon, the self-hosted font, and `screens/` for app screenshots.

Packages:
- `motion`: the entrance animations and the FAQ accordion.
- `lenis`: smooth scrolling.
- `@phosphor-icons/react`: the icons ([Phosphor](https://phosphoricons.com), MIT), the same set as the app. The static pages use inline Phosphor SVGs, and there are no emoji anywhere.
- `@fontsource-variable/plus-jakarta-sans` and `@fontsource/instrument-serif`: the fonts, self-hosted, so no Google Fonts requests.

All motion respects the Reduce Motion setting. With it on, the ribbon becomes a static list, the hero stops tilting and leaning, and the iPad stage doesn't auto-advance.

The design, code and content are original to Shelfie.

## Real app screenshots

The page uses real App Store captures from `bookshelf-tracker/appstore/raw/`, resized for the web into `public/assets/screens/`. They're JPEGs, `iphone-*.jpg` at 720 px wide and `ipad-*.jpg` at 1400 px wide, about 1 MB for the whole set. The list, with alt text for each one, is `SCREENS` in `src/config.js`. To swap a screenshot, replace the JPEG with the same name, or add an entry and point a tour chapter or iPad tab at it.

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
