'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const faqs = [
  {
    q: 'Livrați și editarea materialului?',
    a: 'Nu. Livrăm materialul brut filmat, organizat pe scene și tipuri de cadre. Agențiile cu care lucrăm au editori proprii sau colaboratori. Dacă ai nevoie de editare, discutăm la apel.',
  },
  {
    q: 'Cum funcționează ziua de 12 ore?',
    a: 'Cele 12 ore includ tot — de la momentul în care plecăm din Brașov până când ajungem înapoi. Dacă locația e în Brașov, cele 12 ore sunt integral pentru filmare. Dacă e la distanță, drumul dus-întors intră în cele 12 ore.',
  },
  {
    q: 'Puteți filma în toată țara?',
    a: 'Da. Ne deplasăm cu mașina în orice locație din România. Costul combustibilului se adaugă separat la tariful zilei.',
  },
  {
    q: 'Câte zile în avans trebuie să rezervăm?',
    a: 'Recomandăm minim 5–7 zile lucrătoare în avans pentru a asigura disponibilitatea. Pentru proiecte urgente, contactează-ne direct — găsim o soluție.',
  },
  {
    q: 'Lucrați cu orice tip de agenție?',
    a: 'Lucrăm exclusiv cu agenții de marketing care au clienți ce pot susține bugetul de producție video. Nu colaborăm cu agenții care revin clientului final cu un buget total sub 500 EUR pentru producție.',
  },
  {
    q: 'Ce echipament folosiți?',
    a: 'Detaliile despre echipament le discutăm la apelul inițial, în funcție de tipul proiectului. Echipamentul este profesional și inclus în tariful zilei.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-[rgba(255,255,255,0.07)]"
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-[16px] font-medium text-[rgba(255,255,255,0.88)] group-hover:text-white transition-colors duration-200 leading-snug"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          {item.q}
        </span>
        <span
          className="shrink-0 mt-0.5 w-6 h-6 rounded-full border border-[rgba(224,49,244,0.3)] flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? 'rgba(224,49,244,0.12)' : 'transparent',
            borderColor: open ? 'rgba(224,49,244,0.5)' : 'rgba(224,49,244,0.3)',
            color: open ? '#E031F4' : 'rgba(255,255,255,0.5)',
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-5 text-[15px] text-[rgba(255,255,255,0.6)] leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-[rgba(105,212,248,0.015)]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#69D4F8] mb-4 block"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            FAQ
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Întrebări frecvente.
          </h2>
          <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
        </motion.div>

        <div className="flex flex-col border-t border-[rgba(255,255,255,0.07)]">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
