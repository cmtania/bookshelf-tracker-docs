import {
  BookMarked,
  CalendarDays,
  ChevronDown,
  Flame,
  LayoutGrid,
  Library,
  Paintbrush,
  Pencil,
  Plus,
  Settings,
  Share2,
  X,
} from 'lucide-react';

import { SCREENSHOTS } from '../config.js';
import { useImageExists } from '../hooks.js';
import { Bookcase } from './Bookcase.jsx';

/** An iPhone frame. Shows the real screenshot for `screen` when one exists, else a drawing. */
export function Phone({ screen, className = '' }) {
  const src = SCREENSHOTS[screen];
  const hasShot = useImageExists(src);
  const Drawn = SCREENS[screen];
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        {hasShot ? <img src={src} alt="" className="phone-shot" /> : <Drawn />}
        <div className="phone-island" />
      </div>
    </div>
  );
}

function StatusBar({ light = false }) {
  return (
    <div className={`status ${light ? 'status-light' : ''}`}>
      <span>9:41</span>
      <span className="status-icons">
        <i /><i /><i />
      </span>
    </div>
  );
}

function TabBar({ active = 0 }) {
  const tabs = [Library, LayoutGrid, CalendarDays, Settings];
  const names = ['Bookshelf', 'Categories', 'Calendar', 'Settings'];
  return (
    <div className="tabbar">
      {tabs.map((Icon, i) => (
        <span key={names[i]} className={i === active ? 'on' : ''}>
          <Icon size={13} strokeWidth={2.2} />
          <small>{names[i]}</small>
        </span>
      ))}
    </div>
  );
}

function Room({ children, dim = false }) {
  return (
    <div className="room">
      <div className="room-wall" />
      <div className="room-floor" />
      {children}
      {dim && <div className="room-dim" />}
    </div>
  );
}

function ShelfScreen() {
  return (
    <div className="screen">
      <Room>
        <StatusBar />
        <div className="app-top">
          <div>
            <b>My Bookshelf</b>
            <span className="with-icon">
              24 books · <Flame size={9} className="flame" /> 12-day streak
            </span>
          </div>
          <div className="glass-buttons">
            <span className="glass-circle"><Paintbrush size={11} /></span>
            <span className="glass-circle"><Share2 size={11} /></span>
          </div>
        </div>
        <Bookcase className="room-bookcase" />
        <div className="chips">
          {[['#1F6F6B', 'Novels'], ['#C99A2E', 'Study'], ['#1F3A68', 'Comics'], ['#B03A5B', 'Poetry']].map(([c, n]) => (
            <span key={n} className="chip">
              <i style={{ background: c }} />
              {n}
            </span>
          ))}
        </div>
        <TabBar active={0} />
      </Room>
    </div>
  );
}

function BookScreen() {
  return (
    <div className="screen">
      <Room dim>
        <Bookcase className="room-bookcase room-bookcase-far" />
        <StatusBar light />
        <div className="app-top app-top-end">
          <span className="glass-circle glass-dark"><X size={11} /></span>
        </div>
        <div className="book3d">
          <div className="book3d-spine" />
          <div className="book3d-cover">
            <div className="book3d-frame">
              <strong>The Quiet Orchard</strong>
              <i />
              <small>M. ALCARAZ</small>
            </div>
          </div>
        </div>
        <div className="book-card">
          <b>The Quiet Orchard</b>
          <span>M. Alcaraz</span>
          <div className="book-card-meta">
            <span><BookMarked size={9} /> Page 212 of 384</span>
            <span className="orange"><Flame size={9} /> 6-day streak</span>
          </div>
        </div>
        <div className="book-actions">
          <span className="btn-prom"><Plus size={10} /> Log reading</span>
          <span className="btn-glass"><Pencil size={10} /> Edit</span>
        </div>
      </Room>
    </div>
  );
}

