import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ChevronRight, Star, Award, Zap, Eye, Camera, AlertTriangle } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import RelatedServices from '@/components/shared/RelatedServices'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Hikvision CCTV Installation Dubai | Certified Hikvision Installer UAE | Free Survey',
  description: 'Certified Hikvision installer in Dubai. Hikvision ColorVu, AcuSense, DeepInMind, PTZ and ANPR cameras supplied, installed and SIRA-approved by Mideatek. 500+ Hikvision projects. Free site survey — call +971 54 556 6456.',
  keywords: [
    'Hikvision CCTV Dubai', 'Hikvision installer Dubai', 'Hikvision camera Dubai',
    'Hikvision CCTV installation UAE', 'Hikvision ColorVu Dubai', 'Hikvision AcuSense Dubai',
    'Hikvision PTZ camera Dubai', 'Hikvision NVR Dubai', 'Hikvision distributor UAE',
    'Hikvision authorized installer Dubai', 'Hikvision 4K camera Dubai',
    'Hikvision DeepInMind Dubai', 'Hikvision ANPR Dubai', 'buy Hikvision camera Dubai',
    'Hikvision price UAE', 'Hikvision DarkFighter Dubai', 'SIRA approved Hikvision Dubai',
  ],
  alternates: { canonical: `${BASE}/hikvision-cctv-dubai` },
  openGraph: {
    title: 'Hikvision CCTV Installation Dubai | Certified Installer UAE',
    description: 'Certified Hikvision installer in Dubai. ColorVu, AcuSense, DeepInMind & PTZ cameras with SIRA compliance. Free survey.',
    url: `${BASE}/hikvision-cctv-dubai`,
    images: [{ url: '/images/projects/cctv/cctv-10.jpg', width: 1200, height: 630, alt: 'Hikvision CCTV Installation Dubai' }],
  },
}

const productLines = [
  {
    name: 'AcuSense',
    badge: 'AI Detection',
    badgeColor: '#1B3F7C',
    icon: AlertTriangle,
    desc: 'AI-powered human and vehicle detection that filters out animals, leaves, and other false triggers. AcuSense cameras dramatically reduce nuisance alarms — critical for Dubai villa and commercial security systems where false alerts cause alarm fatigue.',
    features: ['Human & vehicle classification', '95% reduction in false alarms', 'Instant push notification to app', 'Works in complete darkness (IR)'],
    best: 'Villas, offices, perimeter fences',
    priceRange: 'AED 400–900 per camera',
  },
  {
    name: 'ColorVu',
    badge: 'Full-Color Night',
    badgeColor: '#DC2626',
    icon: Eye,
    desc: 'Full-colour imaging 24 hours a day, 7 days a week — no IR black-and-white footage at night. ColorVu cameras use large aperture lenses and supplemental warm-white light to capture vivid colour even in complete darkness, making identification far easier.',
    features: ['True colour in total darkness', 'Warm-white supplemental light', 'No grainy monochrome footage', 'Available in dome and bullet'],
    best: 'Car parks, entrances, retail, F&B',
    priceRange: 'AED 500–1,100 per camera',
  },
  {
    name: 'DarkFighter',
    badge: 'Ultra Low Light',
    badgeColor: '#7C3AED',
    icon: Camera,
    desc: 'Hikvision DarkFighter technology delivers colour images in near-zero lux lighting conditions without switching to black-and-white IR mode. Ideal for dimly lit car parks, basements, server rooms, and outdoor areas with minimal ambient lighting.',
    features: ['Colour imaging at 0.002 lux', 'No visible supplemental light', 'Wide dynamic range (WDR)', 'Available in 2MP–8MP'],
    best: 'Basements, parking decks, server rooms',
    priceRange: 'AED 600–1,400 per camera',
  },
  {
    name: 'DeepInMind',
    badge: 'AI Analytics',
    badgeColor: '#059669',
    icon: Zap,
    desc: 'Enterprise-grade AI analytics including facial recognition, people counting, heat mapping, and behaviour analysis. DeepInMind NVRs can run deep learning algorithms locally without cloud dependency — PDPL-compliant for UAE data sovereignty requirements.',
    features: ['Facial recognition & search', 'People counting & crowd detection', 'Heat map analytics', 'VMS integration (PSIM)'],
    best: 'Hotels, malls, corporate offices, government',
    priceRange: 'AED 1,500–5,000 per camera',
  },
  {
    name: 'PTZ (Speed Dome)',
    badge: 'Pan-Tilt-Zoom',
    badgeColor: '#B45309',
    icon: Camera,
    desc: 'Motorised cameras with 360° pan, 90° tilt, and up to 42× optical zoom. Hikvision PTZ cameras can track moving subjects automatically, cover vast open areas from a single unit, and operate under remote joystick control from your NVR or VMS.',
    features: ['Up to 42× optical zoom', 'Auto-tracking of moving subjects', 'IR range up to 200m', '180° quick patrol preset'],
    best: 'Car parks, sports courts, large warehouses, airports',
    priceRange: 'AED 2,000–8,000 per unit',
  },
  {
    name: 'ANPR Cameras',
    badge: 'Licence Plate',
    badgeColor: '#0F172A',
    icon: Shield,
    desc: 'Automatic Number Plate Recognition cameras purpose-built for integration with Hikvision gate barriers and parking management systems. Reads plates at vehicle speed up to 120km/h, day or night, in Dubai\'s high-ambient-light and dusty conditions.',
    features: ['Reads at 120km/h', 'Day & night operation', 'Arabic plate support', 'Direct NVR and barrier integration'],
    best: 'Gate barriers, car park entries, vehicle checkpoints',
    priceRange: 'AED 2,500–6,000 per camera',
  },
]

