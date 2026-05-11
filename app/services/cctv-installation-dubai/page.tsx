import type { Metadata } from 'next'
import { Shield, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'CCTV Installation Dubai | SIRA Approved CCTV Company UAE',
  description: 'Professional CCTV installation in Dubai by SIRA-approved engineers. HD, 4K & IP cameras, DVR/NVR systems, Hikvision & Dahua, remote monitoring & AI detection. Free site survey — call +971 54 556 6456.',
  keywords: [
    'CCTV installation Dubai',
    'SIRA approved CCTV Dubai',
    'CCTV company Dubai',
    'security camera installation UAE',
    'IP CCTV Dubai',
    'Hikvision installer Dubai',
    'Dahua CCTV UAE',
    'CCTV camera Dubai',
    '4K CCTV installation Dubai',
    'CCTV system Dubai',
    'CCTV installation company Dubai',
    'best CCTV company Dubai',
    'SIRA CCTV approval Dubai',
    'CCTV installation villa Dubai',
    'CCTV office Dubai',
  ],
  alternates: { canonical: `${BASE}/services/cctv-installation-dubai` },
  openGraph: {
    title: 'CCTV Installation Dubai | SIRA Approved CCTV Company UAE',
    description: 'SIRA-approved CCTV installation in Dubai. HD, 4K & IP cameras, NVR systems, remote monitoring. Free site survey.',
    url: `${BASE}/services/cctv-installation-dubai`,
    images: [{ url: '/images/projects/cctv/cctv-10.jpg', width: 1200, height: 630, alt: 'CCTV Installation Dubai' }],
  },
}

const features = [
  'SIRA & Dubai Civil Defence approved',
  'HD, 4K & thermal IP cameras',
  'Hikvision & Dahua certified installers',
  'Remote monitoring via mobile app',
  'AI-powered motion detection',
  'Cloud & NVR storage solutions',
  'Integration with access control',
  '24/7 technical support',
]

const processSteps = [
  { step: '01', title: 'Free Site Survey',  desc: 'Our SIRA-certified engineer surveys your premises and designs the optimal camera layout.' },
  { step: '02', title: 'Technical Design',  desc: 'We produce a detailed design, BOQ, and SIRA-compliant technical drawings for approval.' },
  { step: '03', title: 'Installation',      desc: 'Certified technicians install all cameras, cabling, DVR/NVR, and network infrastructure.' },
  { step: '04', title: 'Commissioning',     desc: 'Full system test, remote access setup, staff training, and SIRA submission support.' },
]

const faqs = [
  { q: 'Do you provide SIRA-approved CCTV systems?', a: 'Yes. All our CCTV installations in Dubai are fully SIRA-compliant. We handle the entire approval process including documentation, technical drawings, and SIRA submissions on your behalf.' },
  { q: 'How many CCTV cameras do I need for my property?', a: 'The number depends on your property size, layout, and security requirements. A typical villa needs 6–12 cameras, while commercial properties may need 20 or more. Our free site survey determines the optimal number and placement.' },
  { q: 'What CCTV brands do you install in Dubai?', a: 'We supply and install Hikvision, Dahua, Bosch, Axis, Uniview, and other leading brands. We recommend the best solution for your budget and requirements, with full warranty support.' },
  { q: 'How long does CCTV installation take in Dubai?', a: 'A typical 8–16 camera system takes 1–2 days. Larger commercial CCTV projects are carefully planned and executed to minimise disruption to your operations.' },
  { q: 'What is the cost of CCTV installation in Dubai?', a: 'CCTV installation prices in Dubai depend on the number of cameras, camera type (HD, 4K, PTZ), storage solution, and cabling requirements. Contact us for a free no-obligation quotation.' },
  { q: 'Do you offer CCTV maintenance and support in Dubai?', a: 'Yes. We offer 24/7 technical support and scheduled maintenance contracts to keep your CCTV system operating at peak performance.' },
]

