import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function LandingHeader() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-black font-heading text-xl tracking-tight" style={{ color: '#1B3F7C' }}>
          CCTV<span style={{ color: '#DC2626' }}>DUBAI</span>.ME
        </Link>
        <a
          href="tel:+971545566456"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
        >
          <Phone size={15} />
          +971 54 556 6456
        </a>
      </div>
    </header>
  )
}
