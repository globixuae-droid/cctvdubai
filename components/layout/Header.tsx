'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'

const WA_LINK = 'https://wa.me/971545566456?text=Hi%2C%20I%20need%20a%20free%20quote'
const WA_NUM  = '054 556 6456'
const PHONE   = '+971 54 556 6456'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const services = [
  { name: 'CCTV Installation Dubai', href: '/services/cctv-installation-dubai' },
  { name: 'Structured Cabling UAE',  href: '/services/structured-cabling-uae' },
  { name: 'Access Control Systems',  href: '/services/access-control-systems' },
  { name: 'Audio Visual Systems',    href: '/services/audio-visual-systems' },
  { name: 'Smart Home Automation',   href: '/services/smart-home-automation' },
  { name: 'Parking & Gate Barriers', href: '/services/parking-gate-barrier' },
]

const popularAreas = [
  { name: 'Dubai Marina',      href: '/cctv-installation-dubai-marina' },
  { name: 'Palm Jumeirah',     href: '/cctv-installation-palm-jumeirah' },
  { name: 'Downtown Dubai',    href: '/cctv-installation-downtown-dubai' },
  { name: 'Business Bay',      href: '/cctv-installation-business-bay' },
  { name: 'Dubai Hills',       href: '/cctv-installation-dubai-hills' },
  { name: 'JVC',               href: '/cctv-installation-jvc' },
  { name: 'Al Barsha',         href: '/cctv-installation-al-barsha' },
  { name: 'Mirdif',            href: '/cctv-installation-mirdif' },
]

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [svcOpen, setSvcOpen]       = useState(false)
  const [areasOpen, setAreasOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''
    } border-b border-gray-100`}>

      {/* Top bar */}
      <div className="hidden md:block border-b border-gray-100" style={{ background: '#EFF6FF' }}>
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href={`tel:${PHONE.replace(/\s/g,'')}`}
              className="flex items-center gap-1.5 hover:text-blue-700 transition-colors font-medium">
              <Phone size={11} /> {PHONE}
            </a>
            <a href="mailto:info@mideatek.com" className="hover:text-blue-700 transition-colors">
              info@mideatek.com
            </a>
          </div>
          <div className="flex items-center gap-5 text-xs font-semibold">
            <span className="text-green-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online Now
            </span>
            <span className="text-gray-400">✓ SIRA Approved</span>
            <span className="text-gray-400">✓ TRA Licensed</span>
            <span className="text-gray-400">✓ ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="py-3.5">
        <div className="container-custom flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-black font-heading tracking-tight">
              <span style={{ color: '#1B3F7C' }}>CCTV</span>
              <span style={{ color: '#2563EB' }}>DUBAI</span>
              <span className="text-gray-300">.ME</span>
            </span>
            <span className="text-[9px] text-gray-400 font-semibold tracking-widest uppercase -mt-0.5">
              By Mideatek — SIRA Approved
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Home</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors py-2">
                Services <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl overflow-hidden
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
                {services.map((s) => (
                  <Link key={s.href} href={s.href}
                    className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50
                               transition-colors border-b border-gray-50 last:border-0 font-medium">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors py-2">
                Areas <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl overflow-hidden
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
                {popularAreas.map((a) => (
                  <Link key={a.href} href={a.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50
                               transition-colors border-b border-gray-50 font-medium">
                    {a.name}
                  </Link>
                ))}
                <Link href="/areas"
                  className="block px-4 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ background: '#1B3F7C' }}>
                  View all 41 areas →
                </Link>
              </div>
            </div>

            <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Projects</Link>
            <Link href="/about"    className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">About</Link>
            <Link href="/contact"  className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-green-600 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500 flex-shrink-0">
                <path d={WA_PATH} />
              </svg>
              {WA_NUM}
            </a>
            <Link href="/contact"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold
                         px-5 py-2.5 rounded-xl transition-all duration-200"
              style={{ boxShadow: '0 4px 16px rgba(220,38,38,0.25)' }}>
              Get Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 mt-3 bg-white shadow-lg">
            <div className="container-custom py-4 space-y-1">
              <Link href="/" className="block py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium"
                onClick={() => setMobileOpen(false)}>Home</Link>
              <button onClick={() => setSvcOpen(!svcOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium">
                Services <ChevronDown size={14} className={svcOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {svcOpen && (
                <div className="pl-4 bg-gray-50 rounded-xl mx-1">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="block py-2.5 px-4 text-gray-600 hover:text-blue-700 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}>{s.name}</Link>
                  ))}
                </div>
              )}
              <button onClick={() => setAreasOpen(!areasOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium">
                Areas <ChevronDown size={14} className={areasOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {areasOpen && (
                <div className="pl-4 bg-gray-50 rounded-xl mx-1">
                  {popularAreas.map((a) => (
                    <Link key={a.href} href={a.href}
                      className="block py-2.5 px-4 text-gray-600 hover:text-blue-700 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}>{a.name}</Link>
                  ))}
                  <Link href="/areas"
                    className="block py-2.5 px-4 text-sm font-bold"
                    style={{ color: '#1B3F7C' }}
                    onClick={() => setMobileOpen(false)}>View all 41 areas →</Link>
                </div>
              )}
              <Link href="/projects" className="block py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>Projects</Link>
              <Link href="/about"    className="block py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/contact"  className="block py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
              <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-2">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="btn-wa justify-center py-3.5 text-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={WA_PATH} /></svg>
                  WhatsApp: {WA_NUM}
                </a>
                <Link href="/contact" className="btn-primary justify-center py-3.5 text-sm" onClick={() => setMobileOpen(false)}>
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
