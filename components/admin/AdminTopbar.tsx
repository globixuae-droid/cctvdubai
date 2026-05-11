'use client'
import { signOut } from 'next-auth/react'
import { LogOut, Bell, User } from 'lucide-react'

interface AdminTopbarProps {
  session: { user?: { name?: string | null; email?: string | null } | null }
}

export default function AdminTopbar({ session }: AdminTopbarProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="text-sm text-gray-500">
        Welcome back, <span className="font-semibold text-gray-800">{session.user?.name || 'Admin'}</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <Bell size={16} className="text-gray-500" />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <User size={15} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{session.user?.email}</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
        >
          <LogOut size={15} /> Sign Out
        </button>
      </div>
    </header>
  )
}
