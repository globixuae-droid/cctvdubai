import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ChevronRight, Camera, Lock, Wifi, Video, Home as HomeIcon, Gauge, MapPin, Award } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import { LOCATIONS, getLocation, getNearbyLocations } from '@/lib/locations'

const BASE = 'https://www.cctvdubai.me'
const URL_PREFIX = 'cctv-installation-'

export const dynamicParams = false

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ locationSlug: `${URL_PREFIX}${l.slug}` }))
}

function slugFromParam(locationSlug: string): string | null {
  if (!locationSlug.startsWith(URL_PREFIX)) return null
  return locationSlug.slice(URL_PREFIX.length)
}

export async function generateMetadata({ params }: { params: { locationSlug: string } }): Promise<Metadata> {
  const areaSlug = slugFromParam(params.locationSlug)
  if (!areaSlug) return {}
  const loc = getLocation(areaSlug)
  if (!loc) return {}
  const title = `CCTV Installation ${loc.name} | SIRA Approved CCTV Company | Free Survey`
  const description = `Professional CCTV installation in ${loc.name}, Dubai. SIRA-approved technicians, ${loc.propertyMix}, same-day survey. Call +971 54 556 6456 for a free quote.`
  return {
    title,
    description,
    keywords: loc.keywords,
    alternates: { canonical: `${BASE}/${URL_PREFIX}${loc.slug}` },
    openGraph: {
      title: `CCTV Installation ${loc.name} | SIRA Approved`,
      description,
      url: `${BASE}/${URL_PREFIX}${loc.slug}`,
      images: [{ url: '/images/projects/cctv/cctv-10.jpg', width: 1200, height: 630, alt: `CCTV Installation ${loc.name}` }],
    },
  }
}

const trustBadges = [
  { icon: Shield,  title: 'SIRA Approved',            desc: 'Fully compliant with Dubai Police SIRA security regulations.' },
  { icon: Award,   title: '10+ Years in Dubai',       desc: 'Local engineers who know the buildings and neighbourhoods.' },
  { icon: Gauge,   title: 'Same-Day Site Survey',     desc: 'Free survey within 24 hours of your enquiry.' },
  { icon: CheckCircle, title: '500+ Projects Delivered', desc: 'From single apartments to multi-tower commercial fit-outs.' },
  { icon: Phone,   title: '24/7 Support',             desc: 'WhatsApp and phone support every day of the year.' },
  { icon: Lock,    title: 'Lifetime Configuration Help', desc: 'Free remote support on app setup, even years after install.' },
]

