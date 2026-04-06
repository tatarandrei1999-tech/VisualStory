import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'VisualStory — Video Production for Marketing Agencies',
  description:
    'Echipă de producție video specializată exclusiv pentru agenții de marketing din România. A-rolls, B-rolls, testimoniale, produs. 350 EUR / zi de filmare.',
  keywords: [
    'producție video',
    'agenție marketing',
    'videografie România',
    'reclame video',
    'Facebook Ads video',
    'TikTok video',
    'VisualStory',
    'Brașov',
  ],
  openGraph: {
    title: 'VisualStory — Video Production for Marketing Agencies',
    description:
      'Conținut video care intră în funnel și iese în vânzări. Partener de producție video exclusiv pentru agenții de marketing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#020002] text-white">{children}</body>
    </html>
  )
}
