import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resources } from "@/lib/resources";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Open knowledge for a regenerative future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
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
                <Button variant="link" className="p-0">Read More →</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
