import type { Metadata } from 'next'
import LandingHeader from '@/components/layout/LandingHeader'
import LeadForm from '@/components/shared/LeadForm'
import {
  Shield, CheckCircle, Clock, Award, Building2, Star,
  Phone, MessageCircle, FileCheck, BadgeCheck, Zap, Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial CCTV Installation Dubai | SIRA Approved Company | DMCC & DED Ready',
  description:
    'SIRA-approved commercial CCTV installation in Dubai. DMCC and DED compliance certificates issued in 48–72 hrs. Offices, retail, warehouses, restaurants. Free survey — +971 54 556 6456.',
  keywords: [
    'commercial CCTV installation Dubai',
    'SIRA approved CCTV company Dubai',
    'DMCC CCTV compliance Dubai',
    'DED CCTV certificate Dubai',
    'office CCTV installation Dubai',
    'retail CCTV Dubai',
    'warehouse CCTV Dubai',
    'restaurant CCTV Dubai',
    'commercial security camera Dubai',
    'SIRA CCTV certificate Dubai',
    'business CCTV installation UAE',
    'commercial surveillance system Dubai',
  ],
  openGraph: {
    title: 'Commercial CCTV Installation Dubai | SIRA Approved | DMCC & DED Ready',
    description:
      'SIRA-approved commercial CCTV for offices, retail, warehouses & restaurants in Dubai. Fast compliance certificates in 48–72 hrs.',
    url: 'https://www.cctvdubai.me/commercial-cctv-dubai',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cctvdubai.me/commercial-cctv-dubai' },
}

const complianceBadges = [
  { icon: Shield,     label: 'SIRA Approved',  desc: 'Dubai Police & SIRA certified installer' },
  { icon: Award,      label: 'DMCC Ready',     desc: 'Camera placement meets DMCC requirements' },
  { icon: FileCheck,  label: 'DED Compliant',  desc: 'DED-ready CCTV setup for commercial licences' },
  { icon: BadgeCheck, label: 'TRA Licensed',   desc: 'TRA-licensed structured cabling team' },
]

const services = [
  { icon: Building2,    title: 'Office CCTV',           desc: 'HD/4K cameras covering entrances, corridors, server rooms, and parking. Tailored to your floor plan.' },
  { icon: Star,         title: 'Retail & Mall CCTV',    desc: 'Wide-angle and PTZ cameras for sales floors, cashier desks, stockrooms, and perimeter entry points.' },
  { icon: Shield,       title: 'Warehouse CCTV',        desc: 'High-ceiling cameras, ANPR at entry points, perimeter coverage, and night vision for 24/7 monitoring.' },
  { icon: CheckCircle,  title: 'Restaurant & Café CCTV',desc: 'Kitchen safety cameras, customer area coverage, POS monitoring, and remote owner access via mobile app.' },
  { icon: Award,        title: 'Hotel & Hospitality',   desc: 'Lobby, corridors, car park, and back-of-house coverage. Full SIRA compliance documentation provided.' },
  { icon: Users,        title: 'Co-Working & Clinics',  desc: 'Shared spaces, reception points, and sensitive areas covered with full SIRA-compliant documentation.' },
]

const whyCompliance = [
  { icon: FileCheck,   title: 'Trade Licence Renewal',    desc: 'Dubai Municipality and DED verify CCTV compliance during trade licence renewals. A SIRA certificate prevents delays.' },
  { icon: Building2,   title: 'DMCC Freezone Requirements',desc: 'DMCC requires CCTV in all commercial units. Our installations are designed to pass DMCC inspections on the first visit.' },
  { icon: Shield,      title: 'Dubai Police Requirements', desc: 'Dubai Police mandates CCTV in retail, F&B, and hospitality businesses with minimum specifications for resolution and coverage.' },
  { icon: Zap,         title: 'Insurance Claims',          desc: 'Insurance providers require CCTV footage for theft, injury, or dispute claims. A compliant system ensures footage that holds up legally.' },
  { icon: Users,       title: 'Staff & Asset Protection',  desc: 'Monitor high-value stock areas, cash desks, and server rooms. Real-time alerts and remote viewing protect your assets 24/7.' },
  { icon: Clock,       title: 'Incident Resolution Speed', desc: 'HD/4K footage with timestamps and indexed search means you can retrieve footage for any incident within minutes.' },
]

const process = [
  { step: '01', title: 'Free Site Survey',       desc: 'We visit your premises, assess the layout, and provide a camera-count plan and quote within 24 hours — at no cost.' },
  { step: '02', title: 'SIRA-Approved Design',   desc: 'Our engineers produce a camera layout plan that meets SIRA, DMCC, or DED requirements for your specific licence type.' },
  { step: '03', title: 'Professional Installation',desc: 'Fully concealed cabling, branded camera housings, NVR/DVR setup, and remote access configured for management.' },
  { step: '04', title: 'Certificate Issued',     desc: 'SIRA compliance certificate issued within 48–72 hours. Ready for your DMCC or DED audit — no chasing required.' },
]

const faqs = [
  {
    q: 'Is CCTV mandatory for commercial premises in Dubai?',
    a: 'Yes. Dubai Police and SIRA require CCTV systems in most commercial premises including offices, retail outlets, warehouses, and restaurants. A SIRA-compliant installation is required for trade licence renewal.',
  },
  {
    q: 'How long does the SIRA certificate take?',
    a: 'After installation, we submit the compliance documents to SIRA. Certificates are typically issued within 48–72 working hours. We handle the entire submission process on your behalf.',
  },
  {
    q: 'Do you support DMCC and DED licence requirements?',
    a: 'Yes. We are experienced with both DMCC (Dubai Multi Commodities Centre) and DED (Dubai Department of Economy and Tourism) CCTV requirements. Our installations are designed to pass their inspections.',
  },
  {
    q: 'What camera brands do you install?',
    a: 'We install Hikvision, Dahua, Uniview, and Hanwha — all SIRA-approved brands. We can also service or upgrade existing systems from other brands.',
  },
  {
    q: 'Can managers view cameras remotely?',
    a: 'Yes. All our commercial installations include remote access setup via mobile app (Hik-Connect, DMSS, or iVMS-4500), allowing managers and owners to view live or recorded footage from anywhere in the world.',
  },
  {
    q: 'Do you offer maintenance contracts?',
    a: 'Yes. We offer annual maintenance contracts (AMC) that include quarterly inspections, camera cleaning, firmware updates, and priority response in case of any faults.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial CCTV Installation Dubai',
  provider: {
    '@type': 'LocalBusiness',
    name: 'CCTV Dubai — by Mideatek',
    telephone: '+971545566456',
    url: 'https://www.cctvdubai.me',
  },
  description:
    'SIRA-approved commercial CCTV installation for offices, retail, warehouses, and restaurants in Dubai. DMCC and DED compliance certificates issued within 48–72 hours.',
  areaServed: { '@type': 'City', name: 'Dubai' },
  url: 'https://www.cctvdubai.me/commercial-cctv-dubai',
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

export default function CommercialCCTVPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <LandingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2550] via-[#1B3F7C] to-[#1a3a6e] pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Shield size={12} className="text-yellow-400" />
                SIRA Approved · DMCC Ready · DED Compliant
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight mb-5">
                Commercial CCTV Installation Dubai — SIRA Approved & Compliance Ready
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We install CCTV systems that meet Dubai Police, SIRA, DMCC, and DED requirements.
                Certificate issued within{' '}
                <strong className="text-yellow-400">48–72 hours</strong>.
                Trusted by 500+ businesses across Dubai.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'SIRA compliance certificate included',
                  'DMCC & DED inspection-ready setup',
                  'Free commercial site survey — same day',
                  'Remote access for management & owners',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+971545566456"
                  className="flex items-center gap-2 bg-white text-[#1B3F7C] font-bold px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href="https://wa.me/971545566456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <LeadForm
                source="landing-commercial"
                title="Get a Free Commercial Survey"
                subtitle="Our engineer will visit your premises within 24 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <section className="bg-gray-50 py-10 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {complianceBadges.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="text-center p-4">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-white" />
              </div>
              <div className="font-bold text-blue-700 text-sm mb-1">{label}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why compliance matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="section-tag">Commercial CCTV Compliance Dubai</span>
            <h2 className="section-title mt-3 mb-4">
              Why Your Business Needs a SIRA-Compliant CCTV System
            </h2>
            <p className="section-subtitle">
              Non-compliant CCTV is one of the most common reasons for trade licence renewal issues in Dubai. Our installations eliminate that risk.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCompliance.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-700/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">Commercial CCTV Services Dubai</span>
            <h2 className="section-title mt-3 mb-4">We Cover Every Type of Commercial Premises</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">Fast Certificate Issuance</span>
            <h2 className="section-title mt-3 mb-4">From Survey to SIRA Certificate in 4 Steps</h2>
            <p className="section-subtitle">
              Most commercial installations are completed within 1–3 days. Certificate issued within 48–72 hours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step}>
                <div className="text-5xl font-black font-heading text-blue-700/10 mb-2">{step}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B3F7C] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '500+',   label: 'Commercial Clients' },
            { val: '48–72h', label: 'Certificate Issuance' },
            { val: '100%',   label: 'SIRA Compliance Rate' },
            { val: '10+',    label: 'Years in Dubai' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-3xl font-black font-heading text-white mb-1">{val}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title mt-3 mb-4">
              Frequently Asked Questions — Commercial CCTV Dubai
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title mb-3">Ready for Your Free Commercial Survey?</h2>
            <p className="section-subtitle">
              Our engineer will visit your premises, assess your requirements, and provide a full compliance plan — at no cost.
            </p>
          </div>
          <div className="bg-[#1B3F7C] rounded-2xl p-8 shadow-2xl">
            <LeadForm
              source="landing-commercial-bottom"
              title="Book Your Free Survey"
              subtitle="We'll respond within 1 hour during business hours"
              dark
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center text-xs py-6 px-4">
        <p>© 2025 Mideatek — SIRA Approved CCTV Installation Company Dubai</p>
        <p className="mt-1">
          <a href="tel:+971545566456" className="text-white hover:text-blue-300 transition-colors">+971 54 556 6456</a>
          {' · '}
          <a href="mailto:info@mideatek.com" className="hover:text-blue-300 transition-colors">info@mideatek.com</a>
          {' · '}
          <a href="/" className="hover:text-blue-300 transition-colors">cctvdubai.me</a>
        </p>
      </footer>
    </>
  )
}
