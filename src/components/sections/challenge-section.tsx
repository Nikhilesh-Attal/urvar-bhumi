import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const challenges = [
  "Every year, floods impact over 8–10 million people in Bihar.",
  "Poor soil absorption worsens water runoff and leads to erosion.",
  "Excessive fertilizer use degrades natural soil fertility over time.",
  "Stubble burning contributes to air pollution and carbon emissions."
];

export function ChallengeSection() {
  const floodImage = PlaceHolderImages.find((img) => img.id === "challenge-flood");

  return (
    <section id="challenge" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Challenge We’re Solving
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            When soil loses strength, communities lose stability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            {floodImage && (
              <Image
                src={floodImage.imageUrl}
                alt={floodImage.description}
                fill
                className="object-cover"
                data-ai-hint={floodImage.imageHint}
              />
            )}
          </div>
          
          <div>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>

            <Card className="mt-8 bg-secondary border-secondary-foreground/20">
              <CardContent className="p-6">
                <blockquote className="text-lg font-semibold italic text-secondary-foreground">
                  “Floods are not just natural disasters—they’re symptoms of soil losing its voice.”
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
