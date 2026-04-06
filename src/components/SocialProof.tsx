'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    initials: 'NC',
    name: '[De completat: Nume Client]',
    role: '[De completat: Owner / Marketing Manager]',
    company: '[De completat: Agenție]',
    text: '[De completat: testimonial real de la client]',
    gradientFrom: '#E031F4',
    gradientTo: '#69D4F8',
  },
  {
    initials: 'AM',
    name: '[De completat: Nume Client]',
    role: '[De completat: Owner / Marketing Manager]',
    company: '[De completat: Agenție]',
    text: '[De completat: testimonial real de la client]',
    gradientFrom: '#69D4F8',
    gradientTo: '#E031F4',
  },
  {
    initials: 'RD',
    name: '[De completat: Nume Client]',
    role: '[De completat: Owner / Marketing Manager]',
    company: '[De completat: Agenție]',
    text: '[De completat: testimonial real de la client]',
    gradientFrom: '#E031F4',
    gradientTo: '#FF6B2B',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.5 4.5H14l-4.5 3.3 1.8 4.7L7 11 2.7 13.5 4.5 8.8 0 5.5h5.5L7 1z"
            fill="#E031F4"
          />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="glow-magenta-hover card-hover flex flex-col gap-5 p-7 rounded-[8px] border border-[rgba(105,212,248,0.15)] bg-[rgba(255,255,255,0.02)]"
    >
      <StarRating />
      <p
        className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed italic flex-1"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-[rgba(255,255,255,0.06)]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})` }}
        >
          {t.initials}
        </div>
        <div>
          <p
            className="text-[14px] font-semibold text-white"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            {t.name}
          </p>
          <p
            className="text-[12px] text-[rgba(255,255,255,0.45)]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function SocialProof() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const buildRef = useRef(null)
  const buildInView = useInView(buildRef, { once: true, margin: '-60px' })

  return (
    <section className="section-padding bg-[#020002]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#69D4F8] mb-4 block"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            SOCIAL PROOF
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Cu cine lucrăm.
          </h2>
          <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
        </motion.div>

        {/* BuildBuzz partnership */}
        <motion.div
          ref={buildRef}
          initial={{ opacity: 0, y: 24 }}
          animate={buildInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="gradient-border mb-14 p-8 md:p-10 rounded-[8px]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* BuildBuzz logo placeholder */}
            <div
              className="shrink-0 w-16 h-16 rounded-[8px] flex items-center justify-center border border-[rgba(224,49,244,0.2)] bg-[rgba(224,49,244,0.06)]"
            >
              <span
                className="text-[11px] font-bold text-[#E031F4] uppercase tracking-widest text-center leading-tight"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                BB
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3
                  className="text-[20px] font-bold text-white"
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  BuildBuzz
                </h3>
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#69D4F8] border border-[rgba(105,212,248,0.25)] px-2 py-0.5 rounded-full"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  PARTENER
                </span>
              </div>
              <p
                className="text-[15px] text-[rgba(255,255,255,0.68)] leading-relaxed max-w-2xl"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Toate cadrele video pentru campaniile clienților BuildBuzz sunt produse de VisualStory.
                Agenție high-ticket specializată în Facebook Ads și Instagram Ads pentru clienți din industrie.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
