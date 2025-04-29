// app/[locale]/booking/page.tsx

// 1) Forzamos que sea siempre dinámico (SSR), no SSG:
export const dynamic = "force-dynamic";

import Navigation from '@/components/Navigation';
import ReclaimSection from '@/components/ReclaimSection';
import CalendlyWidget from './CalendlyWidget';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

interface BookingPageProps {
  params: {
    locale: string;
  };
}

export default function BookingPage({ params: { locale } }: BookingPageProps) {
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

        {/* Calendly embed – sin usar headers(), recibe el locale */}
        <CalendlyWidget locale={locale} />
      </div>

      <ReclaimSection />
    </main>
  );
}
