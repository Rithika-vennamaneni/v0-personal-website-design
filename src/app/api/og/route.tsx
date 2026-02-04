import { ImageResponse } from 'next/og';
import { personal } from '@/lib/content';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || personal.name;
    const description = searchParams.get('description') || personal.summary;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2F3B45',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139,167,185,0.1), transparent 50%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#F6F8FA',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '32px',
                color: '#8BA7B9',
                marginBottom: '40px',
                maxWidth: '800px',
                lineHeight: '1.3',
              }}
            >
              {description}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '24px',
                color: '#8BA7B9',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#12352F',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F6F8FA',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                RV
              </div>
              <span>Data & Business Analyst</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
