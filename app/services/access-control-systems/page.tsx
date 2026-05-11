import type { Metadata } from 'next'
import { Lock, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Access Control Systems Dubai | Biometric & RFID Solutions UAE',
  description: 'Advanced access control and time attendance systems in Dubai. Biometric fingerprint, RFID, facial recognition, and remote-managed door access for offices and residences.',
  keywords: ['access control Dubai', 'biometric access Dubai', 'RFID access control UAE', 'time attendance Dubai', 'door access system UAE'],
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

export default function AccessControlPage() {
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
                Advanced biometric, RFID, and smart access control systems for offices, hotels, warehouses, and residential compounds across Dubai and the UAE.
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

      <CTASection title="Secure Your Premises Today" subtitle="Contact Mideatek for a free access control consultation and system design." />
    </>
  )
}
