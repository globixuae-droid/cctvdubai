import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'
import { Clock, Tag, ChevronRight } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const BASE = 'https://www.cctvdubai.me'

export const metadata: Metadata = {
  title: 'Blog | CCTV, ELV & Security Systems Dubai — Expert Guides',
  description: 'Expert guides on CCTV installation, SIRA compliance, structured cabling, gate barriers, access control, and smart home automation in Dubai and the UAE. By Mideatek.',
  keywords: [
    'CCTV blog Dubai', 'SIRA CCTV guide', 'ELV systems UAE', 'security systems Dubai guide',
    'structured cabling guide UAE', 'gate barrier Dubai guide', 'CCTV cost Dubai',
  ],
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: 'Blog | CCTV & ELV Systems Dubai Expert Guides',
    description: 'Expert guides on CCTV, structured cabling, gate barriers, access control, and smart home systems in Dubai.',
    url: `${BASE}/blog`,
  },
}

const categoryColors: Record<string, string> = {
  'CCTV':               'bg-blue-50 text-blue-700 border-blue-200',
  'SIRA Compliance':    'bg-red-50 text-red-700 border-red-200',
  'Structured Cabling': 'bg-green-50 text-green-700 border-green-200',
  'Gate Barriers':      'bg-orange-50 text-orange-700 border-orange-200',
  'Smart Home':         'bg-purple-50 text-purple-700 border-purple-200',
  'Access Control':     'bg-yellow-50 text-yellow-700 border-yellow-200',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AE', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white dot-grid">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#0F172A' }}>Blog</span>
          </div>
          <div className="max-w-2xl">
            <div className="section-tag">EXPERT GUIDES</div>
            <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-4" style={{ color: '#0F172A' }}>
              CCTV & Security Systems Blog
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Expert guides on CCTV installation, SIRA compliance, structured cabling, gate barriers, and smart building technology — written by Mideatek's certified engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-8" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <Link href={`/blog/${featured.slug}`}
            className="block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[featured.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">FEATURED</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-heading leading-tight mb-4 group-hover:text-blue-700 transition-colors" style={{ color: '#0F172A' }}>
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {featured.readTime}</span>
                  <span>{formatDate(featured.date)}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center p-10 min-h-[220px] lg:min-h-0">
                <div className="text-center text-white">
                  <div className="text-6xl font-black font-heading opacity-20 mb-2">CCTV</div>
                  <div className="text-white font-bold text-lg">Dubai Cost Guide 2025</div>
                  <div className="text-blue-200 text-sm mt-1">Updated for 2025</div>
                  <div className="mt-6 inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
                    Read Guide <ChevronRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all overflow-hidden group flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-black font-heading text-lg leading-snug mb-3 group-hover:text-blue-700 transition-colors flex-1" style={{ color: '#0F172A' }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span className="text-blue-700 text-xs font-bold flex items-center gap-1">
                      Read <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Expert Advice for Your Project?" subtitle="Talk to our certified engineers — free site survey and quotation across Dubai and UAE." />
    </>
  )
}
