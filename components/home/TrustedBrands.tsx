import { CheckCircle } from 'lucide-react'

const categories = [
  {
    id: 'cctv',
    label: 'CCTV & Video Surveillance',
    brands: [
      { name: 'Hikvision',     alt: 'Hikvision CCTV Systems Dubai' },
      { name: 'Dahua',         alt: 'Dahua CCTV Systems Dubai' },
      { name: 'Uniview (UNV)', alt: 'Uniview UNV CCTV Camera Dubai' },
      { name: 'Axis',          alt: 'Axis Communications Security Camera Dubai' },
      { name: 'Bosch',         alt: 'Bosch Security Camera Systems Dubai' },
      { name: 'Hanwha Vision', alt: 'Hanwha Vision CCTV Camera Dubai' },
    ],
  },
  {
    id: 'access',
    label: 'Access Control Systems',
    brands: [
      { name: 'Hikvision',  alt: 'Hikvision Access Control Dubai' },
      { name: 'Suprema',    alt: 'Suprema Biometric Access Control Dubai' },
      { name: 'HID Global', alt: 'HID Global Access Control Dubai' },
      { name: 'ZKTeco',     alt: 'ZKTeco Biometric Access Control Dubai' },
      { name: 'WatchNET',   alt: 'WatchNET Access Control UAE' },
    ],
  },
  {
    id: 'gate',
    label: 'Gate Barrier & Parking Systems',
    brands: [
      { name: 'BFT',                  alt: 'BFT Gate Barrier System Dubai' },
      { name: 'FAAC',                 alt: 'FAAC Gate Barrier System Dubai' },
      { name: 'Came',                 alt: 'Came Gate Automation Dubai' },
      { name: 'Nice',                 alt: 'Nice Gate Barrier System Dubai' },
      { name: 'Magnetic Autocontrol', alt: 'Magnetic Autocontrol Parking System UAE' },
    ],
  },
  {
    id: 'smarthome',
    label: 'Smart Home & Automation',
    brands: [
      { name: 'KNX',               alt: 'KNX Smart Home Dubai' },
      { name: 'Larnitech',         alt: 'Larnitech Smart Home Automation Dubai' },
      { name: 'HDL Automation',    alt: 'HDL Smart Home Dubai' },
      { name: 'ABB',               alt: 'ABB Smart Electrical Systems Dubai' },
      { name: 'Schneider Electric',alt: 'Schneider Electric Smart Home UAE' },
    ],
  },
  {
    id: 'cabling',
    label: 'Structured Cabling & Networking',
    brands: [
      { name: 'CommScope', alt: 'CommScope Structured Cabling Dubai' },
      { name: 'Panduit',   alt: 'Panduit Network Cabling Dubai' },
      { name: 'Nexans',    alt: 'Nexans Cable Systems Dubai' },
      { name: 'Leviton',   alt: 'Leviton Network Solutions Dubai' },
    ],
  },
  {
    id: 'isp',
    label: 'Internet Service Providers',
    brands: [
      { name: 'Etisalat by e&', alt: 'Etisalat Approved Structured Cabling Dubai' },
      { name: 'du',             alt: 'du Telecom Approved Network Dubai' },
    ],
  },
]

const certifications = [
  {
    badge: 'SIRA',
    name: 'SIRA Approved',
    desc: 'Security Industry Regulatory Agency — all CCTV installations fully compliant with Dubai regulations.',
    alt: 'SIRA Compliant CCTV Installation Dubai',
    accent: '#C8102E',
    bg: '#FEF2F2',
  },
  {
    badge: 'ISO 9001',
    name: 'ISO 9001:2015 Certified',
    desc: 'International quality management standard — consistent world-class installation on every project.',
    alt: 'ISO 9001 Certified Security Company Dubai',
    accent: '#1B3F7C',
    bg: '#EFF6FF',
  },
]

function BrandCard({ name, alt }: { name: string; alt: string }) {
  return (
    <div
      title={alt}
      aria-label={alt}
      className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center px-3 py-4"
      style={{ minHeight: 64 }}
    >
      <span className="font-bold font-heading text-sm text-center leading-tight" style={{ color: '#0F172A' }}>
        {name}
      </span>
    </div>
  )
}

export default function TrustedBrands() {
  return (
    <section className="section-pad" style={{ background: '#F8FAFC' }} aria-label="Trusted Brands and Industry Certifications">
      <div className="container-custom">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="section-tag">TRUSTED BRANDS</div>
          <h2 className="section-title mb-4">Trusted Brands &amp; Industry Certifications</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We supply, install, configure, test, commission, and maintain industry-leading security and ELV systems using globally recognised brands and in compliance with UAE industry standards.
          </p>
        </div>

        {/* Brand categories */}
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                  style={{ color: '#1B3F7C', background: '#EFF6FF', borderColor: '#BFDBFE' }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {cat.brands.map((brand) => (
                  <BrandCard key={brand.name + cat.id} name={brand.name} alt={brand.alt} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
              style={{ color: '#059669', background: '#ECFDF5', borderColor: '#A7F3D0' }}
            >
              Compliance &amp; Certifications
            </span>
            <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.badge}
                className="rounded-xl border p-5 flex items-start gap-4"
                style={{ background: cert.bg, borderColor: cert.accent + '33' }}
                aria-label={cert.alt}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black font-heading text-xs text-center leading-tight flex-shrink-0"
                  style={{ background: cert.accent, minWidth: 56 }}
                >
                  {cert.badge}
                </div>
                <div>
                  <div className="font-bold font-heading text-base mb-1" style={{ color: '#0F172A' }}>{cert.name}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer trust line */}
        <div className="mt-10 flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-5">
          <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-500 text-sm leading-relaxed">
            We install and support industry-leading security, surveillance, access control, networking, and automation solutions using globally recognised manufacturers and in accordance with UAE regulatory requirements.
          </p>
        </div>

      </div>
    </section>
  )
}
