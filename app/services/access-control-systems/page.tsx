import type { Metadata } from 'next'
import { Lock, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import RelatedServices from '@/components/shared/RelatedServices'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Access Control Systems Dubai | Biometric & RFID Door Access UAE | Free Survey',
  description: 'Advanced access control in Dubai — biometric fingerprint, facial recognition, RFID card & smart door access for offices, hotels, warehouses & villas. SIRA approved. Time attendance integration. Free site survey — call +971 54 556 6456.',
  keywords: [
    'access control Dubai',
    'access control system UAE',
    'biometric access control Dubai',
    'RFID access control UAE',
    'door access system Dubai',
    'facial recognition access Dubai',
    'time attendance Dubai',
    'fingerprint door access UAE',
    'smart door lock Dubai',
    'visitor management Dubai',
    'multi-door access control UAE',
    'hotel access control Dubai',
    'access control installation Dubai',
    'card reader access control UAE',
    'ZKTeco Dubai',
    'Hikvision access control Dubai',
    'office access control Dubai',
    'SIRA access control Dubai',
  ],
  alternates: { canonical: `${BASE}/services/access-control-systems` },
  openGraph: {
    title: 'Access Control Systems Dubai | Biometric & RFID Door Access UAE',
    description: 'Biometric, RFID & smart access control for offices, hotels & residential in Dubai. Time attendance integration. Free survey.',
    url: `${BASE}/services/access-control-systems`,
    images: [{ url: '/images/access-control/access-control-1.jpg', width: 1200, height: 630, alt: 'Access Control System Installation Dubai' }],
  },
}

const features = [
  'Biometric fingerprint readers',
  'RFID & proximity card systems',
  'Facial recognition technology',
  'Mobile phone access via app',
  'Time & attendance integration',
  'Multi-door & floor control',
  'Remote management platform',
  'Visitor management system',
]

const systemTypes = [
  { title: 'Office Access Control', desc: 'Secure your office with multi-level access zones, employee attendance tracking, and visitor management.' },
  { title: 'Residential Gate Control', desc: 'Boom barriers, intercom, video door phones, and remote gate access for villas and compounds.' },
  { title: 'Warehouse Security', desc: 'Heavy-duty access control for loading bays, server rooms, and restricted areas in industrial facilities.' },
  { title: 'Hotel Door Lock Systems', desc: 'RFID key card systems, mobile key, and master key management for hospitality environments.' },
]

const faqs = [
  { q: 'What access control systems do you install in Dubai?', a: 'We install biometric (fingerprint and facial recognition), RFID card, PIN, and mobile app-based access control systems from leading brands including Hikvision, ZKTeco, Suprema, and HID for offices, hotels, villas, and warehouses across Dubai.' },
  { q: 'Can access control integrate with CCTV in Dubai?', a: 'Yes. We integrate access control with CCTV systems to create a complete security ecosystem — every door opening event can trigger CCTV recording and alert notifications, giving you a full audit trail.' },
  { q: 'Do you provide time and attendance systems in Dubai?', a: 'Yes. Our biometric access control systems include time and attendance functionality, generating detailed reports for payroll and HR compliance. Data can integrate with leading HR software systems used in the UAE.' },
  { q: 'How many doors can one access control system manage?', a: 'Our systems can manage from a single door up to thousands of doors across multiple sites. Multi-door and multi-site systems are centrally managed from one software platform, with real-time monitoring and remote access.' },
  { q: 'What is the best access control system for an office in Dubai?', a: 'For a typical Dubai office, we recommend a cloud-based biometric (fingerprint or facial recognition) system with mobile app access and time attendance reporting. This provides strong security, easy management, and compliance with UAE labour regulations.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Access Control Systems Dubai', item: `${BASE}/services/access-control-systems` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Access Control Systems Dubai',
  alternateName: ['Biometric Access Control Dubai', 'RFID Door Access UAE', 'Time Attendance Dubai'],
  description: 'Advanced biometric, RFID, and smart access control system installation in Dubai for offices, hotels, warehouses, and residential compounds. Includes time attendance, visitor management, and CCTV integration.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business` },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Access Control Installation',
  url: `${BASE}/services/access-control-systems`,
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

export default function AccessControlPage() {
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
            <span style={{ color: '#0F172A' }}>Access Control Systems</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Lock size={14} /> Biometric & Smart Access
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Access Control Systems Dubai & UAE
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Advanced biometric, RFID, and smart access control systems for offices, hotels, warehouses, and residential compounds across Dubai and the UAE. Full time & attendance integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Survey
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Get Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="access-control-page" title="Get Free Access Control Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features + system types */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="section-tag">ACCESS CONTROL</div>
              <h2 className="section-title mb-6">Secure Every Door with Smart Technology</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our access control systems give you complete visibility and control over who enters your premises, when, and through which doors. Integrate with CCTV, time attendance, and HR systems for a complete security ecosystem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {systemTypes.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-blue-200 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                    <Lock size={16} className="text-blue-700" />
                  </div>
                  <h4 className="font-semibold mb-1" style={{ color: '#0F172A' }}>{s.title}</h4>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">OUR WORK</div>
            <h2 className="section-title mb-4">Access Control Installations in Dubai</h2>
            <p className="section-subtitle max-w-xl mx-auto">Real access control and intercom installations completed by Mideatek across Dubai.</p>
          </div>

          {/* Row 1: featured wide image + 1 image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video relative">
              <Image src="/images/access-control/access-control-1.jpg" alt="Outdoor intercom system installation Dubai by Mideatek" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video relative">
              <Image src="/images/access-control/access-control-2.jpg" alt="Video intercom door phone system Dubai" fill className="object-cover" />
            </div>
          </div>

          {/* Row 2: 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video relative">
              <Image src="/images/access-control/access-control-3.jpg" alt="Access control panel installation Dubai office" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video relative">
              <Image src="/images/access-control/access-control-4.jpg" alt="Biometric fingerprint door reader UAE" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video relative">
              <Image src="/images/access-control/access-control-5.jpg" alt="RFID access control system Dubai" fill className="object-cover" />
            </div>
          </div>

          {/* Row 3: 3 videos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: '/videos/access-control/access-control-1.mp4', label: 'Access control installation Dubai' },
              { src: '/videos/access-control/access-control-2.mp4', label: 'Intercom system Dubai' },
              { src: '/videos/access-control/access-control-3.mp4', label: 'Door access system UAE' },
            ].map((v) => (
              <div key={v.src} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video relative bg-gray-900">
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label={v.label}
                />
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
            <h2 className="section-title mb-4">Access Control Dubai — Frequently Asked Questions</h2>
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

      <RelatedServices exclude="/services/access-control-systems" title="Complete Your Security System" />

      <CTASection title="Secure Your Premises Today" subtitle="Contact Mideatek for a free access control consultation and system design." />
    </>
  )
}
