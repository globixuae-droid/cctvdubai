import type { Metadata } from 'next'
import { Shield, Award, Users, CheckCircle, Phone, MessageCircle, Building, Wrench, Star, Globe } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'
import LeadForm from '@/components/shared/LeadForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Mideatek | ELV & AV Systems Integrator Dubai',
  description: 'Learn about Mideatek — Dubai\'s trusted ELV and audio visual systems integrator. SIRA-approved, TRA licensed, delivering premium technology solutions across the UAE.',
  keywords: ['about Mideatek', 'ELV company Dubai', 'AV systems integrator UAE', 'SIRA approved company Dubai'],
}

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Building },
  { value: '15+', label: 'Years Experience', icon: Star },
  { value: '100%', label: 'SIRA Compliant', icon: Shield },
  { value: '50+', label: 'Expert Engineers', icon: Users },
]

const values = [
  { title: 'Quality First', desc: 'We use only certified, premium-grade components from leading global brands like Hikvision, Dahua, Bosch, Crestron, and more.' },
  { title: 'Compliance Guaranteed', desc: 'Every installation meets SIRA, TRA, Dubai Civil Defence, and Etisalat/du regulatory standards without exception.' },
  { title: 'Client-Centric', desc: 'We listen, design, and deliver solutions tailored exactly to your space, budget, and operational needs.' },
  { title: 'Lifetime Support', desc: 'Our relationship doesn\'t end at handover. We provide ongoing maintenance, upgrades, and 24/7 emergency support.' },
]

const certifications = [
  { code: 'SIRA', name: 'Security Industry Regulatory Agency', color: 'bg-red-600' },
  { code: 'TRA', name: 'Telecommunications Regulatory Authority', color: 'bg-blue-700' },
  { code: 'ISO', name: 'ISO 9001:2015 Quality Management', color: 'bg-green-700' },
  { code: 'ETI', name: 'Etisalat/du Approved Cabling Contractor', color: 'bg-blue-500' },
]

const team = [
  { name: 'Ahmed Al Mansoori', role: 'Managing Director', exp: '20+ years ELV industry' },
  { name: 'Rahul Sharma', role: 'Head of Engineering', exp: 'CCIE, RCDD certified' },
  { name: 'Samir Hassan', role: 'AV Solutions Director', exp: 'CTS certified, 15+ years AV' },
  { name: 'Omar Abdullah', role: 'CCTV & Security Lead', exp: 'SIRA certified specialist' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 pt-32 pb-20 text-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">About Us</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
                WHO WE ARE
              </span>
              <h1 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-5">
                Dubai's Most Trusted<br />ELV & AV Systems Integrator
              </h1>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Mideatek is a leading Extra Low Voltage (ELV) and Audio Visual systems integration company based in Dubai. With over 15 years of industry experience, we design, supply, install, and maintain complete technology infrastructure for residential, commercial, hospitality, and industrial projects across the UAE.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                From a single villa CCTV installation to a complete smart building integration across 50 floors — we deliver every project with the same commitment to quality, compliance, and craftsmanship.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+971545566456" className="btn-red py-3.5 px-6">
                  <Phone size={16} /> Call Us Now
                </a>
                <a href="https://wa.me/971545566456" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <stat.icon size={28} className="text-red-400 mx-auto mb-3" />
                  <div className="text-4xl font-black font-heading text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-700/10 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">OUR STORY</span>
              <h2 className="section-title mb-6">Built on Engineering Excellence</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mideatek was founded with a singular vision: to provide the UAE's real estate, hospitality, and commercial sectors with world-class technology integration that actually works — not just on paper, but in real-world, high-demand environments.
                </p>
                <p>
                  What started as a specialist CCTV and cabling company has grown into a full-service ELV systems integrator covering every layer of a building's technology infrastructure — from the underground fiber backbone to the smart home interface on your tablet.
                </p>
                <p>
                  Today, Mideatek is trusted by real estate developers, hotel chains, government entities, and private villa owners across Dubai, Abu Dhabi, and Sharjah to deliver technology solutions that perform flawlessly for years to come.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700 mb-1">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-700/10 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">APPROVALS & LICENSES</span>
            <h2 className="section-title mb-4">Certified & Compliant</h2>
            <p className="section-subtitle max-w-xl mx-auto">All our installations meet UAE regulatory requirements — from SIRA CCTV approvals to TRA cabling licenses.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div key={c.code} className="bg-white rounded-2xl p-6 text-center shadow-brand border border-gray-100">
                <div className={`w-16 h-16 ${c.color} rounded-xl flex items-center justify-center text-white font-black text-lg mx-auto mb-4`}>
                  {c.code}
                </div>
                <p className="text-sm text-gray-600 leading-tight">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-700/10 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">OUR TEAM</span>
            <h2 className="section-title mb-4">Expert Engineers & Specialists</h2>
            <p className="section-subtitle max-w-xl mx-auto">Our team of 50+ certified professionals bring deep expertise across every ELV and AV discipline.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-brand transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="font-bold font-heading text-blue-700 mb-1">{member.name}</h3>
                <p className="text-red-600 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-pad bg-blue-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-white mb-4">Our Complete Range of Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'CCTV & Surveillance', href: '/services/cctv-installation-dubai' },
              { name: 'Structured Cabling', href: '/services/structured-cabling-uae' },
              { name: 'Access Control', href: '/services/access-control-systems' },
              { name: 'Audio Visual Systems', href: '/services/audio-visual-systems' },
              { name: 'Smart Home Automation', href: '/services/smart-home-automation' },
              { name: 'Parking & Gate Barriers', href: '/services/parking-gate-barrier' },
            ].map((s) => (
              <Link key={s.href} href={s.href}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 transition-all group">
                <Wrench size={18} className="text-red-400 flex-shrink-0" />
                <span className="font-medium text-sm group-hover:text-white">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-blue-700/10 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">GET IN TOUCH</span>
              <h2 className="section-title mb-4">Start a Conversation with Our Team</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you have a specific project in mind or want to explore what's possible, our team is ready to help. Get a free consultation and no-obligation quotation.
              </p>
              <div className="space-y-3">
                <a href="tel:+971545566456" className="flex items-center gap-3 text-blue-700 hover:text-red-600 transition-colors font-medium">
                  <Phone size={18} /> +971 54 556 6456
                </a>
                <a href="mailto:info@mideatek.com" className="flex items-center gap-3 text-blue-700 hover:text-red-600 transition-colors font-medium">
                  <Globe size={18} /> info@mideatek.com
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <LeadForm source="about-page" title="Request a Consultation" subtitle="We'll respond within 1 business hour" />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work with Dubai's Best ELV Team?" subtitle="Get a free site survey and detailed quotation from our expert engineers." />
    </>
  )
}
