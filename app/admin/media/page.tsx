'use client'
import { useState, useEffect, useRef } from 'react'
import { Image as ImageIcon, Upload, Trash2, RefreshCw, Copy, Check, Search, FolderOpen } from 'lucide-react'

interface MediaFile {
  id: string
  filename: string
  url: string
  type: string
  size?: number | null
  folder?: string | null
  createdAt: string
}

function formatSize(bytes?: number | null) {
  if (!bytes) return '—'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function MediaPage() {
  const [media, setMedia] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState('')
  const [folder, setFolder] = useState('general')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fetchMedia = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/media')
      setMedia(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { fetchMedia() }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)
      try {
        const res = await fetch('/api/admin/media', { method: 'POST', body: formData })
        const newFile = await res.json()
        setMedia((prev) => [newFile, ...prev])
      } catch {}
    }
    setUploading(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const deleteMedia = async (id: string) => {
    if (!confirm('Delete this file?')) return
    await fetch(`/api/admin/media/${id}`, { method: 'DELETE' })
    setMedia((prev) => prev.filter((m) => m.id !== id))
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(''), 2000)
  }

  const filtered = media.filter((m) =>
    !search || m.filename.toLowerCase().includes(search.toLowerCase()) || (m.folder || '').includes(search)
  )

  const isImage = (type: string) => type.startsWith('image/')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Media Library</h1>
          <p className="text-gray-500 text-sm mt-1">{media.length} files</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchMedia} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
          <button onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
            <Upload size={14} /> {uploading ? 'Uploading...' : 'Upload Files'}
          </button>
          <input ref={fileInputRef} type="file" multiple accept="image/*,video/*,.pdf" className="hidden" onChange={handleUpload} />
        </div>
      </div>

      {/* Upload Zone */}
      <div
        className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50 cursor-pointer hover:border-blue-700 hover:bg-blue-50/30 transition-all"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          const dt = e.dataTransfer
          if (dt.files.length > 0 && fileInputRef.current) {
            const input = fileInputRef.current
            Object.defineProperty(input, 'files', { value: dt.files, configurable: true })
            input.dispatchEvent(new Event('change', { bubbles: true }))
          }
        }}
      >
        <Upload size={32} className="text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500 font-medium text-sm">Drag & drop files here or click to browse</p>
        <p className="text-gray-400 text-xs mt-1">Supports images, videos, and PDFs</p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-xs text-gray-400">Folder:</span>
          <select value={folder} onChange={(e) => setFolder(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-700"
            onClick={(e) => e.stopPropagation()}>
            <option value="general">General</option>
            <option value="projects">Projects</option>
            <option value="services">Services</option>
            <option value="team">Team</option>
          </select>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search files..."
          className="input-field pl-10 py-2.5 text-sm"
          value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400">
          <RefreshCw size={20} className="animate-spin mr-2" /> Loading...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-100">
          <ImageIcon size={48} className="text-gray-200 mx-auto mb-4" />
          <p className="text-gray-400 text-sm">No media files yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((file) => (
            <div key={file.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
              {/* Preview */}
              <div className="h-28 bg-gray-100 relative overflow-hidden">
                {isImage(file.type) ? (
                  <img src={file.url} alt={file.filename} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderOpen size={28} className="text-gray-300" />
                  </div>
                )}
                {/* Hover actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button onClick={() => copyUrl(file.url)}
                    className="w-8 h-8 bg-white text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                    {copied === file.url ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  </button>
                  <button onClick={() => deleteMedia(file.id)}
                    className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <div className="px-2 py-2">
                <p className="text-xs text-gray-600 font-medium truncate">{file.filename}</p>
                <p className="text-xs text-gray-400">{formatSize(file.size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
