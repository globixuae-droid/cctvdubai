import { MetadataRoute } from 'next'

const BASE = 'https://www.cctvdubai.me'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
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
      url: `${BASE}/blog/cctv-installation-cost-dubai-2025`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/sira-approval-cctv-dubai-guide-2025`,
      lastModified: new Date('2025-05-05'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/best-cctv-cameras-dubai-villas-homes-2025`,
      lastModified: new Date('2025-05-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/structured-cabling-cat6-fiber-optic-dubai-guide`,
      lastModified: new Date('2025-05-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/gate-barrier-systems-dubai-guide-2025`,
      lastModified: new Date('2025-05-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/cctv-camera-types-dubai-guide-2025`,
      lastModified: new Date('2025-05-15'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/how-to-choose-cctv-company-dubai-2025`,
      lastModified: new Date('2025-05-18'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/cctv-maintenance-dubai-amc-contract-guide-2025`,
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/ip-camera-vs-analog-cctv-dubai-guide-2025`,
      lastModified: new Date('2025-05-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
