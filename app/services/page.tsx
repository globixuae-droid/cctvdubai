import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Car, Cable, Phone, Home, Monitor, ChevronRight, CheckCircle } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'
import LeadForm from '@/components/shared/LeadForm'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Security & ELV Services Dubai | CCTV, Access Control, Gate Barrier, Smart Home',
  description: 'Complete security and ELV services in Dubai by Mideatek — SIRA-approved CCTV installation, access control, gate barriers, structured cabling, intercom, smart home automation, and AV systems. Free site survey — call +971 54 556 6456.',
  keywords: [
    'CCTV installation Dubai', 'access control Dubai', 'gate barrier Dubai',
    'structured cabling Dubai', 'intercom system Dubai', 'smart home Dubai',
    'ELV services Dubai', 'security systems Dubai', 'SIRA approved Dubai',
    'Mideatek services', 'security company Dubai UAE',
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: 'Security & ELV Services Dubai | Mideatek',
    description: 'SIRA-approved CCTV, access control, gate barriers, structured cabling, intercom & smart home. Free survey across Dubai.',
    url: `${BASE}/services`,
  },
}

const services = [
  {
    name: 'CCTV Installation Dubai',
    href: '/services/cctv-installation-dubai',
    icon: Shield,
    tag: 'SIRA Approved',
    tagColor: '#DC2626',
    desc: 'HD, 4K, and AI-enabled IP CCTV cameras from Hikvision, Dahua, Bosch, Axis, and Uniview. Complete SIRA compliance documentation, NVR systems, remote mobile viewing, and 24/7 AI motion detection.',
    highlights: ['Full SIRA compliance', '30-day recording standard', 'Hikvision & Dahua certified', 'Remote mobile viewing'],
    startPrice: 'From AED 1,500',
  },
  {
    name: 'Access Control Systems',
    href: '/services/access-control-systems',
    icon: Lock,
    tag: 'Biometric & RFID',
    tagColor: '#1D4ED8',
    desc: 'Biometric fingerprint, facial recognition, RFID card, and mobile app door access from ZKTeco, Suprema, Hikvision, and HID. Time and attendance integration, visitor management, and multi-site control.',
    highlights: ['Fingerprint & face recognition', 'RFID & mobile access', 'Time attendance reports', 'Multi-door & multi-site'],
    startPrice: 'From AED 2,500',
  },
  {
    name: 'Gate Barrier & Parking Systems',
    href: '/services/parking-gate-barrier',
    icon: Car,
    tag: 'BFT · FAAC · CAME',
    tagColor: '#B45309',
    desc: 'Automated boom barriers for residential compounds, commercial car parks, and industrial facilities. BFT, FAAC, CAME, and Nice barriers with ANPR camera integration, long-range UHF card readers, and ticketing systems.',
    highlights: ['ANPR vehicle recognition', 'Long-range RFID (10m)', 'Pay-on-foot ticketing', 'Remote management'],
    startPrice: 'From AED 3,500',
  },
  {
    name: 'Structured Cabling',
    href: '/services/structured-cabling-uae',
    icon: Cable,
    tag: 'TRA Licensed',
    tagColor: '#059669',
    desc: 'Cat6, Cat6A, and fibre optic (single-mode and multi-mode) cabling by TRA-licensed engineers. Server room design, rack installation, Fluke DSX-certified testing. CommScope, Panduit, and Leviton certified contractor.',
    highlights: ['Cat6 & fibre optic', 'Fluke DSX certified', 'TRA licensed', '15-year system warranty'],
    startPrice: 'From AED 25/point',
  },
  {
    name: 'Intercom Systems',
    href: '/services/intercom-systems',
    icon: Phone,
    tag: 'IP & Analogue',
    tagColor: '#7C3AED',
    desc: 'IP and analogue video door phones for villas, apartments, towers, and commercial buildings. Mobile app remote access, integration with gate barriers and access control. Hikvision, Dahua, Akuvox, and 2N systems.',
    highlights: ['Mobile app remote access', 'Video door phone', 'Gate barrier integration', 'Building-wide intercom'],
    startPrice: 'From AED 800',
  },
  {
    name: 'Smart Home Automation',
    href: '/services/smart-home-automation',
    icon: Home,
    tag: 'KNX · Crestron',
    tagColor: '#0891B2',
    desc: 'KNX, Larnitech, HDL, and Crestron smart home systems controlling lighting, climate, curtains, security, and entertainment. Compatible with Google Home, Amazon Alexa, and Apple HomeKit. Perfect for Dubai villas.',
    highlights: ['KNX & Crestron systems', 'Lighting & climate control', 'Google Home compatible', 'Villa & apartment ready'],
    startPrice: 'From AED 15,000',
  },
  {
    name: 'Audio Visual Systems',
    href: '/services/audio-visual-systems',
    icon: Monitor,
    tag: 'LED · AV · PA',
    tagColor: '#0F172A',
    desc: 'LED and LCD video walls, conference room AV, background music systems, digital signage, home theatre, and outdoor PA systems. Samsung, LG, Absen, Bose, QSC, Yamaha, and Sony products.',
    highlights: ['LED video walls', 'Conference room AV', 'Background music systems', 'Digital signage'],
    startPrice: 'From AED 5,000',
  },
]

