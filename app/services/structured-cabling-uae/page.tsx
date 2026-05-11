import type { Metadata } from 'next'
import { Cable, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Structured Cabling Dubai | Cat6 & Fiber Optic Network Cabling UAE',
  description: 'Expert structured cabling in Dubai & UAE. Cat6, Cat6A, fiber optic, server room & data centre infrastructure. Etisalat & du certified. TIA/EIA compliant. Free site survey.',
  keywords: [
    'structured cabling Dubai',
    'network cabling UAE',
    'Cat6 cabling Dubai',
    'Cat6A cabling UAE',
    'fiber optic installation Dubai',
    'fiber optic cabling UAE',
    'data cabling Dubai',
    'server room cabling Dubai',
    'network infrastructure Dubai',
    'TIA EIA cabling Dubai',
    'Etisalat certified cabling UAE',
    'structured cabling company Dubai',
    'network rack installation Dubai',
    'patch panel installation UAE',
  ],
  alternates: { canonical: `${BASE}/services/structured-cabling-uae` },
  openGraph: {
    title: 'Structured Cabling Dubai | Cat6 & Fiber Optic Network Cabling UAE',
    description: 'Cat6, Cat6A, fiber optic & server room cabling. Etisalat certified. TIA/EIA compliant. Free site survey.',
    url: `${BASE}/services/structured-cabling-uae`,
    images: [{ url: '/images/projects/structured-cabling/cabling-7.jpg', width: 1200, height: 630, alt: 'Structured Cabling Dubai' }],
  },
}

const features = [
  'Cat5e, Cat6, Cat6A installations',
  'Fiber optic (single & multi-mode)',
  'Etisalat & du certified',
  'Server room & data center design',
  'TIA/EIA 568 compliant',
  'Full cable management & labeling',
  'Network rack installation',
  'Testing & certification reports',
]

const faqs = [
  { q: 'What structured cabling standards do you follow in Dubai?', a: 'We follow TIA/EIA 568 and ISO/IEC 11801 structured cabling standards. All installations are certified with Fluke DSX test reports and comply with Etisalat and du requirements for commercial properties in the UAE.' },
  { q: 'What is the difference between Cat6 and Cat6A cabling?', a: 'Cat6 supports 1 Gigabit speeds up to 100 metres. Cat6A supports 10 Gigabit speeds up to 100 metres and is better shielded against interference, making it the recommended choice for new builds and data-intensive environments in Dubai.' },
  { q: 'Do you install fiber optic cabling in Dubai?', a: 'Yes. We install both single-mode and multi-mode fiber optic cabling for building backbones, inter-floor connections, campus networks, and data centres across Dubai and the UAE.' },
  { q: 'How long does structured cabling installation take?', a: 'A 50-point office cabling installation typically takes 1–2 days. Larger projects (200+ points) are planned in phases to minimise disruption, with full testing and certification on completion.' },
  { q: 'Do you provide a warranty on structured cabling installations?', a: 'Yes. We offer up to 15-year system warranties on structured cabling installations, backed by manufacturer extended warranties from leading brands including Nexans, Belden, and Panduit.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Structured Cabling UAE', item: `${BASE}/services/structured-cabling-uae` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Structured Cabling Dubai',
  alternateName: ['Cat6 Cabling Dubai', 'Network Cabling UAE', 'Fiber Optic Installation Dubai'],
  description: 'Professional structured cabling installation in Dubai including Cat6, Cat6A, fiber optic, server room design, and network rack installation. TIA/EIA compliant with full Fluke certification.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business` },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Structured Cabling Installation',
  url: `${BASE}/services/structured-cabling-uae`,
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

export default function StructuredCablingPage() {
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
            <span style={{ color: '#0F172A' }}>Structured Cabling UAE</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Cable size={14} /> TIA/EIA & Etisalat Certified
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Structured Cabling Dubai — Cat6, Cat6A & Fiber Optic
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Enterprise-grade structured cabling for offices, warehouses, hotels, and data centers. Cat6, Cat6A, and fiber optic networks built to last with full TIA/EIA certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Survey
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Request Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="cabling-page" title="Get Free Cabling Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag">STRUCTURED CABLING</div>
              <h2 className="section-title mb-6">Future-Proof Network Infrastructure</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                A well-designed structured cabling system is the backbone of your entire technology infrastructure. Mideatek designs and installs networks that support Gigabit and 10 Gigabit speeds, ensuring your business is ready for today's demands and tomorrow's growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ value: '10,000+', label: 'Points Installed' }, { value: '100%', label: 'Tested & Certified' }, { value: '15yr', label: 'Warranty Available' }].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/projects/structured-cabling/cabling-7.jpg"
                alt="Structured Cabling Dubai — Cat6 Network Rack Installation by Mideatek"
                className="rounded-2xl w-full object-cover h-80 mb-4 shadow-md" />
              <div className="grid grid-cols-3 gap-3">
                <img src="/images/projects/structured-cabling/cabling-5.jpg" alt="Fiber optic termination Dubai" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/structured-cabling/cabling-6.jpg" alt="Fiber optic rack cabling UAE"  className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/structured-cabling/cabling-1.jpg" alt="Cat6 patch panel installation" className="rounded-xl w-full h-24 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">Structured Cabling Dubai — Frequently Asked Questions</h2>
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

      <CTASection title="Need Structured Cabling in Dubai?" subtitle="Contact Mideatek for enterprise-grade network infrastructure with full TIA/EIA compliance and certification." />
    </>
  )
}
