import { MetadataRoute } from 'next'
import { LOCATIONS } from '@/lib/locations'
import { blogPosts } from '@/lib/blog'

const BASE = 'https://www.cctvdubai.me'

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${BASE}/cctv-installation-${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${BASE}/services/cctv-installation-dubai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/services/parking-gate-barrier`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services/structured-cabling-uae`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services/access-control-systems`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services/intercom-systems`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/services/smart-home-automation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/services/audio-visual-systems`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    { url: `${BASE}/commercial-cctv-dubai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE}/home-cctv-dubai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    ...locationEntries,
    ...blogEntries,
  ]
}
