import type { Metadata } from 'next'
import LandingHeader from '@/components/layout/LandingHeader'
import LeadForm from '@/components/shared/LeadForm'
import {
  Shield, CheckCircle, Smartphone, Wifi, Moon, Volume2, Cloud,
  Phone, MessageCircle, Home,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Villa CCTV Installation Dubai | Home Security Cameras | Remote Mobile Viewing',
  description:
    'Professional CCTV installation for villas, townhouses & apartments in Dubai. Remote mobile viewing, night vision, concealed wiring. Free home survey — +971 54 556 6456.',
  keywords: [
    'villa CCTV installation Dubai',
    'home security cameras Dubai',
    'home CCTV Dubai',
    'residential CCTV installation Dubai',
    'CCTV camera for villa Dubai',
    'security camera for home Dubai',
    'villa surveillance system Dubai',
    'remote viewing CCTV Dubai',
    'home CCTV installation UAE',
    'house security camera Dubai',
    'family security system Dubai',
  ],
  openGraph: {
    title: 'Villa CCTV Installation Dubai | Home Security Cameras | Mobile Remote Viewing',
    description:
      'Professional home CCTV for villas & apartments in Dubai. Family safety, remote mobile access, clean concealed wiring. Free home survey today.',
    url: 'https://www.cctvdubai.me/home-cctv-dubai',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cctvdubai.me/home-cctv-dubai' },
}

const features = [
  { icon: Smartphone, title: 'Live Remote Viewing',        desc: 'Watch your home live from anywhere in the world via mobile app. No extra hardware needed.' },
  { icon: Moon,       title: 'Night Vision (40m+)',         desc: 'Full-colour night vision with smart IR. See clearly in complete darkness without additional lighting.' },
  { icon: Shield,     title: 'Motion Alert Notifications', desc: 'Instant push notifications when motion is detected — so you never miss an unusual event.' },
  { icon: Volume2,    title: '2-Way Audio',                desc: 'Speak to whoever is at your gate or garden from your phone, even when you are abroad.' },
  { icon: Cloud,      title: 'NVR + Cloud Backup',         desc: '30-day local recording with optional cloud backup. Footage available whenever you need it.' },
  { icon: Wifi,       title: 'Clean Concealed Wiring',     desc: 'All cables routed through conduits and wall channels. No visible wires to affect your villa\'s look.' },
]

const packages = [
  { type: 'Apartment',     cameras: '2–4 cameras',   coverage: 'Main door, parking, lobby view',                  price: 'From AED 1,200' },
  { type: 'Townhouse',     cameras: '4–6 cameras',   coverage: 'All entrances, garden, garage, staircase',        price: 'From AED 2,200' },
  { type: 'Villa (Small)', cameras: '6–8 cameras',   coverage: 'Perimeter, pool area, all entrances, driveway',   price: 'From AED 3,500' },
  { type: 'Villa (Large)', cameras: '8–16 cameras',  coverage: 'Full perimeter, all floors, garden, gate & more', price: 'From AED 5,500' },
]

const aesthetics = [
  { title: 'Slim, low-profile camera designs',   desc: 'Compact dome and turret cameras that blend with your ceiling or wall colour' },
  { title: 'Fully concealed cable routing',       desc: 'All cabling runs inside walls, conduits, and false ceilings — nothing visible' },
  { title: 'White or ivory finishes available',   desc: 'Camera housing colour matched to your wall for a seamless, discreet look' },
  { title: 'Clean patch-up on all entry points',  desc: 'Our installers use the correct tools and patch any wall entry points neatly after completion' },
]

const process = [
  { step: '01', title: 'Free Home Survey',       desc: 'Our engineer visits your property, identifies all blind spots, and recommends the ideal camera positions — free of charge.' },
  { step: '02', title: 'Concealed Installation', desc: 'Cameras installed with all cables neatly concealed inside walls and conduits. Your home\'s aesthetic is fully preserved.' },
  { step: '03', title: 'Live Demo & Training',   desc: 'We set up your mobile app, test every camera, and walk you through live and playback access before we leave.' },
]

const stats = [
  { val: '5,000+',  label: 'Cameras Installed in Homes' },
  { val: '40m',     label: 'Night Vision Range' },
  { val: '30 days', label: 'Standard Storage' },
  { val: '2-yr',    label: 'Camera Warranty' },
]

const faqs = [
  {
    q: 'How many cameras does a typical Dubai villa need?',
    a: 'A 4-bedroom villa typically needs 6–10 cameras to cover the front gate, driveway, perimeter walls, garden, pool area, and main entrance. Our engineer gives you an exact count after the free site survey.',
  },
  {
    q: "Can I see the cameras on my phone when I'm abroad?",
    a: 'Yes. All our home CCTV systems include remote access setup via Hik-Connect or DMSS mobile app. You can view live or recorded footage from anywhere with an internet connection.',
  },
  {
    q: 'Will the wiring look messy inside my villa?',
    a: 'No. Our team routes all cables through conduits, false ceilings, and wall channels. Wiring is fully concealed. You will only see the camera — no exposed cables anywhere.',
  },
  {
    q: 'Do the cameras work at night?',
    a: 'Yes. We install cameras with full-colour night vision (40m+ range) using smart IR or ColorVu technology. Even in complete darkness, footage is clear and fully identifiable.',
  },
  {
    q: 'How long is footage stored?',
    a: 'Standard installations store 30 days of continuous footage on the local NVR hard drive. We can also configure motion-triggered recording to extend storage to 60–90 days.',
  },
  {
    q: 'Is there a warranty on the cameras?',
    a: 'Yes. All cameras and NVR units come with a 2-year manufacturer warranty. We also provide a 1-year free labour warranty on the installation itself. Extended support contracts are available.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Villa & Home CCTV Installation Dubai',
  provider: {
    '@type': 'LocalBusiness',
    name: 'CCTV Dubai — by Mideatek',
    telephone: '+971545566456',
    url: 'https://www.cctvdubai.me',
  },
  description:
    'Professional home and villa CCTV installation in Dubai with remote mobile viewing, night vision, and fully concealed wiring. Free home survey available.',
  areaServed: { '@type': 'City', name: 'Dubai' },
  url: 'https://www.cctvdubai.me/home-cctv-dubai',
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

export default function HomeCCTVPage() {
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
                <Home size={12} className="text-yellow-400" />
                Family Safety · Remote Viewing · Clean Wiring
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight mb-5">
                Villa & Home CCTV Installation Dubai — See Your Property From Anywhere
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Protect your family and property with a professional CCTV system. Watch your home{' '}
                <strong className="text-yellow-400">live from anywhere in the world</strong> — with neat,
                concealed wiring that blends with your villa's interior.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Live remote viewing on your phone — worldwide',
                  'Full-colour night vision (40m+ range)',
                  'All cables neatly hidden inside walls',
                  'Motion alerts + 2-way audio via mobile',
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
                source="landing-home"
                title="Book a Free Home Survey"
                subtitle="We'll visit, assess, and quote — completely free"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">Home CCTV Features Dubai</span>
            <h2 className="section-title mt-3 mb-4">Everything You Need to Keep Your Family Safe</h2>
            <p className="section-subtitle">
              Every home CCTV system we install comes with these features as standard.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetics + stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Villa-Friendly Installation</span>
              <h2 className="section-title mt-3 mb-5">
                Security That Doesn't Compromise Your Home's Look
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Many homeowners in Dubai worry that CCTV installation means visible wires and bulky cameras.
                Our team specialises in discreet, villa-friendly installations that preserve the look and feel of your home.
              </p>
              <ul className="space-y-4">
                {aesthetics.map(({ title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">{title}</span>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ val, label }) => (
                <div key={label} className="bg-white rounded-xl p-5 shadow-sm text-center border border-gray-100">
                  <div className="text-2xl font-black font-heading text-blue-700 mb-1">{val}</div>
                  <div className="text-gray-500 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">Home CCTV Packages Dubai</span>
            <h2 className="section-title mt-3 mb-4">Pricing Guide for Villas & Apartments</h2>
            <p className="section-subtitle">
              Final price depends on exact camera positions and cabling distance. Free survey confirms your exact cost.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B3F7C] text-white">
                  <th className="text-left px-5 py-4 rounded-tl-xl font-semibold">Property Type</th>
                  <th className="text-left px-5 py-4 font-semibold">Cameras</th>
                  <th className="text-left px-5 py-4 font-semibold">Coverage</th>
                  <th className="text-left px-5 py-4 rounded-tr-xl font-semibold">Est. Cost</th>
                </tr>
              </thead>
              <tbody>
                {packages.map(({ type, cameras, coverage, price }, i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-5 py-4 font-semibold text-gray-900">{type}</td>
                    <td className="px-5 py-4 text-gray-600">{cameras}</td>
                    <td className="px-5 py-4 text-gray-600">{coverage}</td>
                    <td className="px-5 py-4 font-bold text-blue-700">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center">
            Prices include cameras, NVR, cabling, and installation. Final quote provided after free site survey.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title mt-3 mb-4">3 Simple Steps to a Safer Home</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {process.map(({ step, title, desc }) => (
              <div key={step}>
                <div className="text-5xl font-black font-heading text-blue-700/15 mb-2">{step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title mt-3 mb-4">
              Frequently Asked Questions — Home CCTV Dubai
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title mb-3">Get a Free Home CCTV Survey Today</h2>
            <p className="section-subtitle">
              Tell us about your property and our engineer will visit, assess, and provide a complete quote — no obligation, completely free.
            </p>
          </div>
          <div className="bg-[#1B3F7C] rounded-2xl p-8 shadow-2xl">
            <LeadForm
              source="landing-home-bottom"
              title="Book Your Free Home Survey"
              subtitle="We respond within 1 hour — engineer visit within 24 hours"
              dark
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center text-xs py-6 px-4">
        <p>© 2025 Mideatek — Professional CCTV Installation Dubai</p>
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
