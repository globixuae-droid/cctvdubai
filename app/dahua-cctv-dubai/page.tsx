import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ChevronRight, Star, Eye, Camera, Zap, Home, Building2 } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import RelatedServices from '@/components/shared/RelatedServices'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Dahua CCTV Installation Dubai | Certified Dahua Installer UAE | Free Survey',
  description: 'Certified Dahua CCTV installer in Dubai. Dahua WizSense, WizMind, Full-Color, HDCVI and PTZ cameras supplied, installed and SIRA-approved by Mideatek. Ideal for villas, offices and warehouses. Free site survey — call +971 54 556 6456.',
  keywords: [
    'Dahua CCTV Dubai', 'Dahua installer Dubai', 'Dahua camera Dubai',
    'Dahua CCTV installation UAE', 'Dahua WizSense Dubai', 'Dahua WizMind Dubai',
    'Dahua Full-Color Dubai', 'Dahua PTZ camera Dubai', 'Dahua NVR Dubai',
    'Dahua distributor UAE', 'Dahua authorized installer Dubai', 'Dahua 4K camera Dubai',
    'Dahua ANPR Dubai', 'buy Dahua camera Dubai', 'Dahua price UAE',
    'SIRA approved Dahua Dubai', 'Dahua villa CCTV Dubai', 'Dahua HDCVI Dubai',
    'Dahua smart detection Dubai', 'Dahua vs Hikvision Dubai',
  ],
  alternates: { canonical: `${BASE}/dahua-cctv-dubai` },
  openGraph: {
    title: 'Dahua CCTV Installation Dubai | Certified Installer UAE',
    description: 'Certified Dahua installer in Dubai. WizSense, WizMind, Full-Color & PTZ cameras with SIRA compliance. Free survey.',
    url: `${BASE}/dahua-cctv-dubai`,
    images: [{ url: '/images/projects/cctv/cctv-10.jpg', width: 1200, height: 630, alt: 'Dahua CCTV Installation Dubai' }],
  },
}

const productLines = [
  {
    name: 'WizSense',
    badge: 'AI Smart Detection',
    badgeColor: '#1B3F7C',
    icon: Eye,
    desc: 'Dahua WizSense uses deep learning AI to distinguish between humans and vehicles in real time. Unlike basic motion detection, WizSense cameras only alert when a person or car enters the frame — not when a branch sways or a cat crosses the camera. Essential for Dubai villas and offices managing alarm fatigue.',
    features: ['Human & vehicle classification', 'Active deterrence (red/blue light + siren)', 'Smart search in NVR playback', 'Hik-compatible app support via DMSS'],
    best: 'Villas, perimeter fencing, office entrances',
    priceRange: 'AED 380–850 per camera',
  },
  {
    name: 'WizMind',
    badge: 'Enterprise AI',
    badgeColor: '#059669',
    icon: Zap,
    desc: 'Dahua WizMind is the enterprise-grade AI tier — face recognition, people counting, queue detection, parking occupancy analysis, and automatic number plate recognition running directly on the device or NVR. WizMind reduces the need for expensive server-side video analytics.',
    features: ['Facial recognition with attribute search', 'People counting & crowd management', 'Queue detection for retail & F&B', 'Integrated ANPR with barrier trigger'],
    best: 'Malls, hotels, corporate offices, government buildings',
    priceRange: 'AED 1,200–4,500 per camera',
  },
  {
    name: 'Full-Color',
    badge: '24/7 Colour Video',
    badgeColor: '#DC2626',
    icon: Camera,
    desc: 'Dahua Full-Color cameras deliver true 24/7 colour imaging without switching to black-and-white IR mode at night. Using large f/1.0 aperture lenses and warm-white LED supplemental lighting, Full-Color cameras produce vivid, usable footage in complete darkness — making identification and investigation far more effective.',
    features: ['Colour imaging in 0 lux darkness', 'Warm-white supplemental light', 'Active deterrence option', 'Available in dome, eyeball and turret styles'],
    best: 'Building entrances, driveways, retail frontages, car parks',
    priceRange: 'AED 450–950 per camera',
  },
  {
    name: 'HDCVI / Analogue Upgrade',
    badge: 'Analogue Upgrade',
    badgeColor: '#B45309',
    icon: Camera,
    desc: 'Dahua\'s HDCVI (High Definition Composite Video Interface) technology allows HD video (up to 4K) over existing coaxial cable — meaning Dubai properties with legacy analogue systems can upgrade to HD quality without expensive cable replacement. A cost-effective path to 2MP, 4MP, or 4K resolution.',
    features: ['4K over existing coax', 'Works with analogue DVR infrastructure', 'Up to 500m transmission', 'Supports audio, data & power over coax'],
    best: 'Existing analogue system upgrades, retail, schools',
    priceRange: 'AED 250–700 per camera',
  },
  {
    name: 'PTZ (Speed Dome)',
    badge: 'Pan-Tilt-Zoom',
    badgeColor: '#7C3AED',
    icon: Camera,
    desc: 'Dahua PTZ cameras offer motorised 360° pan, 90° tilt, and up to 40× optical zoom with auto-tracking and preset patrol routes. A single Dahua PTZ can replace up to 8 fixed cameras in an open area, making it ideal for Dubai car parks, sports facilities, and large warehouse perimeters.',
    features: ['Up to 40× optical zoom', 'Auto-tracking of intruders or vehicles', 'IR range up to 150m', '5MP resolution at full pan speed'],
    best: 'Car parks, football courts, warehouses, construction sites',
    priceRange: 'AED 1,800–7,500 per unit',
  },
  {
    name: 'ANPR Cameras',
    badge: 'Licence Plate',
    badgeColor: '#0F172A',
    icon: Shield,
    desc: 'Dahua ANPR cameras combine high-speed plate capture with direct integration into Dahua\'s barrier and parking management systems. Designed to read UAE Arabic plates as well as Western-format plates, at vehicle speeds up to 100km/h, in Dubai\'s high-contrast bright daylight and complete night darkness.',
    features: ['Arabic & Western plate reading', 'Up to 100km/h capture speed', 'Barrier trigger via TCP/IP or relay', 'Cloud-based plate list management'],
    best: 'Residential gate barriers, visitor management, commercial car parks',
    priceRange: 'AED 2,200–5,500 per camera',
  },
]

