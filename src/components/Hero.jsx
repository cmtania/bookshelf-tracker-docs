import { motion } from 'motion/react';
import { ArrowRight, BookBookmark, Flame, Sparkle } from '@phosphor-icons/react';

import { SPRING } from '../config.js';
import { scrollToId } from '../smooth-scroll.js';
import { AppStoreButton } from './common.jsx';
import { Phone } from './Phone.jsx';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
        >
          <span className="pill">
            <Sparkle size={14} /> New for iPhone and iPad
          </span>
          <h1>
            Your reading life, on a <span className="mark">real 3D bookshelf</span>
          </h1>
          <p className="lead">
            Shelfie puts every book you’re reading on a shelf you can see. Sort them by category, log pages in
            seconds and keep a streak for every book.
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <a
              className="btn btn-light"
              href="#features"
              onClick={(event) => {
                event.preventDefault();
                scrollToId('features');
              }}
            >
              Explore features <ArrowRight size={16} />
            </a>
          </div>
          <ul className="hero-facts">
            <li><b>Free</b> to start</li>
            <li><b>No</b> account</li>
            <li><b>Pro</b> monthly or lifetime</li>
          </ul>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <Phone screen="shelf" className="phone-hero" />
          </motion.div>
          <motion.div
            className="float-card float-streak"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING, delay: 0.35 }}
          >
            <span className="float-icon orange"><Flame weight="fill" size={18} /></span>
            <div>
              <b>12-day streak</b>
              <span>Keep it going tonight</span>
            </div>
          </motion.div>
          <motion.div
            className="float-card float-pages"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING, delay: 0.5 }}
          >
            <span className="float-icon teal"><BookBookmark size={18} /></span>
            <div>
              <b>+32 pages</b>
              <span>The Quiet Orchard · p. 212</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
