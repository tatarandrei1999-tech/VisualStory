'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const includes = [
  'Până la 12 ore (inclusiv deplasare)',
  'Operator video + Regizor creativ',
  'Echipament profesional inclus',
  'Material brut organizat livrat la final de zi',
  'Disponibil în toată România',
]

export default function Pricing() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-80px' })

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="preturi" className="section-padding bg-[#020002]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#69D4F8] mb-4 block"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            PREȚURI
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Investiție clară. Fără surprize.
          </h2>
          <div className="w-16 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 32 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            className="gradient-border mx-auto max-w-2xl"
            style={{ boxShadow: '0 0 60px rgba(224,49,244,0.12), 0 0 120px rgba(105,212,248,0.06)' }}
          >
            <div className="p-8 md:p-12">
              {/* Tag */}
              <div className="flex justify-center mb-8">
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.1)] px-4 py-1.5 rounded-full"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  TARIF STANDARD
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-end justify-center gap-2">
                  <span
                    className="text-[72px] md:text-[88px] font-bold leading-none gradient-text"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    350
                  </span>
                  <span
                    className="text-[28px] font-semibold text-[rgba(255,255,255,0.7)] mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    EUR
                  </span>
                </div>
                <p
                  className="text-[15px] text-[rgba(255,255,255,0.5)] mt-1"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  / zi de filmare
                </p>
              </div>

              {/* Separator */}
              <div className="h-[1px] mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(224,49,244,0.4), rgba(105,212,248,0.4), transparent)' }} />

              {/* What's included */}
              <ul className="flex flex-col gap-4 mb-8">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[rgba(255,255,255,0.78)]"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    <span className="shrink-0 mt-0.5 text-[#E031F4] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Separator */}
              <div className="h-[1px] mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(224,49,244,0.3), rgba(105,212,248,0.3), transparent)' }} />

              {/* Extras */}
              <div className="flex flex-col gap-4 mb-10">
                <p
                  className="text-[14px] text-[rgba(255,255,255,0.55)] flex items-start gap-2"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  <span className="text-[#69D4F8] shrink-0 font-medium">+</span>
                  25 EUR / oră suplimentară peste 12 ore
                </p>
                <p
                  className="text-[14px] text-[rgba(255,255,255,0.55)] flex items-start gap-2"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  <span className="text-[#69D4F8] shrink-0 font-medium">→</span>
                  Costul deplasării se calculează în funcție de distanță și prețul combustibilului la zi
                </p>
                <p
                  className="text-[13px] text-[rgba(255,255,255,0.35)] italic"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Prețurile sunt exprimate în EUR. Facturarea se discută la primul apel.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="btn-gradient w-full py-4 text-[15px] font-semibold rounded-[6px]"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Verifică disponibilitatea
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
