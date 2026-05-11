import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import ProjectsClient from './ProjectsClient'
import CTASection from '@/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Projects Portfolio | ELV & AV Projects Dubai – Mideatek',
  description: 'Browse Mideatek\'s completed ELV and AV projects across Dubai and UAE — CCTV, structured cabling, smart home, access control, audio visual installations.',
  keywords: ['ELV projects Dubai', 'CCTV installation portfolio', 'smart home projects UAE', 'AV projects Dubai'],
}

async function getProjects() {
  try {
    return await prisma.project.findMany({
      where: { published: true },
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    })
  } catch {
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <span className="inline-block bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white mb-4">
            Featured Projects & Case Studies
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From luxury villas to commercial towers — explore our completed ELV and AV installations across Dubai and the UAE.
          </p>
        </div>
      </section>

      <ProjectsClient projects={projects} />
      <CTASection title="Have a Project in Mind?" subtitle="Contact our team for a free consultation and quotation on your next ELV or AV project." />
    </>
  )
}
