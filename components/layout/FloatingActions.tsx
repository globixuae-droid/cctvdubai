'use client'
import { useState, useEffect } from 'react'
import { Phone, X, ArrowUp } from 'lucide-react'

const WA_LINK = 'https://wa.me/971545566456?text=Hi%20CCTV%20Dubai%2C%20I%27d%20like%20a%20free%20quote'
const WA_NUM  = '054 556 6456'
const PHONE   = '+971 54 556 6456'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)
  const [stickyBar, setStickyBar]   = useState(true)

  useEffect(() => {
    const fn = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* WhatsApp float */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 relative z-10">
          <path d={WA_PATH} />
        </svg>
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[148px] right-6 z-50 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
          style={{ background: '#1B3F7C', color: '#fff' }}
          aria-label="Scroll to top">
          <ArrowUp size={18} />
        </button>
      )}

      {/* Mobile sticky bar */}
      {stickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-stretch">
            <a href={`tel:${PHONE.replace(/\s/g,'')}`}
              className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm border-r border-gray-200 text-gray-700">
              <Phone size={16} className="text-blue-700" /> Call Now
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm"
              style={{ background: '#25D366' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={WA_PATH} /></svg>
              WhatsApp
            </a>
            <button onClick={() => setStickyBar(false)}
              className="px-4 text-gray-400 hover:text-gray-600">
              <X size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Desktop sticky bar */}
      {stickyBar && (
        <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 items-center justify-center gap-5 py-3 px-4 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <span className="font-semibold text-sm" style={{ color: '#0F172A' }}>
            🔒 Free Site Survey — SIRA Approved Installations. Limited Slots!
          </span>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all hover:opacity-90"
            style={{ background: '#25D366', boxShadow: '0 2px 12px rgba(37,211,102,0.3)' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={WA_PATH} /></svg>
            WhatsApp: {WA_NUM}
          </a>
          <a href={`tel:${PHONE.replace(/\s/g,'')}`}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            style={{ color: '#1B3F7C' }}>
            <Phone size={14} /> {PHONE}
          </a>
          <button onClick={() => setStickyBar(false)} className="text-gray-400 hover:text-gray-600 ml-1">
            <X size={14} />
          </button>
        </div>
      )}
    </>
  )
}
