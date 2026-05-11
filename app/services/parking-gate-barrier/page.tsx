import type { Metadata } from 'next'
import { Car, CheckCircle, Phone, ChevronRight, CreditCard } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Gate Barrier Systems Dubai | Boom Barrier & ANPR Camera UAE',
  description: 'Automated gate barrier and parking management systems in Dubai. BFT boom barriers, ANPR cameras, long range card readers, and vehicle access control. SIRA approved. Free site survey.',
  keywords: [
    'gate barrier Dubai', 'boom barrier Dubai', 'gate barrier UAE',
    'parking barrier Dubai', 'ANPR camera Dubai', 'BFT barrier Dubai',
    'long range card reader Dubai', 'vehicle access control UAE',
    'automatic gate Dubai', 'parking management system UAE',
    'boom gate installation Dubai', 'car park barrier UAE',
  ],
  alternates: { canonical: `${BASE}/services/parking-gate-barrier` },
  openGraph: {
    title: 'Gate Barrier Systems Dubai | Boom Barrier & ANPR Camera UAE',
    description: 'BFT boom barriers, ANPR cameras & long range card readers for Dubai residential, commercial & industrial properties.',
    url: `${BASE}/services/parking-gate-barrier`,
    images: [{ url: '/images/projects/gate-barrier/barrier-2.jpg', width: 1200, height: 630, alt: 'Gate Barrier Installation Dubai' }],
  },
}

const features = [
  'Automatic boom barrier gates',
  'ANPR (number plate recognition)',
  'Long range RFID card readers',
  'Pay-on-foot ticket machines',
  'Prepaid & subscription cards',
  'CCTV integration',
  'Vehicle counting & reporting',
  'Remote barrier management',
]

const systems = [
  { title: 'Commercial Parking', desc: 'Full parking management system with ticketing, payment terminals, and revenue reporting for malls and office parks.' },
  { title: 'Residential Compounds', desc: 'Secure vehicle access control with remote opening, resident RFID tags, and visitor management.' },
  { title: 'ANPR Systems', desc: 'Automatic Number Plate Recognition for permit-based parking, free-flow entry, and VIP vehicle management.' },
  { title: 'Industrial Facilities', desc: 'Heavy-duty barriers for factories, logistics centers, and ports with high-cycle durability.' },
]

const galleryImages = [
  { src: '/images/projects/gate-barrier/barrier-2.jpg', alt: 'BFT gate barrier installation Dubai residential' },
  { src: '/images/projects/gate-barrier/barrier-6.jpg', alt: 'Mideatek team installing BFT boom barrier' },
  { src: '/images/projects/gate-barrier/barrier-5.jpg', alt: 'BFT barrier unit with yellow beacon Dubai' },
  { src: '/images/projects/gate-barrier/barrier-1.jpg', alt: 'BFT boom barrier arm installation' },
  { src: '/images/projects/gate-barrier/barrier-7.jpg', alt: 'Gate barrier wiring installation UAE' },
  { src: '/images/projects/gate-barrier/barrier-3.jpg', alt: 'BFT barrier close-up installation' },
]

const installVideos = [
  { src: '/videos/gate-barrier/barrier-install-1.mp4', label: 'BFT Barrier Installation' },
  { src: '/videos/gate-barrier/barrier-install-2.mp4', label: 'Boom Gate Setup & Wiring' },
  { src: '/videos/gate-barrier/barrier-install-3.mp4', label: 'Commissioning & Testing' },
]

