import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Industries from '@/components/sections/Industries'
import Testimonials from '@/components/sections/Testimonials'
import LeadForm from '@/components/sections/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  )
}
