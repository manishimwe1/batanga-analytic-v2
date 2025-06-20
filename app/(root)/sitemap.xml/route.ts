import { NextResponse } from 'next/server';
import { getBlogPost } from '@/sanity/getContent/homePage';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.batanganalytics.com/';
  const staticPages = [
    '',
    'services',
    'industries',
    'contact',
    'blog',
  ];

  const blogPosts = await getBlogPost();

  let urls = staticPages.map(
    (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
  );

  if (blogPosts && Array.isArray(blogPosts)) {
    urls = urls.concat(
      blogPosts.map(
        (post: any) =>
          `<url><loc>${baseUrl}/blog/${post.slug?.current}</loc></url>`
      )
    );
  }

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 