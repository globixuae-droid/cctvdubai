import { ImageResponse } from 'next/og'

export const alt = 'CCTV Dubai — SIRA Approved CCTV Installation by Mideatek'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1B3F7C 0%, #0F172A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(220,38,38,0.15)',
            border: '1px solid rgba(220,38,38,0.4)',
            borderRadius: '999px',
            padding: '8px 20px',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626' }} />
          <span style={{ color: '#FCA5A5', fontSize: '18px', fontWeight: 600, letterSpacing: '0.05em' }}>
            SIRA APPROVED · DUBAI
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', color: 'white', fontSize: '72px', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>
          CCTV Dubai
        </div>

        {/* Subheadline */}
        <div style={{ display: 'flex', color: '#93C5FD', fontSize: '30px', fontWeight: 600, marginBottom: '48px' }}>
          #1 CCTV Installation, Security &amp; ELV Systems UAE
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', width: '10px', height: '10px', borderRadius: '50%', background: '#4ADE80' }} />
            <span style={{ color: '#D1D5DB', fontSize: '20px' }}>cctvdubai.me</span>
          </div>
          <span style={{ color: '#4B5563', fontSize: '20px' }}>|</span>
          <span style={{ color: '#D1D5DB', fontSize: '20px' }}>+971 54 556 6456</span>
          <span style={{ color: '#4B5563', fontSize: '20px' }}>|</span>
          <span style={{ color: '#D1D5DB', fontSize: '20px' }}>Free Site Survey</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
