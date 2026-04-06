'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  {
    initials: 'AT',
    name: 'Tatar Andrei',
    role: 'Operator Video & Tehnic',
    description:
      'Se ocupă de tot ce ține de cameră, echipament și sunet. 2.5 ani de experiență în filmare pentru campanii de performance marketing. 100+ proiecte livrate.',
    gradientFrom: '#E031F4',
    gradientTo: '#69D4F8',
    highlights: ['Operator Video', 'Echipament', 'Sunet'],
  },
  {
    initials: 'AC',
    name: 'Andrada Ciuciuc',
    role: 'Regizor Creativ',
    description:
      'Concepe structura vizuală a fiecărei filmări — B-rolls, poziționarea luminilor, lucrul cu subiectul pe script și teleprompter. Asigură că fiecare cadru are un scop în creative.',
    gradientFrom: '#69D4F8',
    gradientTo: '#E031F4',
    highlights: ['Regie Creativă', 'B-roll', 'Teleprompter'],
  },
]

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center p-8 md:p-10 rounded-[8px] border border-[rgba(105,212,248,0.12)] bg-[rgba(255,255,255,0.02)] card-hover glow-magenta-hover"
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div
          className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full flex items-center justify-center text-[32px] md:text-[36px] font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
            boxShadow: `0 0 40px rgba(${member.gradientFrom === '#E031F4' ? '224,49,244' : '105,212,248'}, 0.25)`,
          }}
        >
          {member.initials}
        </div>
        {/* Decorative ring */}
        <div
          className="absolute inset-[-4px] rounded-full opacity-30"
          style={{
            background: `conic-gradient(from 0deg, ${member.gradientFrom}, ${member.gradientTo}, ${member.gradientFrom})`,
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), white calc(100% - 1px))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), white calc(100% - 1px))',
          }}
        />
      </div>

      <h3
        className="text-[22px] font-bold text-white mb-1"
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        {member.name}
      </h3>
      <p
        className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#69D4F8] mb-5"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {member.role}
      </p>

      <p
        className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-6 max-w-sm"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {member.description}
      </p>

      {/* Skill tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {member.highlights.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[rgba(105,212,248,0.7)] border border-[rgba(105,212,248,0.18)] px-3 py-1 rounded-full"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Team() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="echipa" className="section-padding bg-[rgba(105,212,248,0.015)]">
      <div className="max-w-5xl mx-auto">
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
            ECHIPA
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Oamenii din spatele camerei.
          </h2>
          <div className="w-16 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
          <p
            className="mt-5 text-[16px] text-[rgba(255,255,255,0.55)] max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Nu un studio. Nu un freelancer. O echipă de 2 care lucrează exclusiv
            pentru agenții de marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
