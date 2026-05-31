import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import Cross from './Cross'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}
export default function HeaderComponent() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 100]);
  const eyebrowY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 70]);
  const titleY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 38]);
  const leadY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 16]);
  return (
    <header className="hero">
      <motion.div
        className="hero__blob"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <div className="hero__grid">
        <div className="hero__main">
          <motion.p
            className="hero__eyebrow"
            style={{ y: eyebrowY }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <Cross /> SENIOR FRONTEND DEVELOPER — ZURICH, CH
          </motion.p>
          <motion.h1
            className="hero__title"
            style={{ y: titleY }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            FRONTEND
            <br />
            <span className="hero__title--blood">ENGINEER</span>
           
          </motion.h1>
          <motion.p
            className="hero__lead"
            style={{ y: leadY }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Large-scale frontend applications in TypeScript &amp; JavaScript. 7+
            years across fintech, pharmaceutical &amp; consumer domains — deep
            ownership of component architecture and design systems.
          </motion.p>
          <motion.div
            className="hero__cta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a className="btn btn--primary" href="#work">
              VIEW WORK →
            </a>
            <a className="btn btn--ghost" href="#contact">
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
        <motion.aside
          className="hero__spec"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          <div className="spec__row">
            <span>UNIT</span>
            <span>AYRTON R. ZAMARIAN</span>
          </div>
          <div className="spec__row">
            <span>CLASS</span>
            <span>SENIOR / FRONTEND</span>
          </div>
          <div className="spec__row">
            <span>EXP</span>
            <span>7+ YEARS</span>
          </div>
          <div className="spec__row">
            <span>BASE</span>
            <span>ZURICH · CH.</span>
          </div>
          <div className="spec__row">
            <span>AUTH</span>
            <span>EU / SWISS </span>
          </div>
        
          <div className="spec__barcode" aria-hidden="true" />
          <div className="spec__serial">SERIAL ／ AZ-2099-FE</div>
        </motion.aside>
      </div>
    </header>
  );
}
