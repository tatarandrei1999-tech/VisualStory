'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const placeholders = [
  { title: 'Campanie Facebook Ads', tag: 'A-roll + B-roll', industry: 'E-commerce', aspect: '16:9' },
  { title: 'Testimonial Client', tag: 'Testimonial', industry: 'SaaS / Tech', aspect: '9:16' },
  { title: 'Shooting Produs', tag: 'Produs', industry: 'Beauty & Lifestyle', aspect: '9:16' },
  { title: 'Podcast Video', tag: 'Podcast', industry: 'Business', aspect: '16:9' },
  { title: 'TikTok Organic', tag: 'Reels / TikTok', industry: 'Food & Beverage', aspect: '9:16' },
  { title: 'Campanie Instagram Ads', tag: 'A-roll + B-roll', industry: 'Imobiliare', aspect: '16:9' },
]

function VideoCard({ item, index }: { item: typeof placeholders[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isVertical = item.aspect === '9:16'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group card-hover rounded-[8px] overflow-hidden border border-[rgba(105,212,248,0.15)] bg-[#0a0a0a] ${
        isVertical ? 'row-span-2' : ''
      }`}
    >
      {/* Video placeholder */}
      <div
        className="relative flex flex-col items-center justify-center bg-[#0a0a0a] group-hover:bg-[#0d0d0d] transition-colors duration-300"
        style={{ aspectRatio: isVertical ? '9/16' : '16/9' }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(105,212,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(105,212,248,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Play button */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full border border-[rgba(224,49,244,0.3)] bg-[rgba(224,49,244,0.06)] flex items-center justify-center group-hover:border-[rgba(224,49,244,0.6)] group-hover:bg-[rgba(224,49,244,0.12)] transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 4l9 5-9 5V4z" fill="#E031F4" opacity="0.8" />
            </svg>
          </div>
          <span
            className="text-[12px] text-[rgba(255,255,255,0.35)] text-center px-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            [De completat: video portofoliu]
          </span>
        </div>
        {/* Aspect ratio tag */}
        <span
          className="absolute top-3 right-3 text-[10px] font-medium text-[rgba(105,212,248,0.5)] border border-[rgba(105,212,248,0.15)] px-2 py-0.5 rounded-full"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {item.aspect}
        </span>
      </div>
      {/* Card info */}
      <div className="p-4 flex flex-col gap-2 border-t border-[rgba(105,212,248,0.08)]">
        <div className="flex items-center justify-between gap-2">
          <h3
            className="text-[14px] font-semibold text-white"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            {item.title}
          </h3>
          <span
            className="shrink-0 text-[10px] font-medium uppercase tracking-[0.1em] text-[#69D4F8] border border-[rgba(105,212,248,0.2)] px-2 py-0.5 rounded-full"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {item.tag}
          </span>
        </div>
        <p
          className="text-[12px] text-[rgba(255,255,255,0.4)]"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {item.industry}
        </p>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="portofoliu" className="section-padding bg-[rgba(105,212,248,0.015)]">
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
            PORTOFOLIU
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Din portofoliul nostru.
          </h2>
          <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
          <p
            className="mt-4 text-[14px] text-[rgba(255,255,255,0.4)] italic"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            [De completat: link-uri YouTube / Vimeo pentru fiecare proiect]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholders.map((item, i) => (
            <VideoCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
