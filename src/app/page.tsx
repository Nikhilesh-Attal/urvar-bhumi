import { HeroSection } from '@/components/sections/hero-section';
import { PurposeSection } from '@/components/sections/purpose-section';
import { ChallengeSection } from '@/components/sections/challenge-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { JourneySection } from '@/components/sections/journey-section';
import { PrototypeSection } from '@/components/sections/prototype-section';
import { TeamSection } from '@/components/sections/team-section';
import { PartnersSection } from '@/components/sections/partners-section';
import { ResourcesSection } from '@/components/sections/resources-section';
import { BlogSection } from '@/components/sections/blog-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { GetInvolvedSection } from '@/components/sections/get-involved-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PurposeSection />
      <ChallengeSection />
      <SolutionSection />
      <JourneySection />
      <PrototypeSection />
      <TeamSection />
      <PartnersSection />
      <ResourcesSection />
      <BlogSection />
      <GallerySection />
      <GetInvolvedSection />
      <ContactSection />
    </>
  );
}
