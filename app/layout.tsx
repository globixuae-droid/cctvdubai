import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'CCTV Dubai | #1 SIRA Approved CCTV Installation Company UAE',
    template: '%s | CCTV Dubai — cctvdubai.me',
  },
  description:
    'Dubai\'s #1 SIRA-approved CCTV installation company. Expert CCTV cameras, gate barrier systems, structured cabling (Cat6/fiber), access control, intercom & smart home automation across Dubai & UAE. Free site survey — call +971 54 556 6456.',
  keywords: [
    'CCTV installation Dubai',
    'CCTV company Dubai',
    'SIRA approved CCTV Dubai',
    'CCTV camera installation UAE',
    'security camera Dubai',
    'gate barrier Dubai',
    'boom barrier Dubai',
    'gate barrier system UAE',
    'structured cabling Dubai',
    'Cat6 cabling Dubai',
    'fiber optic cabling UAE',
    'access control system Dubai',
    'biometric access control Dubai',
    'intercom system Dubai',
    'video door phone Dubai',
    'smart home automation Dubai',
    'video wall Dubai',
    'audio visual systems Dubai',
    'ELV systems Dubai',
    'ANPR camera Dubai',
    'IP camera installation Dubai',
    'Hikvision installer Dubai',
    'Dahua CCTV Dubai',
    'BFT gate barrier UAE',
    'SIRA approved company Dubai',
    'TRA licensed cabling UAE',
    'Mideatek Dubai',
    'cctvdubai.me',
  ],
  authors:   [{ name: 'Mideatek', url: BASE }],
  creator:   'Mideatek',
  publisher: 'Mideatek',
  category:  'Security & ELV Systems',
  robots: {
    index:           true,
    follow:          true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  openGraph: {
    type:      'website',
    locale:    'en_AE',
    url:       BASE,
    siteName:  'CCTV Dubai — cctvdubai.me',
    title:     'CCTV Dubai | #1 SIRA Approved CCTV Installation Company UAE',
    description: 'SIRA-approved CCTV installation, gate barriers, structured cabling, access control and intercom systems. Free site survey. WhatsApp: 054 556 6456.',
    images: [{
      url:    '/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'CCTV Dubai — SIRA Approved CCTV Installation by Mideatek',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'CCTV Dubai | #1 SIRA Approved CCTV & Security Systems UAE',
    description: 'SIRA-approved CCTV, gate barriers, access control, structured cabling & intercom. Free survey. cctvdubai.me',
    images:      ['/og-image.jpg'],
  },
  icons: {
    icon:  [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: BASE,
  },
  verification: {
    google: '1nqlCfC-Yyto5e_WxlWBiXKTCs2Yvj8NyrT9avO2b1Y',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'SecurityCompany'],
  '@id': `${BASE}/#business`,
  name: 'CCTV Dubai — by Mideatek',
  alternateName: ['Mideatek', 'CCTV Dubai', 'cctvdubai.me'],
  description: 'SIRA-approved CCTV installation company in Dubai offering CCTV cameras, gate barrier systems, structured cabling, access control, intercom, and smart home automation across Dubai and UAE.',
  url: BASE,
  telephone: '+971545566456',
  email: 'info@mideatek.com',
  priceRange: '$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: [
    { '@type': 'City', name: 'Dubai', sameAs: 'https://www.wikidata.org/wiki/Q612' },
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'City', name: 'Sharjah' },
    { '@type': 'AdministrativeArea', name: 'United Arab Emirates' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'First Floor, Offices Land Building, Karama',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2522',
    longitude: '55.3097',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security & ELV Services Dubai',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CCTV Installation Dubai', url: `${BASE}/services/cctv-installation-dubai` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gate Barrier Systems Dubai', url: `${BASE}/services/parking-gate-barrier` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured Cabling Dubai', url: `${BASE}/services/structured-cabling-uae` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Control Systems Dubai', url: `${BASE}/services/access-control-systems` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intercom Systems Dubai', url: `${BASE}/services/intercom-systems` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Home Automation Dubai', url: `${BASE}/services/smart-home-automation` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audio Visual Systems Dubai', url: `${BASE}/services/audio-visual-systems` } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/Mideatek2014',
    'https://instagram.com/mideatek',
    'https://linkedin.com/company/mideatek',
    'https://youtube.com/@mideatek',
  ],
  knowsAbout: [
    'CCTV Installation',
    'SIRA Compliance Dubai',
    'Gate Barrier Systems',
    'Structured Cabling',
    'Access Control',
    'Intercom Systems',
    'Smart Home Automation',
    'Video Wall Installation',
    'ELV Systems',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'Mideatek',
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/logo.png`,
    width: 200,
    height: 60,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971545566456',
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971545566456',
      contactType: 'sales',
      areaServed: 'AE',
    },
  ],
  foundingDate: '2014',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '50' },
  slogan: 'Dubai\'s Most Trusted CCTV & Security Systems Company',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: 'CCTV Dubai — cctvdubai.me',
  description: 'SIRA-approved CCTV installation, gate barriers, structured cabling, access control and security systems in Dubai UAE.',
  publisher: { '@id': `${BASE}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2522;55.3097" />
        <meta name="ICBM" content="25.2522, 55.3097" />
        <meta name="theme-color" content="#1B3F7C" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
