import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BenefitsGrid from '@/components/BenefitsGrid';
import UseCases from '@/components/UseCases';
import ComparisonSection from '@/components/ComparisonSection';
import ReclaimSection from '@/components/ReclaimSection';
import { routing } from '@/i18n/routing'; // 👈 Importa los locales

// 👇 Obligatorio para exportar correctamente las homepages por idioma
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen justify-center flex-col mx-auto" id="home">
      <Navigation />
      <HeroSection />
      <BenefitsGrid />
      <UseCases />
      <ComparisonSection />
      <ReclaimSection />
    </div>
  );
}
