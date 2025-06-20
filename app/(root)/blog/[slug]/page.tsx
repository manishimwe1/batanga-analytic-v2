import { getBlogPost } from '@/sanity/getContent/homePage';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

// Placeholder for block content renderer

const components = {
    types: {
      image: ({ value }:any) => {
        if (!value?.asset?._ref) return null;
        return (
          <div className="my-6">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Blog Post Image'}
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
  };

const BlockContent = ({ content }: { content: any }) => (
  <div className="prose prose-lg max-w-none prose-headings:text-batanga-darkblue prose-img:rounded-lg prose-a:text-primary">
    <PortableText value={content} components={components}/>
  </div>
);

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const decodedSlug = decodeURIComponent(slug);
    console.log(decodedSlug,'slug');
    
    const blogPosts = await getBlogPost();
  const post = blogPosts?.find((p: any) => p.slug?.current === decodedSlug);

  if (!post) return notFound();
  console.log(blogPosts,'blogpost');
  console.log(post,'post');
  

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          {post.image && (
            <div className="relative w-full h-72 rounded-lg overflow-hidden mb-8">
              <Image
                src={urlFor(post.image.asset).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        <BlockContent content={post.content} />
      </div>
    </article>
  );
} 