const galleryImages = [
  { src: '/images/projects/cctv/cctv-11.jpg', alt: 'Hikvision dome camera installation Dubai' },
  { src: '/images/projects/cctv/cctv-10.jpg', alt: 'CCTV installation hotel corridor Dubai' },
  { src: '/images/projects/cctv/cctv-3.jpg',  alt: 'PTZ camera outdoor installation UAE' },
  { src: '/images/projects/cctv/cctv-4.jpg',  alt: 'Outdoor Hikvision bullet cameras' },
  { src: '/images/projects/cctv/cctv-6.jpg',  alt: 'Indoor dome camera ceiling installation' },
  { src: '/images/projects/cctv/cctv-9.jpg',  alt: 'Dome camera installation villa Dubai' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'CCTV Installation Dubai', item: `${BASE}/services/cctv-installation-dubai` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/services/cctv-installation-dubai#service`,
  name: 'CCTV Installation Dubai',
  alternateName: ['CCTV Camera Installation Dubai', 'SIRA Approved CCTV Dubai', 'Security Camera Installation UAE'],
  description: 'Professional SIRA-approved CCTV installation in Dubai for homes, villas, offices, warehouses, and commercial properties. We supply and install Hikvision, Dahua, Bosch, and Axis IP cameras, DVR/NVR systems, and remote monitoring solutions.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${BASE}/#business`,
    name: 'CCTV Dubai — by Mideatek',
  },
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'AdministrativeArea', name: 'UAE' },
  ],
  serviceType: 'CCTV Installation',
  category: 'Security Systems',
  url: `${BASE}/services/cctv-installation-dubai`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CCTV Installation Services Dubai',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HD CCTV Installation Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '4K IP Camera Installation Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PTZ Camera Installation UAE' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NVR DVR System Setup Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SIRA CCTV Compliance Dubai' } },
    ],
  },
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

export default function CCTVPage() {
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
            <span style={{ color: '#0F172A' }}>CCTV Installation Dubai</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-red mb-5">
                <Shield size={13} /> SIRA Approved Installation
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                CCTV Installation Dubai — SIRA Approved
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Professional CCTV surveillance systems for homes, offices, villas, warehouses, and commercial properties across Dubai and the UAE. Full SIRA compliance guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Get Free Survey
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">
                  Request Quote <ChevronRight size={18} />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="cctv-page" title="Get Free CCTV Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features + Real photos */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag">WHAT WE OFFER</div>
              <h2 className="section-title mb-6">Complete CCTV Solutions for Dubai & UAE</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Mideatek delivers end-to-end CCTV surveillance solutions that are fully compliant with SIRA requirements and Dubai Civil Defence regulations. From single cameras to enterprise-wide 500+ camera networks, we design, supply, install, and maintain every system.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ value: '5,000+', label: 'Cameras Installed' }, { value: '100%', label: 'SIRA Compliant' }, { value: '24/7', label: 'Support' }].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/projects/cctv/cctv-10.jpg"
                alt="CCTV Installation Dubai by Mideatek — SIRA Approved"
                className="rounded-2xl w-full object-cover h-80 mb-4 shadow-md" />
              <div className="grid grid-cols-3 gap-3">
                <img src="/images/projects/cctv/cctv-1.jpg"  alt="Hikvision dome camera installation Dubai" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/cctv/cctv-3.jpg"  alt="PTZ camera outdoor installation UAE"      className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/cctv/cctv-11.jpg" alt="Dual dome CCTV camera Dubai"              className="rounded-xl w-full h-24 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">REAL INSTALLATIONS</div>
            <h2 className="section-title mb-4">Our CCTV Work in Dubai</h2>
            <p className="section-subtitle max-w-xl mx-auto">Real photos from our CCTV installations across Dubai — hotels, offices, villas, and commercial properties.</p>
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

      {/* Process */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">HOW WE WORK</div>
            <h2 className="section-title mb-4">Our CCTV Installation Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: '#1B3F7C' }}>{s.step}</div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — structured for Google AI Overview + featured snippets */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">CCTV Installation Dubai — Frequently Asked Questions</h2>
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

      <CTASection title="Need CCTV Installation in Dubai?" subtitle="Contact Mideatek for SIRA-approved CCTV systems with professional installation and lifetime support." />
    </>
  )
}
