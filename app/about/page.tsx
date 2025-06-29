"use client";

import { CTA } from "@/components/about/cta";
import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { OurStory } from "@/components/about/our-story";
import { Partners } from "@/components/about/partners";
import { Stats } from "@/components/about/stats";
import { TeamSection } from "@/components/about/team";
import { Testimonials } from "@/components/about/testimonials";
import { OurValues } from "@/components/about/values";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" suppressHydrationWarning>
      <AboutHero />
      <Stats />
      <OurStory />
      <Mission />
      <OurValues />
      <TeamSection />
      <Testimonials />
      <Partners />
      <CTA />
    </div>
  );
}
