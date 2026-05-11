'use client'
import { CheckCircle } from 'lucide-react'

const stats = [
  { val: '500+', lbl: 'Projects Completed' },
  { val: '10+',  lbl: 'Years Experience' },
  { val: '200+', lbl: 'Happy Clients' },
  { val: '24/7', lbl: 'Support Available' },
  { val: '100%', lbl: 'SIRA Compliant' },
  { val: '50+',  lbl: 'Certified Engineers' },
]

const certs = [
  { code: 'SIRA', label: 'SIRA Approved',     color: '#DC2626' },
  { code: 'TRA',  label: 'TRA Licensed',       color: '#1D4ED8' },
  { code: 'ISO',  label: 'ISO 9001:2015',      color: '#059669' },
  { code: 'DCD',  label: 'DCD Approved',       color: '#7C3AED' },
  { code: 'ETIC', label: 'Etisalat Certified', color: '#D97706' },
]

const ticker = [
  'CCTV Installation Dubai', 'Gate Barrier Systems', 'Structured Cabling Cat6',
  'Fiber Optic Cabling', 'Access Control Systems', 'Smart Home Automation',
  'SIRA Approved Installations', 'Biometric Systems', 'IP PABX Solutions',
  'Network Infrastructure', 'Home Theater Systems', 'Conference Room AV',
]

export default function ServiceShowcase() {
  return (
    <section style={{ background: '#F8FAFC' }}>
      {/* Scrolling ticker */}
      <div className="py-3 overflow-hidden border-y border-blue-100" style={{ background: '#EFF6FF' }}>
        <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest px-6">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Stats + Certs */}
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Stats */}
          <div>
            <div className="section-tag">TRUSTED BY 500+ CLIENTS</div>
            <h2 className="text-2xl md:text-3xl font-black font-heading mb-6 leading-snug" style={{ color: '#0F172A' }}>
              Dubai's Most Reliable<br />
              <span className="text-gradient">Security Systems Installer</span>
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.lbl} className="bg-white rounded-xl p-4 text-center border border-gray-200"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div className="text-2xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.val}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-7 border border-gray-200"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h3 className="font-bold font-heading mb-5 flex items-center gap-2" style={{ color: '#0F172A' }}>
              <CheckCircle size={16} className="text-green-500" /> Certified & Licensed By
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {certs.map((c) => (
                <div key={c.code} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: c.color }}>
                    {c.code}
                  </div>
                  <span className="text-gray-700 text-sm font-semibold">{c.label}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              All our installations comply fully with Dubai Civil Defence, SIRA, TRA, and ISO quality standards. Every project is documented and certified.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
