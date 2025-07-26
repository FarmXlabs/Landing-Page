import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AdvantageSection from '@/components/AdvantageSection'
import EcosystemSection from '@/components/EcosystemSection'
import WaitlistSection from '@/components/WaitlistSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AdvantageSection />
      <EcosystemSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  )
} 