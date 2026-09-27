/**
 * A front view of Shelfie's bookcase, drawn to the app's real proportions
 * (1.6 m x 2.0 m, 2 columns x 5 rows). Books are placed like the app does it:
 * upright from the left, want-to-read books lying flat on the right.
 */

const SPINES = ['#9F1D20', '#C2571A', '#C99A2E', '#2F6B3F', '#1F6F6B', '#1F3A68', '#3B4CCA', '#6B2E6B', '#B03A5B', '#3A3A3A'];

// Per compartment: [thickness, height] of upright books, then how many lie flat.
const SHELVES = [
  { up: [[5, 23], [3.5, 21], [6, 25], [4, 22], [3, 20], [5, 24]], flat: 0, reading: 2, label: 'Novels' },
  { up: [[4, 22], [6.5, 24], [3.5, 21], [4.5, 23]], flat: 2, reading: 1, label: 'Study' },
  { up: [[3.5, 20], [5, 25], [4, 22], [3, 19], [6, 24], [4, 21], [3.5, 23]], flat: 0, reading: -1, label: 'Comics' },
  { up: [[6, 24], [4, 21], [5, 23]], flat: 3, reading: 0, label: 'Poetry' },
  { up: [[4, 22], [3.5, 20], [5.5, 25], [4, 23], [4.5, 21]], flat: 1, reading: 3, label: 'History' },
  { up: [[5, 24], [4, 22]], flat: 2, reading: -1, label: 'To read' },
  { up: [[4.5, 23], [3.5, 21], [5, 24], [4, 20]], flat: 0, reading: 1, label: 'Science' },
  { up: [[6, 25], [4, 22], [3.5, 20]], flat: 1, reading: -1, label: 'Travel' },
  { up: [], flat: 0, reading: -1, label: null },
  { up: [], flat: 0, reading: -1, label: null },
];

export function Bookcase({ paint = '#F1EFEA', filled = 8, labels = true, className }) {
  const W = 160;
  const H = 200;
  const board = 2.5;
  const plinth = 6;
  const innerW = (W - 3 * board) / 2;
  const rowH = (H - plinth - 2 * board - 4 * board) / 5;
  const back = shade(paint, 0.88);

  const compartments = [];
  for (let i = 0; i < 10; i += 1) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = board + col * (innerW + board);
    const y = board + row * (rowH + board);
    compartments.push({ i, x, y, shelf: i < filled ? SHELVES[i] : SHELVES[9] });
  }

  let colorIndex = 0;
  const nextColor = () => SPINES[colorIndex++ % SPINES.length];

  return (
    <svg className={className} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A bookcase full of books">
      <defs>
        <linearGradient id="bc-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.22" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} rx="2" fill={paint} />
      <rect x={board} y={H - plinth} width={W - 2 * board} height={plinth} fill={shade(paint, 0.9)} />
      {compartments.map(({ i, x, y, shelf }) => {
        let cursor = x + 1;
        const floor = y + rowH;
        const books = shelf.up.map(([t, h], n) => {
          const color = nextColor();
          const bx = cursor;
          cursor += t + 0.3;
          const reading = n === shelf.reading;
          return (
            <g key={`u${n}`}>
              <rect x={bx} y={floor - h} width={t} height={h} rx="0.5" fill={color} />
              <rect x={bx + t * 0.78} y={floor - h} width={t * 0.22} height={h} fill="#000" opacity="0.18" />
              <rect x={bx} y={floor - h + h * 0.08} width={t} height="0.5" fill="#fff" opacity="0.4" />
              <rect x={bx} y={floor - h * 0.1} width={t} height="0.5" fill="#fff" opacity="0.4" />
              {reading && <rect x={bx + t / 2 - 0.4} y={floor - h - 2.4} width="0.8" height="3" fill="#C0392B" />}
            </g>
          );
        });
        const flats = Array.from({ length: shelf.flat }, (_, n) => {
          const color = nextColor();
          const len = 21 + ((n * 7) % 4);
          const thick = 3 + (n % 2);
          const fy = floor - (n + 1) * 3.6;
          return (
            <g key={`f${n}`}>
              <rect x={x + innerW - len - 1.5} y={fy} width={len} height={thick} rx="0.5" fill={color} />
              <rect x={x + innerW - len - 1.5} y={fy + thick * 0.75} width={len} height={thick * 0.25} fill="#000" opacity="0.18" />
            </g>
          );
        });
        return (
          <g key={i}>
            <rect x={x} y={y} width={innerW} height={rowH} fill={back} />
            <rect x={x} y={y} width={innerW} height={rowH * 0.2} fill="url(#bc-shadow)" />
            {books}
            {flats}
            {labels && shelf.label && (
              <g>
                <rect x={x + innerW / 2 - 15} y={floor} width="30" height="6.5" rx="1.6" fill="#fff" />
                <text x={x + innerW / 2} y={floor + 4.7} textAnchor="middle" fontSize="3.6" fontWeight="700" fill="#2B2B2B" fontFamily="inherit">
                  {shelf.label}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/** Multiply a hex colour's brightness. */
function shade(hex, factor) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, Math.round(((n >> 16) & 255) * factor));
  const g = Math.min(255, Math.round(((n >> 8) & 255) * factor));
  const b = Math.min(255, Math.round((n & 255) * factor));
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
