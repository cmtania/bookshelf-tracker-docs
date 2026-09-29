import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CaretDown, Check } from '@phosphor-icons/react';

import { BENEFITS, BENTO, FAQS, PLANS, RIBBON, SPRING, STATS, SUPPORT_EMAIL, SUPPORT_NAME } from '../config.js';
import { useLocalPrices } from '../hooks.js';
import { Bookcase } from './Bookcase.jsx';
import { AppStoreButton, Reveal, SectionHead } from './common.jsx';
import { IPhone } from './Device.jsx';

/** An endless, slow ribbon of what's inside. The copy is doubled so the loop has no seam. */
export function Ribbon() {
  const items = RIBBON.map(([Icon, text]) => (
    <li key={text}><Icon size={20} weight="duotone" />{text}</li>
  ));
  return (
    <div className="ribbon" aria-label="What’s inside Shelfie">
      <div className="ribbon-track">
        <ul>{items}</ul>
        <ul aria-hidden="true">{items}</ul>
      </div>
    </div>
  );
}

export function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="wrap">
        <SectionHead
          eyebrow="The habit, handled"
          title={<>Built for the book <span className="serif">on your nightstand.</span></>}
          body="Everything a reading habit needs, without spreadsheets or long forms."
        />
        <div className="benefit-grid">
          {BENEFITS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} className="benefit" delay={i * 0.06}>
              <span className="icon-tile"><Icon size={26} weight="duotone" /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats" aria-label="Shelfie in numbers">
      <div className="wrap stats-grid">
        {STATS.map(([value, label], i) => (
          <Reveal key={label} className="stat" delay={i * 0.06}>
            <b>{value}</b>
            <span>{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Bento() {
  return (
    <section className="section" id="more">
      <div className="wrap">
        <SectionHead eyebrow="And more" title={<>The details that make it <span className="serif">yours.</span></>} />
        <div className="bento">
          {BENTO.map((item, i) => (
            <Reveal key={item.id} className={`bento-card bento-${item.id}`} delay={i * 0.06}>
              <div className="bento-text">
                <span className="icon-tile small"><item.Icon size={21} weight="duotone" /></span>
                <h3>
                  {item.title}
                  {item.pro && <span className="pro">PRO</span>}
                </h3>
                <p>{item.body}</p>
              </div>
              <BentoArt item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoArt({ item }) {
  if (item.id === 'colors') {
    const rows = [
      ['Bookcase', ['#F1EFEA', '#C89B6D', '#6B4A32', '#1F5E4A', '#6E1F2E', 'linear-gradient(135deg,#E9CD8A,#B8903F 55%,#8A6A2A)']],
      ['Walls', ['#F3F2EF', '#DDE5D8', '#DCE8F2', '#2F4A3A', '#22304A', '#C28A3A']],
      ['Floor', ['repeating-linear-gradient(90deg,#D9B98C 0 14px,#CFAE80 14px 15px)', 'repeating-linear-gradient(90deg,#7A5236 0 14px,#6C4830 14px 15px)', 'linear-gradient(135deg,#F4F2EE,#DCD8D2)', 'conic-gradient(#1F1F21 25%,#ECE8E1 0 50%,#1F1F21 0 75%,#ECE8E1 0) 0 0/14px 14px']],
    ];
    return (
      <div className="swatches">
        {rows.map(([label, colors]) => (
          <div key={label} className="swatch-row">
            <small>{label}</small>
            <div>{colors.map((c) => <i key={c} style={{ background: c }} />)}</div>
          </div>
        ))}
      </div>
    );
  }
  if (item.id === 'share') {
    return (
      <div className="share-art">
        <div className="share-post">
          <b>My Bookshelf</b>
          <small>24 books · 6 reading · 12-day streak</small>
          <Bookcase className="share-bookcase" labels={false} />
          <span className="share-credit"><img src="assets/logo.svg" alt="" /> Shelfie</span>
        </div>
      </div>
    );
  }
  if (item.id === 'categories') {
    const cats = [['#1F6F6B', 'Novels', 'Top shelf · left', 0.62, '9 books · 2 reading'], ['#C99A2E', 'Study', 'Top shelf · right', 0.35, '6 books · 1 reading']];
    return (
      <div className="cat-cards">
        {cats.map(([c, n, pos, p, meta]) => (
          <div key={n} className="cat-card">
            <i className="spine" style={{ background: c }} />
            <div className="grow">
              <b>{n}</b>
              <small>{pos}</small>
              <div className="bar"><span style={{ width: `${p * 100}%`, background: c }} /></div>
              <small>{meta}</small>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <ul className="privacy-points">
      {item.points.map(([Icon, text]) => (
        <li key={text}><Icon size={19} /> {text}</li>
      ))}
    </ul>
  );
}

export function Pricing() {
  const prices = useLocalPrices();
  return (
    <section className="section section-tint" id="pricing">
      <div className="wrap">
        <SectionHead
          eyebrow="Pricing"
          title={<>Free to start. <span className="serif">Yours for life.</span></>}
          body="The App Store charges in your local currency. Monthly can be cancelled anytime."
        />
        <div className="plans">
          {PLANS.map((plan, i) => {
            const local = plan.priceKey ? prices[plan.priceKey] : plan.price;
            return (
              <Reveal key={plan.name} className={`plan ${plan.featured ? 'plan-featured' : ''}`} delay={i * 0.08}>
                <div className="plan-head">
                  <h3>{plan.name}</h3>
                  {plan.featured && <span className="pill pill-on-dark"><plan.Icon size={15} weight="fill" /> Best value</span>}
                </div>
                <div className="plan-price">
                  {local ? (
                    <b>{local}</b>
                  ) : (
                    // No confirmed price for this visitor's country: don't guess a number.
                    <b className="plan-price-text">{plan.fallback[0]}</b>
                  )}
                  <span>{local ? plan.note : plan.fallback[1]}</span>
                </div>
                {plan.featured && prices.paybackMonths && (
                  <span className="plan-save">Pays for itself in {prices.paybackMonths} months of Monthly</span>
                )}
                <p>{plan.body}</p>
                <ul className="checks">
                  {plan.features.map((feature) => (
                    <li key={feature}><Check size={16} weight="bold" />{feature}</li>
                  ))}
                </ul>
                <AppStoreButton variant={plan.featured ? 'orange' : 'dark'} label={plan.cta} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap faq-wrap">
        <SectionHead
          eyebrow="FAQ"
          title={<>Questions, <span className="serif">answered.</span></>}
          body={<>More on the <a href="support.html">Support page</a>.</>}
          center={false}
        />
        <div className="faq-list">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} className={`faq-item ${isOpen ? 'open' : ''}`} delay={i * 0.03}>
                <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{q}</span>
                  <CaretDown size={22} className="faq-chevron" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={SPRING}
                    >
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="section cta-section">
      <div className="wrap">
        <Reveal className="cta">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-copy">
            <img className="cta-icon" src="assets/icon.png" alt="" width="96" height="96" />
            <h2>Start your shelf <span className="serif">tonight.</span></h2>
            <p>Add the book on your nightstand, read a few pages and watch your first streak begin.</p>
            <AppStoreButton variant="orange" />
            <small>Free on the App Store · iPhone and iPad · iOS and iPadOS 26 or later</small>
          </div>
          <div className="cta-phones" aria-hidden="true">
            <IPhone screen="calendar" className="cta-phone cta-phone-back" />
            <IPhone screen="book" className="cta-phone cta-phone-front" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <img src="assets/logo.svg" alt="" width="32" height="29" />
            <span>Shelfie</span>
          </a>
          <p>Your reading, on a 3D bookshelf. For iPhone and iPad.</p>
        </div>
        <div className="footer-cols">
          <div>
            <b>Product</b>
            <a href="#tour">Tour</a>
            <a href="#ipad">iPad</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <b>Help</b>
            <a href="support.html">Support</a>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
          <div>
            <b>Contact</b>
            <span className="footer-name">{SUPPORT_NAME}</span>
            <a href={`mailto:${SUPPORT_EMAIL}?subject=Shelfie%20support`}>{SUPPORT_EMAIL}</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Shelfie. All rights reserved.</span>
        <span>Apple, iPhone, iPad and App Store are trademarks of Apple Inc.</span>
      </div>
    </footer>
  );
}
