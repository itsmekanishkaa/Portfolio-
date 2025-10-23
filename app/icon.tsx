import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #7ea486 0%, #5a8a67 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '25%',
        }}
      >
        {/* Leaf icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
          }}
        >
          <path d="M17.5 3C14.5 3 12 5.5 12 8.5c0 1.9.9 3.6 2.4 4.6-.3.6-.6 1.3-1 2-.7 1.3-1.4 2.6-2.4 3.6-1.3 1.3-2.8 2.1-4.5 2.3-.3 0-.5.3-.5.6 0 .3.2.6.5.6h.2c2 0 3.8-.9 5.3-2.4 1.1-1.1 1.9-2.5 2.6-3.9.4-.8.8-1.5 1.1-2.2 1.5-.9 2.5-2.6 2.5-4.5C20.5 5.5 18 3 15 3h2.5zm-5 8.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5z"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
