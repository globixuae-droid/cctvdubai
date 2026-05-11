import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'

export const metadata: Metadata = {
  title: {
    default: 'CCTV Dubai | CCTV Installation, Gate Barrier & Access Control Dubai UAE',
    template: '%s | CCTV Dubai — cctvdubai.me',
  },
  description:
    'CCTV Dubai — SIRA-approved CCTV installation, gate barrier systems, structured cabling (Cat6/fiber), access control, and smart home automation across Dubai & UAE. Free site survey. Call now!',
  keywords: [
    'CCTV installation Dubai',
    'CCTV Dubai',
    'gate barrier Dubai',
    'gate barrier system UAE',
    'structured cabling Dubai',
    'Cat6 cabling Dubai',
    'fiber optic cabling UAE',
    'access control system Dubai',
    'smart home automation Dubai',
    'SIRA approved CCTV company Dubai',
    'security camera installation Dubai',
    'TRA licensed cabling UAE',
    'CCTV company Dubai',
    'ELV systems Dubai',
    'biometric system Dubai',
    'boom barrier Dubai',
    'ANPR camera Dubai',
    'IP camera installation Dubai',
    'cctvdubai.me',
    'Mideatek Dubai',
  ],
  authors:   [{ name: 'CCTV Dubai — by Mideatek' }],
  creator:   'Mideatek',
  publisher: 'Mideatek',
  robots:    { index: true, follow: true },
  openGraph: {
    type:        'website',
    locale:      'en_AE',
    url:         'https://www.cctvdubai.me',
    siteName:    'CCTV Dubai',
    title:       'CCTV Dubai | #1 CCTV, Gate Barrier & Access Control Company UAE',
    description: 'SIRA-approved CCTV installation, gate barriers, structured cabling, access control and smart home systems. Free site survey. WhatsApp: 054 556 6456',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CCTV Dubai — cctvdubai.me' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'CCTV Dubai | CCTV Installation & Security Systems UAE',
    description: 'SIRA-approved CCTV, gate barriers, access control & structured cabling. Free survey. cctvdubai.me',
  },
  icons: {
    icon:  '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://www.cctvdubai.me'),
  alternates:   { canonical: 'https://www.cctvdubai.me' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type':    'LocalBusiness',
              '@id':      'https://www.cctvdubai.me',
              name:       'CCTV Dubai — by Mideatek',
              description: 'SIRA-approved CCTV installation, gate barriers, structured cabling, access control, and smart home automation across Dubai and UAE.',
              url:        'https://www.cctvdubai.me',
              telephone:  '+971545566456',
              email:      'info@mideatek.com',
              priceRange: '$$',
              address: {
                '@type':         'PostalAddress',
                streetAddress:   'First Floor, Offices Land Building, Karama',
                addressLocality: 'Dubai',
                addressRegion:   'Dubai',
                addressCountry:  'AE',
              },
              geo: {
                '@type':     'GeoCoordinates',
                latitude:    '25.2522',
                longitude:   '55.3097',
              },
              openingHoursSpecification: {
                '@type':      'OpeningHoursSpecification',
                dayOfWeek:    ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                opens:        '08:00',
                closes:       '18:00',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name:    'Security & ELV Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CCTV Installation Dubai' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gate Barrier Systems Dubai' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured Cabling Cat6 Fiber Optic' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Control Systems Dubai' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Home Automation Dubai' } },
                ],
              },
              sameAs: [
                'https://facebook.com/mideatek',
                'https://instagram.com/mideatek',
                'https://linkedin.com/company/mideatek',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
