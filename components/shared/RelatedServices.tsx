import Link from 'next/link'
import { Shield, Lock, Car, Cable, Phone, Home, Monitor, ChevronRight } from 'lucide-react'

const ALL_SERVICES = [
  {
    name: 'CCTV Installation',
    href: '/services/cctv-installation-dubai',
    icon: Shield,
    desc: 'HD, 4K & IP cameras with full SIRA compliance',
    tag: 'Most Popular',
  },
  {
    name: 'Access Control',
    href: '/services/access-control-systems',
    icon: Lock,
    desc: 'Biometric, RFID & smart door access systems',
    tag: null,
  },
  {
    name: 'Gate Barrier Systems',
    href: '/services/parking-gate-barrier',
    icon: Car,
    desc: 'BFT, FAAC & CAME boom barriers with ANPR',
    tag: null,
  },
  {
    name: 'Structured Cabling',
    href: '/services/structured-cabling-uae',
    icon: Cable,
    desc: 'Cat6, Cat6A & fibre optic network cabling',
    tag: null,
  },
  {
    name: 'Intercom Systems',
    href: '/services/intercom-systems',
    icon: Phone,
    desc: 'IP video door phones & apartment intercom',
    tag: null,
  },
  {
    name: 'Smart Home Automation',
    href: '/services/smart-home-automation',
    icon: Home,
    desc: 'KNX, Larnitech & Crestron smart home systems',
    tag: null,
  },
  {
    name: 'Audio Visual Systems',
    href: '/services/audio-visual-systems',
    icon: Monitor,
    desc: 'Video walls, conference AV & digital signage',
    tag: null,
  },
]

interface Props {
  exclude?: string
  title?: string
}

export default function RelatedServices({ exclude, title = 'Complete Security & ELV Services' }: Props) {
  const services = ALL_SERVICES.filter((s) => s.href !== exclude)

  return (
    <section className="section-pad" style={{ background: '#F8FAFC' }}>
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="section-tag">MORE FROM MIDEATEK</div>
          <h2 className="section-title mb-3">{title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            One SIRA-approved contractor for every security and ELV system in your building — CCTV, access control, gate barriers, structured cabling, intercom, smart home, and AV.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.slice(0, 6).map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: '#EFF6FF' }}>
                  <Icon size={20} style={{ color: '#1B3F7C' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold font-heading text-sm group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>
                      {s.name}
                    </h3>
                    {s.tag && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: '#DC2626', color: 'white' }}>
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
              </Link>
            )
          })}
        </div>
        <div className="text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: '#1B3F7C' }}>
            View all services <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
