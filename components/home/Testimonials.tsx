'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Al Rashidi',
    company: 'Al Rashidi Real Estate',
    role: 'General Manager',
    content: 'Mideatek delivered an exceptional CCTV and access control system for our entire commercial tower. Professional, punctual, and highly skilled team. The project was completed ahead of schedule and within budget.',
    rating: 5,
    initials: 'AR',
  },
  {
    name: 'Sarah Thompson',
    company: 'The Luxury Villa, Palm Jumeirah',
    role: 'Homeowner',
    content: 'Our smart home is absolutely incredible. Every device works seamlessly together, and the Mideatek team was patient and professional throughout the entire process. I highly recommend them.',
    rating: 5,
    initials: 'ST',
  },
  {
    name: 'Mohammed Khalid',
    company: 'Khalid Group of Hotels',
    role: 'Operations Director',
    content: "The AV and background music system Mideatek installed across all our hotel properties is outstanding. Guest satisfaction scores for ambience have improved significantly. Truly world-class work.",
    rating: 5,
    initials: 'MK',
  },
  {
    name: 'Priya Nair',
    company: 'Nair Tech Solutions',
    role: 'IT Manager',
    content: 'Mideatek handled our entire structured cabling project flawlessly. The cable management, labeling, and documentation were immaculate. Our network infrastructure is now rock solid.',
    rating: 5,
    initials: 'PN',
  },
  {
    name: 'Khalid Bin Hamdan',
    company: 'Hamdan Properties',
    role: 'CEO',
    content: "We've worked with many ELV companies across Dubai, but Mideatek stands out in every way. Their technical expertise and after-sales support is unmatched. They are our exclusive technology partner.",
    rating: 5,
    initials: 'KH',
  },
]

const AVATAR_COLORS = ['bg-blue-700', 'bg-red-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-500']

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="section-pad bg-gray-50" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            CLIENT REVIEWS
          </span>
          <h2 className="section-title mb-3">Trusted by 500+ Clients Across UAE</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">4.9/5 average rating from verified clients</span>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-brand border border-gray-100 relative">
            <Quote size={40} className="text-blue-100 absolute top-6 right-6" />

            <div className="flex gap-1 mb-5">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic font-medium">
              "{testimonials[current].content}"
            </p>

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${AVATAR_COLORS[current % AVATAR_COLORS.length]} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
                {testimonials[current].initials}
              </div>
              <div>
                <div className="font-bold text-gray-900">{testimonials[current].name}</div>
                <div className="text-gray-400 text-sm">{testimonials[current].role} · {testimonials[current].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev}
              className="w-10 h-10 bg-white hover:bg-blue-50 border border-gray-200 rounded-full flex items-center justify-center transition-colors shadow-sm">
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-blue-700 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`} />
              ))}
            </div>
            <button onClick={next}
              className="w-10 h-10 bg-white hover:bg-blue-50 border border-gray-200 rounded-full flex items-center justify-center transition-colors shadow-sm">
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Client logos strip */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-5 uppercase tracking-widest font-medium">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Emaar', 'DAMAC', 'Meraas', 'Al Futtaim', 'Azizi', 'Nakheel', 'Meydan'].map((client) => (
              <div key={client} className="text-gray-400 font-bold font-heading text-base hover:text-blue-700 transition-colors cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
