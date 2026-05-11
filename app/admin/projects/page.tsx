'use client'
import { useState, useEffect } from 'react'
import { FolderOpen, Plus, Trash2, Edit, Star, Eye, EyeOff, RefreshCw, MapPin } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface Project {
  id: string
  title: string
  slug: string
  category: string
  location?: string | null
  featured: boolean
  published: boolean
  createdAt: string
  images: string
}

const CATEGORY_LABELS: Record<string, string> = {
  cctv: 'CCTV', cabling: 'Cabling', 'access-control': 'Access Control',
  'av-systems': 'AV Systems', 'smart-home': 'Smart Home', parking: 'Parking',
}

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/projects')
      setProjects(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { fetchProjects() }, [])

  const togglePublished = async (id: string, published: boolean) => {
    await fetch(`/api/admin/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !published }),
    })
    setProjects((prev) => prev.map((p) => p.id === id ? { ...p, published: !published } : p))
  }

  const toggleFeatured = async (id: string, featured: boolean) => {
    await fetch(`/api/admin/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featured: !featured }),
    })
    setProjects((prev) => prev.map((p) => p.id === id ? { ...p, featured: !featured } : p))
  }

  const deleteProject = async (id: string) => {
    if (!confirm('Delete this project? This action cannot be undone.')) return
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  function getThumb(project: Project) {
    try {
      const imgs = JSON.parse(project.images)
      return imgs[0] || null
    } catch { return null }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Projects</h1>
          <p className="text-gray-500 text-sm mt-1">{projects.length} projects</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchProjects} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
          <Link href="/admin/projects/new"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
            <Plus size={14} /> Add Project
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400">
          <RefreshCw size={20} className="animate-spin mr-2" /> Loading...
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-100">
          <FolderOpen size={48} className="text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No projects yet</p>
          <Link href="/admin/projects/new" className="btn-blue text-sm">
            <Plus size={14} /> Add First Project
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const thumb = getThumb(project)
            return (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                {/* Thumbnail */}
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  {thumb ? (
                    <img src={thumb} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FolderOpen size={32} className="text-gray-300" />
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star size={10} /> Featured
                    </div>
                  )}
                  <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full ${project.published ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                    {project.published ? 'Published' : 'Draft'}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold font-heading text-gray-900 text-sm leading-tight">{project.title}</h3>
                    <span className="flex-shrink-0 text-xs bg-blue-700/10 text-blue-700 px-2 py-0.5 rounded-full">
                      {CATEGORY_LABELS[project.category] || project.category}
                    </span>
                  </div>
                  {project.location && (
                    <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                      <MapPin size={11} /> {project.location}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mb-4">{formatDate(project.createdAt)}</div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/projects/${project.id}/edit`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg transition-colors">
                      <Edit size={12} /> Edit
                    </Link>
                    <button onClick={() => toggleFeatured(project.id, project.featured)}
                      className={`w-9 h-8 rounded-lg flex items-center justify-center transition-colors ${project.featured ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400 hover:bg-yellow-50 hover:text-yellow-500'}`}>
                      <Star size={13} />
                    </button>
                    <button onClick={() => togglePublished(project.id, project.published)}
                      className="w-9 h-8 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg flex items-center justify-center transition-colors">
                      {project.published ? <Eye size={13} /> : <EyeOff size={13} />}
                    </button>
                    <button onClick={() => deleteProject(project.id)}
                      className="w-9 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg flex items-center justify-center transition-colors">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