const pricingData = [
  { product: 'Dahua IPC-HDW2849H-S-IL (WizSense 8MP eyeball)', price: 'AED 350–500', note: 'Best-selling for villas and apartments' },
  { product: 'Dahua IPC-HDW3849H-AS-PV (Full-Color + deterrence)', price: 'AED 450–650', note: 'Active deterrence — ideal for entrances' },
  { product: 'Dahua IPC-HDW3869H-Z-AS-PV (Full-Color 8MP motorised)', price: 'AED 600–900', note: 'Varifocal Full-Color 4K for commercial' },
  { product: 'Dahua SD29204UE-GN (2MP PTZ WizSense)', price: 'AED 1,900–3,200', note: 'Compact PTZ for office and retail' },
  { product: 'Dahua ITC237-PW1B-IRZ (ANPR camera)', price: 'AED 2,500–4,200', note: 'Barrier integration, UAE Arabic plates' },
  { product: 'Dahua NVR4108HS-8P-EI (8-ch PoE WizSense NVR)', price: 'AED 700–1,200', note: '8-channel NVR — homes and small offices' },
  { product: 'Dahua NVR4116HS-EI (16-ch WizSense NVR)', price: 'AED 1,200–2,000', note: '16-channel AI NVR for commercial' },
  { product: 'Dahua NVR5832-EI (32-ch WizMind NVR)', price: 'AED 3,500–6,500', note: 'Enterprise AI NVR with facial recognition' },
]

const vsHikvision = [
  { aspect: 'AI Detection', dahua: 'WizSense (human/vehicle + active deterrence)', hikvision: 'AcuSense (human/vehicle)' },
  { aspect: 'Full-colour night', dahua: 'Full-Color (warm-white LED, f/1.0 lens)', hikvision: 'ColorVu (warm-white LED, wide aperture)' },
  { aspect: 'Enterprise AI', dahua: 'WizMind (face, crowd, queue, ANPR on NVR)', hikvision: 'DeepInMind (face, crowd on server)' },
  { aspect: 'SIRA acceptance', dahua: 'SIRA-accepted across residential & commercial', hikvision: 'SIRA-accepted (widest product range)' },
  { aspect: 'Best for villas', dahua: 'WizSense 2MP/8MP dome — excellent value', hikvision: 'AcuSense 4MP dome — premium tier' },
  { aspect: 'Mobile app', dahua: 'DMSS (Dahua Mobile Surveillance System)', hikvision: 'Hik-Connect / iVMS-4500' },
  { aspect: 'Analogue upgrade', dahua: 'HDCVI (HD over existing coax, up to 4K)', hikvision: 'TurboHD / HDTVI (HD over coax)' },
  { aspect: 'Price position', dahua: 'Competitive — 10-15% below Hikvision at same tier', hikvision: 'Market benchmark price' },
]