function LogScreen() {
  const pct = 212 / 384;
  const r = 15;
  const c = 2 * Math.PI * r;
  return (
    <div className="screen screen-list">
      <StatusBar />
      <div className="sheet-top">
        <b>Log reading</b>
        <span className="link">Done</span>
      </div>
      <div className="list-card row">
        <svg viewBox="0 0 40 40" className="ring">
          <circle cx="20" cy="20" r={r} fill="none" stroke="#E8E1D6" strokeWidth="4" />
          <circle cx="20" cy="20" r={r} fill="none" stroke="#1F6F6B" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={`${c * pct} ${c}`} transform="rotate(-90 20 20)" />
          <text x="20" y="23" textAnchor="middle" fontSize="8" fontWeight="700">{Math.round(pct * 100)}%</text>
        </svg>
        <div>
          <b>Page 212 of 384</b>
          <span>172 pages left</span>
          <span className="green">Today 32 / 30 pages</span>
        </div>
      </div>
      <div className="list-card row">
        <Flame size={16} className="flame" />
        <div className="grow">
          <b>6-day streak</b>
          <span>Read today</span>
        </div>
        <div className="right"><b>14</b><span>best</span></div>
      </div>
      <div className="btn-prom wide"><Plus size={10} /> Log reading</div>
      <small className="list-head">NOTES</small>
      <div className="list-card">
        <p>“Some trees remember every winter.” Keep this for the essay.</p>
        <span>Page 198 · Sep 26</span>
      </div>
      <small className="list-head">READING SESSIONS</small>
      <div className="list-card rows">
        {[['Today, 8:10 PM', 'p. 180 → 212', '+32', '35 min'], ['Yesterday, 9:02 PM', 'p. 151 → 180', '+29', '30 min']].map(([d, p, n, m]) => (
          <div key={d} className="session">
            <div><b>{d}</b><span>{p}</span></div>
            <div className="right"><b>{n} pages</b><span>{m}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarScreen() {
  const days = [['S', 20, []], ['M', 21, ['#1F6F6B']], ['T', 22, ['#1F6F6B', '#B03A5B']], ['W', 23, ['#1F6F6B']], ['T', 24, []], ['F', 25, ['#1F6F6B', '#C99A2E']], ['S', 26, ['#1F6F6B', '#B03A5B', '#1F3A68']]];
  return (
    <div className="screen screen-list">
      <StatusBar />
      <div className="sheet-top big"><b>Calendar</b></div>
      <div className="list-card stats">
        <span><BookMarked size={10} className="accent" /> <b>186</b> pages this week</span>
        <i />
        <span><Flame size={10} className="flame" /> <b>12</b> day streak</span>
      </div>
      <div className="list-card cal">
        <div className="cal-head">This week <ChevronDown size={9} /></div>
        <div className="cal-grid">
          {days.map(([l, d, dots]) => (
            <div key={d} className={`cal-day ${d === 26 ? 'sel' : ''}`}>
              <small>{l}</small>
              <b>{d}</b>
              <span>{dots.map((c) => <i key={c} style={{ background: c }} />)}</span>
            </div>
          ))}
        </div>
        <div className="cal-handle" />
      </div>
      <b className="day-title">Saturday, September 26</b>
      {[['#1F6F6B', 'The Quiet Orchard', 'p. 180 → 212 · 8:10 PM', '+32'], ['#B03A5B', 'Salt & Signal', 'p. 44 → 70 · 1:15 PM', '+26'], ['#1F3A68', 'Tidewater', 'p. 12 → 30 · 7:40 AM', '+18']].map(([c, t, s, n]) => (
        <div key={t} className="list-card row session-card">
          <i className="spine" style={{ background: c }} />
          <div className="grow"><b>{t}</b><span>{s}</span></div>
          <b>{n}</b>
        </div>
      ))}
      <TabBar active={2} />
    </div>
  );
}

const SCREENS = { shelf: ShelfScreen, book: BookScreen, log: LogScreen, calendar: CalendarScreen };
