import type { Metadata } from 'next'
import { Speaker, CheckCircle, Phone, ChevronRight, Monitor } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Audio Visual Systems Dubai | Video Wall, BGM & AV Company UAE | Free Consultation',
  description: 'Premium audio visual & video wall solutions in Dubai — LED & LCD video walls, background music (BGM), conference AV, digital signage & home theatre. Sony, Samsung, Bose, QSC. Serving hotels, malls, offices & luxury villas. Free consultation — call +971 54 556 6456.',
  keywords: [
    'audio visual Dubai', 'AV company UAE', 'video wall Dubai',
    'LED video wall Dubai', 'background music Dubai', 'BGM system UAE',
    'conference room AV Dubai', 'digital signage Dubai', 'home theatre Dubai',
    'video wall installation Dubai', 'AV installation UAE', 'outdoor PA system Dubai',
    'Samsung video wall Dubai', 'LG video wall UAE', 'Crestron AV Dubai',
    'background music hotel Dubai', 'BGM restaurant Dubai',
    'conference AV system UAE', 'AV contractor Dubai',
    'Dante audio Dubai', 'QSC audio Dubai',
  ],
  alternates: { canonical: `${BASE}/services/audio-visual-systems` },
  openGraph: {
    title: 'Audio Visual Systems Dubai | Video Wall, BGM & AV Company UAE',
    description: 'LED & LCD video walls, background music, conference AV & digital signage in Dubai. Sony, Samsung, Bose, QSC. Free consultation.',
    url: `${BASE}/services/audio-visual-systems`,
    images: [{ url: '/images/projects/cctv/cctv-12.jpg', width: 1200, height: 630, alt: 'Audio Visual Systems Dubai by Mideatek' }],
  },
}

const solutions = [
  { title: 'Video Walls', desc: 'High-impact LED and LCD video walls for control rooms, showrooms, event spaces, and lobbies.' },
  { title: 'Background Music Systems', desc: 'Zone-based BGM systems for hotels, retail, restaurants, offices, and malls. Total ambiance control.' },
  { title: 'Conference Room AV', desc: 'Interactive displays, video conferencing, microphone arrays, and presentation systems for modern boardrooms.' },
  { title: 'Digital Signage', desc: 'Dynamic content management for lobbies, retail, wayfinding, and advertising displays across UAE.' },
  { title: 'Home Theatre', desc: 'Cinema-grade audio and 4K/8K projection systems for luxury homes and private screening rooms.' },
  { title: 'Outdoor PA Systems', desc: 'Weather-resistant speaker systems for outdoor events, stadia, parks, and commercial exteriors.' },
]

const features = [
  'Crestron & AMX control systems',
  'Bose, QSC, and Yamaha audio',
  'Sony, Samsung commercial displays',
  'Custom acoustic design',
  'Zone-based audio control',
  'Remote management & scheduling',
  'Full system integration',
  'Ongoing maintenance support',
]

const videoWallFeatures = [
  'LED & LCD multi-panel configurations',
  'Ultra-narrow bezel displays',
  'Custom sizes — from 2×2 to 10×10+',
  'Control room & operations centres',
  'Showroom & retail installations',
  '4K & 8K signal distribution',
  'Single-controller management',
  'Full content management system',
]

const gridVideos = [
  { src: '/videos/video-wall/video-wall-2.mp4', label: 'Panel Mounting & Alignment' },
  { src: '/videos/video-wall/video-wall-3.mp4', label: 'Wiring & Cable Management' },
  { src: '/videos/video-wall/video-wall-4.mp4', label: 'Display Calibration' },
  { src: '/videos/video-wall/video-wall-5.mp4', label: 'Controller Setup' },
  { src: '/videos/video-wall/video-wall-6.mp4', label: 'Live System Demo' },
]