const allServices = [
  { icon: Camera,   key: 'CCTV Cameras',            desc: 'HD, 4K, and AI-enabled IP cameras from Hikvision, Dahua, Axis, and Bosch.' },
  { icon: Shield,   key: 'SIRA Approval',           desc: 'Full documentation, technical drawings, and submission on your behalf.' },
  { icon: Wifi,     key: 'Structured Cabling',      desc: 'CAT6, CAT6A, and fibre optic cabling — neat, certified, and warranted.' },
  { icon: Lock,     key: 'Access Control',          desc: 'Card, biometric, and mobile-credential door entry systems.' },
  { icon: Video,    key: 'Video Intercom',          desc: 'Hikvision and Dahua video door phones with mobile-app extension.' },
  { icon: HomeIcon, key: 'Smart Home Integration',  desc: 'Camera tiles inside Control4, KNX, Lutron, and HomeKit interfaces.' },
  { icon: Camera,   key: 'NVR Storage',             desc: '30 to 90+ day recording on enterprise-grade NVRs with cloud backup.' },
  { icon: Phone,    key: 'Gate Barrier Systems',    desc: 'BFT, FAAC, and CAME barriers integrated with ANPR cameras.' },
  { icon: Camera,   key: 'ANPR Gate Cameras',       desc: 'Number-plate recognition for villa gates and parking entries.' },
  { icon: Shield,   key: 'Perimeter Protection',    desc: 'Beam detectors, motion zones, and rear-wall bullet cameras.' },
  { icon: Gauge,    key: 'DCD Fire Integration',    desc: 'CCTV linked to building life-safety system for DCD compliance.' },
  { icon: Camera,   key: 'Marine-Grade Housings',   desc: 'IP67 stainless-fitted cameras for beachfront and salt-air locations.' },
  { icon: Camera,   key: 'Long-Range IR',           desc: 'DarkFighter / Starlight cameras for driveways up to 100m.' },
  { icon: Camera,   key: '4K High-Resolution',      desc: '8MP cameras for licence plates, faces, and high-value asset coverage.' },
  { icon: Camera,   key: 'High-Capacity NVR Storage', desc: '8TB+ NVR storage for 90+ day retention.' },
  { icon: Camera,   key: 'POS Integration',         desc: 'Camera footage synced with till transaction logs for retail and F&B.' },
  { icon: Camera,   key: 'Warehouse Coverage',      desc: 'High-channel-count NVRs and wide-angle cameras for industrial premises.' },
  { icon: Shield,   key: 'Single-Camera Packages',  desc: 'Entry-level package for studios — 1 camera, NVR, SIRA, all included.' },
  { icon: Shield,   key: 'Combined SME Packages',   desc: 'CCTV + door access reader for small offices in a single visit.' },
  { icon: Shield,   key: 'Civil Defence Integration', desc: 'Coordination with the tower fire panel and FM team.' },
  { icon: Shield,   key: 'DMCC Compliance',         desc: 'Specifications matching DMCC technical standards for free-zone tenants.' },
  { icon: Shield,   key: 'JAFZA Compliance',        desc: 'NOC and documentation per JAFZA Authority requirements.' },
  { icon: Shield,   key: 'Free-Zone Documentation', desc: 'Submission through DSO / JAFZA / DMCC portals where required.' },
  { icon: Camera,   key: 'Discreet Installation',   desc: 'Hidden mini-cameras and concealed cabling for premium properties.' },
  { icon: Camera,   key: 'Art Gallery Coverage',    desc: 'Ceiling-rail mini-domes positioned to cover artworks unobtrusively.' },
  { icon: Camera,   key: 'Showroom Surveillance',   desc: 'Wide-area cameras with stock-protection alerts.' },
  { icon: Lock,     key: 'Restaurant POS Integration', desc: 'Till-station cameras linked to POS for F&B SIRA compliance.' },
  { icon: Camera,   key: 'Jewellery Shop CCTV',     desc: 'Display, safe-room, and counter cameras to pass SIRA jewellery inspection.' },
  { icon: Camera,   key: 'Gold Souk Compliance',    desc: 'Tamper-alert NVRs and high-density coverage for souk-zone retail.' },
  { icon: Camera,   key: 'Cash Handling Coverage',  desc: 'Audio-enabled cameras at cash desks and money-exchange counters.' },
  { icon: Camera,   key: 'Server Room Coverage',    desc: 'After-hours motion alerts for server-room access — ISO 27001 friendly.' },
  { icon: HomeIcon, key: 'Same-Day Installation',   desc: 'For nearby areas, installation completed within 24 hours of survey.' },
]

const SERVICE_PAGE_LINKS: Record<string, string> = {
  'CCTV Cameras':       '/services/cctv-installation-dubai',
  'Structured Cabling': '/services/structured-cabling-uae',
  'Access Control':     '/services/access-control-systems',
  'Video Intercom':     '/services/intercom-systems',
  'Gate Barrier Systems': '/services/parking-gate-barrier',
}

const processSteps = [
  { step: '01', title: 'Free Site Survey',  desc: 'Our SIRA-certified engineer surveys your property and designs the optimal camera layout.' },
  { step: '02', title: 'Quotation & NOC',   desc: 'Itemised quote within 24 hours plus building NOC submission where required.' },
  { step: '03', title: 'Professional Install', desc: 'Certified technicians complete cabling, mounting, NVR, and app setup in one visit.' },
  { step: '04', title: 'SIRA Submission & Support', desc: 'We submit to SIRA on your behalf, train you on the app, and provide lifetime configuration support.' },
]

