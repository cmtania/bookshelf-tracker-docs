import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronDown } from 'lucide-react';

import { BENEFITS, BENTO, FAQS, FEATURES, PLANS, SPRING, STEPS, SUPPORT_EMAIL, SUPPORT_NAME } from '../config.js';
import { useLocalPrices } from '../hooks.js';
import { Bookcase } from './Bookcase.jsx';
import { AppStoreButton, Reveal, SectionHead } from './common.jsx';
import { Phone } from './Phone.jsx';

export function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="wrap">
        <SectionHead
          eyebrow="Why Shelfie"
          title="A reading tracker that feels like a bookshelf"
          body="Everything a reading habit needs, without spreadsheets or long forms."
        />
        <div className="benefit-grid">
          {BENEFITS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} className="card benefit" delay={i * 0.06}>
              <span className="icon-tile"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="section section-tint" id="features">
      <div className="wrap">
        <SectionHead eyebrow="Features" title="Built around the books you’re reading" />
        {FEATURES.map((feature, i) => (
          <div key={feature.id} className={`feature feature-${i} ${i % 2 ? 'flip' : ''}`}>
            <Reveal className="feature-copy">
              <span className="eyebrow">{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <ul className="checks">
                {feature.points.map((point) => (
                  <li key={point}><Check size={16} strokeWidth={2.6} />{point}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="feature-visual" delay={0.08}>
              <div className="feature-backdrop" />
              <Phone screen={feature.screen} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Bento() {
  return (
    <section className="section" id="more">
      <div className="wrap">
        <SectionHead eyebrow="And more" title="The details that make it yours" />
        <div className="bento">
          {BENTO.map((item, i) => (
            <Reveal key={item.id} className={`card bento-card bento-${item.id}`} delay={i * 0.06}>
              <div className="bento-text">
                <span className="icon-tile small"><item.Icon size={18} /></span>
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
        <li key={text}><Icon size={16} /> {text}</li>
      ))}
    </ul>
  );
}

export function Steps() {
  return (
    <section className="section section-tint" id="how">
      <div className="wrap">
        <SectionHead eyebrow="How it works" title="From empty shelf to reading streak in three steps" />
        <ol className="steps">
          {STEPS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} as="li" className="card step" delay={i * 0.08}>
              <span className="step-number">{i + 1}</span>
              <span className="icon-tile"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  const prices = useLocalPrices();
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <SectionHead
          eyebrow="Pricing"
          title="Free to start. Go Pro monthly, or once for life."
          body="The App Store charges in your local currency. Monthly can be cancelled anytime."
        />
        <div className="plans">
          {PLANS.map((plan, i) => {
            const local = plan.priceKey ? prices[plan.priceKey] : plan.price;
            return (
            <Reveal key={plan.name} className={`card plan ${plan.featured ? 'plan-featured' : ''}`} delay={i * 0.08}>
              <div className="plan-head">
                <h3>{plan.name}</h3>
                {plan.featured && <span className="pill pill-on-dark"><plan.Icon size={13} /> Best value</span>}
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
                  <li key={feature}><Check size={16} strokeWidth={2.6} />{feature}</li>
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
    <section className="section section-tint" id="faq">
      <div className="wrap faq-wrap">
        <SectionHead
          eyebrow="FAQ"
          title="Questions, answered"
          body={<>More on the <a href="support.html">Support page</a>.</>}
          center={false}
        />
        <div className="faq-list">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} className={`card faq-item ${isOpen ? 'open' : ''}`} delay={i * 0.04}>
                <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
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
    <section className="section">
      <div className="wrap">
        <Reveal className="cta">
          <div className="cta-copy">
            <h2>Start your shelf tonight</h2>
            <p>Add the book on your nightstand, read a few pages and watch your first streak begin.</p>
            <AppStoreButton />
          </div>
          <div className="cta-visual" aria-hidden="true">
            <Bookcase className="cta-bookcase" labels={false} />
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
          <p>Your reading, on a 3D bookshelf. For iPhone.</p>
        </div>
        <div className="footer-cols">
          <div>
            <b>Product</b>
            <a href="#features">Features</a>
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
        <span>Apple, iPhone and App Store are trademarks of Apple Inc.</span>
      </div>
    </footer>
  );
}
