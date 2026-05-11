'use client'
import { Phone, Shield, Clock, CheckCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/971545566456?text=Hi%2C%20I%20want%20to%20book%20a%20free%20site%20survey'
const WA_NUM  = '054 556 6456'
const PHONE   = '+971 54 556 6456'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function FinalCTA() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">

        {/* Process steps */}
        <div className="text-center mb-14">
          <div className="section-tag">HOW IT WORKS</div>
          <h2 className="section-title mb-4">Get Started in 3 Easy Steps</h2>
          <p className="section-subtitle max-w-xl mx-auto">From first contact to a fully commissioned system — we make it simple.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { n: '01', icon: Phone,  title: 'Contact Us',           desc: 'WhatsApp, call, or fill the form. We respond within 1 hour during business hours.' },
            { n: '02', icon: Shield, title: 'Free Site Survey',     desc: 'Our engineers visit your site, assess requirements, and provide a detailed technical proposal — free.' },
            { n: '03', icon: Clock,  title: 'Professional Install', desc: 'Certified technicians install, test, and commission your system with full documentation and warranty.' },
          ].map((s) => (
            <div key={s.n} className="bg-white rounded-2xl p-7 text-center relative border border-gray-200 hover:border-blue-200 transition-all duration-300"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)')}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                style={{ background: '#1B3F7C' }}>
                {s.n}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4 mt-2">
                <s.icon size={24} className="text-blue-700" />
              </div>
              <h3 className="font-bold font-heading text-lg mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner — deep blue */}
        <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #1B3F7C 0%, #1D4ED8 50%, #1E40AF 100%)', boxShadow: '0 20px 60px rgba(27,63,124,0.3)' }}>
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available Now — Free Survey Today
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-white mb-4 leading-tight">
              Book Your FREE Site Survey Now
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a full CCTV, access control, or cabling assessment + detailed quotation completely FREE. No obligation.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {['No hidden charges', 'Same-day response', 'Expert engineers', 'SIRA compliant'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-blue-200 text-sm">
                  <CheckCircle size={13} className="text-green-300" /> {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-wa text-base py-4 px-10 justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d={WA_PATH} /></svg>
                WhatsApp: {WA_NUM}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g,'')}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold py-4 px-10 rounded-xl text-base hover:bg-blue-50 transition-colors"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
