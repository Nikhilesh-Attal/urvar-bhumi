"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
    <section className="relative min-h-[80vh] w-full flex items-center justify-start text-white">
      {heroImage && (
        <Image
          src='/hero-section.png'
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="relative z-10 container p-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Urvar Bhumi
          </h1>
          <p className="mt-2 text-3xl md:text-4xl text-primary-foreground/80 font-bold font-headline">
            उर्वर भूमि
          </p>
          <p className="mt-6 text-lg md:text-xl">
            From Soil to the Future: मिट्टी से भविष्य तक
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => scrollTo('#journey')}>
              Explore our Journey
              <ArrowRight className="ml-2"/>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
            <Card className="bg-primary/50 text-primary-foreground backdrop-blur-md border-primary-foreground/20 rounded-2xl md:max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-primary-foreground/80">
                        My purpose is to restore the natural resilience of Bihar’s farmlands by transforming farm waste into biochar and returning it to the soil.
                    </p>
                    <Button variant="link" className="p-0 mt-4 text-accent" onClick={() => scrollTo('#solution')}>Learn more</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
