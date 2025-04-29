import Navigation from '@/components/Navigation';
import ReclaimSection from '@/components/ReclaimSection';
import CalendlyWidget from '@/app/[locale]/booking/CalendlyWidget'; // 👈 nuevo componente
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default function BookingPage() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Book a Demo</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Schedule a 30-minute meeting at your convenience.
          </p>
        </div>

        {/* Calendly embed */}
        <CalendlyWidget />

      </div>
      <ReclaimSection />
    </main>
  );
}