const faqs = [
  { q: 'What video wall solutions do you install in Dubai?', a: 'We design and install LED and LCD video walls from Samsung, LG, Absen, and Unilumin. Configurations range from compact 2×2 arrays to large-format 10×10 walls for control rooms, corporate lobbies, showrooms, and hospitality venues across Dubai and the UAE.' },
  { q: 'What background music system is best for a hotel or restaurant in Dubai?', a: 'For hotels and restaurants in Dubai, we recommend a zone-based IP audio system using Bose, QSC, or Yamaha equipment with a central DSP controller. This allows independent volume and source control for each area — lobby, restaurant, pool deck, and rooms — from one management platform.' },
  { q: 'Do you supply and install conference room AV in Dubai?', a: 'Yes. We design and install complete conference room AV systems including interactive flat panels, 4K displays, Microsoft Teams and Zoom video conferencing, ceiling microphone arrays, and wireless presentation systems for offices and boardrooms across Dubai.' },
  { q: 'How much does a video wall cost in Dubai?', a: 'A 2×2 LCD video wall (4 panels) for a reception or showroom in Dubai typically starts from AED 25,000 including installation. LED video walls for larger spaces start from AED 80,000. We provide detailed proposals based on your specific size, resolution, and location requirements.' },
  { q: 'Do you provide digital signage systems in Dubai?', a: 'Yes. We supply, install, and configure digital signage systems including commercial displays, media players, and content management software for lobbies, retail, wayfinding, advertising, and menu boards across Dubai and the UAE.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Audio Visual Systems Dubai', item: `${BASE}/services/audio-visual-systems` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Audio Visual Systems Dubai',
  alternateName: ['Video Wall Dubai', 'AV Company UAE', 'Background Music Dubai', 'Digital Signage Dubai'],
  description: 'Premium audio visual and video wall solutions in Dubai including LED/LCD video walls, background music, conference AV, digital signage, home theatre, and outdoor PA systems.',
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#business` },
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'AdministrativeArea', name: 'UAE' }],
  serviceType: 'Audio Visual Installation',
  url: `${BASE}/services/audio-visual-systems`,
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

export default function AudioVisualPage() {
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
            <span style={{ color: '#0F172A' }}>Audio Visual Systems</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Speaker size={14} /> Premium AV & Video Wall Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Audio Visual & Video Wall Systems Dubai
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Premium AV, video wall, and background music systems for hotels, offices, retail, restaurants, and luxury homes across Dubai and the UAE. Elevate every experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Consultation
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Get AV Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="av-page" title="Get Free AV Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">AV SOLUTIONS</div>
            <h2 className="section-title mb-4">Complete Audio Visual Solutions</h2>
            <p className="section-subtitle mx-auto max-w-2xl">From boardroom to ballroom, we design and install AV systems that impress, perform, and inspire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                  <Speaker size={20} className="text-orange-600" />
                </div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="section-title mb-8 text-center">Why Choose Mideatek for AV?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video wall showcase */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <div className="section-tag">VIDEO WALLS</div>
              <h2 className="section-title mb-4">LED & LCD Video Wall Installation Dubai</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Mideatek designs and installs high-impact video walls for command centres, corporate lobbies, retail showrooms, event spaces, and hospitality venues across Dubai and the UAE.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {videoWallFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2.5 rounded-xl">
                <Monitor size={15} /> Samsung · LG · Absen · Unilumin Panels
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <video src="/videos/video-wall/video-wall-1.mp4" controls muted playsInline preload="metadata"
                className="w-full aspect-video object-cover"
                aria-label="Video wall installation Dubai by Mideatek" />
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-gray-700">Video Wall Installation — Full Project</p>
                <p className="text-xs text-gray-400 mt-0.5">Mideatek · Dubai</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gridVideos.map((v) => (
              <div key={v.src} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <video src={v.src} controls muted playsInline preload="metadata"
                  className="w-full aspect-video object-cover" aria-label={v.label} />
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-gray-700">{v.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Mideatek · Dubai</p>
                </div>
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
            <h2 className="section-title mb-4">Audio Visual & Video Wall Dubai — FAQ</h2>
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

      <CTASection title="Elevate Your AV Experience" subtitle="Contact Mideatek for premium audio visual and video wall design and installation across Dubai and UAE." />
    </>
  )
}
