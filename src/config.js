import {
  BellRinging,
  Books,
  CalendarDots,
  DeviceMobile,
  DeviceTablet,
  EyeSlash,
  Export,
  Flame,
  LockKey,
  MagnifyingGlassPlus,
  NotePencil,
  PaintBrush,
  Sparkle,
  SquaresFour,
  Timer,
  WifiSlash,
} from '@phosphor-icons/react';

// TODO at launch: the real App Store URL.
export const APP_STORE_URL = 'https://apps.apple.com/app/shelfie/id0000000000';
// Support contact (also written into public/support.html, privacy.html and terms.html).
export const SUPPORT_NAME = 'Christian Tania';
export const SUPPORT_EMAIL = 'tania.dev.ph@gmail.com';

// Real app screenshots, resized for the web from the App Store captures (bookshelf-tracker/appstore/raw).
// iPhone: 720 px wide (6.9" captures). iPad: 1400 px wide (13" captures).
export const SCREENS = {
  book: { src: 'assets/screens/iphone-book.jpg', alt: 'A book pulled off the 3D shelf, turned to show its cover, with Log reading and Edit buttons' },
  calendar: { src: 'assets/screens/iphone-calendar.jpg', alt: 'The Calendar tab: pages this month, the current streak and a dot on each day you read' },
  share: { src: 'assets/screens/iphone-share.jpg', alt: 'The Share your shelf sheet with a picture of the bookcase' },
  room: { src: 'assets/screens/iphone-room.jpg', alt: 'Room colors open over the 3D room, choosing the Gallery boxes design' },
  shelf: { src: 'assets/screens/iphone-shelf.jpg', alt: 'The 3D bookcase in a room with three named shelves' },
  pro: { src: 'assets/screens/iphone-pro.jpg', alt: 'The Shelfie Pro screen with Lifetime and Monthly plans' },
  ipadFloor: { src: 'assets/screens/ipad-floor.jpg', alt: 'Shelfie on iPad: the Tree bookcase on an oak herringbone floor, with the Room colors panel beside it' },
  ipadDesigns: { src: 'assets/screens/ipad-designs.jpg', alt: 'Shelfie on iPad: choosing a bookcase design from a grid of seven' },
  ipadCalendar: { src: 'assets/screens/ipad-calendar.jpg', alt: 'Shelfie on iPad: the reading calendar for the month' },
  ipadBook: { src: 'assets/screens/ipad-book.jpg', alt: 'Shelfie on iPad: a book pulled out of the shelf, showing its cover' },
};

export const NAV = [
  ['Tour', 'tour'],
  ['iPad', 'ipad'],
  ['Pricing', 'pricing'],
  ['FAQ', 'faq'],
];

// The ribbon under the hero. Short, noun-first.
export const RIBBON = [
  [Books, 'A real 3D bookshelf'],
  [Flame, 'A streak for every book'],
  [NotePencil, 'Notes by the page'],
  [CalendarDots, 'Reading calendar'],
  [SquaresFour, '7 bookcase designs'],
  [PaintBrush, 'Room colors'],
  [MagnifyingGlassPlus, 'Pinch to zoom'],
  [DeviceTablet, 'Made for iPad'],
  [LockKey, 'No account'],
];

