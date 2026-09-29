import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowsOutSimple, Columns, DeviceRotate } from '@phosphor-icons/react';

import { IPAD_SCREENS, SPRING_SLOW } from '../config.js';
import { Reveal } from './common.jsx';
import { IPad } from './Device.jsx';

const INTERVAL = 5000;

/** A dark stage with one big iPad; tabs switch the screen, and it advances on its own until touched. */
export function IpadStage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const auto = !reduce && !paused;

  useEffect(() => {
    if (!auto) return undefined;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % IPAD_SCREENS.length), INTERVAL);
    return () => clearTimeout(timer);
  }, [auto, index]);

  const choose = (i) => {
    setIndex(i);
    setPaused(true);
  };

  return (
    <section
      className="section ipad-stage"
      id="ipad"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
    >
      <div className="stage-light" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="section-head center on-dark">
          <span className="eyebrow">Made for iPad</span>
          <h2>A bigger room for <span className="serif">bigger shelves.</span></h2>
          <p>A native iPad layout in any orientation. Room colors open in a side panel, so the room stays in full view while you choose.</p>
        </Reveal>

        <div className="stage-tabs" role="tablist" aria-label="iPad screens">
          {IPAD_SCREENS.map((item, i) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={index === i}
              aria-controls="ipad-panel"
              className={index === i ? 'on' : ''}
              onClick={() => choose(i)}
            >
              {item.label}
              {index === i && auto && <span key={`${index}-bar`} className="tab-progress" style={{ animationDuration: `${INTERVAL}ms` }} />}
            </button>
          ))}
        </div>

        <motion.div
          className="stage-device"
          id="ipad-panel"
          role="tabpanel"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={SPRING_SLOW}
        >
          <IPad screen={IPAD_SCREENS[index].screen} />
        </motion.div>

        <ul className="stage-points">
          <li><Columns size={24} /><span><b>Side panel</b> Pick colors with the room beside you.</span></li>
          <li><DeviceRotate size={24} /><span><b>Any orientation</b> Portrait, landscape, upside down.</span></li>
          <li><ArrowsOutSimple size={24} /><span><b>Split View</b> Read in one app, log in Shelfie.</span></li>
        </ul>
      </div>
    </section>
  );
}
