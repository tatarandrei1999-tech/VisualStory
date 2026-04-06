'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Servicii', href: '#servicii' },
  { label: 'Cum lucrăm', href: '#cum-lucram' },
  { label: 'Portofoliu', href: '#portofoliu' },
  { label: 'Echipă', href: '#echipa' },
  { label: 'Prețuri', href: '#preturi' },
]

function ApertureLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blade-grad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E031F4" />
          <stop offset="55%" stopColor="#FF6B2B" />
          <stop offset="100%" stopColor="#D42020" />
        </linearGradient>
        <filter id="cyan-glow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer cyan ring */}
      <circle cx="19" cy="19" r="17.5" stroke="#69D4F8" strokeWidth="1.2" filter="url(#cyan-glow)" />
      {/* Aperture blades — 6 rotated ellipses */}
      <ellipse cx="19" cy="19" rx="3.5" ry="9" fill="url(#blade-grad)" opacity="0.85" transform="rotate(0 19 19)" />
      <ellipse cx="19" cy="19" rx="3.5" ry="9" fill="url(#blade-grad)" opacity="0.85" transform="rotate(60 19 19)" />
      <ellipse cx="19" cy="19" rx="3.5" ry="9" fill="url(#blade-grad)" opacity="0.85" transform="rotate(120 19 19)" />
      <ellipse cx="19" cy="19" rx="3.5" ry="9" fill="url(#blade-grad)" opacity="0.85" transform="rotate(180 19 19)" />
      <ellipse cx="19" cy="19" rx="3.5" ry="9" fill="url(#blade-grad)" opacity="0.85" transform="rotate(240 19 19)" />
      <ellipse cx="19" cy="19" rx="3.5" ry="9" fill="url(#blade-grad)" opacity="0.85" transform="rotate(300 19 19)" />
      {/* Center circle */}
      <circle cx="19" cy="19" r="4.5" fill="#020002" />
      <circle cx="19" cy="19" r="2" fill="url(#blade-grad)" opacity="0.7" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'navbar-blur bg-[rgba(2,0,2,0.85)] border-b border-[rgba(105,212,248,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="group-hover:drop-shadow-[0_0_8px_rgba(105,212,248,0.6)] transition-all duration-300">
              <ApertureLogo />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[20px] font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                VisualStory
              </span>
              <span
                className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#69D4F8] mt-0.5"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                VIDEO PRODUCTION FOR AGENCIES
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-200 font-medium"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-gradient px-5 py-2.5 text-[14px] font-semibold rounded-[6px] ml-2"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Hai să colaborăm
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            <span
              className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 navbar-blur bg-[rgba(2,0,2,0.95)] border-b border-[rgba(105,212,248,0.1)] md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[16px] text-[rgba(255,255,255,0.85)] hover:text-white py-2 border-b border-[rgba(255,255,255,0.06)] font-medium"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-gradient px-5 py-3 text-[15px] font-semibold rounded-[6px] mt-2 text-center"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Hai să colaborăm
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
