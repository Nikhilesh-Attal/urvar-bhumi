import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Sprout, ShieldCheck, Smile } from "lucide-react";

const processSteps = [
  { icon: Recycle, text: "Farm Waste" },
  { icon: Sprout, text: "Biochar" },
  { icon: ShieldCheck, text: "Healthy Soil & Flood Resilience" },
  { icon: Smile, text: "Prosperous Farmers" },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-16 sm:py-24 bg-card">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Urvar Bhumi Approach
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Urvar Bhumi transforms agricultural waste into biochar—a natural soil enhancer that boosts fertility, absorbs water, and stores carbon. This circular approach reduces farm waste, improves crop yields, and builds long-term climate resilience.
        </p>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground mb-3">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <p className="font-semibold">{step.text}</p>
                </div>
                {index < processSteps.length - 1 && (
                   <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Button size="lg">See How It Works</Button>
        </div>
      </div>
    </section>
  );
}
