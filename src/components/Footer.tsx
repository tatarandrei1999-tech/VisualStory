export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)] bg-[#020002]">
      {/* Gradient top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #E031F4 30%, #69D4F8 70%, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo + copyright */}
          <div className="flex flex-col gap-3">
            <span
              className="text-[18px] font-bold text-white"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              VisualStory
            </span>
            <span
              className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#69D4F8]"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              VIDEO PRODUCTION FOR AGENCIES
            </span>
            <p
              className="text-[13px] text-[rgba(255,255,255,0.35)] mt-1"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              © 2026 VisualStory. Toate drepturile rezervate.
            </p>
          </div>

          {/* Center: Location */}
          <div className="flex justify-center">
            <p
              className="text-[13px] text-[rgba(255,255,255,0.45)] text-center flex items-center gap-2"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="#69D4F8" strokeWidth="1.2" />
                <circle cx="7" cy="5" r="1.5" stroke="#69D4F8" strokeWidth="1.2" />
              </svg>
              Brașov, România · Deplasare națională
            </p>
          </div>

          {/* Right: Social links */}
          <div className="flex justify-center md:justify-end gap-4">
            {[
              {
                label: 'Instagram',
                href: '#',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="13" cy="5" r="1" fill="currentColor" />
                  </svg>
                ),
              },
              {
                label: 'Facebook',
                href: '#',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M11 6H9.5C9.224 6 9 6.224 9 6.5V8H11L10.5 10H9V16H7V10H6V8H7V6.5C7 5.119 8.119 4 9.5 4H11V6z" fill="currentColor" />
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                href: '#',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M5 7v6M5 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M8 13v-3.5C8 8.67 8.67 8 9.5 8s1.5.67 1.5 1.5V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 9.5V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-[6px] flex items-center justify-center text-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.08)] hover:text-[#69D4F8] hover:border-[rgba(105,212,248,0.35)] hover:shadow-[0_0_12px_rgba(105,212,248,0.2)] transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-[11px] text-[rgba(255,255,255,0.25)]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            [De completat: link-uri sociale reale — Instagram, Facebook, LinkedIn]
          </p>
          <p
            className="text-[11px] text-[rgba(255,255,255,0.25)]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Specializați exclusiv pentru agenții de marketing · România
          </p>
        </div>
      </div>
    </footer>
  )
}
