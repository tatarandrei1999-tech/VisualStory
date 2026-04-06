'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-left magenta glow */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '55%',
            height: '55%',
            background: 'radial-gradient(circle, rgba(224,49,244,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-right cyan glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '55%',
            height: '55%',
            background: 'radial-gradient(circle, rgba(105,212,248,0.05) 0%, transparent 70%)',
          }}
        />
        {/* Center subtle vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,0,2,0.4) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Tag */}
        <motion.div {...fadeUp(0.1)}>
          <span
            className="inline-block text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#69D4F8] mb-8 px-4 py-2 border border-[rgba(105,212,248,0.2)] rounded-full"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            PARTENER DE PRODUCȚIE VIDEO PENTRU AGENȚII DE MARKETING
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[42px] md:text-[64px] lg:text-[72px] font-bold leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          Conținut video care{' '}
          <span className="gradient-text">intră în funnel</span>
          <br />
          și iese în{' '}
          <span className="gradient-text">vânzări.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-[16px] md:text-[18px] text-[rgba(255,255,255,0.72)] leading-relaxed max-w-2xl mb-10"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Suntem VisualStory — o echipă de 2 specializată exclusiv în producție
          video pentru agenții de marketing din România. A-rolls, B-rolls,
          testimoniale, produs. Înțelegem cum funcționează un creative de ads.
          Filmăm în consecință.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.48)}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-gradient px-8 py-4 text-[15px] font-semibold rounded-[6px] min-w-[200px]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Hai să colaborăm
          </button>
          <button
            onClick={() => scrollTo('#portofoliu')}
            className="text-[15px] font-medium text-[rgba(255,255,255,0.75)] hover:text-white transition-colors duration-200 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Vezi portofoliul
            <span className="text-[#69D4F8]">↓</span>
          </button>
        </motion.div>

        {/* Social proof micro */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[13px] text-[rgba(255,255,255,0.45)]"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#E031F4] inline-block" />
            100+ proiecte filmate
          </span>
          <span className="hidden sm:block w-[1px] h-4 bg-[rgba(255,255,255,0.15)]" />
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#E031F4] inline-block" />
            2.5 ani experiență
          </span>
          <span className="hidden sm:block w-[1px] h-4 bg-[rgba(255,255,255,0.15)]" />
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#69D4F8] inline-block" />
            Partener BuildBuzz
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[rgba(105,212,248,0.4)] to-transparent" />
      </motion.div>
    </section>
  )
}
