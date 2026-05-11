'use client'
import { useState } from 'react'
import { Phone, Shield, CheckCircle, Star, ChevronRight, Zap } from 'lucide-react'

const WA_LINK = 'https://wa.me/971545566456?text=Hi%20CCTV%20Dubai%2C%20I%20need%20a%20free%20quote'
const PHONE   = '+971 54 556 6456'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const services = ['CCTV Installation', 'Gate Barriers', 'Structured Cabling', 'Access Control', 'Smart Home']

const stats = [
  { val: '500+', lbl: 'Projects Done' },
  { val: '10+',  lbl: 'Years Experience' },
  { val: 'SIRA', lbl: 'Approved' },
  { val: '24/7', lbl: 'Support' },
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'hero' }),
      })
      setSent(true)
    } catch {}
    setLoading(false)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-14 overflow-hidden bg-white dot-grid" id="hero">

      {/* Soft blue radial accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #EFF6FF 0%, transparent 65%)' }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #EFF6FF 0%, transparent 65%)' }} />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT — Content */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available Now · Free Site Survey Today
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black font-heading leading-[1.08] mb-5 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0, color: '#0F172A' }}>
              Dubai's #1{' '}
              <span className="text-gradient">CCTV & Security</span>{' '}
              Systems Company
            </h1>

            <p className="text-gray-500 text-lg md:text-xl mb-7 leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}>
              SIRA-approved installation of CCTV cameras, access control, gate barriers, structured cabling, and smart home systems across Dubai & UAE.
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
              {services.map((s) => (
                <span key={s}
                  className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <CheckCircle size={11} className="text-blue-600" /> {s}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <a href="#free-quote" className="btn-primary text-base py-4 px-8 justify-center sm:justify-start">
                <Shield size={17} /> Get Free Quote <ChevronRight size={16} />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-wa text-base py-4 px-8 justify-center sm:justify-start">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0"><path d={WA_PATH} /></svg>
                WhatsApp Now
              </a>
              <a href={`tel:${PHONE.replace(/\s/g,'')}`}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 font-semibold text-base transition-colors py-2">
                <Phone size={16} /> {PHONE}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {stats.map((s) => (
                <div key={s.lbl}
                  className="text-center py-3.5 px-2 bg-white rounded-xl border border-gray-200"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="text-xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.val}</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Lead Form */}
          <div className="animate-slide-in-right" id="free-quote" style={{ opacity: 0 }}>
            <div className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.12), 0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>

              {/* Form header */}
              <div className="px-7 py-5" style={{ background: 'linear-gradient(135deg, #1B3F7C 0%, #2563EB 100%)' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold mb-1">
                      <Zap size={11} /> Response within 1 hour
                    </div>
                    <h2 className="text-white font-black font-heading text-lg">Get Your FREE Site Survey</h2>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => <Star key={i} size={13} className="text-yellow-300 fill-yellow-300" />)}
                  </div>
                </div>
              </div>

              <div className="p-7">
                {!sent ? (
                  <form onSubmit={submit} className="space-y-3">
                    <input type="text" placeholder="Your Full Name *" required className="input-field"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <input type="tel" placeholder="WhatsApp / Phone Number *" required className="input-field"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <select className="input-field" value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select Service Required</option>
                      <option>CCTV Installation</option>
                      <option>Gate Barrier System</option>
                      <option>Structured Cabling (Cat6/Fiber)</option>
                      <option>Access Control System</option>
                      <option>Smart Home Automation</option>
                      <option>Multiple Services</option>
                    </select>
                    <textarea placeholder="Brief description (optional)" rows={2} className="input-field resize-none"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base font-black tracking-wide">
                      {loading ? 'Sending...' : '🔒 Request FREE Survey Now'}
                    </button>
                    <p className="text-gray-400 text-xs text-center flex items-center justify-center gap-1">
                      <Shield size={11} /> Your information is 100% secure & private
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-gray-900 font-black text-xl mb-2">Request Received!</h3>
                    <p className="text-gray-500 text-sm mb-5">Our team will WhatsApp you within 1 hour to schedule your free site survey.</p>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa w-full justify-center py-4">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d={WA_PATH} /></svg>
                      Continue on WhatsApp
                    </a>
                  </div>
                )}
                <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                  {['Free Survey', 'Same Day Call', '1yr Warranty'].map((p) => (
                    <div key={p} className="text-xs text-gray-500 flex flex-col items-center gap-1">
                      <CheckCircle size={13} className="text-green-500" /> {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges below form */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {['SIRA Approved', 'TRA Licensed', 'ISO 9001:2015', 'DCD Certified'].map((cert) => (
                <span key={cert} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <CheckCircle size={11} className="text-blue-600" /> {cert}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
