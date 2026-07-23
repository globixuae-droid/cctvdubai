import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPost, getAllSlugs } from '@/lib/blog'
import { Clock, ChevronRight, Phone, MessageCircle } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const BASE = 'https://www.cctvdubai.me'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AE', { year: 'numeric', month: 'long', day: 'numeric' })
}

const categoryColors: Record<string, string> = {
  'CCTV':               'bg-blue-50 text-blue-700 border-blue-200',
  'SIRA Compliance':    'bg-red-50 text-red-700 border-red-200',
  'Structured Cabling': 'bg-green-50 text-green-700 border-green-200',
  'Gate Barriers':      'bg-orange-50 text-orange-700 border-orange-200',
  'Smart Home':         'bg-purple-50 text-purple-700 border-purple-200',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: {
      '@type': 'ImageObject',
      url: `${BASE}/images/projects/cctv/cctv-10.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: post.author?.name ?? 'Mideatek Engineering Team',
      url: `${BASE}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mideatek',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/images/logo.png`,
        width: 200,
        height: 60,
      },
    },
    url: `${BASE}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: 'en-AE',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',  item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog',  item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  }

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white dot-grid">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 flex-wrap">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-600 line-clamp-1">{post.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${categoryColors[post.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-400"><Clock size={13} /> {post.readTime}</span>
            <span className="text-sm text-gray-400">{formatDate(post.date)}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading leading-tight mb-6" style={{ color: '#0F172A' }}>
            {post.title}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #1B3F7C, #2563EB)' }}>M</div>
            <div>
              <div className="font-bold text-sm" style={{ color: '#0F172A' }}>{post.author?.name ?? 'Mideatek Engineering Team'}</div>
              <div className="text-gray-400 text-xs">{post.author?.role ?? 'SIRA Approved · TRA Licensed · 10+ Years Dubai Experience'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Article */}
            <article className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm prose-custom"
              style={{ lineHeight: '1.8' }}>
              <div
                style={{ color: '#374151' }}
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* CTA card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-28">
                <h3 className="font-black font-heading text-lg mb-2" style={{ color: '#0F172A' }}>
                  Get a Free Quote
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Talk to our certified engineers. Free site survey across Dubai and UAE.
                </p>
                <div className="space-y-3">
                  <a href="tel:+971545566456"
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-xl transition-all text-sm w-full">
                    <Phone size={15} /> +971 54 556 6456
                  </a>
                  <a href="https://wa.me/971545566456" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white font-bold py-3 px-5 rounded-xl transition-all text-sm w-full"
                    style={{ background: '#25D366' }}>
                    <MessageCircle size={15} /> WhatsApp Now
                  </a>
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-blue-200 text-gray-700 hover:text-blue-700 font-bold py-3 px-5 rounded-xl transition-all text-sm w-full">
                    Request Free Survey <ChevronRight size={15} />
                  </Link>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 space-y-1.5 text-xs text-gray-400">
                  <div>✓ SIRA Approved Installer</div>
                  <div>✓ TRA Licensed Contractor</div>
                  <div>✓ ISO 9001:2015 Certified</div>
                  <div>✓ Response within 1 hour</div>
                </div>
              </div>

              {/* Related posts */}
              <div>
                <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Related Articles</h3>
                <div className="space-y-3">
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`}
                      className="block bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all group">
                      <div className="text-xs text-gray-400 mb-1">{p.category}</div>
                      <div className="font-semibold text-sm leading-snug group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                        <Clock size={10} /> {p.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Secure Your Property?" subtitle="Get a free site survey and detailed quotation from Mideatek's certified engineers across Dubai and UAE." />
    </>
  )
}
