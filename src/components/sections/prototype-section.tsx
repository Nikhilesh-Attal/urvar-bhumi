import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Compass } from "lucide-react";

export function PrototypeSection() {
  const prototypeImage = PlaceHolderImages.find((img) => img.id === "prototype-kiln");

  return (
    <section id="prototype" className="py-16 sm:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Early Prototype
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our prototype uses low-cost, locally made biochar units to help smallholder farmers convert stubble and farm residue into soil-building carbon.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            This reduces burning, enriches soil, and improves flood resilience naturally, creating a virtuous cycle for both the environment and the community.
          </p>
          <Alert className="mt-8 border-accent/50 bg-accent/10 text-accent-foreground">
            <Compass className="h-4 w-4 text-accent" />
            <AlertTitle className="text-accent-foreground font-bold">Currently Testing</AlertTitle>
            <AlertDescription>
              🧭 We are testing water retention and fertility impact on pilot plots.
            </AlertDescription>
          </Alert>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          {prototypeImage && (
            <Image
              src={prototypeImage.imageUrl}
              alt={prototypeImage.description}
              fill
              className="object-cover"
              data-ai-hint={prototypeImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
