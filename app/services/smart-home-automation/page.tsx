import type { Metadata } from 'next'
import { Home, CheckCircle, Phone, ChevronRight, Wifi, Lightbulb, Thermometer, Camera } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import RelatedServices from '@/components/shared/RelatedServices'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Smart Home Automation Dubai | Crestron, Lutron & Control4 UAE | Free Consultation',
  description: 'Complete smart home automation in Dubai — Crestron, Lutron, Control4 & KNX systems. Automated lighting, climate control, security integration, home theatre & voice control. Serving Palm Jumeirah, Emirates Hills & all Dubai. Free consultation — call +971 54 556 6456.',
  keywords: [
    'smart home Dubai', 'home automation UAE', 'smart home automation Dubai',
    'Crestron Dubai', 'Lutron Dubai', 'Control4 Dubai', 'Savant Dubai',
    'smart villa Dubai', 'smart lighting Dubai', 'home automation system UAE',
    'smart home company Dubai', 'KNX Dubai', 'HDL automation Dubai',
    'smart apartment Dubai', 'home automation installation UAE',
    'smart home Palm Jumeirah', 'smart villa Emirates Hills',
    'home automation Downtown Dubai', 'smart curtains Dubai',
    'smart HVAC Dubai', 'home automation contractor UAE',
  ],
  alternates: { canonical: `${BASE}/services/smart-home-automation` },
  openGraph: {
    title: 'Smart Home Automation Dubai | Crestron, Lutron & Control4 UAE',
    description: 'Luxury smart home automation for Dubai villas & apartments. Lighting, climate, security & AV control. Free consultation.',
    url: `${BASE}/services/smart-home-automation`,
    images: [{ url: '/images/projects/cctv/cctv-8.jpg', width: 1200, height: 630, alt: 'Smart Home Automation Dubai by Mideatek' }],
  },
}

const features = [
  { icon: Lightbulb,    title: 'Smart Lighting',     desc: 'Automated scenes, dimming control, mood lighting, and circadian rhythm optimization.' },
  { icon: Thermometer,  title: 'Climate Control',     desc: 'Intelligent HVAC control with geofencing, scheduling, and energy optimization.' },
  { icon: Camera,       title: 'Security Integration', desc: 'Integrated CCTV, smart locks, alarm systems, and video doorbells in one platform.' },
  { icon: Wifi,         title: 'Entertainment',       desc: 'Whole-home audio, multi-zone AV, home theatre, and streaming integration.' },
  { icon: Home,         title: 'Blinds & Curtains',   desc: 'Motorized shades, drapes, and solar screens controlled automatically or via app.' },
  { icon: Wifi,         title: 'Voice & App Control', desc: 'Amazon Alexa, Google Home, Apple HomeKit, and custom app control from anywhere.' },
]

const platforms = ['Crestron', 'Lutron', 'Control4', 'Savant', 'KNX', 'Loxone', 'HDL', 'Google Home', 'Apple HomeKit', 'Amazon Alexa']

const faqs = [
  { q: 'What is smart home automation and how does it work in Dubai?', a: 'Smart home automation connects your home\'s lighting, climate, security, and entertainment systems to a central controller (like Crestron, Lutron, or Control4) so you can control everything from a single app or voice command. In Dubai, we design and install complete smart home ecosystems for villas, apartments, and penthouses.' },
  { q: 'What smart home brands do you install in Dubai?', a: 'We install and program Crestron, Lutron, Control4, Savant, KNX, HDL, Loxone, and other leading smart home platforms. We also integrate Google Home, Amazon Alexa, and Apple HomeKit into existing systems.' },
  { q: 'How much does smart home automation cost in Dubai?', a: 'Smart home automation in Dubai ranges from AED 15,000 for a basic lighting and climate system to AED 500,000+ for a fully integrated luxury villa with Crestron or Savant. We provide free consultations and detailed proposals based on your specific requirements.' },
  { q: 'Can smart home automation be installed in an existing villa in Dubai?', a: 'Yes. We can retrofit smart home systems into existing villas and apartments in Dubai with minimal structural work, using wireless protocols and smart switches that fit into existing wiring.' },
  { q: 'Does smart home automation work with Dubai DEWA systems?', a: 'Yes. Our smart home systems are fully compatible with DEWA\'s smart metering and energy management infrastructure, and can help reduce energy consumption through intelligent scheduling and occupancy sensing.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Smart Home Automation Dubai', item: `${BASE}/services/smart-home-automation` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smart Home Automation Dubai',
  alternateName: ['Home Automation UAE', 'Crestron Installation Dubai', 'Lutron Dubai', 'Control4 Dubai'],
  description: 'Complete smart home automation design and installation in Dubai using Crestron, Lutron, Control4, and KNX platforms. Lighting, climate, security, entertainment, and voice control integration.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business` },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Smart Home Automation',
  url: `${BASE}/services/smart-home-automation`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function SmartHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-700 transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Smart Home Automation</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Home size={14} /> Crestron · Lutron · Control4 Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Smart Home Automation Dubai & UAE
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Transform your villa or apartment into an intelligent, connected home. Control lighting, climate, security, and entertainment from your smartphone or voice — anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Consultation
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Get Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="smart-home-page" title="Get Smart Home Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">SMART HOME</div>
            <h2 className="section-title mb-4">Everything Smart, Seamlessly Integrated</h2>
            <p className="section-subtitle mx-auto max-w-2xl">We design and install complete smart home ecosystems using Crestron, Lutron, Savant, and Control4 platforms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={24} className="text-cyan-600" />
                </div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8 md:p-10 text-center border border-gray-200 bg-white shadow-sm">
            <h3 className="text-xl font-bold font-heading mb-6" style={{ color: '#0F172A' }}>Platforms We Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((brand) => (
                <span key={brand} className="bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">Smart Home Automation Dubai — FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold mb-2" style={{ color: '#0F172A' }}>{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices exclude="/services/smart-home-automation" title="Pair Your Smart Home With These Systems" />

      <CTASection title="Make Your Home Smarter Today" subtitle="Contact Mideatek for a complete smart home consultation and custom design proposal." />
    </>
  )
}
