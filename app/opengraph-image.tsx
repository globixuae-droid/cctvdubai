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
          position: 'relative',
        }}
      >
        {/* Red accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '100%', background: '#DC2626' }} />

        {/* Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.4)',
          borderRadius: '999px', padding: '8px 20px', marginBottom: '28px',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626' }} />
          <span style={{ color: '#FCA5A5', fontSize: '18px', fontWeight: 600, letterSpacing: '0.05em' }}>
            SIRA APPROVED · DUBAI
          </span>
        </div>

        {/* Headline */}
        <div style={{ color: 'white', fontSize: '72px', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          CCTV Dubai
        </div>
        <div style={{ color: '#93C5FD', fontSize: '32px', fontWeight: 600, marginBottom: '40px', lineHeight: 1.3 }}>
          #1 CCTV Installation, Gate Barriers &{'\n'}Security Systems UAE
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ADE80' }} />
            <span style={{ color: '#D1D5DB', fontSize: '20px' }}>cctvdubai.me</span>
          </div>
          <div style={{ width: '1px', height: '20px', background: '#374151' }} />
          <span style={{ color: '#D1D5DB', fontSize: '20px' }}>+971 54 556 6456</span>
          <div style={{ width: '1px', height: '20px', background: '#374151' }} />
          <span style={{ color: '#D1D5DB', fontSize: '20px' }}>Free Site Survey</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
