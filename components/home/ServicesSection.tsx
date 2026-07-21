'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/971545566456?text=Hi%2C%20I%20need%20a%20quote%20for%20'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const services = [
  {
    title: 'CCTV Installation Dubai',
    subtitle: 'HD, 4K & AI Surveillance',
    desc: 'SIRA-approved CCTV systems for homes, offices, villas, and warehouses. Hikvision, Dahua, Bosch cameras with remote monitoring, AI motion detection, and cloud storage.',
    image: '/images/projects/cctv/cctv-11.jpg',
    fallback: '/images/projects/cctv/cctv-1.jpg',
    href: '/services/cctv-installation-dubai',
    tag: 'SIRA Approved', tagColor: 'bg-red-600',
    features: ['HD & 4K IP cameras', 'Remote mobile access', 'Night vision', 'AI motion detection'],
    wa: WA_LINK + 'CCTV%20Installation',
    linkText: 'CCTV Installation Dubai',
  },
  {
    title: 'Gate Barrier Systems',
    subtitle: 'Automated Vehicle Access',
    desc: 'Boom barriers, road blockers, bollards, and ANPR camera integration. Full vehicle access management for residential communities, commercial buildings, and parking facilities.',
    image: '/images/projects/gate-barrier/barrier-2.jpg',
    fallback: '/images/projects/gate-barrier/barrier-6.jpg',
    href: '/services/parking-gate-barrier',
    tag: 'Dubai Approved', tagColor: 'bg-orange-500',
    features: ['Boom barriers', 'ANPR cameras', 'Parking systems', 'Road bollards'],
    wa: WA_LINK + 'Gate%20Barrier',
    linkText: 'Gate Barrier System Dubai',
  },
  {
    title: 'Structured Cabling',
    subtitle: 'Cat6, Cat6A & Fiber Optic',
    desc: 'TRA-certified Cat6, Cat6A, and fiber optic structured cabling for offices, data centers, and large buildings. Clean, certified, and future-proof network infrastructure.',
    image: '/images/projects/structured-cabling/cabling-7.jpg',
    fallback: '/images/projects/structured-cabling/cabling-1.jpg',
    href: '/services/structured-cabling-uae',
    tag: 'TRA Licensed', tagColor: 'bg-blue-700',
    features: ['Cat6 / Cat6A', 'Fiber optic', 'Data centers', 'Server rooms'],
    wa: WA_LINK + 'Structured%20Cabling',
    linkText: 'Structured Cabling Dubai',
  },
  {
    title: 'Access Control Systems',
    subtitle: 'Biometric & Card Access',
    desc: 'Fingerprint, facial recognition, and card-based access control for offices, villas, and commercial complexes. Time & attendance, cloud-managed, and multi-door support.',
    image: '/images/projects/access-control/access-control-1.jpg',
    fallback: '/images/projects/access-control/access-control-2.jpg',
    href: '/services/access-control-systems',
    tag: 'Enterprise Grade', tagColor: 'bg-purple-600',
    features: ['Fingerprint readers', 'Face recognition', 'Card & PIN', 'Time & attendance'],
    wa: WA_LINK + 'Access%20Control',
    linkText: 'Access Control System Dubai',
  },
  {
    title: 'Smart Home Automation',
    subtitle: 'Intelligent Living Systems',
    desc: 'Full smart home integration — lighting, climate, security cameras, AV, and energy management. Control everything from your smartphone or voice assistant.',
    image: '/images/projects/jumaria/jumaria-1.jpg',
    fallback: '/images/projects/circle-house/circle-house-1.jpg',
    href: '/services/smart-home-automation',
    tag: 'Premium Solution', tagColor: 'bg-emerald-600',
    features: ['Smart lighting', 'Climate control', 'Security integration', 'Voice control'],
    wa: WA_LINK + 'Smart%20Home',
    linkText: 'Smart Home Automation Dubai',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="section-tag">OUR CORE SERVICES</div>
          <h2 className="section-title mb-4">
            Complete Security &amp; Technology<br />Solutions in Dubai
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From CCTV surveillance to smart home automation — SIRA-approved, TRA-licensed, and fully certified installations across the UAE.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((svc, i) => (
            <div key={svc.title}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden group transition-all duration-300
                ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
              style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)')}>

              {/* Image */}
              <div className="relative h-60 md:h-72 overflow-hidden">
                <img src={svc.image} alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).src = svc.fallback }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-4 left-4 ${svc.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {svc.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 md:p-9 flex flex-col justify-center bg-white">
                <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">{svc.subtitle}</p>
                <h3 className="text-2xl font-black font-heading mb-3 transition-colors" style={{ color: '#0F172A' }}>
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.features.map((f) => (
                    <span key={f}
                      className="text-xs text-gray-600 font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={svc.wa} target="_blank" rel="noopener noreferrer"
                    className="btn-primary text-sm py-3 px-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d={WA_PATH} /></svg>
                    Get Quote
                  </a>
                  <Link href={svc.href}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 text-sm font-semibold
                               transition-colors py-3 px-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50">
                    {svc.linkText} <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
