import {
  BellRing,
  BookOpen,
  EyeOff,
  Flame,
  LayoutGrid,
  LockKeyhole,
  NotebookPen,
  Paintbrush,
  Share2,
  Smartphone,
  Sparkles,
  Timer,
  WifiOff,
} from 'lucide-react';

// TODO at launch: the real App Store URL.
export const APP_STORE_URL = 'https://apps.apple.com/app/shelfie/id0000000000';
// Support contact (also written into public/support.html, privacy.html and terms.html).
export const SUPPORT_NAME = 'Christian Tania';
export const SUPPORT_EMAIL = 'tania.dev.ph@gmail.com';

// Real app screenshots (iPhone captures) go in public/assets/screens/. Until a file exists
// (or if it fails to load), the phone shows a drawn version of that screen instead.
export const SCREENSHOTS = {
  shelf: 'assets/screens/shelf.png',
  book: 'assets/screens/book.png',
  log: 'assets/screens/log.png',
  calendar: 'assets/screens/calendar.png',
};

export const NAV = [
  ['Features', 'features'],
  ['How it works', 'how'],
  ['Pricing', 'pricing'],
  ['FAQ', 'faq'],
];

export const BENEFITS = [
  {
    Icon: Timer,
    title: 'Log in seconds',
    body: 'Type the page you’re on, or how many you read. Shelfie works out the rest and moves your bookmark.',
  },
  {
    Icon: Flame,
    title: 'A streak for every book',
    body: 'Each book keeps its own reading streak, plus one for all your reading, so you always know what to pick up.',
  },
  {
    Icon: BellRing,
    title: 'Gentle reminders',
    body: 'A daily nudge at your time, and an evening heads-up when a streak is about to slip. Never more.',
  },
  {
    Icon: NotebookPen,
    title: 'Notes by the page',
    body: 'Save quotes and thoughts with the page they came from, right next to your reading sessions.',
  },
];

export const FEATURES = [
  {
    id: 'shelf',
    eyebrow: 'Your library',
    title: 'Every book on a shelf you can actually see',
    body: 'Your books stand in a real 3D bookcase, one compartment per category. Thick books look thick, the one you’re reading sticks out with a ribbon, and your to-read pile lies flat, just like at home.',
    points: ['Up to 10 categories, one per compartment', 'Tap a shelf to zoom in, tap a spine to pull the book out', 'Book thickness follows the page count'],
    screen: 'shelf',
  },
  {
    id: 'book',
    eyebrow: 'Pick it up',
    title: 'Pull a book out and it turns to face you',
    body: 'Tap a spine and the book slides off the shelf, flies up and shows its cover. Log reading or edit it right there, then tap away and it slides back into its place.',
    points: ['Page progress and streak at a glance', 'Drag to turn the book around', 'Log reading keeps your notes and sessions together'],
    screen: 'book',
  },
  {
    id: 'calendar',
    eyebrow: 'Keep going',
    title: 'See your week of reading, expand to the month',
    body: 'The calendar opens on this week, with a colored dot for every book you read each day. Swipe down for the whole month, and tap a day to see exactly what you read.',
    points: ['Pages this week and your current streak on top', 'One dot per book, in its spine color', 'Every session with pages and minutes'],
    screen: 'calendar',
  },
];

export const BENTO = [
  {
    id: 'colors',
    Icon: Paintbrush,
    title: 'Make the room yours',
    body: 'Pick colors for the bookcase, walls and floor, including premium lacquers, brass and herringbone or marble floors.',
    pro: true,
  },
  {
    id: 'share',
    Icon: Share2,
    title: 'Share your shelf',
    body: 'Turn your bookcase into a clean picture for Instagram or Messages, with your books and streak.',
  },
  {
    id: 'categories',
    Icon: LayoutGrid,
    title: 'Categories with the numbers that matter',
    body: 'Books, pages read, what you’re reading now and a streak for every category, all in one place.',
  },
  {
    id: 'privacy',
    Icon: LockKeyhole,
    title: 'Private by design',
    body: 'No account and no server. Your library stays on your iPhone.',
    points: [
      [LockKeyhole, 'No sign-in'],
      [EyeOff, 'No ads or tracking'],
      [WifiOff, 'Works offline'],
      [Smartphone, 'Data stays on device'],
    ],
  },
];

