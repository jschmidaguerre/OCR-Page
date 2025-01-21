import { Card } from '@/components/ui/card'
import { Clock, BarChart2, Settings, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function BenefitsGrid() {
  const t = useTranslations('BenefitsGrid');
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <Clock className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">{t('title1')}</h3>
            <p className="text-gray-600">
              {t('description1')}
            </p>
          </Card>
          <Card className="p-6">
            <BarChart2 className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">{t('title2')}</h3>
            <p className="text-gray-600">
              {t('description2')}
            </p>
          </Card>
          <Card className="p-6">
            <Settings className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">{t('title3')}</h3>
            <p className="text-gray-600">
              {t('description3')}
            </p>
          </Card>
          <Card className="p-6">
            <Shield className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">{t('title4')}</h3>
            <p className="text-gray-600">
              {t('description4')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
