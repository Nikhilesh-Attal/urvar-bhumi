import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "how-biochar-restores-water-balance",
    title: "How Biochar Restores Water Balance in Soil",
    excerpt: "A deep dive into the science of how porous biochar acts like a sponge, holding water and nutrients exactly where plants need them.",
    imageId: "blog-post-1",
    category: "Science"
  },
  {
    slug: "my-first-visit-to-purnea",
    title: "My First Visit to Purnea: Listening to Farmers",
    excerpt: "Stories and insights from the ground, where we learned about the real-world challenges and hopes of farming communities.",
    imageId: "blog-post-2",
    category: "Field Notes"
  },
  {
    slug: "what-i-learned-from-fellow-visioneers",
    title: "What I Learned from Fellow Visioneers",
    excerpt: "Reflections on collaboration, innovation, and the power of a global community dedicated to positive change.",
    imageId: "blog-post-3",
    category: "Journey"
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Field Notes from Bihar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stories, updates, and reflections from our journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block hover:no-underline group">
                <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 group-hover:shadow-xl">
                  {postImage && (
                    <div className="relative aspect-video">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={postImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                    <CardTitle className="mt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm font-semibold text-primary group-hover:underline">Read More →</span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/blog">Read More Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
