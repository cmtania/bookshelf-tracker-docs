import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowDown, Flame, Sparkle } from '@phosphor-icons/react';

import { SPRING, SPRING_SLOW } from '../config.js';
import { scrollToId } from '../smooth-scroll.js';
import { AppStoreButton } from './common.jsx';
import { IPad, IPhone } from './Device.jsx';

export function Hero() {
  const reduce = useReducedMotion();
  const stageRef = useRef(null);

  // The devices start tilted back and settle flat as the stage scrolls into view.
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start end', 'center center'] });
  const tilt = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // A small lean toward the cursor (fine pointers only; springs keep it soft).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const leanY = useSpring(useTransform(px, [-1, 1], [-4, 4]), { stiffness: 80, damping: 20 });
  const leanX = useSpring(useTransform(py, [-1, 1], [3, -3]), { stiffness: 80, damping: 20 });

  const onPointerMove = (event) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - box.left) / box.width) * 2 - 1);
    py.set(((event.clientY - box.top) / box.height) * 2 - 1);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section className="hero" id="top" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="hero-aura" aria-hidden="true">
        <span className="aura aura-a" />
        <span className="aura aura-b" />
        <span className="aura aura-c" />
      </div>

      <div className="wrap hero-copy">
        <motion.span className="pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={SPRING}>
          <Sparkle size={16} weight="fill" /> Now on iPhone and iPad
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          Your reading, on a <span className="serif">real 3D bookshelf.</span>
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.12 }}
        >
          Shelfie puts every book you’re reading on a shelf you can see and touch. Pull one out, log a few
          pages, and keep a streak for every book.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.18 }}
        >
          <AppStoreButton />
          <a
            className="btn btn-glass"
            href="#tour"
            onClick={(event) => {
              event.preventDefault();
              scrollToId('tour');
            }}
          >
            Take the tour <ArrowDown size={18} weight="bold" />
          </a>
        </motion.div>
        <motion.ul
          className="hero-facts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...SPRING, delay: 0.3 }}
        >
          <li><b>Free</b> to start</li>
          <li><b>No</b> account</li>
          <li><b>Private</b> by design</li>
        </motion.ul>
      </div>

      <div className="hero-stage-wrap" ref={stageRef}>
        <motion.div
          className="hero-stage"
          style={reduce ? undefined : { rotateX: tilt, y: lift }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...SPRING_SLOW, delay: 0.15 }}
        >
          <motion.div className="hero-lean" style={reduce ? undefined : { rotateY: leanY, rotateX: leanX }}>
            <IPad screen="ipadFloor" className="hero-ipad" eager />
            <IPhone screen="book" className="hero-iphone" eager />

            <motion.div
              className="chip chip-streak"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.7 }}
            >
              <span className="chip-icon flame"><Flame size={22} weight="fill" /></span>
              <span>
                <b>7 days in a row!</b>
                <small>+24 pages today</small>
              </span>
            </motion.div>
            <motion.div
              className="chip chip-design"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.85 }}
            >
              <span className="chip-swatches" aria-hidden="true">
                <i style={{ background: 'linear-gradient(135deg,#e2c08f,#b88a52)' }} />
                <i style={{ background: '#2f4a3a' }} />
                <i style={{ background: '#f3efe6' }} />
              </span>
              <span>
                <b>Tree · Oak herringbone</b>
                <small>Your room, your colors</small>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
