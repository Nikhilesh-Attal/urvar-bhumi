import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, University } from "lucide-react";

export function PartnersSection() {
  const bevisioneersLogo = PlaceHolderImages.find((img) => img.id === "logo-bevisioneers");

  return (
    <section id="partners" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Collaborating for Change
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe collaboration is the key to sustainability. Urvar Bhumi welcomes partnerships with academic institutions, NGOs, and innovators to co-create climate solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center justify-center p-6 text-center">
            {bevisioneersLogo && (
              <Image
                src={bevisioneersLogo.imageUrl}
                alt="BeVisioneers Mercedes-Benz Fellowship"
                width={150}
                height={75}
                className="object-contain"
                data-ai-hint={bevisioneersLogo.imageHint}
              />
            )}
            <p className="mt-4 font-semibold text-sm">BeVisioneers Mercedes-Benz Fellowship</p>
          </Card>
          
          <Card className="flex flex-col items-center justify-center p-6 text-center bg-secondary/50">
            <University className="w-12 h-12 text-secondary-foreground mb-4" />
            <h3 className="font-semibold text-lg">Local NGOs & Universities</h3>
            <p className="text-sm text-muted-foreground mt-2">Seeking academic and community partners.</p>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6 text-center bg-secondary/50">
            <Handshake className="w-12 h-12 text-secondary-foreground mb-4" />
            <h3 className="font-semibold text-lg">Open for Collaboration</h3>
            <p className="text-sm text-muted-foreground mt-2">Let's innovate together for climate solutions.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
