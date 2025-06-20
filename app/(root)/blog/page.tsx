import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost } from '@/sanity/getContent/homePage';
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPage() {
  const blogPosts = await getBlogPost();

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Insights, trends, and best practices in analytics, cybersecurity,
            and technology. Stay updated with our latest articles and thought
            leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            blogPosts?.length > 0 ? (
                blogPosts?.map((post: any) => (
                    <Card
                      key={post._id}
                      className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden flex flex-col"
                    >
                      <div className="relative h-48 w-full">
                        {post.image && (
                          <Image
                          src={urlFor(post.image.asset).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <CardHeader className="flex-1 bg-white">
                        <CardTitle className="text-batanga-darkblue group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-slate-600">
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="bg-white flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-white border-t pt-4">
                        <Link
                          href={`/blog/${post.slug?.current}`}
                          className="text-primary font-medium hover:underline"
                        >
                          Read More &rarr;
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
            ):(
                <p className="text-center text-black">
                    No blog post found.
                </p>
            )
          }
        </div>
      </div>
    </section>
  );
}
