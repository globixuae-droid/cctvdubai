'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Save, ArrowLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = [
  { value: 'cctv', label: 'CCTV & Security' },
  { value: 'cabling', label: 'Structured Cabling' },
  { value: 'access-control', label: 'Access Control' },
  { value: 'av-systems', label: 'Audio Visual Systems' },
  { value: 'smart-home', label: 'Smart Home Automation' },
  { value: 'parking', label: 'Parking & Gate Barriers' },
]

export default function EditProjectPage() {
  const router = useRouter()
  const params = useParams()
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [form, setForm] = useState({
    title: '', description: '', category: '', client: '',
    location: '', featured: false, published: true,
  })

  useEffect(() => {
    fetch(`/api/admin/projects/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setForm({
          title: data.title, description: data.description, category: data.category,
          client: data.client || '', location: data.location || '',
          featured: data.featured, published: data.published,
        })
        try { setImages(JSON.parse(data.images) || []) } catch {}
        setLoading(false)
      })
  }, [params.id])

  const addImage = () => {
    if (imageUrl.trim()) { setImages([...images, imageUrl.trim()]); setImageUrl('') }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const res = await fetch(`/api/admin/projects/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, images }),
      })
      if (!res.ok) throw new Error('Failed')
      router.push('/admin/projects')
    } catch {
      setError('Failed to update project.')
    }
    setSaving(false)
  }

  if (loading) return <div className="py-24 text-center text-gray-400">Loading...</div>

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/projects" className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Edit Project</h1>
          <p className="text-gray-500 text-sm">{form.title}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Project Title *</label>
            <input type="text" required className="input-field" value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category *</label>
            <select required className="input-field" value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="">Select category</option>
              {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description *</label>
            <textarea rows={4} required className="input-field resize-none" value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Client</label>
              <input type="text" className="input-field" value={form.client}
                onChange={(e) => setForm({ ...form, client: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Location</label>
              <input type="text" className="input-field" value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Images</h2>
          <div className="flex gap-2 mb-4">
            <input type="url" className="input-field flex-1 text-sm" placeholder="Image URL" value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addImage() }}} />
            <button type="button" onClick={addImage} className="bg-blue-700 text-white text-sm px-4 py-2.5 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2">
              <Plus size={14} /> Add
            </button>
          </div>
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {images.map((url, i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden h-28 bg-gray-100">
                  <img src={url} alt="" className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Image' }} />
                  <button type="button" onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                    className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="space-y-3">
            {[
              { key: 'featured', label: 'Featured project' },
              { key: 'published', label: 'Published' },
            ].map((opt) => (
              <label key={opt.key} className="flex items-center gap-3 cursor-pointer">
                <div onClick={() => setForm({ ...form, [opt.key]: !form[opt.key as keyof typeof form] })}
                  className={`w-11 h-6 rounded-full transition-colors cursor-pointer relative ${form[opt.key as keyof typeof form] ? 'bg-blue-700' : 'bg-gray-200'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form[opt.key as keyof typeof form] ? 'translate-x-6' : 'translate-x-1'}`} />
                </div>
                <span className="font-medium text-gray-900 text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">{error}</div>}

        <div className="flex gap-3">
          <button type="submit" disabled={saving}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            <Save size={16} /> {saving ? 'Saving...' : 'Update Project'}
          </button>
          <Link href="/admin/projects" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
