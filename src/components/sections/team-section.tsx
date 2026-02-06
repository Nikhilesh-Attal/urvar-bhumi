import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Local Farmer",
    role: "Community Knowledge",
    bio: "Our project is co-created with the farmers of Bihar, whose wisdom guides our work.",
    imageId: "team-farmer-1",
  },
  {
    name: "Ankit Kumar",
    role: "Founder, BeVisioneers Fellow",
    bio: "I’m working to combine traditional farming wisdom with climate innovation.",
    imageId: "team-founder",
  },
  {
    name: "Mentors & Advisors",
    role: "Guidance & Expertise",
    bio: "Experts in agriculture, climate science, and social enterprise who guide our journey.",
    imageId: "team-mentor",
  },
];

export function TeamSection() {
  const teamBg = PlaceHolderImages.find((img) => img.id === 'team-bg');
  return (
    <section id="team" className="py-16 sm:py-24 bg-card relative">
        {teamBg && (
            <Image
                src='/aboutus-bg.png'
                alt={teamBg.description}
                fill
                className="object-cover opacity-10"
                data-ai-hint={teamBg.imageHint}
            />
        )}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Team
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
            return (
              <Card key={member.name} className="text-center bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                <CardHeader className="p-0">
                  {memberImage && (
                    <div className="relative w-full aspect-square">
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
                <CardContent className="p-6 bg-primary/10">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold mt-1">{member.role}</CardDescription>
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
