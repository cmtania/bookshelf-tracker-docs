import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

import { APP_STORE_URL, NAV, SPRING } from '../config.js';
import { scrollToId } from '../smooth-scroll.js';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (event) => {
    event.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={go('top')}>
          <img src="assets/logo.svg" alt="" width="32" height="29" />
          <span>Shelfie</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-dark btn-small nav-cta" href={APP_STORE_URL} target="_blank" rel="noopener">
          Download
        </a>
        <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-sheet"
            aria-label="Sections"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={SPRING}
          >
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={go(id)}>{label}</a>
            ))}
            <a className="btn btn-dark" href={APP_STORE_URL} target="_blank" rel="noopener">Download on the App Store</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