const whyMideatek = [
  { title: 'Certified Dahua Installer', desc: 'Our engineers are Dahua-certified with product training on WizSense, WizMind, and HDCVI systems. We install to manufacturer specifications for full warranty compliance.' },
  { title: 'Authorised Dahua Reseller', desc: 'We supply genuine Dahua products through authorised UAE distribution. We do not sell grey-market or counterfeit Dahua products, which are common in Dubai retail and online markets.' },
  { title: 'SIRA Compliance Included', desc: 'Dahua systems installed by Mideatek include full SIRA documentation, technical drawings, and regulatory submission. Certificate typically issued within 48–72 hours for standard residential and commercial projects.' },
  { title: 'Ideal for Dubai Villas', desc: 'Dahua WizSense is our most-specified camera for Dubai villa owners — active deterrence (strobe + siren) means potential intruders see and hear a visible warning before any incident escalates.' },
  { title: 'AMC & 24/7 Support', desc: 'Annual Maintenance Contracts for Dahua systems include firmware updates, preventive cleaning, health checks, and priority response time. Optional extended hardware coverage available.' },
  { title: 'HDCVI Upgrade Specialists', desc: 'If you have existing analogue coaxial cabling, we can upgrade to Dahua HDCVI HD or 4K resolution without rewiring — typically saving 40-60% versus a full IP camera replacement project.' },
]

