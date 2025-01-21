import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function UseCases() {
  const t = useTranslations('UseCases');
  return (
    <section className="container mx-auto px-4 py-16" id='usecases'>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t('title')}</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Hospitalization & Medical Forms */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <Image
              src="/hospital-file-form-svgrepo-com.svg"
              alt="Hospitalization & Medical Forms"
              width={80}
              height={80}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">{t('title1')}</h3>
          </div>
        </Card>

        {/* Financial & Invoice Processing */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <Image
              src="/financial-report-svgrepo-com.svg"
              alt="Financial & Invoice Processing"
              width={80}
              height={80}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">{t('title2')}</h3>
          </div>
        </Card>

        {/* Legal & Compliance Documents */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <Image
              src="/agreement-contract-a4-paper-svgrepo-com.svg"
              alt="Legal & Compliance Documents"
              width={80}
              height={80}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">{t('title3')}</h3>
          </div>
        </Card>
      </div>
      <div className="text-center my-8">
        <h3>{t('title5')}</h3>
    </div>

    </section>
  )
}
