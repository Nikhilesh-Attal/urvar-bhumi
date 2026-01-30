"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-farmland");

  const scrollTo = (selector: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[1080px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          उर्वर भूमि (Urvar Bhumi)
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
          From Soil to the Future | मिट्टी से भविष्य तक
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-primary-foreground/90">
          Restoring the power of Bihar’s farmlands through sustainable soil revival.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollTo('#journey')}>
            Explore Our Journey
          </Button>
          <Button size="lg" variant="secondary" onClick={() => scrollTo('#purpose')}>
            Learn About Our Mission
          </Button>
        </div>
        <p className="mt-12 text-xs text-primary-foreground/60">
          Supported by BeVisioneers Mercedes-Benz Fellowship 2025
        </p>
      </div>
    </section>
  );
}
