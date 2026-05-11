'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, FolderOpen, Briefcase, Star,
  Image, Settings, ChevronRight, Shield
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Leads', href: '/admin/leads', icon: Users },
  { label: 'Projects', href: '/admin/projects', icon: FolderOpen },
  { label: 'Services', href: '/admin/services', icon: Briefcase },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
  { label: 'Media Library', href: '/admin/media', icon: Image },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-blue-700 min-h-screen flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="text-xl font-black font-heading text-white tracking-tight">
          MIDE<span className="text-red-400">A</span>TEK
        </div>
        <div className="text-white/40 text-xs mt-0.5">Admin Panel</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium group ${
                active
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={18} className={active ? 'text-blue-700' : 'text-white/60 group-hover:text-white'} />
              {item.label}
              {active && <ChevronRight size={14} className="ml-auto text-blue-700" />}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <Shield size={12} />
          <span>Secured Admin Access</span>
        </div>
        <Link href="/" target="_blank" className="text-white/50 text-xs hover:text-white mt-1 block transition-colors">
          → View Website
        </Link>
      </div>
    </aside>
  )
}
