import type { Metadata } from 'next'
import { Cable, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Structured Cabling UAE | Network Cabling Dubai | Mideatek',
  description: 'Expert structured cabling solutions in Dubai & UAE. Cat6, Cat6A, fiber optic, server room infrastructure. Etisalat certified. Free site survey available.',
  keywords: ['structured cabling Dubai', 'network cabling UAE', 'Cat6 cabling Dubai', 'fiber optic installation UAE', 'data cabling Dubai'],
}

const features = [
  'Cat5e, Cat6, Cat6A installations',
  'Fiber optic (single & multi-mode)',
  'Etisalat & du certified',
  'Server room & data center design',
  'TIA/EIA 568 compliant',
  'Full cable management & labeling',
  'Network rack installation',
  'Testing & certification reports',
]

export default function StructuredCablingPage() {
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
            <span style={{ color: '#0F172A' }}>Structured Cabling UAE</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Cable size={14} /> TIA/EIA & Etisalat Certified
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Structured Cabling Solutions in Dubai & UAE
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Enterprise-grade structured cabling for offices, warehouses, hotels, and data centers. Cat6, Cat6A, and fiber optic networks built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971545566456" className="btn-primary py-4 px-7 text-base justify-center">
                  <Phone size={18} /> Free Survey
                </a>
                <a href="#quote" className="btn-outline py-4 px-7 text-base justify-center">Request Quote <ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md" id="quote">
              <LeadForm source="cabling-page" title="Get Free Cabling Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features + Real photos */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag">STRUCTURED CABLING</div>
              <h2 className="section-title mb-6">Future-Proof Network Infrastructure</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                A well-designed structured cabling system is the backbone of your entire technology infrastructure. Mideatek designs and installs networks that support Gigabit and 10 Gigabit speeds, ensuring your business is ready for today's demands and tomorrow's growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ value: '10,000+', label: 'Points Installed' }, { value: '100%', label: 'Tested & Certified' }, { value: '15yr', label: 'Warranty Available' }].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/projects/structured-cabling/cabling-7.jpg"
                alt="Structured Cabling Dubai — Cat6 Network Rack Installation by Mideatek"
                className="rounded-2xl w-full object-cover h-80 mb-4 shadow-md"
              />
              <div className="grid grid-cols-3 gap-3">
                <img src="/images/projects/structured-cabling/cabling-5.jpg" alt="Fiber optic termination" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/structured-cabling/cabling-6.jpg" alt="Fiber optic rack cabling" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/structured-cabling/cabling-1.jpg" alt="Cat6 patch panel installation" className="rounded-xl w-full h-24 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Structured Cabling in Dubai?" subtitle="Contact Mideatek for enterprise-grade network infrastructure with full TIA/EIA compliance and certification." />
    </>
  )
}
