'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, MapPin } from 'lucide-react'

const categories = ['All', 'CCTV', 'Access Control', 'Gate Barrier', 'AV Systems', 'Smart Home', 'Cabling']

const projects = [
  {
    title: 'DIC — Enterprise CCTV Surveillance',
    category: 'CCTV',
    location: 'Dubai Investment Centre',
    description: 'SIRA-compliant enterprise CCTV surveillance with 4K IP cameras, NVR infrastructure, and remote monitoring.',
    image: '/images/projects/cctv/cctv-10.jpg',
    fallback: '/images/projects/cctv/cctv-6.jpg',
    tags: ['CCTV', 'Cabling'],
  },
  {
    title: 'Pearl Creek — Access Control & Gate Barriers',
    category: 'Access Control',
    location: 'Dubai, UAE',
    description: 'Gated community access control with biometric entry, boom barriers, ANPR cameras, and CCTV perimeter surveillance.',
    image: '/images/projects/pearl-creek/pearl-creek-1.jpg',
    fallback: '/images/projects/pearl-creek/pearl-creek-2.jpg',
    tags: ['Access Control', 'Gate Barrier', 'CCTV'],
  },
  {
    title: 'Subki — Gate Barrier & Parking System',
    category: 'Gate Barrier',
    location: 'Dubai, UAE',
    description: 'Automated BFT boom barriers, ANPR integration, and full vehicle access management for a commercial property.',
    image: '/images/projects/gate-barrier/barrier-2.jpg',
    fallback: '/images/projects/gate-barrier/barrier-6.jpg',
    tags: ['Gate Barrier', 'Access Control'],
  },
  {
    title: 'Atcon — Commercial ELV Installation',
    category: 'Cabling',
    location: 'Dubai, UAE',
    description: 'Full ELV infrastructure — structured cabling, CCTV, access control, and network infrastructure for a commercial complex.',
    image: '/images/projects/structured-cabling/cabling-7.jpg',
    fallback: '/images/projects/structured-cabling/cabling-5.jpg',
    tags: ['Cabling', 'CCTV', 'Access Control'],
  },
  {
    title: 'Jumaria — Smart Villa Project',
    category: 'Smart Home',
    location: 'Dubai, UAE',
    description: 'Luxury villa smart home integration — CCTV, smart lighting, climate control, and premium AV systems.',
    image: '/images/projects/jumaria/jumaria-1.jpg',
    fallback: '/images/projects/jumaria/jumaria-3.jpg',
    tags: ['Smart Home', 'AV Systems', 'CCTV'],
  },
  {
    title: 'Riga — Commercial AV Installation',
    category: 'AV Systems',
    location: 'Dubai, UAE',
    description: 'Professional audio visual system — background music, video walls, and full conference room AV setup.',
    image: '/images/projects/riga/riga-1.jpg',
    fallback: '/images/projects/riga/riga-2.jpg',
    tags: ['AV Systems', 'Cabling'],
  },
  {
    title: 'Rentech — Office Structured Cabling',
    category: 'Cabling',
    location: 'Dubai, UAE',
    description: 'Complete office network upgrade — Cat6 structured cabling, fiber optic backbone, and server room setup.',
    image: '/images/projects/structured-cabling/cabling-6.jpg',
    fallback: '/images/projects/structured-cabling/cabling-1.jpg',
    tags: ['Cabling', 'Access Control', 'CCTV'],
  },
  {
    title: 'Circle House — Residential ELV',
    category: 'Smart Home',
    location: 'Dubai, UAE',
    description: 'Full residential ELV system — smart security, structured cabling, CCTV, and home automation.',
    image: '/images/projects/circle-house/circle-house-1.jpg',
    fallback: '/images/projects/circle-house/circle-house-2.jpg',
    tags: ['Smart Home', 'CCTV', 'Cabling'],
  },
]

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <section className="section-pad" style={{ background: '#F8FAFC' }} id="projects">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="section-tag">PROJECT PORTFOLIO</div>
          <h2 className="section-title mb-4">Real Projects. Real Results.</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Explore our completed CCTV, access control, gate barrier and AV installations across Dubai and the UAE — every project delivered to the highest standard.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <div key={project.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 group transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}>

              <div className="relative overflow-hidden h-52 bg-gray-100">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { const img = e.target as HTMLImageElement; img.src = project.fallback }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-blue-700/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold font-heading text-sm mb-1 group-hover:text-blue-700 transition-colors leading-snug" style={{ color: '#0F172A' }}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                  <MapPin size={10} /> {project.location}
                </div>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{project.description}</p>
                <Link href="/projects"
                  className="text-blue-700 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all hover:text-blue-800">
                  View Details <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects" className="btn-secondary">
            View All Projects <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
