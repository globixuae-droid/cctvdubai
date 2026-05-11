'use client'
import { useState, useEffect } from 'react'
import { Star, Trash2, Eye, EyeOff, RefreshCw, Plus, X, Save } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  company?: string | null
  role?: string | null
  content: string
  rating: number
  published: boolean
}

const emptyForm = { name: '', company: '', role: '', content: '', rating: 5, published: true }

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const fetchTestimonials = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/testimonials')
      setTestimonials(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { fetchTestimonials() }, [])

  const togglePublished = async (id: string, published: boolean) => {
    await fetch(`/api/admin/testimonials/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !published }),
    })
    setTestimonials((prev) => prev.map((t) => t.id === id ? { ...t, published: !published } : t))
  }

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
    setTestimonials((prev) => prev.filter((t) => t.id !== id))
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/admin/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const t = await res.json()
      setTestimonials((prev) => [t, ...prev])
      setForm(emptyForm)
      setShowForm(false)
    } catch {}
    setSaving(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Testimonials</h1>
          <p className="text-gray-500 text-sm mt-1">{testimonials.length} reviews</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchTestimonials} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
          <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
            <Plus size={14} /> Add Testimonial
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold font-heading text-gray-900">Add Testimonial</h2>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                <X size={15} />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Client Name *</label>
                  <input type="text" required className="input-field" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
                  <input type="text" className="input-field" value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Role / Title</label>
                <input type="text" className="input-field" placeholder="e.g. General Manager"
                  value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Review *</label>
                <textarea rows={4} required className="input-field resize-none" value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Rating</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map((r) => (
                    <button key={r} type="button" onClick={() => setForm({ ...form, rating: r })}>
                      <Star size={24} className={r <= form.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving}
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  <Save size={14} /> {saving ? 'Saving...' : 'Add Testimonial'}
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400">
          <RefreshCw size={20} className="animate-spin mr-2" /> Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  {(t.company || t.role) && (
                    <div className="text-gray-400 text-xs">{t.role}{t.company ? ` · ${t.company}` : ''}</div>
                  )}
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((r) => (
                    <Star key={r} size={13} className={r <= t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.content}"</p>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex-1 text-center ${t.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {t.published ? 'Published' : 'Hidden'}
                </span>
                <button onClick={() => togglePublished(t.id, t.published)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg flex items-center justify-center transition-colors">
                  {t.published ? <Eye size={13} /> : <EyeOff size={13} />}
                </button>
                <button onClick={() => deleteTestimonial(t.id)}
                  className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg flex items-center justify-center transition-colors">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