const industries = [
  { name: 'Residential Villas',       desc: 'Complete security and smart home packages for Dubai villas.' },
  { name: 'Commercial Offices',       desc: 'Access control, CCTV, and cabling for office fit-outs.' },
  { name: 'Hotels & Hospitality',     desc: 'SIRA-compliant CCTV, door access, and AV for hotels.' },
  { name: 'Warehouses & Industrial',  desc: 'High-channel CCTV and gate barriers for logistics hubs.' },
  { name: 'Retail & F&B',            desc: 'POS-integrated cameras and door access for retail chains.' },
  { name: 'Residential Buildings',    desc: 'Building-wide CCTV, intercom, and barrier systems.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE}/services#page`,
  name: 'Security & ELV Services Dubai — Mideatek',
  description: 'Complete security and ELV services in Dubai — SIRA-approved CCTV installation, access control, gate barriers, structured cabling, intercom systems, smart home automation, and audio visual systems.',
  url: `${BASE}/services`,
  provider: { '@id': `${BASE}/#business` },
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Services</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-red mb-5">
                <Shield size={13} /> SIRA · TRA · ISO 9001:2015 Approved
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Security & ELV Services in Dubai & UAE
              </h1>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Mideatek is Dubai's SIRA-approved ELV systems integrator — one company, one point of contact for every security and technology system in your building.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['SIRA Approved CCTV', 'TRA Licensed Cabling', 'ISO 9001:2015 Certified', '500+ Projects Delivered', '50+ Certified Engineers', '10+ Years in Dubai'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  Get Free Survey
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">
                  Request Quote <ChevronRight size={18} />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="services-hub" title="Free Site Survey & Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">ALL SERVICES</div>
            <h2 className="section-title mb-4">Complete ELV & Security Systems from One Contractor</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Every system is designed, installed, and maintained by our in-house team of SIRA-certified engineers. No subcontracting, no handoff gaps.
            </p>
          </div>
          <div className="space-y-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.href} className={`rounded-2xl border border-gray-200 overflow-hidden shadow-sm ${i % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="p-8 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gray-100">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#EFF6FF' }}>
                          <Icon size={22} style={{ color: '#1B3F7C' }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h2 className="font-black font-heading text-xl" style={{ color: '#0F172A' }}>{s.name}</h2>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: s.tagColor }}>
                              {s.tag}
                            </span>
                          </div>
                          <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {s.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle size={13} className="text-green-500 flex-shrink-0" /> {h}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Starting from</div>
                        <div className="text-2xl font-black font-heading mb-4" style={{ color: '#1B3F7C' }}>{s.startPrice}</div>
                      </div>
                      <Link href={s.href}
                        className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm">
                        View Service <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">INDUSTRIES SERVED</div>
            <h2 className="section-title mb-4">Security Solutions for Every Property Type in Dubai</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From single-bedroom apartments to 50-storey commercial towers — Mideatek has completed 500+ projects across every property type in Dubai and the UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/areas" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: '#1B3F7C' }}>
              See all 41 Dubai areas we serve <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Need a Security System in Dubai?" subtitle="One call, one survey, one contractor for every system. Free site survey across Dubai and UAE — call +971 54 556 6456." />
    </>
  )
}
