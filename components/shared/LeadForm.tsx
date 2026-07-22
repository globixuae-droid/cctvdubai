'use client'
import { useState } from 'react'
import { Shield, CheckCircle, Phone, MessageCircle } from 'lucide-react'
import { SERVICES } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'

interface LeadFormProps {
  source?: string
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function LeadForm({
  source = 'website',
  title = 'Get a Free Quote',
  subtitle = "Fill in your details and we'll get back to you within 1 hour",
  dark = false,
}: LeadFormProps) {
  const [data, setData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })
      if (!res.ok) throw new Error('Failed')
      trackEvent('form_submit', { event_category: 'lead', event_label: source })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us directly.')
    }
    setSubmitting(false)
  }

  const inputClass = `input-field ${dark ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-white/30' : ''}`

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-blue-700'}`}>
          Thank You! We'll Be in Touch Shortly.
        </h3>
        <p className={`text-sm mb-6 ${dark ? 'text-white/70' : 'text-gray-600'}`}>
          Our team will contact you within 1 hour. For urgent inquiries, contact us directly:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+971545566456" className="btn-blue justify-center">
            <Phone size={16} /> +971 54 556 6456
          </a>
          <a href="https://wa.me/971545566456" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <div className="mb-6">
          <h3 className={`text-xl font-bold font-heading mb-1 ${dark ? 'text-white' : 'text-blue-700'}`}>{title}</h3>
          {subtitle && <p className={`text-sm ${dark ? 'text-white/70' : 'text-gray-500'}`}>{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text" placeholder="Full Name *" required
          className={inputClass}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="tel" placeholder="Phone (UAE) *" required
          className={inputClass}
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </div>
      <input
        type="email" placeholder="Email Address"
        className={inputClass}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <select
        className={inputClass}
        value={data.service}
        onChange={(e) => setData({ ...data, service: e.target.value })}
      >
        <option value="">Select Service Needed</option>
        {SERVICES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>
      <textarea
        rows={3} placeholder="Tell us about your project..."
        className={`${inputClass} resize-none`}
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" disabled={submitting} className="btn-red w-full justify-center py-4 text-base font-bold">
        {submitting ? 'Sending...' : 'Send Request →'}
      </button>

      <div className="flex items-center gap-2 text-xs text-center justify-center" style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#9ca3af' }}>
        <Shield size={11} /> Your information is secure & never shared
      </div>
    </form>
  )
}
