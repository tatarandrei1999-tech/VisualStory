'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="#69D4F8" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="#69D4F8" strokeWidth="1.5" />
        <path d="M3 10h4M21 10h4" stroke="#69D4F8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Videograful tău livrează cadre frumoase. Dar nu vânzări.',
    text: 'Un videograf generalist filmează bine. Dar nu știe ce e un hook, nu înțelege de ce primul cadru din ad determină CPM-ul și nu gândește în termeni de conversie. Tu da.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="21" rx="2" stroke="#69D4F8" strokeWidth="1.5" />
        <path d="M3 10h22" stroke="#69D4F8" strokeWidth="1.5" />
        <path d="M9 4V7M19 4V7" stroke="#69D4F8" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="7" y="14" width="4" height="4" rx="1" fill="#69D4F8" opacity="0.5" />
        <rect x="17" y="14" width="4" height="4" rx="1" fill="none" stroke="#69D4F8" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: 'Găsești un om bun. Nu e disponibil când ai nevoie.',
    text: 'Sau filmează și nunți, și corporate, și reclame. Ești al cincilea pe lista lui de priorități. Clientul tău high-ticket nu poate aștepta.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#69D4F8" strokeWidth="1.5" />
        <path d="M14 8v6l4 3" stroke="#69D4F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Studioul cere 3 săptămâni și un buget de producție separat.',
    text: 'Pre-producție, concept, casting, locație, post-producție. Până lansezi campania, fereastra de oportunitate s-a închis.',
  },
]

function ProblemCard({ icon, title, text, index }: { icon: React.ReactNode; title: string; text: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="glow-magenta-hover card-hover flex flex-col gap-5 p-7 rounded-[8px] border border-[rgba(105,212,248,0.12)] bg-[rgba(255,255,255,0.02)]"
    >
      <div className="w-12 h-12 rounded-[6px] flex items-center justify-center bg-[rgba(105,212,248,0.06)] border border-[rgba(105,212,248,0.12)]">
        {icon}
      </div>
      <h3
        className="text-[19px] font-semibold text-white leading-snug"
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] text-[rgba(255,255,255,0.62)] leading-relaxed"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {text}
      </p>
    </motion.div>
  )
}

export default function Problem() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-[#020002]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Știm cu ce te confrunți.
          </h2>
          <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
