import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Ankit Kumar",
    role: "Founder & BeVisioneers Fellow 2025",
    bio: "Born and raised in Bihar, I’m working to combine traditional farming wisdom with climate innovation to make agriculture sustainable, resilient, and circular.",
    imageId: "team-founder",
  },
  {
    name: "Local Farmers",
    role: "Community Partners",
    bio: "The heart of our project, providing invaluable knowledge and partnership on the ground.",
    imageId: "team-farmer-1",
  },
  {
    name: "Mentors & Advisors",
    role: "Guiding Voices",
    bio: "Experts in agriculture, climate science, and social enterprise who guide our journey.",
    imageId: "team-farmer-2",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the People Behind Urvar Bhumi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Community-led innovation for lasting change.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
            return (
              <Card key={member.name} className="text-center">
                <CardHeader className="items-center">
                  {memberImage && (
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src={memberImage.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={memberImage.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary mt-1">{member.role}</CardDescription>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