export const STEPS = [
  {
    Icon: LayoutGrid,
    title: 'Name your shelves',
    body: 'Start with three free categories and rename them to fit how you read: novels, study, comics, anything.',
  },
  {
    Icon: BookOpen,
    title: 'Add your books',
    body: 'Title, author and page count. Pick a spine color and the book takes its place on the shelf.',
  },
  {
    Icon: Flame,
    title: 'Read and log',
    body: 'Log each session in a few taps. Watch the bookmark move, the streak grow and the calendar fill up.',
  },
];

// Shelfie Pro prices per App Store storefront (ISO region code -> ISO currency and amount).
// Copy these from App Store Connect: each in-app purchase / subscription -> Price Schedule lists
// every storefront. Visitors whose region isn't listed see words instead of a number, so an
// unconfirmed guess is never shown.
export const PRICES = {
  lifetime: {
    PH: { currency: 'PHP', amount: 249 },
    US: { currency: 'USD', amount: 4.99 },
  },
  monthly: {
    PH: { currency: 'PHP', amount: 59 },
    US: { currency: 'USD', amount: 0.99 },
  },
};

export const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    note: 'forever',
    body: 'Everything you need to start a reading habit.',
    features: [
      '3D bookshelf and categories',
      'Up to 10 books in 3 categories',
      'Log reading, notes and sessions',
      'Streaks for every book',
      'Calendar and reminders',
      'Share your shelf',
    ],
    cta: 'Download free',
  },
  {
    name: 'Pro Monthly',
    // Price filled in per visitor from PRICES.monthly (see useLocalPrice in hooks.js).
    priceKey: 'monthly',
    note: 'per month',
    fallback: ['Monthly', 'in your currency'],
    body: 'Try every Pro feature month to month. Cancel anytime.',
    features: [
      'Everything in Starter',
      'Unlimited books',
      'All 10 bookcase compartments',
      'Room colors and premium finishes',
      'Cancel anytime in Settings',
    ],
    cta: 'Subscribe',
  },
  {
    name: 'Pro Lifetime',
    priceKey: 'lifetime',
    note: 'once, no subscription',
    fallback: ['One-time price', 'in your currency, on the App Store'],
    body: 'Pay once and keep every Pro feature forever.',
    features: [
      'Everything in Pro Monthly',
      'Pay once, never again',
      'Every Pro feature, forever',
      'Future Pro updates included',
      'Supports an indie developer',
    ],
    cta: 'Get Lifetime',
    featured: true,
    Icon: Sparkles,
  },
];

// Short list for the landing page; the full set is on support.html.
export const FAQS = [
  {
    q: 'Is Shelfie free?',
    a: 'Yes. The free Starter plan includes the 3D bookshelf, streaks, notes, the calendar and reminders for up to 10 books in 3 categories. Shelfie Pro removes the limits and adds room colors, either as a monthly subscription or as a one-time Lifetime purchase.',
  },
  {
    q: 'Monthly or Lifetime?',
    a: 'Both unlock exactly the same Pro features. Lifetime is a single payment that costs about as much as a few months of Monthly, and then you never pay again. Already on Monthly? Switch to Lifetime anytime from Settings, then cancel the subscription.',
  },
  {
    q: 'How does a reading streak work?',
    a: 'A streak counts the days in a row you logged reading. Every book has its own streak, and there’s one for all your reading. If you haven’t read yet today, the streak waits until midnight before it breaks.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. Shelfie has no accounts and no servers. Everything you add stays on your iPhone.',
  },
  {
    q: 'What happens when a shelf is full?',
    a: 'Extra books lie flat in a stack at the end of the shelf, and when even that is full the label shows how many more there are, like “Novels · +3”.',
  },
  {
    q: 'Which iPhones are supported?',
    a: 'Any iPhone running iOS 26 or later.',
  },
];

/** Apple-style spring: critically damped (no bounce). */
export const SPRING = { type: 'spring', bounce: 0, duration: 0.6 };
