import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Shield, ChevronRight, Phone } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'
import { LOCATIONS } from '@/lib/locations'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Areas We Serve | CCTV Installation Across Dubai | SIRA Approved',
  description: 'SIRA-approved CCTV installation across 41 Dubai communities — from Dubai Marina and Palm Jumeirah to DIP, Mirdif, and Karama. Free same-day site survey, fixed quotes.',
  keywords: [
    'CCTV installation Dubai areas',
    'SIRA approved CCTV all Dubai',
    'CCTV company Dubai areas',
    'CCTV neighbourhoods Dubai',
    'security camera Dubai communities',
    'Dubai CCTV coverage',
  ],
  alternates: { canonical: `${BASE}/areas` },
  openGraph: {
    title: 'Areas We Serve | CCTV Installation Across Dubai',
    description: 'SIRA-approved CCTV installation in 41 Dubai communities. Free site survey.',
    url: `${BASE}/areas`,
    images: [{ url: '/images/projects/cctv/cctv-10.jpg', width: 1200, height: 630, alt: 'CCTV Installation Across Dubai' }],
  },
}

const tiers = [
  { label: 'Premium Residential', slugs: ['dubai-marina', 'palm-jumeirah', 'downtown-dubai', 'dubai-hills', 'emirates-hills', 'arabian-ranches', 'jbr', 'business-bay'] },
  { label: 'Hot Newer Destinations', slugs: ['dubai-creek-harbour', 'mbr-city', 'meydan', 'bluewaters', 'city-walk', 'al-wasl'] },
  { label: 'Family Communities', slugs: ['jvc', 'jvt', 'al-barsha', 'mirdif', 'the-springs', 'the-meadows', 'the-greens', 'discovery-gardens', 'damac-hills', 'mudon', 'town-square', 'al-furjan'] },
  { label: 'Towers & Mixed-Use', slugs: ['jlt', 'silicon-oasis', 'motor-city', 'sports-city', 'studio-city', 'barsha-heights', 'international-city'] },
  { label: 'Established Dubai', slugs: ['karama', 'bur-dubai', 'deira', 'jumeirah', 'umm-suqeim'] },
  { label: 'Outer & Industrial', slugs: ['dip', 'jebel-ali', 'al-quoz'] },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${BASE}/areas` },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dubai Areas Served by Mideatek CCTV',
  numberOfItems: LOCATIONS.length,
  itemListElement: LOCATIONS.map((l, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `CCTV Installation ${l.name}`,
    url: `${BASE}/cctv-installation-${l.slug}`,
  })),
}

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Areas We Serve</span>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-red mb-5 inline-flex">
              <Shield size={13} /> SIRA Approved Across Dubai
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
              Areas We Serve — CCTV Installation Across {LOCATIONS.length} Dubai Communities
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Mideatek installs SIRA-approved CCTV in every major community in Dubai — from waterfront penthouses on Palm Jumeirah to warehouses in DIP. Pick your area below for a dedicated quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                <Phone size={18} /> Call for Free Survey
              </a>
              <Link href="/contact" className="btn-outline py-4 px-7 text-base justify-center">
                Request Quote <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tiered area grid */}
      {tiers.map((tier) => (
        <section key={tier.label} className="section-pad" style={{ background: tiers.indexOf(tier) % 2 === 0 ? '#F8FAFC' : 'white' }}>
          <div className="container-custom">
            <div className="mb-8">
              <div className="section-tag">{tier.label.toUpperCase()}</div>
              <h2 className="section-title">{tier.label}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {tier.slugs.map((slug) => {
                const loc = LOCATIONS.find((l) => l.slug === slug)
                if (!loc) return null
                return (
                  <Link key={slug} href={`/cctv-installation-${slug}`} className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: '#EFF6FF' }}>
                        <MapPin size={18} style={{ color: '#1B3F7C' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold font-heading text-base mb-0.5" style={{ color: '#0F172A' }}>{loc.name}</h3>
                        {loc.aliases && loc.aliases.length > 0 && (
                          <p className="text-xs text-gray-400">{loc.aliases.join(' · ')}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-snug mb-3">{loc.propertyMix}</p>
                    <div className="text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all" style={{ color: '#1B3F7C' }}>
                      View CCTV {loc.name} <ChevronRight size={13} />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Not Sure Which Area Pricing Applies?"
        subtitle="Talk to a SIRA-approved engineer — we'll send a free site survey to your address and confirm a fixed quote within 24 hours."
      />
    </>
  )
}
