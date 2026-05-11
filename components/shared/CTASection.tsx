import Link from 'next/link'
import { Phone, MessageCircle, ChevronRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = "Ready to Transform Your Space?",
  subtitle = "Get a free consultation and detailed quotation from our expert team today.",
}: CTASectionProps) {
  return (
    <section className="py-14" style={{ background: 'linear-gradient(135deg, #1B3F7C 0%, #1D4ED8 100%)' }}>
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black font-heading text-white mb-4">{title}</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base"
            style={{ boxShadow: '0 4px 20px rgba(220,38,38,0.35)' }}>
            Get Free Quote <ChevronRight size={18} />
          </Link>
          <a href="https://wa.me/971545566456" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base text-white"
            style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}>
            <MessageCircle size={18} /> WhatsApp Now
          </a>
          <a href="tel:+971545566456"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-all text-base">
            <Phone size={18} /> +971 54 556 6456
          </a>
        </div>
      </div>
    </section>
  )
}
