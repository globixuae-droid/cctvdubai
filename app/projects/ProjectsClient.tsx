'use client'
import { useState } from 'react'
import { MapPin, Filter, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = [
  { value: 'all', label: 'All Projects' },
  { value: 'cctv', label: 'CCTV & Security' },
  { value: 'cabling', label: 'Structured Cabling' },
  { value: 'access-control', label: 'Access Control' },
  { value: 'av-systems', label: 'Audio Visual' },
  { value: 'smart-home', label: 'Smart Home' },
  { value: 'parking', label: 'Parking Systems' },
]

const FALLBACK_PROJECTS = [
  { id: '1', title: 'Atcon — Commercial ELV Project', category: 'cabling', description: 'Complete ELV infrastructure including structured cabling, CCTV, and access control for a large commercial complex.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/atcon/atcon-1.jpg', '/images/projects/atcon/atcon-2.jpg', '/images/projects/atcon/atcon-3.jpg']), featured: true },
  { id: '2', title: 'Circle House — Residential Smart Installation', category: 'smart-home', description: 'Residential ELV system with smart security, structured cabling, and integrated AV.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/circle-house/circle-house-1.jpg', '/images/projects/circle-house/circle-house-2.jpg']), featured: true },
  { id: '3', title: 'DIC — Corporate Campus', category: 'cctv', description: 'Enterprise CCTV surveillance with SIRA compliance, network infrastructure, and access control.', location: 'Dubai Investment Centre', images: JSON.stringify(['/images/projects/dic/dic-1.jpg', '/images/projects/dic/dic-2.jpg', '/images/projects/dic/dic-3.jpg']), featured: true },
  { id: '4', title: 'Jumaria — Luxury Villa Project', category: 'smart-home', description: 'Complete smart villa installation covering CCTV, smart home control, and premium AV systems.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/jumaria/jumaria-1.jpg', '/images/projects/jumaria/jumaria-2.jpg']), featured: false },
  { id: '5', title: 'Pearl Creek — Residential Complex', category: 'access-control', description: 'Gated community access control, CCTV perimeter surveillance, and structured cabling.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/pearl-creek/pearl-creek-1.jpg', '/images/projects/pearl-creek/pearl-creek-2.jpg']), featured: false },
  { id: '6', title: 'Rentech — Industrial Facility', category: 'cabling', description: 'Enterprise-grade structured cabling and ELV infrastructure for an industrial complex.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/rentech/rentech-1.jpg', '/images/projects/rentech/rentech-2.jpg']), featured: false },
  { id: '7', title: 'Riga — Commercial AV Installation', category: 'av-systems', description: 'Professional audio visual system with background music, video display, and conference AV.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/riga/riga-1.jpg', '/images/projects/riga/riga-2.jpg']), featured: false },
  { id: '8', title: 'Subki — Villa Smart Home', category: 'smart-home', description: 'Smart home automation with integrated lighting, security, and entertainment control.', location: 'Dubai, UAE', images: JSON.stringify(['/images/projects/subki/subki-1.jpg', '/images/projects/subki/subki-2.jpg']), featured: false },
]

function getCategoryLabel(value: string) {
  return CATEGORIES.find((c) => c.value === value)?.label || value
}

function getProjectImage(project: { images: string; category: string }) {
  try {
    const imgs = JSON.parse(project.images)
    if (imgs.length > 0 && imgs[0]) return imgs[0]
  } catch {}
  return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
}

interface Project {
  id: string
  title: string
  category: string
  description: string
  location?: string | null
  images: string
  featured: boolean
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const displayProjects = projects.length > 0 ? projects : FALLBACK_PROJECTS
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? displayProjects
    : displayProjects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Filter size={16} className="text-gray-400 mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">No projects in this category yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <div key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-brand border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden h-52 bg-gray-100">
                    <img
                      src={getProjectImage(project)}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {getCategoryLabel(project.category)}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold font-heading text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    {project.location && (
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-3">
                        <MapPin size={13} /> {project.location}
                      </div>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      <a href="tel:+971545566456"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                        <Phone size={14} /> Discuss Project
                      </a>
                      <a href="https://wa.me/971545566456" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors">
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
