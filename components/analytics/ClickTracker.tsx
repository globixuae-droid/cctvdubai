'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

export default function ClickTracker() {
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { event_category: 'lead', event_label: pathname })
      } else if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { event_category: 'lead', event_label: pathname })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}
