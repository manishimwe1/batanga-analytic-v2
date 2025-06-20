import { NextResponse } from 'next/server';

export async function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/sitemap.xml`;
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 