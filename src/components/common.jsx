import { motion } from 'motion/react';
import { AppleLogo } from '@phosphor-icons/react';

import { APP_STORE_URL, SPRING } from '../config.js';

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, body, center = true }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </Reveal>
  );
}

/** Download link to the App Store. */
export function AppStoreButton({ variant = 'dark', label = 'Download on the App Store' }) {
  return (
    <a className={`btn btn-${variant}`} href={APP_STORE_URL} target="_blank" rel="noopener">
      <AppleLogo size={21} weight="fill" />
      <span>{label}</span>
    </a>
  );
}
