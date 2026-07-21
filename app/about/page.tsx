import type { Metadata } from 'next'
import { Shield, Award, Users, CheckCircle, Phone, MessageCircle, Building, Wrench, Star, Globe } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'
import LeadForm from '@/components/shared/LeadForm'
import Link from 'next/link'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'About Mideatek | SIRA Approved CCTV & ELV Company Dubai',
  description: 'Mideatek is Dubai\'s SIRA-approved CCTV installation and ELV systems integrator. 10+ years, 500+ projects, 50+ engineers. TRA licensed, ISO certified. Based in Karama, Dubai.',
  keywords: [
    'about Mideatek', 'SIRA approved CCTV company Dubai', 'ELV company Dubai',
    'AV systems integrator UAE', 'Mideatek Dubai', 'CCTV company Dubai',
    'security systems company UAE', 'TRA licensed cabling Dubai',
  ],
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'About Mideatek | SIRA Approved CCTV & ELV Company Dubai',
    description: '10+ years, 500+ projects, 50+ engineers. Dubai\'s trusted SIRA-approved CCTV and ELV systems integrator.',
    url: `${BASE}/about`,
  },
}

const stats = [
  { value: '500+',  label: 'Projects Completed',  icon: Building },
  { value: '10+',   label: 'Years Experience',     icon: Star },
  { value: '100%',  label: 'SIRA Compliant',       icon: Shield },
  { value: '50+',   label: 'Expert Engineers',     icon: Users },
]

const values = [
  { title: 'Quality First',          desc: 'We use only certified, premium-grade components from leading global brands like Hikvision, Dahua, Bosch, Crestron, and more.' },
  { title: 'Compliance Guaranteed',  desc: 'Every installation meets SIRA, TRA, Dubai Civil Defence, and Etisalat/du regulatory standards without exception.' },
  { title: 'Client-Centric',         desc: 'We listen, design, and deliver solutions tailored exactly to your space, budget, and operational needs.' },
  { title: 'Lifetime Support',       desc: 'Our relationship doesn\'t end at handover. We provide ongoing maintenance, upgrades, and 24/7 emergency support.' },
]

const certifications = [
  { code: 'SIRA', name: 'Security Industry Regulatory Agency — Approved CCTV Installer', color: '#DC2626' },
  { code: 'TRA',  name: 'Telecommunications Regulatory Authority — Licensed Contractor',  color: '#1D4ED8' },
  { code: 'ISO',  name: 'ISO 9001:2015 Quality Management Certified',                     color: '#059669' },
  { code: 'ETI',  name: 'Etisalat & du Approved Structured Cabling Contractor',           color: '#2563EB' },
  { code: 'HIK',  name: 'Hikvision Technology Partner',                                   color: '#334155' },
]

const team = [
  { name: 'Ahmed Al Mansoori', role: 'Managing Director',      exp: '20+ years ELV industry' },
  { name: 'Rahul Sharma',      role: 'Head of Engineering',    exp: 'CCIE, RCDD certified' },
  { name: 'Samir Hassan',      role: 'AV Solutions Director',  exp: 'CTS certified, 15+ years AV' },
  { name: 'Omar Abdullah',     role: 'CCTV & Security Lead',   exp: 'SIRA certified specialist' },
]

