"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, HeartHandshake } from "lucide-react";

export function GetInvolvedSection() {
  const scrollTo = (selector: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="get-involved" className="py-16 sm:py-24 bg-card">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Join Our Journey
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Let’s grow resilience together. Your skills, knowledge, and support can help us restore Bihar's farmlands.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <div className="flex flex-col items-center text-center">
            <GraduationCap className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl">Students & Volunteers</h3>
            <p className="text-muted-foreground mt-2">Contribute to research, fieldwork, and community engagement. Gain hands-on experience in climate innovation.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl">Researchers & Mentors</h3>
            <p className="text-muted-foreground mt-2">Partner with us on soil studies, impact measurement, and sustainable business modeling. Guide our scientific approach.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <HeartHandshake className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-xl">Funders & Partners</h3>
            <p className="text-muted-foreground mt-2">Support our mission to scale this solution across Bihar. Help us build a resilient agricultural future.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Button size="lg">Collaborate With Us</Button>
          <Button size="lg" variant="secondary">Donate / Support</Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo('#contact')}>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
