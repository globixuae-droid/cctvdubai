import type { Metadata } from 'next'
import { Bell, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Intercom Systems Dubai | Video Door Phone Installation UAE',
  description: 'Professional intercom and video door phone installation in Dubai & UAE. IP intercom, video entry systems, and building intercom solutions for villas, apartments, and commercial properties.',
  keywords: ['intercom Dubai', 'video door phone Dubai', 'intercom system UAE', 'IP intercom Dubai', 'building intercom Dubai', 'door entry system UAE'],
}

const features = [
  'IP & analogue video intercoms',
  'Colour video door phones',
  'Apartment & building systems',
  'Mobile app remote access',
  'CCTV & access control integration',
  'Electric gate & barrier link',
  'HD night-vision cameras',
  '24/7 technical support',
]

const systemTypes = [
  { title: 'Villa & Home Intercom', desc: 'Single or multi-unit video door phone systems with colour screen, remote door release, and smartphone integration.' },
  { title: 'Apartment Building Systems', desc: 'Multi-tenant IP intercom with individual apartment panels, concierge station, and cloud management.' },
  { title: 'Commercial Entry Systems', desc: 'Office and retail entry intercoms with access control integration, visitor logging, and remote management.' },
  { title: 'Gate & Barrier Integration', desc: 'Intercom-linked boom barriers and electric gates with video verification before vehicle entry.' },
]

const videos = [
  { src: '/videos/intercom/intercom-1.mp4', label: 'Intercom Installation' },
  { src: '/videos/intercom/intercom-2.mp4', label: 'Video Door Phone Setup' },
  { src: '/videos/intercom/intercom-3.mp4', label: 'System Commissioning' },
]

export default function IntercomPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-blue-700 transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Intercom Systems</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Bell size={14} /> Video Door Phone Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Intercom & Video Door Phone Systems Dubai
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Professional intercom installation for villas, apartments, offices, and commercial buildings across Dubai and the UAE. See, hear, and control who enters — from anywhere.
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
              <LeadForm source="intercom-page" title="Get Free Intercom Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features + stats */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag">WHAT WE OFFER</div>
              <h2 className="section-title mb-6">Complete Intercom Solutions for Dubai & UAE</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Mideatek supplies and installs market-leading IP and analogue intercom systems. Whether you need a single villa door phone or a full building entry management system, we design, install, and support the right solution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '500+', label: 'Systems Installed' },
                  { value: '100%', label: 'Tested & Certified' },
                  { value: '24/7', label: 'Support' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* System types */}
            <div className="grid grid-cols-1 gap-4">
              {systemTypes.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:border-blue-200 transition-colors flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bell size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading mb-1" style={{ color: '#0F172A' }}>{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real installation videos */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">REAL INSTALLATIONS</div>
            <h2 className="section-title mb-4">Our Intercom Work in Dubai</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Real installation videos from our intercom and video door phone projects across Dubai and the UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.src} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <video
                  src={v.src}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  aria-label={v.label}
                />
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-gray-700">{v.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Mideatek · Dubai</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need an Intercom System in Dubai?"
        subtitle="Contact Mideatek for professional intercom and video door phone installation with full warranty and support."
      />
    </>
  )
}
