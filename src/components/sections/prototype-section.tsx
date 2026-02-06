import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function PrototypeSection() {
  const prototypeBgImage = PlaceHolderImages.find((img) => img.id === "prototype-bg");
  const prototypeDiagramImage = PlaceHolderImages.find((img) => img.id === "prototype-diagram");

  return (
    <section id="prototype" className="relative py-16 sm:py-24 text-primary-foreground">
      {prototypeBgImage && (
        <Image
          src={prototypeBgImage.imageUrl}
          alt={prototypeBgImage.description}
          fill
          className="object-cover"
          data-ai-hint={prototypeBgImage.imageHint}
        />
      )}
       <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="bg-primary/50 backdrop-blur-md p-8 rounded-2xl border border-primary-foreground/20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Early Prototype
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Our prototype uses low-cost, locally made biochar units to help smallholder farmers convert stubble into soil-building carbon.
          </p>
          <p className="mt-4 text-primary-foreground/80">
            This method is faster, cheaper, and more scalable than industrial alternatives, empowering communities to create their own solutions.
          </p>
        </div>
        <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-square">
            {prototypeDiagramImage && (
                <Image
                src={prototypeDiagramImage.imageUrl}
                alt={prototypeDiagramImage.description}
                fill
                className="object-contain"
                data-ai-hint={prototypeDiagramImage.imageHint}
                />
            )}
            </div>
            <Button size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                BeVisioneers Milestone 1: Submission
                <ArrowRight className="ml-2"/>
            </Button>
        </div>
      </div>
    </section>
  );
}
