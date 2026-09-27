import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import '@fontsource-variable/plus-jakarta-sans';

import { Hero } from './components/Hero.jsx';
import { Nav } from './components/Nav.jsx';
import { Benefits, Bento, Cta, Faq, Features, Footer, Pricing, Steps } from './components/Sections.jsx';
import { startSmoothScroll } from './smooth-scroll.js';
import './landing.css';

function App() {
  useEffect(() => startSmoothScroll(), []);
  return (
    // reducedMotion="user": with Reduce Motion on, motion keeps fades but drops movement.
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Bento />
        <Steps />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </MotionConfig>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
