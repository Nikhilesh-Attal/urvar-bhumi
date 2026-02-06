"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";

const collaborationPoints = [
    {
        title: "Researchers",
        description: "Partner with us on agricultural research and data-driven impact.",
        buttonText: "Get in touch",
        variant: "default"
    },
    {
        title: "Funders",
        description: "Enable our work to scale across the entire region.",
        buttonText: "Fund the mission",
        variant: "accent"
    },
    {
        title: "Volunteers",
        description: "Join our team on the ground and gain first-hand experience.",
        buttonText: "Join the team",
        variant: "default"
    },
    {
        title: "Farmers",
        description: "Join the growing network of farmers building a resilient future.",
        buttonText: "Follow Along",
        variant: "accent"
    },
]

export function CollaborateSection() {
    const bgImage = PlaceHolderImages.find(img => img.id === 'collaborate-bg');

  return (
    <section id="collaborate" className="relative py-16 sm:py-24 bg-card">
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-video md:aspect-[1/1.2] rounded-2xl overflow-hidden shadow-lg">
             {bgImage && (
                <Image 
                    src='/collaborate-secction.png'
                    alt={bgImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={bgImage.imageHint}
                />
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-0 p-8">
                <h2 className="text-4xl font-bold text-white">Collaborating for Change</h2>
                <p className="mt-2 text-lg text-white/90">We are stronger together. Join us in building a more resilient and prosperous Bihar.</p>
             </div>
        </div>
        <div className="space-y-6">
            {collaborationPoints.map(point => (
                <Card key={point.title} className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold">{point.title}</h3>
                            <p className="text-muted-foreground mt-1">{point.description}</p>
                        </div>
                        <Button className="rounded-full" style={point.variant === 'accent' ? { backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' } : {}}>
                            {point.buttonText}
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