const pricingData = [
  { product: 'Hikvision DS-2CD2143G2-I (AcuSense 4MP dome)', price: 'AED 320–450', note: 'Most popular for offices & apartments' },
  { product: 'Hikvision DS-2CD2347G2-LU (ColorVu 4MP dome)', price: 'AED 450–650', note: 'Full colour night, best for entrances' },
  { product: 'Hikvision DS-2CD2387G2-LU (ColorVu 8MP/4K dome)', price: 'AED 650–950', note: '4K colour night — premium residential' },
  { product: 'Hikvision DS-2DE4425IWG-E (4MP PTZ)', price: 'AED 2,200–3,500', note: 'Small-medium area auto-tracking PTZ' },
  { product: 'Hikvision iDS-2CD7A46G0/P-IZHSY (ANPR)', price: 'AED 2,800–4,500', note: 'Gate barrier integration, Arabic plates' },
  { product: 'Hikvision DS-7608NI-K2/8P (8-ch PoE NVR)', price: 'AED 800–1,400', note: '8-channel NVR for homes and offices' },
  { product: 'Hikvision DS-7616NI-K2/16P (16-ch PoE NVR)', price: 'AED 1,400–2,200', note: '16-channel for commercial properties' },
  { product: 'Hikvision DS-9632NI-M8 (32-ch enterprise NVR)', price: 'AED 4,000–7,000', note: 'Enterprise NVR for large commercial' },
]

const whyMideatek = [
  { title: 'Certified Hikvision Installer', desc: 'Our engineers hold Hikvision certifications and receive regular product training. We install to manufacturer specification for full warranty compliance.' },
  { title: 'Authorised Reseller', desc: 'We supply genuine Hikvision products through authorised distribution channels. Counterfeit Hikvision products are common in Dubai — we guarantee authentic hardware.' },
  { title: 'SIRA Compliance Included', desc: 'Every Hikvision installation includes SIRA documentation, technical drawings, and submission on your behalf. Certificate issued within 48–72 hours for most projects.' },
  { title: '500+ Hikvision Projects', desc: 'From single apartments to 500+ camera enterprise systems, we have deployed Hikvision across hotels, residential towers, warehouses, and government facilities in Dubai.' },
  { title: 'Full Warranty Support', desc: 'Mideatek provides 2-year warranty on all Hikvision hardware plus lifetime free remote configuration help. Optional AMC extends coverage to 5 years.' },
  { title: 'Integration Expertise', desc: 'We integrate Hikvision CCTV with Hikvision access control, gate barriers, intercoms, and third-party VMS platforms including Milestone, Genetec, and Avigilon.' },
]

