import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { Home, Droplets, Leaf, Cloud } from "lucide-react";

const challenges = [
  {
    icon: Home,
    text: "Every year, floods impact over 8–10 million people in Bihar.",
  },
  {
    icon: Droplets,
    text: "Poor soil absorption worsens water runoff and leads to erosion.",
  },
  {
    icon: Leaf,
    text: "Excessive fertilizer use degrades natural soil fertility over time.",
  },
  {
    icon: Cloud,
    text: "Stubble burning contributes to air pollution and carbon emissions.",
  },
];

export function ChallengeSection() {
  const floodImage = PlaceHolderImages.find((img) => img.id === "challenge-flood");
  const challengeIcons = challenges.map(c => ({
      ...c,
      icon: PlaceHolderImages.find(p => p.id === c.id)
  }));

  return (
    <section id="challenge" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg">
            {floodImage && (
              <Image
                src='/bihar-flood.png'
                alt={floodImage.description}
                fill
                className="object-cover"
                data-ai-hint={floodImage.imageHint}
              />
            )}
          </div>
          <div className="md:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              The Challenge We Face
            </h2>
            <p className="text-muted-foreground mb-8">
                Monsoon floods devastate the region, while in the dry season, the soil is too parched for healthy crops.
            </p>

            <ul className="space-y-6 mb-8">
              {challenges.map((item, index) => (
  <div key={index} className="flex gap-4 items-start">
    <item.icon className="w-6 h-6 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">{item.text}</p>
  </div>
))}
            </ul>
            <Button variant="outline" className="rounded-full">
              Prototype project: Biochar-Bihar to manage floods and improve soil
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
