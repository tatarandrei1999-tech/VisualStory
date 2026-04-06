'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    label: 'Brief',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: 'Ne trimiți brieful proiectului. Discutăm pe scurt ce ai nevoie — tipul de conținut, industria clientului, platforma țintă, deadline-ul.',
  },
  {
    number: '02',
    label: 'Pregătire',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 12l-3.75 2.7 1.5-4.5L6 7.5h4.5L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: 'Andrada concepe B-roll-urile și structura vizuală. Pregătim scriptul și teleprompterul dacă e nevoie. Ne prezentăm la filmare ready.',
  },
  {
    number: '03',
    label: 'Filmare',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 10l5-3v10l-5-3V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Ziua de filmare — până la 12 ore inclusiv deplasare. Andrei operează camera și sunetul. Andrada regizează, poziționează lumina și lucrează cu subiectul. Tu primești materialul brut organizat la final de zi.',
  },
  {
    number: '04',
    label: 'Livrare',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Materialul brut livrat organizat, gata pentru editorul tău sau pentru post-producție. Fără așteptări, fără surprize.',
  },
]

function Step({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative flex flex-col items-center md:flex-1">
      {/* Connector line (desktop) */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-[28px] left-[calc(50%+44px)] right-[calc(-50%+44px)] h-[1px]"
          style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)', opacity: 0.4 }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.13, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center text-center md:px-4"
      >
        {/* Number + icon circle */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 border border-[rgba(224,49,244,0.3)]"
          style={{ background: 'rgba(224,49,244,0.06)' }}
        >
          <div className="text-[#E031F4]">{step.icon}</div>
          <span
            className="absolute -top-2 -right-2 text-[10px] font-bold text-[#69D4F8] bg-[#020002] px-1 rounded"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            {step.number}
          </span>
        </div>

        <h3
          className="text-[18px] font-semibold text-white mb-3"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          {step.label}
        </h3>
        <p
          className="text-[14px] text-[rgba(255,255,255,0.62)] leading-relaxed max-w-[220px]"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {step.text}
        </p>
      </motion.div>

      {/* Connector line (mobile) */}
      {!isLast && (
        <div
          className="md:hidden w-[1px] h-10 mt-6"
          style={{ background: 'linear-gradient(180deg, #E031F4, #69D4F8)', opacity: 0.4 }}
        />
      )}
    </div>
  )
}

export default function HowWeWork() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="cum-lucram" className="section-padding bg-[rgba(105,212,248,0.015)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#69D4F8] mb-4 block"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            PROCES
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Simplu. Rapid. Livrat.
          </h2>
          <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-start gap-0 md:gap-4">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
