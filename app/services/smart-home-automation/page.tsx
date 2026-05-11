import type { Metadata } from 'next'
import { Home, CheckCircle, Phone, ChevronRight, Wifi, Lightbulb, Thermometer, Camera } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smart Home Automation Dubai | Home Automation UAE | Mideatek',
  description: 'Complete smart home automation in Dubai — lighting control, climate, security, entertainment, and voice control. Luxury smart homes designed and installed by experts.',
  keywords: ['smart home Dubai', 'home automation UAE', 'smart home automation Dubai', 'Crestron Dubai', 'Lutron Dubai', 'smart villa Dubai'],
}

const features = [
  { icon: Lightbulb, title: 'Smart Lighting', desc: 'Automated scenes, dimming control, mood lighting, and circadian rhythm optimization.' },
  { icon: Thermometer, title: 'Climate Control', desc: 'Intelligent HVAC control with geofencing, scheduling, and energy optimization.' },
  { icon: Camera, title: 'Security Integration', desc: 'Integrated CCTV, smart locks, alarm systems, and video doorbells in one platform.' },
  { icon: Wifi, title: 'Entertainment', desc: 'Whole-home audio, multi-zone AV, home theatre, and streaming integration.' },
  { icon: Home, title: 'Blinds & Curtains', desc: 'Motorized shades, drapes, and solar screens controlled automatically or via app.' },
  { icon: Wifi, title: 'Voice & App Control', desc: 'Amazon Alexa, Google Home, Apple HomeKit, and custom app control from anywhere.' },
]

const platforms = ['Crestron', 'Lutron', 'Control4', 'Savant', 'KNX', 'Loxone', 'HDL', 'Google Home', 'Apple HomeKit', 'Amazon Alexa']

export default function SmartHomePage() {
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
            <span style={{ color: '#0F172A' }}>Smart Home Automation</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Home size={14} /> Smart Home Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Smart Home Automation Dubai & UAE
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Transform your villa or apartment into an intelligent, connected home. Control lighting, climate, security, and entertainment from your smartphone or voice — anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Consultation
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Get Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="smart-home-page" title="Get Smart Home Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">SMART HOME</div>
            <h2 className="section-title mb-4">Everything Smart, Seamlessly Integrated</h2>
            <p className="section-subtitle mx-auto max-w-2xl">We design and install complete smart home ecosystems using Crestron, Lutron, Savant, and Control4 platforms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={24} className="text-cyan-600" />
                </div>
                <h3 className="font-bold font-heading mb-2" style={{ color: '#0F172A' }}>{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Platforms */}
          <div className="rounded-2xl p-8 md:p-10 text-center border border-gray-200 bg-white shadow-sm">
            <h3 className="text-xl font-bold font-heading mb-6" style={{ color: '#0F172A' }}>Platforms We Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((brand) => (
                <span key={brand} className="bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Make Your Home Smarter Today" subtitle="Contact Mideatek for a complete smart home consultation and custom design proposal." />
    </>
  )
}
