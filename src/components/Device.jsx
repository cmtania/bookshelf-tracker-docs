import { AnimatePresence, motion } from 'motion/react';

import { SCREENS } from '../config.js';

/**
 * Device frames around real app screenshots. The bezel, corner radius and screen aspect come
 * from CSS (see .device in landing.css) and scale with the frame's width, so one component works
 * from a 180 px thumbnail to a full-width stage.
 *
 * `screen` is a key of SCREENS. When it changes, the new screenshot cross-fades in.
 */
function Device({ kind, screen, eager = false, className = '' }) {
  const shot = SCREENS[screen];
  return (
    // .device is a size container; .device-body sizes its bezel and corners in cqw from it.
    <div className={`device device-${kind} ${className}`}>
      <div className="device-body">
        <div className="device-screen">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={screen}
              src={shot.src}
              alt={shot.alt}
              loading={eager ? 'eager' : 'lazy'}
              fetchPriority={eager ? 'high' : 'auto'}
              decoding="async"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function IPhone(props) {
  return <Device kind="iphone" {...props} />;
}

export function IPad(props) {
  return <Device kind="ipad" {...props} />;
}
