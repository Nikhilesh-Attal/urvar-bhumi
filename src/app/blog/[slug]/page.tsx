import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const posts = [
    {
    slug: "how-biochar-restores-water-balance",
    title: "How Biochar Restores Water Balance in Soil",
    excerpt: "A deep dive into the science of how porous biochar acts like a sponge, holding water and nutrients exactly where plants need them.",
    imageId: "blog-post-1",
    category: "Science",
    content: "Biochar's incredibly porous structure is the secret to its success. Each tiny piece is riddled with microscopic holes, creating a vast surface area. This structure allows it to act like a natural sponge in the soil. When it rains or the fields are irrigated, biochar absorbs and holds onto water, preventing it from running off or leaching away too quickly. This stored water is then available to plant roots during dry periods, effectively increasing the soil's water-holding capacity and improving drought resilience. Furthermore, these pores also trap essential nutrients like nitrogen and phosphorus, keeping them in the root zone where plants can access them, which reduces the need for synthetic fertilizers and minimizes nutrient pollution in waterways."
  },
  {
    slug: "my-first-visit-to-purnea",
    title: "My First Visit to Purnea: Listening to Farmers",
    excerpt: "Stories and insights from the ground, where we learned about the real-world challenges and hopes of farming communities.",
    imageId: "blog-post-2",
    category: "Field Notes",
    content: "There is no substitute for walking the fields and listening to the people who cultivate them. During our first visit to the Purnea district, we sat with farmers and heard their stories. They spoke of unpredictable monsoons, degraded soil that demands more and more fertilizer each year, and the constant worry of floods washing away their hard work. But we also heard stories of resilience, of deep-rooted knowledge of the land, and a powerful desire for a better future. These conversations were not just data collection; they were the foundation of our mission. They solidified our belief that any viable solution must be co-created with the community, respecting their wisdom while introducing sustainable innovations."
  },
  {
    slug: "what-i-learned-from-fellow-visioneers",
    title: "What I Learned from Fellow Visioneers",
    excerpt: "Reflections on collaboration, innovation, and the power of a global community dedicated to positive change.",
    imageId: "blog-post-3",
    category: "Journey",
    content: "Being part of the BeVisioneers fellowship is like being plugged into a global powerhouse of purpose-driven innovators. The energy is infectious. From a fellow working on clean water access in Africa to another developing sustainable housing in South America, the diversity of ideas is staggering. The most profound lesson has been the power of shared purpose. When you bring together passionate individuals from different backgrounds and give them the tools to collaborate, the potential for impact multiplies exponentially. We share our struggles, celebrate our breakthroughs, and constantly push each other to think bigger. It’s a powerful reminder that while our projects are local, the challenges we face are interconnected, and so are the solutions."
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <article className="py-12 sm:py-20">
      <div className="container max-w-3xl">
        <header className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
               <Link href="/blog"><ArrowLeft /> Back to all posts</Link>
            </Button>
          <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
        </header>

        {postImage && (
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-muted-foreground">
          <p className="lead text-xl">{post.excerpt}</p>
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
}
