import { useEffect, useRef, useState } from 'react';
import { Check } from '@phosphor-icons/react';

import { TOUR } from '../config.js';
import { Reveal, SectionHead } from './common.jsx';
import { IPhone } from './Device.jsx';

/**
 * The product tour. On wide screens the phone sticks while the chapters scroll past, and its
 * screen follows the chapter in the middle of the viewport. On narrow screens each chapter
 * carries its own phone.
 */
export function Tour() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    // A chapter is "current" when it crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section tour" id="tour">
      <div className="wrap">
        <SectionHead
          eyebrow="The tour"
          title={<>Everything happens <span className="serif">on the shelf.</span></>}
          body="No lists to scroll, no forms to fill. Your books sit in a room you can walk up to."
        />
        <div className="tour-grid">
          <div className="tour-steps">
            {TOUR.map((step, i) => (
              <article
                key={step.id}
                ref={(el) => { refs.current[i] = el; }}
                data-index={i}
                className={`tour-step ${active === i ? 'is-active' : ''}`}
              >
                <span className="tour-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="tour-text">
                  <span className="kicker">
                    {step.kicker}
                    {step.pro && <span className="pro">PRO</span>}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <ul className="checks">
                    {step.points.map((point) => (
                      <li key={point}><Check size={16} weight="bold" />{point}</li>
                    ))}
                  </ul>
                </div>
                <Reveal className={`tour-inline tone-${step.id}`}>
                  <IPhone screen={step.screen} />
                </Reveal>
              </article>
            ))}
          </div>

          {/* Only one of the two layouts shows at a time (CSS), so screen readers get one phone. */}
          <div className="tour-sticky">
            <div className={`tour-device tone-${TOUR[active].id}`}>
              <span className="tour-glow" aria-hidden="true" />
              <IPhone screen={TOUR[active].screen} />
              <ol className="tour-dots" aria-hidden="true">
                {TOUR.map((step, i) => (
                  <li key={step.id} className={active === i ? 'on' : ''} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
