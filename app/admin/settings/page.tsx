'use client'
import { useState, useEffect } from 'react'
import { Save, RefreshCw, Phone, Mail, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube, CheckCircle } from 'lucide-react'

const SETTING_FIELDS = [
  { group: 'Company Info', fields: [
    { key: 'site_name', label: 'Company Name', icon: Globe, placeholder: 'Mideatek' },
    { key: 'site_tagline', label: 'Tagline', icon: Globe, placeholder: "Dubai's Leading ELV & AV Solutions Company" },
    { key: 'phone', label: 'Phone Number', icon: Phone, placeholder: '+971 54 556 6456' },
    { key: 'email', label: 'Email Address', icon: Mail, placeholder: 'info@mideatek.com' },
    { key: 'whatsapp', label: 'WhatsApp Number', icon: Phone, placeholder: '+971545566456 (no spaces)' },
    { key: 'address', label: 'Office Address', icon: MapPin, placeholder: 'Office 1204, Damac Smart Heights...' },
  ]},
  { group: 'Social Media', fields: [
    { key: 'facebook', label: 'Facebook URL', icon: Facebook, placeholder: 'https://facebook.com/yourpage' },
    { key: 'instagram', label: 'Instagram URL', icon: Instagram, placeholder: 'https://instagram.com/yourhandle' },
    { key: 'linkedin', label: 'LinkedIn URL', icon: Linkedin, placeholder: 'https://linkedin.com/company/...' },
    { key: 'youtube', label: 'YouTube URL', icon: Youtube, placeholder: 'https://youtube.com/@yourchannel' },
  ]},
]

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchSettings = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/settings')
      setSettings(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { fetchSettings() }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {}
    setSaving(false)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Site Settings</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your company info and social media links</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchSettings} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
        </div>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm">
          <CheckCircle size={16} /> Settings saved successfully!
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400">
          <RefreshCw size={20} className="animate-spin mr-2" /> Loading...
        </div>
      ) : (
        <div className="space-y-5">
          {SETTING_FIELDS.map((group) => (
            <div key={group.group} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h2 className="font-bold text-gray-900">{group.group}</h2>
              {group.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <field.icon size={14} className="text-gray-400" />
                    {field.label}
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder={field.placeholder}
                    value={settings[field.key] || ''}
                    onChange={(e) => setSettings({ ...settings, [field.key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Google Analytics */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="font-bold text-gray-900">Analytics & Tracking</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Google Analytics ID</label>
              <input type="text" className="input-field" placeholder="G-XXXXXXXXXX"
                value={settings['ga_id'] || ''}
                onChange={(e) => setSettings({ ...settings, ga_id: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Facebook Pixel ID</label>
              <input type="text" className="input-field" placeholder="1234567890"
                value={settings['fb_pixel'] || ''}
                onChange={(e) => setSettings({ ...settings, fb_pixel: e.target.value })} />
            </div>
          </div>

          <button onClick={handleSave} disabled={saving}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors w-full justify-center text-base">
            <Save size={16} /> {saving ? 'Saving...' : 'Save All Settings'}
          </button>
        </div>
      )}
    </div>
  )
}
