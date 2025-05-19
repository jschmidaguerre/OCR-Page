// src/app/page.tsx
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import UseCases from "@/components/UseCases";
import ComparisonSection from "@/components/ComparisonSection";
import ReclaimSection from "@/components/ReclaimSection";

export default function HomePage() {
  return (
    <div id="home" className="flex min-h-screen flex-col justify-center mx-auto">
      <Navigation />
      <HeroSection />
      <BenefitsGrid />
      <UseCases />
      <ComparisonSection />
      <ReclaimSection />
    </div>
  );
}
