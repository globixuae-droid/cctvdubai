import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1B3F7C',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ color: 'white', fontSize: '18px', fontWeight: 900, letterSpacing: '-0.02em' }}>C</span>
      </div>
    ),
    { ...size }
  )
}
