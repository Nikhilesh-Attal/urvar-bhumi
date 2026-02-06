import { ArrowRight, Recycle, TestTube2, Sprout, Handshake } from "lucide-react";
import { Button } from "../ui/button";

export function SolutionSection() {
  const processSteps = [
    { icon: Recycle, text: "Farm Waste" },
    { icon: TestTube2, text: "Biochar" },
    { icon: Sprout, text: "Healthy Soil & Food Security" },
    { icon: Handshake, text: "Prosperous Farmers" },
  ];

  return (
    <section id="solution" className="solution-section py-16 sm:py-24 bg-card">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Urvar Bhumi Approach
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We transform agricultural waste into biochar—a powerful, natural soil enhancer. This ancient approach boosts fertility, absorbs water, and stores carbon for long-term climate resilience.
          </p>

          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="w-16 h-16 bg-background rounded-full mb-3 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-semibold text-sm">{step.text}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden sm:block self-center" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-12 rounded-full" size="lg">
            Learn More
          </Button>
        </div>

        {/* Video Section */}
        <div className="relative hidden lg:block h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/rotan-rice.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          />
</div>

      </div>
    </section>
  );
}
