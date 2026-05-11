'use client'
import { useState, useEffect } from 'react'
import { Briefcase, Edit, Trash2, Eye, EyeOff, RefreshCw, GripVertical, Plus, X, Save } from 'lucide-react'

interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon?: string | null
  order: number
  published: boolean
}

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Service | null>(null)
  const [saving, setSaving] = useState(false)

  const fetchServices = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/services')
      setServices(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { fetchServices() }, [])

  const togglePublished = async (id: string, published: boolean) => {
    await fetch(`/api/admin/services/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !published }),
    })
    setServices((prev) => prev.map((s) => s.id === id ? { ...s, published: !published } : s))
  }

  const deleteService = async (id: string) => {
    if (!confirm('Delete this service?')) return
    await fetch(`/api/admin/services/${id}`, { method: 'DELETE' })
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  const saveEdit = async () => {
    if (!editing) return
    setSaving(true)
    try {
      await fetch(`/api/admin/services/${editing.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editing.title, description: editing.description }),
      })
      setServices((prev) => prev.map((s) => s.id === editing.id ? { ...s, ...editing } : s))
      setEditing(null)
    } catch {}
    setSaving(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Services</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your service offerings and visibility</p>
        </div>
        <button onClick={fetchServices} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold font-heading text-gray-900">Edit Service</h2>
              <button onClick={() => setEditing(null)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                <X size={15} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Title</label>
                <input type="text" className="input-field" value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
                <textarea rows={4} className="input-field resize-none" value={editing.description}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={saveEdit} disabled={saving}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
                <Save size={14} /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button onClick={() => setEditing(null)} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400">
          <RefreshCw size={20} className="animate-spin mr-2" /> Loading...
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-50">
            {services.map((service) => (
              <div key={service.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                <GripVertical size={16} className="text-gray-300 cursor-grab flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{service.title}</div>
                  <p className="text-gray-400 text-xs mt-0.5 truncate">{service.description}</p>
                  <div className="text-xs text-gray-300 mt-1">/{service.slug}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${service.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {service.published ? 'Published' : 'Hidden'}
                  </span>
                  <button onClick={() => setEditing(service)}
                    className="w-8 h-8 bg-gray-100 hover:bg-blue-700/10 hover:text-blue-700 text-gray-500 rounded-lg flex items-center justify-center transition-colors">
                    <Edit size={13} />
                  </button>
                  <button onClick={() => togglePublished(service.id, service.published)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg flex items-center justify-center transition-colors">
                    {service.published ? <Eye size={13} /> : <EyeOff size={13} />}
                  </button>
                  <button onClick={() => deleteService(service.id)}
                    className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg flex items-center justify-center transition-colors">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
        <strong>Note:</strong> Service page content is managed in the source files under <code>app/services/</code>. Use this panel to control visibility and update titles/descriptions shown on the homepage.
      </div>
    </div>
  )
}
