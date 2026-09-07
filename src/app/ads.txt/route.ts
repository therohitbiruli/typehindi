export const dynamic = 'force-static';

export async function GET() {
  return new Response('google.com, pub-8194925511868451, DIRECT, f08c47fec0942fa0\n', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
