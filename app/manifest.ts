import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CCTV Dubai — cctvdubai.me',
    short_name: 'CCTV Dubai',
    description: 'SIRA-approved CCTV installation, gate barriers, access control & structured cabling in Dubai UAE.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1B3F7C',
    icons: [
      { src: '/favicon.ico',         sizes: 'any',     type: 'image/x-icon' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
