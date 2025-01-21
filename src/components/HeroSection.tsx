import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
 
    <section className="container mx-auto px-4 py-16 text-center">

      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {t('title')}
        <span className="block">{t('title2')}</span>
      </h1>

      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
        {t('description')}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">  
        <Link href="/booking">
          <Button size="lg" className="w-full sm:w-auto">
            {t('button')}
          </Button>
        </Link>

        <Link href="#usecases">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
            {t('button2')}
            </Button>
        </Link>
      </div>

    </section>
  )
}
