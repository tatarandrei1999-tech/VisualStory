import ProgressBar from '@/components/ProgressBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowWeWork from '@/components/HowWeWork'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import SocialProof from '@/components/SocialProof'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowWeWork />
        <Services />
        <Portfolio />
        <SocialProof />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