// The sticky product tour: the phone stays in place and its screen changes per chapter.
export const TOUR = [
  {
    id: 'pull',
    screen: 'book',
    kicker: 'Pick it up',
    title: 'Pull a book off the shelf.',
    body: 'Tap a spine and it slides out with a soft sound, turns to face you, and shows your page and streak. Log reading right there, then tap away and it slides back into place.',
    points: ['Thickness follows the page count', 'Drag to turn the book around', 'Pinch to zoom into any shelf'],
  },
  {
    id: 'streak',
    screen: 'calendar',
    kicker: 'Keep going',
    title: 'A streak for every book.',
    body: 'Every session lands on the calendar in its spine color. See your week at a glance, swipe down for the month, and get a little celebration each time you log.',
    points: ['Per-book, per-shelf and overall streaks', 'A gentle reminder at your time', 'Never nags on days you already read'],
  },
  {
    id: 'room',
    screen: 'room',
    kicker: 'Make it yours',
    title: 'Design the room around your books.',
    body: 'Seven bookcase designs, from a classic cabinet to a tree. Lacquered and metal finishes, designer walls, herringbone and marble floors. The room changes live as you choose.',
    points: ['7 bookcase designs', 'Premium finishes and floors', 'Light, Dark or System appearance'],
    pro: true,
  },
  {
    id: 'share',
    screen: 'share',
    kicker: 'Show it off',
    title: 'Share your shelf.',
    body: 'Turn your bookcase into a clean picture for Instagram or Messages, with your book count and streak, drawn in your room’s colors.',
    points: ['One tap from the Bookshelf tab', 'Save to Photos or send anywhere', 'Signed with a small Shelfie credit'],
  },
];

// The iPad stage: segmented control over one big iPad.
export const IPAD_SCREENS = [
  { id: 'floor', screen: 'ipadFloor', label: 'Room colors' },
  { id: 'designs', screen: 'ipadDesigns', label: 'Designs' },
  { id: 'calendar', screen: 'ipadCalendar', label: 'Calendar' },
  { id: 'book', screen: 'ipadBook', label: 'Pull a book' },
];

export const STATS = [
  ['7', 'bookcase designs'],
  ['10', 'shelves to fill'],
  ['0', 'accounts to create'],
  ['100%', 'of your library stays on your device'],
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
    Icon: BellRinging,
    title: 'Gentle reminders',
    body: 'A daily nudge at your time, and an evening heads-up when a streak is about to slip. Never more.',
  },
  {
    Icon: NotePencil,
    title: 'Notes by the page',
    body: 'Save quotes and thoughts with the page they came from, right next to your reading sessions.',
  },
];

export const BENTO = [
  {
    id: 'colors',
    Icon: PaintBrush,
    title: 'Make the room yours',
    body: 'Pick colors for the bookcase, walls and floor, including premium lacquers, brass and herringbone or marble floors.',
    pro: true,
  },
  {
    id: 'share',
    Icon: Export,
    title: 'Share your shelf',
    body: 'Turn your bookcase into a clean picture for Instagram or Messages, with your books and streak.',
  },
  {
    id: 'categories',
    Icon: SquaresFour,
    title: 'Categories with the numbers that matter',
    body: 'Books, pages read, what you’re reading now and a streak for every category, all in one place.',
  },
  {
    id: 'privacy',
    Icon: LockKey,
    title: 'Private by design',
    body: 'No account and no server. Your library stays on your device.',
    points: [
      [LockKey, 'No sign-in'],
      [EyeSlash, 'No ads or tracking'],
      [WifiSlash, 'Works offline'],
      [DeviceMobile, 'Data stays on device'],
    ],
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
    // Price filled in per visitor from PRICES.monthly (see useLocalPrices in hooks.js).
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
    Icon: Sparkle,
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
    a: 'No. Shelfie has no accounts and no servers. Everything you add stays on your device.',
  },
  {
    q: 'What happens when a shelf is full?',
    a: 'Extra books lie flat in a stack at the end of the shelf, and when even that is full the label shows how many more there are, like “Novels · +3”.',
  },
  {
    q: 'Which devices are supported?',
    a: 'Any iPhone with iOS 26 or later, and any iPad with iPadOS 26 or later. On iPad it works in portrait, landscape and Split View. Each device keeps its own library (there is no syncing yet), and Shelfie Pro works on both with the same Apple ID.',
  },
  {
    q: 'Is there a dark mode?',
    a: 'Yes. In Settings → Appearance, choose System, Light or Dark. The 3D room keeps its own colors, which you can change with Shelfie Pro.',
  },
];

/** Apple-style spring: critically damped (no bounce). */
export const SPRING = { type: 'spring', bounce: 0, duration: 0.6 };
/** A softer spring for large surfaces (devices, stage). */
export const SPRING_SLOW = { type: 'spring', bounce: 0, duration: 1.1 };
