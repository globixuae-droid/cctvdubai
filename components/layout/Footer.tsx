import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const WA_LINK = 'https://wa.me/971545566456?text=Hi%2C%20I%20need%20a%20free%20quote'
const WA_NUM  = '054 556 6456'
const PHONE   = '+971 54 556 6456'

const services = [
  { name: 'CCTV Installation Dubai',  href: '/services/cctv-installation-dubai' },
  { name: 'Gate Barrier Systems',     href: '/services/parking-gate-barrier' },
  { name: 'Structured Cabling UAE',   href: '/services/structured-cabling-uae' },
  { name: 'Access Control Systems',   href: '/services/access-control-systems' },
  { name: 'Intercom Systems Dubai',   href: '/services/intercom-systems' },
  { name: 'Smart Home Automation',    href: '/services/smart-home-automation' },
  { name: 'Audio Visual Systems',     href: '/services/audio-visual-systems' },
  { name: 'Biometric Systems',        href: '/services/access-control-systems' },
]

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-2">
              <span className="text-xl font-black font-heading tracking-tight">
                <span style={{ color: '#60A5FA' }}>CCTV</span>
                <span style={{ color: '#93C5FD' }}>DUBAI</span>
                <span className="text-slate-600">.ME</span>
              </span>
            </Link>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">By Mideatek · SIRA Approved</p>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Dubai's trusted CCTV, access control, gate barrier, and structured cabling specialist. SIRA-approved, TRA-licensed, ISO certified. 10+ years, 500+ projects.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://www.facebook.com/Mideatek2014',  icon: Facebook },
                { href: 'https://instagram.com/mideatek',        icon: Instagram },
                { href: 'https://linkedin.com/company/mideatek', icon: Linkedin },
                { href: 'https://youtube.com/@mideatek',         icon: Youtube },
              ].map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold font-heading text-sm mb-5 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href}
                    className="text-slate-500 hover:text-blue-300 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" /> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-heading text-sm mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home',             href: '/' },
                { name: 'About Us',         href: '/about' },
                { name: 'Our Projects',     href: '/projects' },
                { name: 'Blog',             href: '/blog' },
                { name: 'Contact Us',       href: '/contact' },
                { name: 'Get Free Quote',   href: '/contact#quote' },
                { name: 'Free Site Survey', href: '/contact#survey' },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href}
                    className="text-slate-500 hover:text-blue-300 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" /> {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold font-heading text-sm mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 mb-5">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-500 text-sm">First Floor, Offices Land Building, Karama, Dubai, UAE</span>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 transition-colors text-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-green-400 flex-shrink-0"><path d={WA_PATH} /></svg>
                  {WA_NUM} (WhatsApp)
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g,'')}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  <Phone size={14} className="text-blue-400 flex-shrink-0" /> {PHONE}
                </a>
              </li>
              <li>
                <a href="mailto:info@mideatek.com"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  <Mail size={14} className="text-blue-400 flex-shrink-0" /> info@mideatek.com
                </a>
              </li>
            </ul>
            <div className="rounded-xl p-4" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Office Hours</p>
              <p className="text-white text-sm font-semibold">Mon – Sat: 8:00 AM – 6:00 PM</p>
              <p className="text-slate-500 text-xs mt-1">WhatsApp support available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="py-5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {[
              { code: 'SIRA', color: '#DC2626' },
              { code: 'TRA',  color: '#2563EB' },
              { code: 'ISO',  color: '#059669' },
              { code: 'DCD',  color: '#7C3AED' },
            ].map((c) => (
              <div key={c.code} className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-black"
                  style={{ background: c.color }}>{c.code}</div>
                {c.code} Certified
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} cctvdubai.me — by Mideatek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
