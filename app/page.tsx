import { BestSellers } from "@/components/home/best-sellers";
import { CollectionSection } from "@/components/home/collection-section";
import { DiscoverSection } from "@/components/home/discover-section";
import { HeroSection } from "@/components/home/hero-section";
import { Newsletter } from "@/components/home/newsletter";
import { SoilSection } from "@/components/home/soil-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BestSellers />
      <Newsletter />
      <SoilSection />
      <CollectionSection />
      <WhyChooseUs />
      <DiscoverSection />
    </div>
  );
}