const universalFaqs = [
  {
    q: 'Are your CCTV systems SIRA-approved?',
    a: 'Yes — Mideatek is a fully SIRA-approved CCTV installer in Dubai. Every installation includes complete documentation, technical drawings, and submission to SIRA on your behalf at no extra charge.',
  },
  {
    q: 'How quickly can you complete a CCTV installation?',
    a: 'Most residential installations are completed in a single day. We typically survey within 24 hours of enquiry, prepare your quote and NOC paperwork within 1-2 days, and install within 5 working days of approval.',
  },
  {
    q: 'What camera brands do you supply?',
    a: 'We supply Hikvision, Dahua, Bosch, Axis, and Uniview — all SIRA-approved manufacturers. We recommend the right brand and model for your property and budget during the free survey.',
  },
  {
    q: 'Can I view the cameras on my phone?',
    a: 'Yes. All our systems include free mobile app setup (Hikvision iVMS / DMSS for Dahua) with live view, playback, and motion alerts. Works on iOS and Android from anywhere in the world with internet.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'Standard warranty is 2 years on all equipment plus lifetime free remote configuration help. Optional Annual Maintenance Contracts (AMC) extend hardware warranty to 5+ years and include scheduled cleaning and firmware updates.',
  },
]

export default function LocationPage({ params }: { params: { locationSlug: string } }) {
  const areaSlug = slugFromParam(params.locationSlug)
  if (!areaSlug) notFound()
  const loc = getLocation(areaSlug)
  if (!loc) notFound()

  const nearby = getNearbyLocations(loc.nearbyAreaSlugs)
  const popularServiceKeys = new Set(loc.popularServices)
  const sortedServices = [
    ...allServices.filter((s) => popularServiceKeys.has(s.key)),
    ...allServices.filter((s) => !popularServiceKeys.has(s.key)),
  ].slice(0, 8)

  const allFaqs = [...universalFaqs, ...loc.uniqueFaqs]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${BASE}/areas` },
      { '@type': 'ListItem', position: 3, name: `CCTV Installation ${loc.name}`, item: `${BASE}/${URL_PREFIX}${loc.slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE}/${URL_PREFIX}${loc.slug}#service`,
    name: `CCTV Installation ${loc.name}`,
    alternateName: [
      `SIRA Approved CCTV ${loc.name}`,
      `Security Camera Installation ${loc.name}`,
      ...(loc.aliases ? loc.aliases.map((a) => `CCTV Installation ${a}`) : []),
    ],
    description: `Professional SIRA-approved CCTV installation in ${loc.name}, Dubai. We install Hikvision, Dahua, and Axis IP cameras, NVR systems, and remote monitoring for ${loc.propertyMix}.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE}/#business`,
      name: 'CCTV Dubai — by Mideatek',
    },
    areaServed: { '@type': 'Place', name: `${loc.name}, Dubai`, address: { '@type': 'PostalAddress', addressLocality: loc.name, addressRegion: 'Dubai', addressCountry: 'AE' } },
    serviceType: 'CCTV Installation',
    category: 'Security Systems',
    url: `${BASE}/${URL_PREFIX}${loc.slug}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `CCTV Services in ${loc.name}`,
      itemListElement: loc.popularServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${s} in ${loc.name}` },
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

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
            <Link href="/areas" className="hover:text-blue-700 transition-colors">Areas We Serve</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>CCTV Installation {loc.name}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-red mb-5">
                <Shield size={13} /> SIRA Approved · {loc.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                CCTV Installation {loc.name} — SIRA Approved
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                {loc.shortDesc}. Same-day site survey, fixed-price quotes, and full SIRA compliance handled for you.
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
              <LeadForm source={`location-${loc.slug}`} title={`Free Quote — ${loc.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-4xl">
          <div className="section-tag">{loc.name.toUpperCase()} CCTV</div>
          <h2 className="section-title mb-6">CCTV Installation in {loc.name}, Dubai</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">{loc.intro}</p>
          <p className="text-gray-500 leading-relaxed">
            <strong style={{ color: '#1B3F7C' }}>Property mix:</strong> {loc.propertyMix}.
            <br />
            <strong style={{ color: '#1B3F7C' }}>Local note:</strong> {loc.localAngle}
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">WHY MIDEATEK</div>
            <h2 className="section-title mb-4">Why {loc.name} Chooses Mideatek</h2>
            <p className="section-subtitle max-w-2xl mx-auto">SIRA-approved engineers, 10+ years of Dubai installations, and a track record of passing first-time inspection.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBadges.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: '#EFF6FF' }}>
                    <Icon size={22} style={{ color: '#1B3F7C' }} />
                  </div>
                  <h3 className="font-bold font-heading text-lg mb-2" style={{ color: '#0F172A' }}>{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">SERVICES IN {loc.name.toUpperCase()}</div>
            <h2 className="section-title mb-4">Security Systems We Install in {loc.name}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">A complete security stack from a single SIRA-approved contractor — no juggling multiple vendors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sortedServices.map((s, idx) => {
              const Icon = s.icon
              const isPopular = popularServiceKeys.has(s.key)
              return (
                <div key={s.key + idx} className={`rounded-2xl p-5 border ${isPopular ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: isPopular ? '#1B3F7C' : '#EFF6FF' }}>
                    <Icon size={18} style={{ color: isPopular ? 'white' : '#1B3F7C' }} />
                  </div>
                  {SERVICE_PAGE_LINKS[s.key] ? (
                    <Link href={SERVICE_PAGE_LINKS[s.key]} className="hover:text-blue-700 transition-colors">
                      <h3 className="font-bold font-heading text-base mb-1.5" style={{ color: '#0F172A' }}>{s.key}</h3>
                    </Link>
                  ) : (
                    <h3 className="font-bold font-heading text-base mb-1.5" style={{ color: '#0F172A' }}>{s.key}</h3>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  {isPopular && (
                    <div className="text-xs font-semibold mt-3 inline-block px-2 py-0.5 rounded-full" style={{ background: '#1B3F7C', color: 'white' }}>
                      Popular in {loc.name}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sub-communities */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-8">
            <div className="section-tag">COVERAGE</div>
            <h2 className="section-title mb-4">Sub-Communities of {loc.name} We Cover</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Free site surveys across every sub-community — same-day where possible.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {loc.subCommunities.map((sc) => (
              <span key={sc} className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-white inline-flex items-center gap-1.5" style={{ color: '#1B3F7C' }}>
                <MapPin size={13} /> {sc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">{loc.name.toUpperCase()} PRICING</div>
            <h2 className="section-title mb-4">CCTV Installation Cost in {loc.name}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Indicative ranges for common {loc.name} property types. Final price confirmed at the free site survey — no hidden extras.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#1B3F7C' }}>
                  <th className="px-6 py-4 text-left text-white font-semibold">Property Type</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Cameras</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Estimated Cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                {loc.commonProperties.map((row, i) => (
                  <tr key={row.type} style={{ background: i % 2 === 0 ? '#F8FAFC' : 'white' }}>
                    <td className="px-6 py-4 font-medium" style={{ color: '#0F172A' }}>{row.type}</td>
                    <td className="px-6 py-4 text-gray-500">{row.cameras}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#1B3F7C' }}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Includes supply, installation, NVR, cabling, and SIRA submission. VAT may apply.</p>
          <div className="text-center mt-6">
            <a href="tel:+971545566456" className="btn-primary py-4 px-8 text-base inline-flex items-center gap-2">
              <Phone size={18} /> Get Your {loc.name} Quote
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">HOW WE WORK</div>
            <h2 className="section-title mb-4">Our {loc.name} Installation Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{ background: '#1B3F7C' }}>{s.step}</div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-4">CCTV Installation {loc.name} — FAQs</h2>
          </div>
          <div className="space-y-4">
            {allFaqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold mb-2" style={{ color: '#0F172A' }}>{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Areas */}
      {nearby.length > 0 && (
        <section className="section-pad" style={{ background: '#F8FAFC' }}>
          <div className="container-custom">
            <div className="text-center mb-10">
              <div className="section-tag">NEARBY AREAS</div>
              <h2 className="section-title mb-4">CCTV Installation Near {loc.name}</h2>
              <p className="section-subtitle max-w-2xl mx-auto">We cover all of Dubai — explore other communities we serve.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/${URL_PREFIX}${n.slug}`} className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ background: '#EFF6FF' }}>
                    <MapPin size={18} style={{ color: '#1B3F7C' }} />
                  </div>
                  <h3 className="font-bold font-heading text-base mb-1" style={{ color: '#0F172A' }}>CCTV {n.name}</h3>
                  <p className="text-gray-500 text-xs leading-snug">{n.propertyMix.split(',')[0].trim()}</p>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/areas" className="text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2 transition-all" style={{ color: '#1B3F7C' }}>
                View all 41 areas we serve <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Need CCTV Installation in ${loc.name}?`}
        subtitle={`Free same-day survey, SIRA-approved engineers, and a fixed quote within 24 hours. Talk to our ${loc.name} team now.`}
      />
    </>
  )
}
