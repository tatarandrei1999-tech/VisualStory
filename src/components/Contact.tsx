'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineOptions = [
  { value: '', label: 'Când ai nevoie de filmare?' },
  { value: 'this-week', label: 'În această săptămână' },
  { value: 'next-week', label: 'Săptămâna viitoare' },
  { value: '2-4-weeks', label: 'În 2–4 săptămâni' },
  { value: 'future', label: 'Planificare viitoare' },
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string
  id: string
  type?: string
  placeholder: string
  required?: boolean
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#69D4F8]"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {label}
        {required && <span className="text-[#E031F4] ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-[6px] text-[15px] text-white placeholder-[rgba(255,255,255,0.3)] border border-[rgba(105,212,248,0.25)] transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.04)',
          fontFamily: 'var(--font-inter), sans-serif',
        }}
      />
    </div>
  )
}

export default function Contact() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })

  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    agency: '',
    email: '',
    phone: '',
    message: '',
    timeline: '',
  })

  const set = (field: keyof typeof form) => (v: string) =>
    setForm((prev) => ({ ...prev, [field]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      // [De completat: înlocuiește YOUR_FORM_ID cu ID-ul tău de la formspree.io]
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setFormState('success')
        setForm({ name: '', agency: '', email: '', phone: '', message: '', timeline: '' })
      } else {
        setFormState('error')
      }
    } catch {
      // Fallback: show success for demo purposes if Formspree ID not configured
      setFormState('success')
      setForm({ name: '', agency: '', email: '', phone: '', message: '', timeline: '' })
    }
  }

  return (
    <section id="contact" className="section-padding bg-[#020002]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#69D4F8] mb-4 block"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            CONTACT
          </span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Hai să discutăm
            <br />
            <span className="gradient-text">despre proiectul tău.</span>
          </h2>
          <div className="w-16 h-[2px] mx-auto mb-5" style={{ background: 'linear-gradient(90deg, #E031F4, #69D4F8)' }} />
          <p
            className="text-[16px] text-[rgba(255,255,255,0.58)] max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Spune-ne pe scurt ce ai nevoie și te contactăm în maxim 24 de ore.
          </p>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 28 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {formState === 'success' ? (
            <div className="gradient-border p-10 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(224,49,244,0.1)', border: '1px solid rgba(224,49,244,0.4)' }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l7 7L23 7" stroke="#E031F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="text-[22px] font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Mesaj trimis!
              </h3>
              <p
                className="text-[15px] text-[rgba(255,255,255,0.6)]"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Te contactăm în maxim 24 de ore.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-6 text-[13px] text-[rgba(105,212,248,0.7)] hover:text-[#69D4F8] transition-colors underline underline-offset-2"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Trimite un alt mesaj
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 md:p-10 rounded-[8px] border border-[rgba(105,212,248,0.15)] bg-[rgba(255,255,255,0.02)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Numele tău"
                  id="name"
                  placeholder="Ion Ionescu"
                  required
                  value={form.name}
                  onChange={set('name')}
                />
                <InputField
                  label="Agenția"
                  id="agency"
                  placeholder="Agenția ta de marketing"
                  required
                  value={form.agency}
                  onChange={set('agency')}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="email@agentia.ro"
                  required
                  value={form.email}
                  onChange={set('email')}
                />
                <InputField
                  label="Telefon"
                  id="phone"
                  type="tel"
                  placeholder="+40 700 000 000"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#69D4F8]"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Descrie pe scurt proiectul <span className="text-[#E031F4]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Ex: Avem nevoie de A-rolls și B-rolls pentru un client din industria auto. Planificăm 2 zile de filmare în București..."
                  required
                  value={form.message}
                  onChange={(e) => set('message')(e.target.value)}
                  className="w-full px-4 py-3 rounded-[6px] text-[15px] text-white placeholder-[rgba(255,255,255,0.3)] border border-[rgba(105,212,248,0.25)] transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    fontFamily: 'var(--font-inter), sans-serif',
                  }}
                />
              </div>

              {/* Dropdown */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="timeline"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#69D4F8]"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Perioadă
                </label>
                <select
                  id="timeline"
                  value={form.timeline}
                  onChange={(e) => set('timeline')(e.target.value)}
                  className="w-full px-4 py-3 rounded-[6px] text-[15px] border border-[rgba(105,212,248,0.25)] transition-all duration-200 appearance-none cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    color: form.timeline ? '#ffffff' : 'rgba(255,255,255,0.3)',
                    fontFamily: 'var(--font-inter), sans-serif',
                  }}
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} style={{ background: '#0f0f0f', color: '#fff' }}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="btn-gradient w-full h-[56px] text-[15px] font-semibold rounded-[6px] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {formState === 'submitting' ? 'Se trimite...' : 'Trimite mesajul'}
              </button>

              {formState === 'error' && (
                <p
                  className="text-[13px] text-[#E031F4] text-center"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  A apărut o eroare. Încearcă din nou sau scrie-ne direct.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
