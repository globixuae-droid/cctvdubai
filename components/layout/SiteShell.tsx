'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import FloatingActions from './FloatingActions'

const LANDING_PATHS = ['/commercial-cctv-dubai', '/home-cctv-dubai']

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLanding = LANDING_PATHS.includes(pathname)

  if (isLanding) return <>{children}</>

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
