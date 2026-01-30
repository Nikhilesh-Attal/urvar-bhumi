import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resources } from "@/lib/resources";

export function ResourcesSection() {
  const featuredResources = resources.slice(0, 4); // Take first 4 for the homepage

  return (
    <section id="resources" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learn with Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Open knowledge for a regenerative future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredResources.map((resource) => (
            <Card key={resource.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <resource.icon className="w-5 h-5 text-primary"/>
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{resource.summary}</p>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button variant="link" asChild className="p-0">
                  <Link href="/resources">Read More →</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/resources">Explore All Resources →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
