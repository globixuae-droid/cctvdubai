import type { Metadata } from 'next'
import Hero          from '@/components/home/Hero'
import ServiceShowcase from '@/components/home/ServiceShowcase'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseUs   from '@/components/home/WhyChooseUs'
import TrustedBrands  from '@/components/home/TrustedBrands'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import Testimonials  from '@/components/home/Testimonials'
import FinalCTA      from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'CCTV Dubai | #1 CCTV Installation, Gate Barrier & Access Control UAE',
  description: 'Dubai\'s #1 CCTV installation company. SIRA-approved CCTV cameras, gate barrier systems, structured cabling (Cat6/fiber), access control, and smart home automation. Free site survey — WhatsApp 054 556 6456.',
  keywords: [
    'CCTV installation Dubai',
    'CCTV company Dubai',
    'gate barrier Dubai',
    'access control Dubai',
    'structured cabling Dubai Cat6 fiber',
    'smart home automation Dubai',
    'SIRA approved CCTV',
    'cctvdubai.me',
  ],
  alternates: { canonical: 'https://www.cctvdubai.me' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceShowcase />
      <ServicesSection />
      <WhyChooseUs />
      <TrustedBrands />
      <ProjectsGallery />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
