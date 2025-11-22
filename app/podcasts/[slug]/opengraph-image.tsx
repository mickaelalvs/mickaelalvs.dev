import { ImageResponse } from 'next/og';
import { speaking as podcasts } from '../../../data/speaking';
import { generateSlug } from '../../../utils/slug';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const OpengraphTemplate = ({ text }: { text: string }) => (
    <div
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'white',
            backgroundImage:
                'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
        }}
    >
        <div
            style={{
                left: 42,
                top: 42,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span
                style={{
                    fontSize: '2rem',
                }}
            >
                👋🏼
            </span>
            <span
                style={{
                    marginLeft: 8,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#4eb9a5',
                }}
            >
                cruuzazul.dev
            </span>
        </div>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                style={{
                    borderRadius: 20,
                    border: '3px solid #4eb9a5',
                    marginBottom: '20px',
                }}
                src="https://github.com/cruuzazul.png"
                height={150}
                width={150}
                alt="Mickaël Alves"
            />
        </div>
        <div
            style={{
                display: 'flex',
                fontSize: 50,
                fontStyle: 'normal',
                color: 'black',
                marginTop: 30,
                lineHeight: 1.8,
                whiteSpace: 'pre-wrap',
                fontWeight: 'bold',
                padding: '0 20px',
            }}
        >
            {text}
        </div>
    </div>
);

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const podcast = podcasts.find((p) => generateSlug(p.title) === slug && p.format === 'Podcast');
  const podcastTitle = podcast ? `${podcast.title} | Mickaël Alves` : 'Podcasts | Mickaël Alves';

  return new ImageResponse(<OpengraphTemplate text={podcastTitle} />, {
    ...size,
  });
}