const services = [
  { name: 'CCTV & Surveillance',     href: '/services/cctv-installation-dubai' },
  { name: 'Structured Cabling',       href: '/services/structured-cabling-uae' },
  { name: 'Access Control',           href: '/services/access-control-systems' },
  { name: 'Intercom Systems',         href: '/services/intercom-systems' },
  { name: 'Audio Visual Systems',     href: '/services/audio-visual-systems' },
  { name: 'Smart Home Automation',    href: '/services/smart-home-automation' },
  { name: 'Parking & Gate Barriers',  href: '/services/parking-gate-barrier' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${BASE}/about#webpage`,
  name: 'About Mideatek — SIRA Approved CCTV & ELV Company Dubai',
  url: `${BASE}/about`,
  description: 'Mideatek is a SIRA-approved CCTV installation and ELV systems integration company based in Dubai, UAE. Founded in 2014, with 10+ years experience, 500+ completed projects, and 50+ certified engineers.',
  about: { '@id': `${BASE}/#business` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE}/about` },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>About Us</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
                <Shield size={14} /> SIRA Approved · TRA Licensed · ISO Certified
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-5" style={{ color: '#0F172A' }}>
                Dubai's Most Trusted CCTV & ELV Systems Integrator
              </h1>
              <p className="text-gray-500 text-lg mb-5 leading-relaxed">
                Mideatek is a SIRA-approved CCTV installation and ELV systems integration company based in Karama, Dubai. With over 10 years of industry experience, we design, supply, install, and maintain complete security and technology infrastructure for residential, commercial, hospitality, and industrial projects across the UAE.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                From a single villa CCTV installation to a complete smart building across 50 floors — we deliver every project with the same commitment to quality, compliance, and craftsmanship.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+971545566456" className="btn-primary py-3.5 px-6">
                  <Phone size={16} /> Call Us Now
                </a>
                <a href="https://wa.me/971545566456" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-bold py-3.5 px-6 rounded-xl transition-all"
                  style={{ background: '#25D366' }}>
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                  <stat.icon size={28} className="mx-auto mb-3" style={{ color: '#1B3F7C' }} />
                  <div className="text-4xl font-black font-heading mb-1" style={{ color: '#1B3F7C' }}>{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">OUR STORY</div>
              <h2 className="section-title mb-6">Built on Engineering Excellence</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Mideatek was founded in Dubai in 2014 with a singular vision: to provide the UAE's real estate, hospitality, and commercial sectors with world-class technology integration that actually works — not just on paper, but in real-world, high-demand environments.
                </p>
                <p>
                  What started as a specialist CCTV and cabling company has grown into a full-service ELV systems integrator covering every layer of a building's technology infrastructure — from the underground fiber optic backbone to the smart home interface on your tablet.
                </p>
                <p>
                  Today, Mideatek is trusted by real estate developers, hotel chains, government entities, and private villa owners across Dubai, Abu Dhabi, and Sharjah to deliver technology solutions that perform flawlessly for years to come.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#1B3F7C' }}>
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1B3F7C' }}>{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">APPROVALS & LICENSES</div>
            <h2 className="section-title mb-4">Certified, Licensed & Compliant</h2>
            <p className="section-subtitle max-w-xl mx-auto">All our installations meet UAE regulatory requirements — from SIRA CCTV approvals to TRA cabling licenses and Dubai Civil Defence standards.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div key={c.code} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-black text-lg mx-auto mb-4"
                  style={{ background: c.color }}>
                  {c.code}
                </div>
                <p className="text-sm text-gray-600 leading-snug">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">OUR TEAM</div>
            <h2 className="section-title mb-4">Expert Engineers & Specialists</h2>
            <p className="section-subtitle max-w-xl mx-auto">Our team of 50+ certified professionals bring deep expertise across every ELV and AV discipline.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #1B3F7C, #2563EB)' }}>
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="font-bold font-heading mb-1" style={{ color: '#1B3F7C' }}>{member.name}</h3>
                <p className="text-red-600 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">WHAT WE DO</div>
            <h2 className="section-title mb-4">Our Complete Range of Services</h2>
            <p className="section-subtitle max-w-xl mx-auto">From CCTV installation to smart home automation — complete ELV and AV solutions under one roof.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href}
                className="flex items-center gap-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-4 transition-all group">
                <Wrench size={16} className="text-red-500 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700 group-hover:text-blue-700">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-tag">GET IN TOUCH</div>
              <h2 className="section-title mb-4">Start a Conversation with Our Team</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Whether you have a specific project in mind or want to explore what's possible, our team is ready to help. Get a free consultation and no-obligation quotation within 1 hour.
              </p>
              <div className="space-y-3">
                <a href="tel:+971545566456" className="flex items-center gap-3 font-medium hover:text-red-600 transition-colors" style={{ color: '#1B3F7C' }}>
                  <Phone size={18} /> +971 54 556 6456
                </a>
                <a href="mailto:info@mideatek.com" className="flex items-center gap-3 font-medium hover:text-red-600 transition-colors" style={{ color: '#1B3F7C' }}>
                  <Globe size={18} /> info@mideatek.com
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
              <LeadForm source="about-page" title="Request a Consultation" />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work with Dubai's Best ELV Team?" subtitle="Get a free site survey and detailed quotation from our expert engineers." />
    </>
  )
}
