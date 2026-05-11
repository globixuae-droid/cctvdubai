import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import LeadForm from '@/components/shared/LeadForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Mideatek | ELV & AV Systems Dubai',
  description: 'Contact Mideatek for CCTV, structured cabling, access control, smart home, and AV system inquiries. Get a free quote or book a site survey. Dubai, UAE.',
  keywords: ['contact Mideatek', 'ELV company Dubai contact', 'CCTV quote Dubai', 'AV systems quote UAE'],
}

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+971 54 556 6456',
    sub: 'Mon–Sat: 8AM – 6PM',
    href: 'tel:+971545566456',
    color: 'bg-blue-700',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat Instantly',
    sub: 'Available 24/7',
    href: 'https://wa.me/971545566456?text=Hi%20Mideatek%2C%20I%20need%20a%20quote',
    color: 'bg-green-500',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@mideatek.com',
    sub: 'Reply within 2 hours',
    href: 'mailto:info@mideatek.com',
    color: 'bg-red-600',
  },
  {
    icon: MapPin,
    label: 'Our Office',
    value: 'Barsha Heights, Dubai',
    sub: 'By appointment',
    href: 'https://maps.google.com/?q=Damac+Smart+Heights+Barsha+Heights+Dubai',
    color: 'bg-purple-600',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Contact</span>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-heading text-white mb-4">
              Talk to Our ELV & AV Experts
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Ready to start your project? Get a free consultation, site survey, or detailed quotation from our certified team — usually within 1 hour.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactMethods.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-5 text-center shadow-brand border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <c.icon size={20} className="text-white" />
                </div>
                <div className="font-semibold text-blue-700 text-sm mb-1">{c.label}</div>
                <div className="font-bold text-gray-900 text-sm mb-1">{c.value}</div>
                <div className="text-gray-400 text-xs">{c.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-pad bg-white" id="quote">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100" id="survey">
              <LeadForm
                source="contact-page"
                title="Get Your Free Quote"
                subtitle="Complete this form and our team will respond within 1 hour"
              />
            </div>

            {/* Info */}
            <div>
              <span className="inline-block bg-blue-700/10 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">WHY CONTACT US?</span>
              <h2 className="section-title mb-6">We'll Handle Everything From Design to Handover</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Free Site Survey', desc: 'Our certified engineer will visit your site, assess requirements, and design the optimal solution — completely free.' },
                  { title: 'Detailed Quotation', desc: 'You\'ll receive a comprehensive, itemized quotation with full BOQ, timeline, and warranty terms.' },
                  { title: 'Regulatory Compliance', desc: 'We handle all SIRA, TRA, and municipality permit applications on your behalf.' },
                  { title: 'Fast Turnaround', desc: 'Most site surveys are scheduled within 24 hours. Quotations delivered within 48 hours.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 mb-1 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-blue-700 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-red-400" />
                  <span className="font-bold">Office Hours & Support</span>
                </div>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-white">8:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-white">9:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-white">By appointment</span></div>
                  <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                    <span>Emergency Support</span><span className="font-semibold text-red-300">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Find Our Office</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7624455978!2d55.15465!3d25.09478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5b8b9b9b9b%3A0x0!2sDamac%20Smart%20Heights%2C%20Barsha%20Heights%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mideatek Office Location"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            <MapPin size={14} className="inline mr-1" />
            Office 1204, Damac Smart Heights, Barsha Heights, Dubai, UAE
          </p>
        </div>
      </section>
    </>
  )
}
