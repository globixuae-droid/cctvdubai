import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [totalLeads, newLeads, projects, services, media] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: 'new' } }),
    prisma.project.count({ where: { published: true } }),
    prisma.service.count({ where: { published: true } }),
    prisma.media.count(),
  ])

  const recentLeads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return NextResponse.json({ totalLeads, newLeads, projects, services, media, recentLeads })
}
