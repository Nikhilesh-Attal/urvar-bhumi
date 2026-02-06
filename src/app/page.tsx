import { HeroSection } from '@/components/sections/hero-section';
import { ChallengeSection } from '@/components/sections/challenge-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { PrototypeSection } from '@/components/sections/prototype-section';
import { TeamSection } from '@/components/sections/team-section';
import { ContactSection } from '@/components/sections/contact-section';
import { QuoteSection } from '@/components/sections/quote-section';
import { CollaborateSection } from '@/components/sections/collaborate-section';
import { BlogSection } from '@/components/sections/blog-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuoteSection 
        quote="Bihar farmers face floods every monsoon, yet their soil can't hold enough water for good harvests. Meanwhile, tons of rice straw go up in smoke."
      />
      <ChallengeSection />
      <QuoteSection 
        quote="What if the rice straw we burn could protect us from floods AND grow better crops?"
        className="bg-primary text-primary-foreground"
      />
      <SolutionSection />
      <PrototypeSection />
      <TeamSection />
      <CollaborateSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
