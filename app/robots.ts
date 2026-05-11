import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — allow everything except admin/api
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Google — main index + Gemini AI Overviews
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Google AI training / Gemini
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // ChatGPT search (OpenAI)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // ChatGPT browsing / search
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Bing / Microsoft Copilot / ChatGPT Search
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Claude / Anthropic
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Meta AI
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Apple Intelligence
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Common Crawl (trains most open-source LLMs)
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // You.com AI search
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Diffbot (used by many AI knowledge graphs)
      {
        userAgent: 'Diffbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.cctvdubai.me/sitemap.xml',
    host: 'https://www.cctvdubai.me',
  }
}
