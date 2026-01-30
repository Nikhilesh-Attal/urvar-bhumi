import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "farmer-story-1",
    title: "A Farmer's Hope",
    description: "Listen to Ramkishan ji share his experience with changing weather patterns.",
    thumbnailUrl: "https://picsum.photos/seed/101/600/400",
    thumbnailHint: "farmer portrait"
  },
  {
    id: "farmer-story-2",
    title: "The Power of Community",
    description: "A local self-help group discusses the future of farming in their village.",
    thumbnailUrl: "https://picsum.photos/seed/102/600/400",
    thumbnailHint: "community meeting"
  },
  {
    id: "biochar-in-action",
    title: "Biochar in Action",
    description: "A short demonstration of how biochar improves soil water retention.",
    thumbnailUrl: "https://picsum.photos/seed/103/600/400",
    thumbnailHint: "soil hands"
  },
   {
    id: "monsoon-challenges",
    title: "Facing the Monsoon",
    description: "Visuals of the challenges faced during the heavy monsoon season.",
    thumbnailUrl: "https://picsum.photos/seed/104/600/400",
    thumbnailHint: "rainy field"
  },
  {
    id: "a-day-in-the-field",
    title: "A Day in the Field",
    description: "Follow a farmer through their daily tasks and learn about their connection to the land.",
    thumbnailUrl: "https://picsum.photos/seed/105/600/400",
    thumbnailHint: "farmer working"
  },
  {
    id: "youth-for-climate",
    title: "Youth for Climate Action",
    description: "Young volunteers share why they are passionate about sustainable agriculture.",
    thumbnailUrl: "https://picsum.photos/seed/106/600/400",
    thumbnailHint: "young people"
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Video Stories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch the stories of the people and the land we are working to protect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group relative rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                 <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={video.thumbnailHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
                <p className="text-white/80 text-sm mt-1">{video.description}</p>
              </div>
               {/* In a real app, this link would open a video player modal or a new page */}
              <a href="#" className="absolute inset-0" aria-label={`Watch video: ${video.title}`}></a>
            </div>
          ))}
        </div>

         <div className="text-center mt-16">
            <Button asChild>
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