const faqs = [
  {
    q: 'Is Dahua CCTV SIRA-approved for Dubai?',
    a: 'Yes. Dahua cameras are accepted by SIRA (Security Industry Regulatory Agency) for residential and commercial CCTV installations in Dubai. Dahua meets the minimum technical specifications for Dubai\'s regulatory framework including minimum 2MP resolution for standard areas and 4MP+ for entry points. Mideatek handles full SIRA documentation and submission on your behalf.',
  },
  {
    q: 'What is the difference between Dahua WizSense and WizMind?',
    a: 'WizSense is Dahua\'s entry-to-mid AI tier — it uses deep learning to detect humans and vehicles and trigger active deterrence (flashing light and audio). WizMind is the enterprise AI tier — it adds facial recognition, people counting, queue detection, and advanced ANPR analytics, typically running on the NVR or a dedicated server. For most Dubai villas and offices, WizSense is sufficient. WizMind is specified for hotels, malls, and government facilities.',
  },
  {
    q: 'How much does a Dahua CCTV system cost in Dubai?',
    a: 'A Dahua WizSense CCTV system for a typical Dubai villa (4–6 cameras + 8-channel NVR + cabling + installation) ranges from AED 4,000–10,000 all-in including SIRA approval. Dahua is typically 10-15% less expensive than an equivalent Hikvision system at the same resolution and feature tier. Contact us for an itemised quote after a free site survey.',
  },
  {
    q: 'What is Dahua Full-Color and how does it compare to Hikvision ColorVu?',
    a: 'Dahua Full-Color and Hikvision ColorVu are competing solutions to the same problem: providing full-colour video footage at night without switching to black-and-white IR mode. Both use warm-white LED supplemental lighting and wide aperture lenses. The technologies are functionally equivalent — camera selection usually comes down to specific model features, pricing, and system integration requirements rather than fundamental technology differences.',
  },
  {
    q: 'Can Dahua cameras work with an existing analogue DVR system in Dubai?',
    a: 'Yes. If you have existing coaxial cables, Dahua HDCVI cameras can upgrade your footage to HD (2MP, 4MP, or up to 8MP/4K) over the same cables using a Dahua HDCVI DVR — no rewiring needed. This is the most cost-effective CCTV upgrade path for Dubai properties with legacy analogue installations. Mideatek regularly performs HDCVI upgrades in Dubai villas and retail properties.',
  },
  {
    q: 'What mobile app does Dahua CCTV use for remote viewing in Dubai?',
    a: 'Dahua uses the DMSS (Dahua Mobile Surveillance System) app for iOS and Android. DMSS supports live view, remote playback, push notifications for AI alerts, two-way audio, and PTZ control from anywhere with an internet connection. Configuration is included with every Mideatek Dahua installation.',
  },
  {
    q: 'Is Dahua better than Hikvision for Dubai villas?',
    a: 'Both are excellent choices. Dahua WizSense offers competitive value at the villa price point and the active deterrence feature (strobe light + siren on detection) can be a visible security advantage. Hikvision AcuSense is similarly capable and has broader SIRA project history. The best choice depends on budget, specific feature requirements, and whether existing cabling is coaxial (favouring HDCVI/Dahua) or Cat6 (both work equally well). Our free site survey helps identify the right system for your property.',
  },
  {
    q: 'Does Dahua integrate with access control and gate barriers in Dubai?',
    a: 'Yes. Dahua produces a full integrated security ecosystem including CCTV cameras, access control readers and panels, video intercoms, and gate barrier systems. Dahua\'s integrated platform allows door access events to trigger camera recording, and Dahua WizMind ANPR cameras directly integrate with boom barriers to enable licence-plate-based vehicle access control. Mideatek installs complete Dahua integrated systems.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Dahua CCTV Dubai', item: `${BASE}/dahua-cctv-dubai` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/dahua-cctv-dubai#service`,
  name: 'Dahua CCTV Installation Dubai',
  alternateName: ['Dahua Installer Dubai', 'Dahua Camera Installation UAE', 'Dahua CCTV Supplier Dubai'],
  description: 'Certified Dahua CCTV installation in Dubai. Supply, installation, and SIRA compliance of Dahua WizSense, WizMind, Full-Color, HDCVI, PTZ and ANPR cameras for residential, commercial, and industrial properties.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business`, name: 'CCTV Dubai — by Mideatek' },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Dahua CCTV Installation',
  brand: { '@type': 'Brand', name: 'Dahua' },
  url: `${BASE}/dahua-cctv-dubai`,
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

export default function DahuaPage() {
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
            <span style={{ color: '#0F172A' }}>Dahua CCTV Dubai</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-red mb-5">
                <Shield size={13} /> Certified Dahua Installer · SIRA Approved
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Dahua CCTV Installation Dubai
              </h1>
              <p className="text-gray-500 text-lg mb-5 leading-relaxed">
                Mideatek is a certified Dahua installer and authorised reseller in Dubai. We supply genuine Dahua WizSense, WizMind, Full-Color and HDCVI cameras — fully installed, SIRA-compliant, and warranted.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Genuine Dahua products', 'Certified installation engineers', 'SIRA compliance included', 'Active deterrence cameras', 'HDCVI analogue upgrades', '400+ Dahua projects'].map((item) => (
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
              <LeadForm source="dahua-page" title="Free Dahua CCTV Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* About Dahua */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom max-w-4xl">
          <div className="section-tag">ABOUT DAHUA</div>
          <h2 className="section-title mb-6">Why Dahua is Dubai's Most Popular CCTV for Residential Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-500 leading-relaxed text-sm">
            <div className="space-y-4">
              <p>
                Dahua Technology is the world's second-largest CCTV manufacturer by revenue, holding approximately 18% of the global video surveillance market. Founded in 2001 in Hangzhou, China — the same city as Hikvision — Dahua supplies cameras to over 180 countries and is a strong market presence in UAE residential and commercial construction.
              </p>
              <p>
                In Dubai, Dahua is particularly favoured for mid-tier residential projects, villa developments, and analogue-to-HD upgrade projects due to its competitive pricing and the HDCVI coaxial-upgrade technology that enables HD/4K video over existing legacy cable infrastructure.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Dahua cameras are accepted by SIRA for Dubai residential and commercial installations, meeting the technical standards required for compliant projects. The WizSense AI camera range — which includes active deterrence (visible strobe light and audio warnings) — is particularly valued for Dubai villas and gated communities where visible deterrence is a priority.
              </p>
              <p>
                Dahua's complete product ecosystem covers CCTV, NVRs, access control, video intercoms, ANPR, and gate barrier systems — enabling a single unified security platform from perimeter to interior for any Dubai property type.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: '#2', label: 'Global CCTV brand by revenue' },
              { value: '180+', label: 'Countries served' },
              { value: '18%', label: 'Global market share' },
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
            <div className="section-tag">DAHUA PRODUCT LINES</div>
            <h2 className="section-title mb-4">Dahua Camera Technologies Explained</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Dahua's product range covers six major technology families from AI smart detection to analogue HD upgrades. Our survey identifies which is right for each camera position.
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
            <div className="section-tag">DAHUA PRICING DUBAI 2026</div>
            <h2 className="section-title mb-4">Dahua Camera & NVR Prices in Dubai</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Reference pricing for commonly specified Dahua products in the Dubai market. Prices are for genuine, warranty-registered hardware supplied through authorised UAE distribution.
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
              <Phone size={18} /> Get Dahua Quote
            </a>
          </div>
        </div>
      </section>

      {/* Dahua vs Hikvision Comparison */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">BRAND COMPARISON</div>
            <h2 className="section-title mb-4">Dahua vs Hikvision — Which Is Right for You in Dubai?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Both brands are excellent choices. The decision usually comes down to specific features, existing cabling infrastructure, and budget. Here is an honest comparison.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#0F172A' }}>
                  <th className="px-5 py-4 text-left text-white font-semibold">Aspect</th>
                  <th className="px-5 py-4 text-left text-white font-semibold">Dahua</th>
                  <th className="px-5 py-4 text-left text-white font-semibold">Hikvision</th>
                </tr>
              </thead>
              <tbody>
                {vsHikvision.map((row, i) => (
                  <tr key={row.aspect} style={{ background: i % 2 === 0 ? '#F8FAFC' : 'white' }}>
                    <td className="px-5 py-4 font-semibold text-xs" style={{ color: '#0F172A' }}>{row.aspect}</td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{row.dahua}</td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{row.hikvision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm mb-4">Not sure which brand suits your property? Our free site survey includes a brand recommendation based on your specific needs.</p>
            <Link href="/services/cctv-installation-dubai" className="btn-outline py-3 px-6 text-sm inline-flex items-center gap-2">
              See full brand comparison on our CCTV page <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Mideatek */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">WHY MIDEATEK</div>
            <h2 className="section-title mb-4">Why Choose Mideatek as Your Dahua Installer in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMideatek.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-gray-200">
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

      {/* Internal Links */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="section-tag">EXPLORE</div>
            <h2 className="section-title mb-4">Dahua CCTV for Your Property Type</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/home-cctv-dubai" className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#EFF6FF' }}>
                <Home size={18} style={{ color: '#1B3F7C' }} />
              </div>
              <div className="font-bold font-heading mb-2 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>Dahua for Villas & Homes</div>
              <p className="text-gray-500 text-sm mb-3">WizSense with active deterrence — flashing light and alarm siren for maximum visible deterrence around Dubai villas.</p>
              <span className="text-sm font-semibold" style={{ color: '#1B3F7C' }}>Villa CCTV packages →</span>
            </Link>
            <Link href="/commercial-cctv-dubai" className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#EFF6FF' }}>
                <Building2 size={18} style={{ color: '#1B3F7C' }} />
              </div>
              <div className="font-bold font-heading mb-2 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>Dahua for Commercial</div>
              <p className="text-gray-500 text-sm mb-3">WizMind AI analytics for offices, retail, and hospitality. People counting, queue detection, facial recognition.</p>
              <span className="text-sm font-semibold" style={{ color: '#1B3F7C' }}>Commercial CCTV →</span>
            </Link>
            <Link href="/hikvision-cctv-dubai" className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#EFF6FF' }}>
                <Camera size={18} style={{ color: '#1B3F7C' }} />
              </div>
              <div className="font-bold font-heading mb-2 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>Prefer Hikvision Instead?</div>
              <p className="text-gray-500 text-sm mb-3">Compare Hikvision AcuSense, ColorVu, DarkFighter and DeepInMind camera lines for Dubai.</p>
              <span className="text-sm font-semibold" style={{ color: '#1B3F7C' }}>Hikvision CCTV Dubai →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">Dahua CCTV Dubai — Frequently Asked Questions</h2>
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

      <RelatedServices title="Complete Your Dahua Security System" />

      <CTASection
        title="Get a Dahua CCTV System in Dubai"
        subtitle="Free site survey, genuine Dahua hardware, SIRA-compliant installation. Contact Mideatek today."
      />
    </>
  )
}
