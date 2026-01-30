import { Leaf, Droplets, Users, Globe } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const cycleItems = [
  { icon: Leaf, title: "Soil", description: "Reviving fertility" },
  { icon: Droplets, title: "Water", description: "Improving retention" },
  { icon: Users, title: "Farmer", description: "Boosting yields" },
  { icon: Globe, title: "Future", description: "Building resilience" },
];

export function PurposeSection() {
  return (
    <section id="purpose" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Purpose | हमारा उद्देश्य
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My purpose is to restore the natural resilience of Bihar’s farmlands by transforming farm waste into biochar and returning it to the soil.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            This approach revives soil fertility, reduces erosion, and helps prevent the floods that devastate millions of farming families each year.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {cycleItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
           <Alert className="border-primary/50 bg-primary/10">
              <Leaf className="h-4 w-4 text-primary" />
              <AlertTitle className="text-primary font-bold">A Fertile Future</AlertTitle>
              <AlertDescription className="text-primary/90">
                🌱 Turning farm waste into fertile futures.
              </AlertDescription>
            </Alert>
        </div>
      </div>
    </section>
  );
}
