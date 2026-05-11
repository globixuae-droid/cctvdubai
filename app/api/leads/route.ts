import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, message, source } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: { name, phone, email: email || null, service: service || null, message: message || null, source: source || 'website' },
    })

    return NextResponse.json({ success: true, id: lead.id })
  } catch (error) {
    console.error('Lead creation error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(leads)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}
