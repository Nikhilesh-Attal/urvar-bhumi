import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    slug: "how-biochar-restores-water-balance",
    title: "How Biochar Restores Water Balance",
    excerpt: "A deep dive into the science of how porous biochar acts like a sponge...",
    imageId: "blog-post-1",
  },
  {
    slug: "my-first-visit-to-purnea",
    title: "Our First Visit to Purnea: Listening to Farmers",
    excerpt: "Stories and insights from the ground, where we learned about challenges...",
    imageId: "blog-post-2",
  },
  {
    slug: "what-i-learned-from-fellow-visioneers",
    title: "Collaboration & Learnings from the Fellowship",
    excerpt: "Reflections on collaboration, innovation, and the power of a global community...",
    imageId: "blog-post-3",
  },
];

export function BlogSection() {
  const fieldNotesImage = PlaceHolderImages.find(img => img.id === 'field-notes-bg');

  return (
    <section id="blog" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            {posts.map((post) => {
                const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block hover:no-underline group">
                    <Card className="flex flex-col sm:flex-row overflow-hidden h-full transition-shadow duration-300 group-hover:shadow-xl bg-card/80 backdrop-blur-sm rounded-2xl">
                      {postImage && (
                        <div className="relative w-full sm:w-1/3 aspect-video sm:aspect-auto">
                          <Image
                            src={postImage.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            data-ai-hint={postImage.imageHint}
                          />
                        </div>
                      )}
                      <div className="w-full sm:w-2/3">
                        <CardHeader>
                          <CardTitle className="text-lg">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            <div className="pt-4">
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Access All Notes</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg h-full hidden lg:block">
            {fieldNotesImage && (
              <Image 
                src={fieldNotesImage.imageUrl}
                alt={fieldNotesImage.description}
                fill
                className="object-cover"
                data-ai-hint={fieldNotesImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-bold">Field Notes from Bihar</h2>
              <p className="mt-2 text-lg text-white/90">Stories, discoveries, and reflections from the ground.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
