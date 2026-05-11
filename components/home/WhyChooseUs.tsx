import { Shield, Award, Users, Clock, Wrench, Star } from 'lucide-react'

const reasons = [
  { icon: Shield, title: 'SIRA & TRA Approved',     desc: 'All installations fully comply with Dubai Civil Defence, SIRA, and TRA regulations — certified and documented.' },
  { icon: Award,  title: 'ISO 9001:2015 Certified', desc: 'Our quality management system ensures consistent, world-class installation standards on every project.' },
  { icon: Users,  title: '50+ Expert Engineers',    desc: 'Certified engineers with over a decade of ELV, CCTV, and AV field experience across the UAE.' },
  { icon: Clock,  title: 'On-Time Every Time',      desc: 'We commit to project timelines and deliver on schedule. No delays, no surprises.' },
  { icon: Wrench, title: 'End-to-End Service',      desc: 'Design, supply, installation, commissioning, training, and 24/7 after-sales support — all in-house.' },
  { icon: Star,   title: 'Premium Brands Only',     desc: 'Hikvision, Dahua, Bosch, Belden, Leviton — we only install world-class certified products.' },
]

const WA_LINK = 'https://wa.me/971545566456?text=Hi%2C%20I%20need%20a%20free%20consultation'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white" id="why-us">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <div className="section-tag">WHY CHOOSE US</div>
            <h2 className="section-title mb-4">
              Why 500+ Clients Trust<br />
              <span className="text-gradient">CCTV Dubai</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              With over 10 years of experience, SIRA approval, and a dedicated team of certified engineers, we deliver security systems that actually work — long after installation.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {reasons.map((r) => (
                <div key={r.title}
                  className="flex gap-3.5 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <r.icon size={16} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: '#0F172A' }}>{r.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d={WA_PATH} /></svg>
                Free Consultation
              </a>
              <a href="/about" className="btn-outline">About Us</a>
            </div>
          </div>

          {/* Right — stats card */}
          <div>
            <div className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 8px 40px rgba(37,99,235,0.08)' }}>

              {/* Header */}
              <div className="p-6 border-b border-gray-100"
                style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)' }}>
                <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-1">Our Track Record</div>
                <h3 className="font-black font-heading text-2xl" style={{ color: '#1B3F7C' }}>Numbers That Speak</h3>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {[
                  { val: '500+', lbl: 'Projects Completed', sub: 'Since 2014' },
                  { val: '200+', lbl: 'Happy Clients',      sub: 'Across UAE' },
                  { val: '50+',  lbl: 'Certified Engineers', sub: 'On our team' },
                  { val: '10+',  lbl: 'Years Experience',   sub: 'In ELV & AV' },
                ].map((s) => (
                  <div key={s.lbl} className="p-6 text-center bg-white">
                    <div className="text-4xl font-black font-heading" style={{ color: '#1B3F7C' }}>{s.val}</div>
                    <div className="text-gray-700 text-sm font-semibold mt-1">{s.lbl}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Bottom includes */}
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Every project includes:</div>
                <div className="space-y-2">
                  {['Free site survey & BOQ', 'Professional installation', 'System commissioning & testing', '1-year warranty', '24/7 technical support'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