const faqs = [
  {
    q: 'Is Hikvision SIRA-approved for Dubai installations?',
    a: 'Yes. Hikvision is one of the most widely accepted CCTV brands by SIRA (Security Industry Regulatory Agency) in Dubai. Hikvision cameras meet the minimum resolution requirements (2MP for standard areas, 4MP+ for entry points) specified in SIRA regulations. All Hikvision systems installed by Mideatek include full SIRA compliance documentation.',
  },
  {
    q: 'What is the difference between Hikvision AcuSense and ColorVu?',
    a: 'AcuSense and ColorVu solve different problems. AcuSense uses AI to filter out false motion alerts — only triggering on humans and vehicles, not animals, leaves, or insects. ColorVu provides full-colour night-time imaging without switching to black-and-white. Many Hikvision cameras now combine both technologies in a single unit.',
  },
  {
    q: 'How much does a Hikvision CCTV system cost in Dubai?',
    a: 'A complete Hikvision CCTV system in Dubai starts from AED 1,500 for a basic 2–3 camera home setup (HD cameras + 4-channel NVR + cabling + installation). A typical 6–8 camera villa system with AcuSense or ColorVu cameras costs AED 5,000–12,000 all-in including SIRA approval. Contact us for an itemised quote after a free site survey.',
  },
  {
    q: 'Can I view my Hikvision cameras on my phone in Dubai?',
    a: 'Yes. All Hikvision IP camera systems use the Hik-Connect or iVMS-4500 mobile app (iOS and Android) for live viewing, playback, and motion alerts from anywhere with an internet connection. Setup is included with every Mideatek Hikvision installation.',
  },
  {
    q: 'What is Hikvision DeepInMind and who needs it in Dubai?',
    a: 'DeepInMind is Hikvision\'s enterprise AI analytics platform running facial recognition, people counting, and behaviour analysis directly on the NVR or dedicated server — no cloud required. It is most commonly installed in Dubai hotels, shopping malls, corporate headquarters, and government facilities where individual identification and crowd analytics are needed.',
  },
  {
    q: 'How do I know if I am buying genuine Hikvision products in Dubai?',
    a: 'Genuine Hikvision products come with a holographic security label and can be verified on Hikvision\'s official product authentication portal. Counterfeit and grey-market Hikvision products are widespread in Dubai\'s retail market. Purchasing through an authorised installer like Mideatek guarantees authentic hardware with manufacturer warranty registration.',
  },
  {
    q: 'Can Hikvision integrate with access control systems in Dubai?',
    a: 'Yes. Hikvision produces a complete integrated ecosystem — CCTV cameras, NVRs, access control readers and panels, door stations, and gate barrier systems all communicate natively through the Hikvision platform. This means door access events can be video-verified, and motion-detected footage can trigger door lock alerts. Mideatek installs complete Hikvision integrated systems.',
  },
  {
    q: 'What is the warranty on Hikvision products in Dubai?',
    a: 'Official Hikvision products purchased through authorised channels in the UAE carry a 3-year manufacturer warranty. Mideatek also provides a 2-year installation warranty covering cabling, mounts, and configuration. Optional Annual Maintenance Contracts (AMC) extend effective coverage and include preventive cleaning and firmware updates.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Hikvision CCTV Dubai', item: `${BASE}/hikvision-cctv-dubai` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/hikvision-cctv-dubai#service`,
  name: 'Hikvision CCTV Installation Dubai',
  alternateName: ['Hikvision Installer Dubai', 'Hikvision Camera Installation UAE', 'Hikvision CCTV Supplier Dubai'],
  description: 'Certified Hikvision CCTV installation in Dubai. Supply, installation, and SIRA compliance of Hikvision AcuSense, ColorVu, DarkFighter, DeepInMind, PTZ and ANPR cameras for residential, commercial, and industrial properties.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business`, name: 'CCTV Dubai — by Mideatek' },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Hikvision CCTV Installation',
  brand: { '@type': 'Brand', name: 'Hikvision' },
  url: `${BASE}/hikvision-cctv-dubai`,
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

export default function HikvisionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-700 transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Hikvision CCTV Dubai</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-red mb-5">
                <Shield size={13} /> Certified Hikvision Installer · SIRA Approved
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Hikvision CCTV Installation Dubai
              </h1>
              <p className="text-gray-500 text-lg mb-5 leading-relaxed">
                Mideatek is a certified Hikvision installer and authorised reseller in Dubai. We supply genuine Hikvision cameras, NVRs, and integrated systems — fully installed, SIRA-compliant, and warranted.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Genuine Hikvision products', 'Certified installation engineers', 'SIRA compliance included', '2-year installation warranty', 'App setup & training', '500+ Hikvision projects'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">
                    <CheckCircle size={13} className="text-green-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
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
              <LeadForm source="hikvision-page" title="Free Hikvision CCTV Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Hikvision */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom max-w-4xl">
          <div className="section-tag">ABOUT HIKVISION</div>
          <h2 className="section-title mb-6">Why Hikvision is Dubai's Most Installed CCTV Brand</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-500 leading-relaxed text-sm">
            <div className="space-y-4">
              <p>
                Hikvision is the world's largest CCTV manufacturer by revenue, holding approximately 25% of the global video surveillance market. Founded in 2001 in Hangzhou, China, Hikvision supplies cameras to over 155 countries and is the most widely specified CCTV brand on construction projects across Dubai and the UAE.
              </p>
              <p>
                In Dubai, Hikvision's dominance is reinforced by SIRA acceptance — the Security Industry Regulatory Agency recognises Hikvision products as meeting the technical standards required for compliant installations in residential, commercial, and government properties.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Hikvision's product ecosystem spans every camera type (dome, bullet, PTZ, fisheye, thermal, ANPR), every resolution tier (1MP to 4K), and every intelligence level (standard HD to deep learning AI analytics). This breadth means a single brand can serve an entire building — from villa bedroom to commercial car park to perimeter fence.
              </p>
              <p>
                For Dubai property owners, the key practical advantages are: wide availability of spare parts through UAE distribution, broad SIRA certification coverage, competitive pricing at every tier, and strong integration with access control and gate barrier systems from the same ecosystem.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: '#1', label: 'Global CCTV brand by revenue' },
              { value: '155+', label: 'Countries served' },
              { value: '25%', label: 'Global market share' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 text-center border border-gray-200">
                <div className="text-3xl font-black font-heading mb-1" style={{ color: '#1B3F7C' }}>{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">HIKVISION PRODUCT LINES</div>
            <h2 className="section-title mb-4">Hikvision Camera Technologies Explained</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Hikvision's product range spans six major technology families. Each solves a different surveillance challenge. Our free site survey identifies which technology is right for each camera position.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((pl) => {
              const Icon = pl.icon
              return (
                <div key={pl.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#EFF6FF' }}>
                      <Icon size={20} style={{ color: '#1B3F7C' }} />
                    </div>
                    <div>
                      <div className="font-black font-heading text-base" style={{ color: '#0F172A' }}>{pl.name}</div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: pl.badgeColor }}>{pl.badge}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{pl.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {pl.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 pt-3 flex items-center justify-between text-xs">
                    <span className="text-gray-400">Best for: <span className="text-gray-700 font-medium">{pl.best}</span></span>
                  </div>
                  <div className="text-xs font-semibold mt-1" style={{ color: '#1B3F7C' }}>{pl.priceRange}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">HIKVISION PRICING DUBAI 2026</div>
            <h2 className="section-title mb-4">Hikvision Camera & NVR Prices in Dubai</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Reference pricing for commonly specified Hikvision products in the Dubai market. Prices include VAT and are for genuine, warranty-registered hardware supplied through authorised UAE distribution.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#1B3F7C' }}>
                  <th className="px-5 py-4 text-left text-white font-semibold">Product</th>
                  <th className="px-5 py-4 text-left text-white font-semibold">Price (AED)</th>
                  <th className="px-5 py-4 text-left text-white font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.product} style={{ background: i % 2 === 0 ? '#F8FAFC' : 'white' }}>
                    <td className="px-5 py-4 font-medium text-xs" style={{ color: '#0F172A' }}>{row.product}</td>
                    <td className="px-5 py-4 font-bold text-sm" style={{ color: '#1B3F7C' }}>{row.price}</td>
                    <td className="px-5 py-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Hardware prices above. Cabling, installation labour, and SIRA submission fees are additional — contact us for an all-in project quote after a free site survey.</p>
          <div className="text-center mt-6">
            <a href="tel:+971545566456" className="btn-primary py-4 px-8 text-base inline-flex items-center gap-2">
              <Phone size={18} /> Get Hikvision Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Mideatek for Hikvision */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">WHY MIDEATEK</div>
            <h2 className="section-title mb-4">Why Choose Mideatek as Your Hikvision Installer in Dubai</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Many companies in Dubai sell Hikvision cameras. We are a certified installer with a track record of 500+ completed Hikvision projects across every property type.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMideatek.map((w) => (
              <div key={w.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#1B3F7C' }}>
                  <Star size={18} className="text-white" />
                </div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links — Related Hikvision Use Cases */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="section-tag">EXPLORE</div>
            <h2 className="section-title mb-4">Hikvision CCTV for Your Property Type</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/home-cctv-dubai" className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="font-bold font-heading mb-2 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>Hikvision for Villas & Homes</div>
              <p className="text-gray-500 text-sm mb-3">ColorVu and AcuSense packages for Dubai villas — discreet domes, clean wiring, Hik-Connect mobile app.</p>
              <span className="text-sm font-semibold" style={{ color: '#1B3F7C' }}>Villa CCTV packages →</span>
            </Link>
            <Link href="/commercial-cctv-dubai" className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="font-bold font-heading mb-2 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>Hikvision for Commercial</div>
              <p className="text-gray-500 text-sm mb-3">Enterprise NVR systems, DMCC/DED SIRA compliance, 30–90 day recording for offices and retail.</p>
              <span className="text-sm font-semibold" style={{ color: '#1B3F7C' }}>Commercial CCTV →</span>
            </Link>
            <Link href="/services/cctv-installation-dubai" className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="font-bold font-heading mb-2 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>Full CCTV Service</div>
              <p className="text-gray-500 text-sm mb-3">All camera types, all brands, all property types. SIRA approval, survey, installation, and lifetime support.</p>
              <span className="text-sm font-semibold" style={{ color: '#1B3F7C' }}>CCTV installation Dubai →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">Hikvision CCTV Dubai — Frequently Asked Questions</h2>
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

      <RelatedServices title="Complete Your Hikvision Security System" />

      <CTASection
        title="Get a Hikvision CCTV System in Dubai"
        subtitle="Free site survey, genuine Hikvision hardware, SIRA-compliant installation. Contact Mideatek today."
      />
    </>
  )
}
