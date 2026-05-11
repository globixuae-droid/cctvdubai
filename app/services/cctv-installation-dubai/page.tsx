import type { Metadata } from 'next'
import { Shield, CheckCircle, Phone, ChevronRight } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import CTASection from '@/components/shared/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CCTV Installation Dubai | SIRA Approved CCTV Company UAE',
  description: 'Professional CCTV installation in Dubai. SIRA-approved cameras, DVR/NVR systems, IP surveillance & remote monitoring for homes and businesses. Call now for free survey.',
  keywords: ['CCTV installation Dubai', 'SIRA approved CCTV', 'CCTV company Dubai', 'security camera installation UAE', 'IP CCTV Dubai'],
}

const features = [
  'SIRA & Dubai Civil Defence approved',
  'HD, 4K & thermal IP cameras',
  'Hikvision & Dahua certified installers',
  'Remote monitoring via mobile app',
  'AI-powered motion detection',
  'Cloud & NVR storage solutions',
  'Integration with access control',
  '24/7 technical support',
]

const processSteps = [
  { step: '01', title: 'Free Site Survey',  desc: 'Our SIRA-certified engineer surveys your premises and designs the optimal camera layout.' },
  { step: '02', title: 'Technical Design',  desc: 'We produce a detailed design, BOQ, and SIRA-compliant technical drawings for approval.' },
  { step: '03', title: 'Installation',      desc: 'Certified technicians install all cameras, cabling, DVR/NVR, and network infrastructure.' },
  { step: '04', title: 'Commissioning',     desc: 'Full system test, remote access setup, staff training, and SIRA submission support.' },
]

const faqs = [
  { q: 'Do you provide SIRA-approved CCTV systems?', a: 'Yes, all our CCTV installations in Dubai are fully SIRA-compliant. We handle the entire approval process including documentation and submissions.' },
  { q: 'How many cameras do I need for my property?', a: 'The number depends on your property size, layout, and security requirements. Our free site survey will determine the optimal number and placement.' },
  { q: 'What brands do you use?', a: 'We supply and install Hikvision, Dahua, Bosch, Axis, and other leading brands. We recommend the best solution based on your budget and requirements.' },
  { q: 'How long does installation take?', a: 'A typical 8-16 camera system takes 1-2 days. Larger commercial projects are planned and executed with minimal disruption to your operations.' },
]

const galleryImages = [
  { src: '/images/projects/cctv/cctv-11.jpg', alt: 'Hikvision dome camera installation Dubai' },
  { src: '/images/projects/cctv/cctv-10.jpg', alt: 'CCTV installation hotel corridor Dubai' },
  { src: '/images/projects/cctv/cctv-3.jpg',  alt: 'PTZ camera outdoor installation UAE' },
  { src: '/images/projects/cctv/cctv-4.jpg',  alt: 'Outdoor Hikvision bullet cameras' },
  { src: '/images/projects/cctv/cctv-6.jpg',  alt: 'Indoor dome camera ceiling installation' },
  { src: '/images/projects/cctv/cctv-9.jpg',  alt: 'Dome camera installation villa Dubai' },
]

export default function CCTVPage() {
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
            <span style={{ color: '#0F172A' }}>CCTV Installation Dubai</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-red mb-5">
                <Shield size={13} /> SIRA Approved Installation
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                CCTV Installation Dubai — SIRA Approved
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Professional CCTV surveillance systems for homes, offices, villas, warehouses, and commercial properties across Dubai and the UAE. Full SIRA compliance guaranteed.
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
              <LeadForm source="cctv-page" title="Get Free CCTV Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features + Real photos */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag">WHAT WE OFFER</div>
              <h2 className="section-title mb-6">Complete CCTV Solutions for Dubai & UAE</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Mideatek delivers end-to-end CCTV surveillance solutions that are fully compliant with SIRA requirements and Dubai Civil Defence regulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ value: '5000+', label: 'Cameras Installed' }, { value: '100%', label: 'SIRA Compliant' }, { value: '24/7', label: 'Support' }].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/projects/cctv/cctv-10.jpg"
                alt="CCTV Installation Dubai by Mideatek"
                className="rounded-2xl w-full object-cover h-80 mb-4 shadow-md" />
              <div className="grid grid-cols-3 gap-3">
                <img src="/images/projects/cctv/cctv-1.jpg"  alt="Hikvision dome camera install" className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/cctv/cctv-3.jpg"  alt="PTZ camera outdoor"            className="rounded-xl w-full h-24 object-cover" />
                <img src="/images/projects/cctv/cctv-11.jpg" alt="Dual dome camera install"      className="rounded-xl w-full h-24 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="section-tag">REAL INSTALLATIONS</div>
            <h2 className="section-title mb-4">Our CCTV Work in Dubai</h2>
            <p className="section-subtitle max-w-xl mx-auto">Real photos from our CCTV installations across Dubai — hotels, offices, villas, and commercial properties.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">HOW WE WORK</div>
            <h2 className="section-title mb-4">Our Installation Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: '#1B3F7C' }}>{s.step}</div>
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
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
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

      <CTASection title="Need CCTV Installation in Dubai?" subtitle="Contact Mideatek for SIRA-approved CCTV systems with professional installation and lifetime support." />
    </>
  )
}