const faqs = [
  { q: 'What gate barrier systems do you install in Dubai?', a: 'We install BFT, FAAC, CAME, and Roger Technology boom barriers for residential compounds, commercial car parks, and industrial facilities across Dubai and the UAE.' },
  { q: 'What is a long range card reader for gate barriers?', a: 'A long range RFID card reader allows vehicles to open boom barriers from up to 10 metres away without stopping or lowering a window. It uses passive UHF windshield tags and is ideal for high-traffic compounds and corporate car parks.' },
  { q: 'Do you integrate ANPR cameras with gate barriers?', a: 'Yes. We integrate ANPR (Automatic Number Plate Recognition) cameras with gate barriers to allow permit-based free-flow entry for registered vehicles, eliminating the need for cards or remotes.' },
  { q: 'How long does gate barrier installation take in Dubai?', a: 'A standard single or dual gate barrier installation takes 1 day. Larger systems with ANPR, ticketing, and payment terminals are typically completed within 2–3 days.' },
  { q: 'Do you provide maintenance for gate barriers in Dubai?', a: 'Yes. We offer preventive maintenance contracts and 24-hour emergency call-out for all gate barrier systems we install across Dubai and the UAE.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Gate Barrier Systems Dubai', item: `${BASE}/services/parking-gate-barrier` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gate Barrier Systems Dubai',
  alternateName: ['Boom Barrier Dubai', 'Parking Barrier UAE', 'BFT Gate Barrier Dubai'],
  description: 'Professional gate barrier and parking management system installation in Dubai. BFT, FAAC, and CAME boom barriers with ANPR, long range card readers, and remote management.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business` },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Gate Barrier Installation',
  url: `${BASE}/services/parking-gate-barrier`,
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

export default function ParkingBarrierPage() {
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
            <Link href="/#services" className="hover:text-blue-700 transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Parking & Gate Barriers</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Car size={14} /> Automated Vehicle Management
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Gate Barrier & Parking Systems Dubai
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Complete automated parking management and gate barrier systems for residential compounds, commercial buildings, malls, and industrial facilities across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Survey
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Get Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="parking-page" title="Get Parking System Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features + main image */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <div className="section-tag">PARKING SOLUTIONS</div>
              <h2 className="section-title mb-6">Smart Parking & Vehicle Access Control</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Mideatek designs and installs complete parking management ecosystems — from simple boom barriers to fully automated multi-level parking facilities with ANPR and payment integration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/projects/gate-barrier/barrier-2.jpg"
                alt="BFT Gate Barrier Installation Dubai by Mideatek"
                className="rounded-2xl w-full object-cover h-80 mb-4 shadow-md" />
              <div className="grid grid-cols-3 gap-3">
                <img src="/images/projects/gate-barrier/barrier-1.jpg" alt="BFT boom barrier arm" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/gate-barrier/barrier-5.jpg" alt="BFT barrier beacon Dubai" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/gate-barrier/barrier-6.jpg" alt="Mideatek team gate barrier install" className="rounded-xl w-full h-24 object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                  <Car size={20} className="text-blue-700" />
                </div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long range card reader */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag">ADVANCED ACCESS</div>
              <h2 className="section-title mb-4">Long Range RFID Card Reader for Gate Barriers</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Our long range RFID card readers allow vehicles to open boom barriers from up to 10 metres away — no stopping, no window-down. Perfect for residential compounds, corporate car parks, and high-traffic facilities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Read range up to 10 metres',
                  'Works at vehicle speed — no stopping required',
                  'Passive UHF cards & windshield tags',
                  'Seamless integration with BFT & other barriers',
                  'Multi-tenant & fleet management support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2.5 rounded-xl">
                <CreditCard size={15} /> Long Range UHF RFID Technology
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <video src="/videos/gate-barrier/long-range-card-reader.mp4"
                controls muted playsInline preload="metadata"
                className="w-full aspect-video object-cover"
                aria-label="Long range card reader installation for gate barrier Dubai" />
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-gray-700">Long Range Card Reader Installation</p>
                <p className="text-xs text-gray-400 mt-0.5">Mideatek · Dubai — Gate Barrier Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation videos */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">REAL INSTALLATIONS</div>
            <h2 className="section-title mb-4">Gate Barrier Installation Videos</h2>
            <p className="section-subtitle max-w-xl mx-auto">Real footage from our BFT boom barrier installations across Dubai and the UAE.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {installVideos.map((v) => (
              <div key={v.src} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <video src={v.src} controls muted playsInline preload="metadata"
                  className="w-full aspect-video object-cover" aria-label={v.label} />
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-gray-700">{v.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Mideatek · Dubai</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">PROJECT PHOTOS</div>
            <h2 className="section-title mb-4">Our Gate Barrier Work in Dubai</h2>
            <p className="section-subtitle max-w-xl mx-auto">Real photos from our BFT boom barrier and parking system installations across Dubai and the UAE.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">Gate Barrier Dubai — Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold mb-2" style={{ color: '#0F172A' }}>{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Automate Your Parking Today" subtitle="Get a free site assessment and parking system proposal from Mideatek's experts." />
    </>
  )
}
