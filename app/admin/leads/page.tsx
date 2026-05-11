'use client'
import { useState, useEffect, useCallback } from 'react'
import { Users, Search, Download, Trash2, CheckCircle, Phone, Mail, MessageSquare, Filter, RefreshCw } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface Lead {
  id: string
  name: string
  phone: string
  email?: string | null
  service?: string | null
  message?: string | null
  status: string
  source?: string | null
  createdAt: string
}

const STATUSES = ['new', 'contacted', 'qualified', 'closed', 'lost']
const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700 border-blue-200',
  contacted: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  qualified: 'bg-green-100 text-green-700 border-green-200',
  closed: 'bg-gray-100 text-gray-600 border-gray-200',
  lost: 'bg-red-100 text-red-600 border-red-200',
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selected, setSelected] = useState<string[]>([])

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (statusFilter !== 'all') params.set('status', statusFilter)
      const res = await fetch(`/api/admin/leads?${params}`)
      const data = await res.json()
      setLeads(data.leads || [])
    } catch {}
    setLoading(false)
  }, [statusFilter])

  useEffect(() => { fetchLeads() }, [fetchLeads])

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, status } : l))
  }

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead?')) return
    await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' })
    setLeads((prev) => prev.filter((l) => l.id !== id))
  }

  const exportCSV = () => {
    const header = 'Name,Phone,Email,Service,Status,Source,Date\n'
    const rows = filteredLeads.map((l) =>
      `"${l.name}","${l.phone}","${l.email || ''}","${l.service || ''}","${l.status}","${l.source || ''}","${formatDate(l.createdAt)}"`
    ).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mideatek-leads-${Date.now()}.csv`
    a.click()
  }

  const filteredLeads = leads.filter((l) => {
    const q = search.toLowerCase()
    return !q || l.name.toLowerCase().includes(q) || l.phone.includes(q) || (l.email || '').toLowerCase().includes(q)
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Leads Management</h1>
          <p className="text-gray-500 text-sm mt-1">{leads.length} total leads</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchLeads} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
          <button onClick={exportCSV} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, phone, email..."
            className="input-field pl-9 py-2.5 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-gray-400" />
          {['all', ...STATUSES].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                statusFilter === s ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16 text-gray-400">
            <RefreshCw size={20} className="animate-spin mr-2" /> Loading leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-16">
            <Users size={40} className="text-gray-200 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">No leads found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3 uppercase tracking-wide">Contact</th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 uppercase tracking-wide">Service</th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 uppercase tracking-wide">Status</th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 uppercase tracking-wide">Source</th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 uppercase tracking-wide">Date</th>
                  <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users size={14} className="text-blue-700" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{lead.name}</div>
                          <div className="flex items-center gap-3 mt-0.5">
                            <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-700">
                              <Phone size={10} /> {lead.phone}
                            </a>
                            {lead.email && (
                              <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-700">
                                <Mail size={10} /> {lead.email}
                              </a>
                            )}
                          </div>
                          {lead.message && (
                            <p className="text-xs text-gray-400 mt-1 max-w-xs truncate">{lead.message}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-600 capitalize">{lead.service || '—'}</span>
                    </td>
                    <td className="px-4 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border cursor-pointer focus:outline-none capitalize ${STATUS_COLORS[lead.status] || 'bg-gray-100 text-gray-600 border-gray-200'}`}
                      >
                        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-xs text-gray-400 capitalize">{lead.source || 'website'}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-xs text-gray-400">{formatDate(lead.createdAt)}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg flex items-center justify-center transition-colors">
                          <MessageSquare size={13} />
                        </a>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg flex items-center justify-center transition-colors">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
