import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1B3F7C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ color: 'white', fontSize: '96px', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>C</span>
        <span style={{ color: '#93C5FD', fontSize: '28px', fontWeight: 700, marginTop: '4px' }}>CCTV Dubai</span>
      </div>
    ),
    { ...size }
  )
}
