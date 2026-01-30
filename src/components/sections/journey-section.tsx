import { Button } from "@/components/ui/button";

const milestones = [
  { date: "May 2025", milestone: "Selected as BeVisioneers Fellow", outcome: "Defined Purpose & Problem" },
  { date: "July 2025", milestone: "Milestone 1 Completed", outcome: "Project concept “Biochar for Bihar” presented" },
  { date: "Oct 2025", milestone: "Prototype Design Phase", outcome: "Developing low-cost testing model" },
  { date: "Feb 2026", milestone: "Pilot Trials in Bihar", outcome: "Soil data collection begins" },
  { date: "May 2026", milestone: "Community Scale Phase", outcome: "Training 5 local SHGs in biochar production" },
];

export function JourneySection() {
  return (
    <section id="journey" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our BeVisioneers Journey (2025–2026)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Following our path from an idea to a community-driven solution.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-3 sm:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {milestones.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-3 sm:left-1/2 top-1 w-6 h-6 bg-primary rounded-full -translate-x-1/2 border-4 border-background"></div>
              <div className="sm:flex items-center sm:gap-8">
                <div className="sm:w-1/2 sm:text-right">
                  <p className="font-semibold text-primary sm:ml-auto">{item.date}</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-1/2 pl-10 sm:pl-8">
                  <h3 className="font-bold text-lg">{item.milestone}</h3>
                  <p className="text-muted-foreground">{item.outcome}</p>
                </div>
              </div>
               {index % 2 !== 0 && (
                <div className="hidden sm:block absolute top-1/2 right-1/2 w-1/2 h-px bg-border"></div>
              )}
               {index % 2 === 0 && (
                <div className="hidden sm:block absolute top-1/2 left-1/2 w-1/2 h-px bg-border"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline">View Full Timeline →</Button>
        </div>
      </div>
    </section>
  );
}
