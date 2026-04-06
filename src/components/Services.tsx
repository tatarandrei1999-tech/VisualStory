'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M19 9.5l5-3v13l-5-3V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 11h6M8 13.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    title: 'Reclame Video — Ads',
    text: 'A-rolls și B-rolls pentru Facebook Ads, Instagram Ads și TikTok Ads. Conținut filmat cu înțelegerea structurii unui creative performant.',
    tag: 'PERFORMANCE',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="10" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 22c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M18 8l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    title: 'Testimoniale',
    text: 'Filmări structurate cu clienții brandului tău. Script, teleprompter, lumină, direcție de regie. Testimoniale care convertesc, nu doar vorbesc.',
    tag: 'CONVERSIE',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13" cy="14" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Shooting de Produs',
    text: 'Cadre de produs în mișcare pentru ads și organic. B-rolls de detaliu, contextualizare, lifestyle.',
    tag: 'PRODUS',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="7" y="2" width="12" height="22" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 6h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <path d="M10 13l2.5 2.5L16 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Reels & TikTok Organic',
    text: 'Conținut vertical nativ pentru Instagram Reels și TikTok. Filmat să arate organic, gândit să performeze.',
    tag: 'ORGANIC',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 3v4M13 19v4M3 13h4M19 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'Podcasturi Video',
    text: 'Filmare podcast cu una sau două camere, lumină profesională, sunet clar. Gata pentru editare și distribuție multiplă.',
    tag: 'PODCAST',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3l2.5 7h7.5l-6 4.5 2.5 7L13 18l-6.5 3.5 2.5-7L3 10h7.5L13 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Orice ai nevoie',
    text: 'Dacă clientul tău are nevoie de conținut video și nu se regăsește mai sus — scriem pe hârtie, venim și filmăm.',
    tag: 'CUSTOM',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group glow-magenta-hover card-hover flex flex-col gap-4 p-6 rounded-[8px] border border-[rgba(224,49,244,0.12)] bg-[rgba(255,255,255,0.02)] cursor-default"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-[6px] flex items-center justify-center text-[#E031F4] border border-[rgba(224,49,244,0.2)] bg-[rgba(224,49,244,0.05)] group-hover:border-[rgba(224,49,244,0.5)] transition-colors duration-300"
        >
          {service.icon}
        </div>
        <span
          className="text-[10px] font-medium uppercase tracking-[0.14em] text-[rgba(105,212,248,0.6)] px-2 py-1 border border-[rgba(105,212,248,0.12)] rounded-full"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {service.tag}
        </span>
      </div>
      <h3
        className="text-[17px] font-semibold text-white leading-snug"
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        {service.title}
      </h3>
      <p
        className="text-[14px] text-[rgba(255,255,255,0.6)] leading-relaxed"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {service.text}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="servicii" className="section-padding bg-[#020002]">
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
            SERVICII
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Ce producem pentru agenția ta.
          </h2>
          <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
