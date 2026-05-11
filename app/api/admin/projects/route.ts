import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { slugify } from '@/lib/utils'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(projects)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const slug = body.slug || slugify(body.title)

  const project = await prisma.project.create({
    data: {
      title: body.title,
      slug,
      description: body.description,
      category: body.category,
      client: body.client || null,
      location: body.location || null,
      images: JSON.stringify(body.images || []),
      featured: body.featured || false,
      published: body.published !== false,
    },
  })

  return NextResponse.json(project)
}
