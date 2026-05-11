import { prisma } from '@/lib/prisma'
import { Users, FolderOpen, MessageSquare, Image, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

async function getStats() {
  const [totalLeads, newLeads, projects, media, recentLeads] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: 'new' } }),
    prisma.project.count({ where: { published: true } }),
    prisma.media.count(),
    prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 8 }),
  ])
  return { totalLeads, newLeads, projects, media, recentLeads }
}

const STATUS_STYLES: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  qualified: 'bg-green-100 text-green-700',
  closed: 'bg-gray-100 text-gray-600',
  lost: 'bg-red-100 text-red-600',
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const statCards = [
    { label: 'Total Leads', value: stats.totalLeads, sub: `${stats.newLeads} new`, icon: Users, color: 'bg-blue-700', href: '/admin/leads' },
    { label: 'New Leads', value: stats.newLeads, sub: 'Awaiting contact', icon: AlertCircle, color: 'bg-red-600', href: '/admin/leads?status=new' },
    { label: 'Projects', value: stats.projects, sub: 'Published', icon: FolderOpen, color: 'bg-green-600', href: '/admin/projects' },
    { label: 'Media Files', value: stats.media, sub: 'Uploaded', icon: Image, color: 'bg-purple-600', href: '/admin/media' },
  ]

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Overview of your website performance and leads</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          {new Date().toLocaleDateString('en-AE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Link key={card.label} href={card.href}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className={`${card.color} w-11 h-11 rounded-xl flex items-center justify-center`}>
                <card.icon size={20} className="text-white" />
              </div>
              <TrendingUp size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-3xl font-black font-heading text-gray-900 mb-1">{card.value}</div>
            <div className="text-sm font-semibold text-gray-700">{card.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
          </Link>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-blue-700" />
            <h2 className="font-bold font-heading text-gray-900">Recent Leads</h2>
          </div>
          <Link href="/admin/leads" className="text-sm text-blue-700 hover:text-blue-800 font-medium">
            View all →
          </Link>
        </div>

        <div className="divide-y divide-gray-50">
          {stats.recentLeads.length === 0 ? (
            <div className="px-6 py-10 text-center text-gray-400 text-sm">No leads yet. They will appear here when visitors submit forms.</div>
          ) : (
            stats.recentLeads.map((lead) => (
              <div key={lead.id} className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm truncate">{lead.name}</div>
                  <div className="text-gray-400 text-xs">{lead.phone} {lead.service && `· ${lead.service}`}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[lead.status] || 'bg-gray-100 text-gray-600'}`}>
                    {lead.status}
                  </span>
                  <span className="text-xs text-gray-400">{formatDate(lead.createdAt)}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Add New Project', href: '/admin/projects/new', icon: FolderOpen, color: 'text-green-600 bg-green-50' },
          { label: 'Manage Leads', href: '/admin/leads', icon: Users, color: 'text-blue-600 bg-blue-50' },
          { label: 'Upload Media', href: '/admin/media', icon: Image, color: 'text-purple-600 bg-purple-50' },
          { label: 'Site Settings', href: '/admin/settings', icon: CheckCircle, color: 'text-orange-600 bg-orange-50' },
        ].map((action) => (
          <Link key={action.label} href={action.href}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center`}>
              <action.icon size={18} />
            </div>
            <span className="font-medium text-sm text-gray-700 group-hover:text-gray-900">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
