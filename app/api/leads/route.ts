import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import nodemailer from 'nodemailer'

const TO_EMAIL = 'hammad.rehman@mideatek.com'

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, message, source } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    // Save to DB — non-fatal if it fails on Vercel (SQLite)
    let leadId: string | number | undefined
    try {
      const lead = await prisma.lead.create({
        data: {
          name,
          phone,
          email: email || null,
          service: service || null,
          message: message || null,
          source: source || 'website',
        },
      })
      leadId = lead.id
    } catch (dbErr) {
      console.error('DB save failed (non-fatal):', dbErr)
    }

    // Send email via Gmail SMTP
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = createTransporter()
      await transporter.sendMail({
        from: `"CCTV Dubai — cctvdubai.me" <${process.env.GMAIL_USER}>`,
        to: TO_EMAIL,
        subject: `New Lead: ${name} — ${service || 'General Enquiry'} (${source || 'website'})`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
            <div style="background:#1B3F7C;color:white;padding:16px 24px;border-radius:8px;margin-bottom:24px">
              <h2 style="margin:0;font-size:20px">New Lead — cctvdubai.me</h2>
              <p style="margin:4px 0 0;opacity:0.8;font-size:14px">Source: ${source || 'website'}</p>
            </div>

            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr style="background:#f8fafc">
                <td style="padding:10px 14px;font-weight:bold;width:140px;color:#374151;border-bottom:1px solid #e5e7eb">Name</td>
                <td style="padding:10px 14px;color:#111827;border-bottom:1px solid #e5e7eb">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb">Phone</td>
                <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">
                  <a href="tel:${phone}" style="color:#1B3F7C;font-weight:bold">${phone}</a>
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:10px 14px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb">Email</td>
                <td style="padding:10px 14px;color:#111827;border-bottom:1px solid #e5e7eb">${email || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb">Service</td>
                <td style="padding:10px 14px;color:#111827;border-bottom:1px solid #e5e7eb">${service || '—'}</td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:10px 14px;font-weight:bold;color:#374151">Message</td>
                <td style="padding:10px 14px;color:#111827">${message || '—'}</td>
              </tr>
            </table>

            <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px 18px;margin-bottom:20px">
              <p style="margin:0;color:#DC2626;font-weight:bold;font-size:15px">Action Required: Follow up within 1 hour</p>
              <p style="margin:6px 0 0;color:#374151;font-size:14px">
                Call: <a href="tel:${phone}" style="color:#1B3F7C;font-weight:bold">${phone}</a>
              </p>
            </div>

            <p style="text-align:center;margin:0">
              <a href="https://www.cctvdubai.me/admin/leads"
                style="display:inline-block;background:#1B3F7C;color:white;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px">
                View in Admin Panel
              </a>
            </p>

            <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:20px">
              cctvdubai.me — Mideatek Lead Notification${leadId ? ` · Lead #${leadId}` : ''}
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true, id: leadId })
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json({ error: 'Failed to process lead' }, { status: 500 })
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
