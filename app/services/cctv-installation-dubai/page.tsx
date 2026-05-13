import type { Metadata } from 'next'
import { Shield, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'CCTV Installation Dubai | SIRA Approved CCTV Company UAE | Free Survey',
  description: 'Professional CCTV installation in Dubai by SIRA-approved engineers. HD, 4K & IP cameras, DVR/NVR systems, Hikvision & Dahua, remote monitoring & AI detection. Serving Downtown, Marina, Business Bay & all Dubai. Free site survey — call +971 54 556 6456.',
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
    'CCTV installation Downtown Dubai',
    'CCTV installation Dubai Marina',
    'CCTV installation Business Bay',
    'dome camera installation Dubai',
    'PTZ camera Dubai',
    'ANPR camera Dubai',
    'CCTV maintenance Dubai',
    'CCTV cost Dubai',
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

const cameraTypes = [
  {
    type: 'Dome Camera',
    icon: '⬤',
    desc: 'The most widely used camera in Dubai — ceiling-mounted, vandal-resistant, and discreet. Ideal for indoor areas like offices, hotel lobbies, and apartment corridors. Available in HD, 4K, and fisheye variants.',
    use: 'Offices, hotels, corridors, retail',
  },
  {
    type: 'Bullet Camera',
    icon: '▶',
    desc: 'Long-range outdoor cameras for car parks, perimeter walls, and building facades. Excellent for low-light environments with built-in IR night vision up to 100m. Deterrent effect due to visible housing.',
    use: 'Perimeters, car parks, warehouses',
  },
  {
    type: 'PTZ Camera',
    icon: '↺',
    desc: 'Pan-Tilt-Zoom cameras offer 360° coverage and can track moving subjects. Controlled remotely via software or joystick. Used in large open areas, stadiums, and critical infrastructure in Dubai.',
    use: 'Large open areas, stadiums, ports',
  },
  {
    type: 'ANPR Camera',
    icon: '🔢',
    desc: 'Automatic Number Plate Recognition cameras integrated with gate barriers and parking systems. Reads plates at up to 120km/h. Required for SIRA-compliant vehicle access control in Dubai.',
    use: 'Gate barriers, car parks, border control',
  },
  {
    type: 'Fisheye / 360° Camera',
    icon: '◎',
    desc: 'Single camera covers an entire room with zero blind spots. One fisheye can replace 4–6 conventional cameras, reducing cabling costs. De-warping software provides multiple virtual camera views.',
    use: 'Open-plan offices, retail floors',
  },
  {
    type: 'Thermal Camera',
    icon: '🌡',
    desc: 'Detects heat signatures in complete darkness, fog, or smoke — invisible to conventional cameras. Used for perimeter protection in high-security facilities and critical infrastructure across the UAE.',
    use: 'High-security perimeters, critical assets',
  },
]

const pricingData = [
  { type: 'Studio / 1BR Apartment', cameras: '2–3', price: 'AED 1,500 – 3,000' },
  { type: '2–3BR Villa / Townhouse', cameras: '4–8', price: 'AED 3,500 – 8,000' },
  { type: 'Large Villa (5+ BR)', cameras: '8–16', price: 'AED 8,000 – 20,000' },
  { type: 'Small Office / Retail Shop', cameras: '4–8', price: 'AED 4,000 – 10,000' },
  { type: 'Commercial Building / Warehouse', cameras: '16–32+', price: 'AED 20,000 – 50,000+' },
]

const areas = [
  'Downtown Dubai', 'Dubai Marina', 'Business Bay', 'DIFC', 'JBR',
  'Palm Jumeirah', 'Jumeirah', 'Al Quoz', 'Deira', 'Bur Dubai',
  'Al Barsha', 'Mirdif', 'Dubai Silicon Oasis', 'Dubai South', 'Jebel Ali',
  'International City', 'Discovery Gardens', 'Motor City', 'Al Nahda', 'Hor Al Anz',
]

const faqs = [
  { q: 'Do you provide SIRA-approved CCTV systems?', a: 'Yes. All our CCTV installations in Dubai are fully SIRA-compliant. We handle the entire approval process including documentation, technical drawings, and SIRA submissions on your behalf.' },
  { q: 'How many CCTV cameras do I need for my property?', a: 'The number depends on your property size, layout, and security requirements. A typical villa needs 6–12 cameras, while commercial properties may need 20 or more. Our free site survey determines the optimal number and placement.' },
  { q: 'What CCTV brands do you install in Dubai?', a: 'We supply and install Hikvision, Dahua, Bosch, Axis, Uniview, and other leading brands. We recommend the best solution for your budget and requirements, with full warranty support.' },
  { q: 'How long does CCTV installation take in Dubai?', a: 'A typical 8–16 camera system takes 1–2 days. Larger commercial CCTV projects are carefully planned and executed to minimise disruption to your operations.' },
  { q: 'What is the cost of CCTV installation in Dubai?', a: 'CCTV installation prices in Dubai range from AED 1,500 for a basic home system to AED 50,000+ for large commercial projects. Key factors include number of cameras, resolution (HD, 4K), NVR storage, cabling runs, and SIRA approval fees. We provide free site surveys and itemised quotations.' },
  { q: 'Do you offer CCTV maintenance and support in Dubai?', a: 'Yes. We offer 24/7 technical support and scheduled maintenance contracts (AMC) to keep your CCTV system operating at peak performance. Our AMC contracts include preventive maintenance visits, camera cleaning, firmware updates, and priority response.' },
  { q: 'Can I view my CCTV cameras remotely on my phone?', a: 'Yes. All our CCTV systems include remote monitoring via mobile app (Hikvision iVMS-4500, Dahua DMSS, or brand-specific apps). You can view live and recorded footage from anywhere in the world with an internet connection.' },
  { q: 'What is the difference between DVR and NVR in Dubai?', a: 'A DVR (Digital Video Recorder) works with older analog CCTV cameras, while an NVR (Network Video Recorder) connects to modern IP cameras over your network. We recommend NVR-based IP systems for all new installations in Dubai as they offer higher resolution, better scalability, and easier remote access.' },
  { q: 'How long is CCTV footage stored in Dubai?', a: 'SIRA regulations in Dubai require a minimum of 30 days of recorded footage for most commercial properties. High-security facilities (banks, government buildings) may require 90 days. We size your NVR storage accordingly — typically 2TB to 8TB depending on camera count and resolution.' },
  { q: 'Do you install CCTV in apartments and residential buildings?', a: 'Yes. We install CCTV for individual apartments, villas, townhouses, and entire residential buildings. For buildings with multiple units, we design systems with dedicated security rooms, digital recording, and management access for building security staff.' },
  { q: 'What areas in Dubai do you cover for CCTV installation?', a: 'We cover all areas of Dubai including Downtown Dubai, Dubai Marina, Business Bay, DIFC, JBR, Palm Jumeirah, Jumeirah, Al Quoz, Deira, Bur Dubai, Al Barsha, Mirdif, and all other communities. We also serve Abu Dhabi, Sharjah, and across the UAE.' },
  { q: 'Is CCTV installation mandatory in Dubai?', a: 'CCTV is mandatory for many property types in Dubai under SIRA regulations — including hotels, restaurants, parking areas, and most commercial premises. For residential properties, while not always mandatory, SIRA requires that any installed system be done by a SIRA-approved company. We can advise on your specific legal obligations.' },
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

      {/* Camera Types */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">CAMERA TYPES</div>
            <h2 className="section-title mb-4">CCTV Camera Types We Install in Dubai</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Every property has different security requirements. We select the right camera type for each location during the free site survey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cameraTypes.map((c) => (
              <div key={c.type} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl" style={{ background: '#EFF6FF' }}>
                  {c.icon}
                </div>
                <h3 className="font-bold font-heading text-lg mb-2" style={{ color: '#0F172A' }}>{c.type}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{c.desc}</p>
                <div className="text-xs font-medium px-3 py-1 rounded-full inline-block" style={{ background: '#EFF6FF', color: '#1B3F7C' }}>
                  Best for: {c.use}
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

      {/* Pricing */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">PRICING GUIDE</div>
            <h2 className="section-title mb-4">CCTV Installation Cost in Dubai 2025</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Transparent pricing guide. Exact cost depends on camera count, resolution, cable runs, and SIRA approval — our free site survey gives you a precise itemised quote.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#1B3F7C' }}>
                  <th className="px-6 py-4 text-left text-white font-semibold">Property Type</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Cameras</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Estimated Cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.type} style={{ background: i % 2 === 0 ? '#F8FAFC' : 'white' }}>
                    <td className="px-6 py-4 font-medium" style={{ color: '#0F172A' }}>{row.type}</td>
                    <td className="px-6 py-4 text-gray-500">{row.cameras}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#1B3F7C' }}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">All prices include supply, installation, NVR, cabling, and SIRA submission. VAT may apply.</p>
          <div className="text-center mt-6">
            <a href="tel:+971545566456" className="btn-primary py-4 px-8 text-base inline-flex items-center gap-2">
              Get Your Free Quote
            </a>
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

      {/* Areas Served */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">COVERAGE</div>
            <h2 className="section-title mb-4">CCTV Installation Across All Dubai Areas</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Our SIRA-approved engineers provide CCTV installation across every community in Dubai, Abu Dhabi, and Sharjah. Same-day site surveys available.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {areas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-gray-50" style={{ color: '#1B3F7C' }}>
                {area}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold font-heading mb-2" style={{ color: '#1B3F7C' }}>CCTV Installation Downtown Dubai</h3>
              <p className="text-gray-600 text-sm">Serving Burj Khalifa, Dubai Mall, and all Downtown towers. SIRA-compliant systems for residential and commercial properties.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold font-heading mb-2" style={{ color: '#1B3F7C' }}>CCTV Installation Dubai Marina</h3>
              <p className="text-gray-600 text-sm">Apartments, JBR, and Marina Walk coverage. Discrete dome cameras for high-rise buildings, car parks, and lobby areas.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold font-heading mb-2" style={{ color: '#1B3F7C' }}>CCTV Installation Business Bay & DIFC</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade IP CCTV for offices, banks, and commercial towers. Full SIRA and DCD compliance. NVR systems with 30–90 day recording.</p>
            </div>
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
