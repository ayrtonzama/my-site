import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import Cross from './Cross'
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}
const projects = [
  {
    code: 'PRJ-001',
    title: 'In-house Design System & Component Library',
    org: 'Yokoy / Perk',
    desc: 'Built and owned the reusable Angular component library and design system that became the standard across the fintech SaaS product — sole frontend engineer driving consistency, accessibility, and velocity across multiple parallel teams.',
    tags: ['Angular', 'TypeScript', 'SCSS', 'Design Systems'],
  },
  {
    code: 'PRJ-002',
    title: 'Real-time Card & Transaction UI',
    org: 'Yokoy / Perk',
    desc: 'Accuracy-critical interfaces over high-volume financial data, with tuned RxJS pipelines for real-time updates. Pixel-perfect Figma implementation kept frontend defects and support tickets consistently low.',
    tags: ['RxJS', 'Reactive UI', 'Fintech', 'Figma'],
  },
  {
    code: 'PRJ-003',
    title: 'Native Mobile Feature Consolidation',
    org: 'Perk',
    desc: 'Post-acquisition product consolidation — ported six legacy Ionic features into existing native iOS (Swift) and Android (Kotlin) apps, plus built custom native bridge plugins.',
    tags: ['Swift', 'Kotlin', 'Ionic', 'Mobile'],
  },
]
export default function WorkComponent() {
    return (
        <section className="section" id="work">
          <div className="section__head">
            <h2 className="section__title"><Cross /> SELECTED WORK</h2>
            <span className="section__idx">SEC.01 / DEPLOYMENTS</span>
          </div>
          <p className="section__note">
            Much of this work lives in private fintech repositories — here is what I have built and owned.
          </p>
          <div className="cards">
            {projects.map((p, i) => (
              <motion.article className="card" key={p.code}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: '-80px' }} custom={i}>
                <div className="card__head">
                  <span className="card__code">{p.code}</span>
                  <span className="card__org">{p.org}</span>
                </div>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
                <div className="card__tags">
                  {p.tags.map((t) => <span className="tag" key={t}><Cross />{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
    )
}