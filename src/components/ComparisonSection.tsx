import { Card } from '@/components/ui/card'
import { Check, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ComparisonSection() {
  const t = useTranslations('ComparisonSection')
  const withoutList = [
    t('without1'),
    t('without2'),
    t('without3'),
    t('without4'),
    t('without5'),
  ]

  const withList = [
    t('with1'),
    t('with2'),
    t('with3'),
    t('with4'),
    t('with5'),
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold">
          {t('title')} <span className="text-green-500">{t('title-span')}</span> {t('title2')}
        </h2>
        <p className="text-lg text-gray-600">
          {t('description')}
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-6 text-xl font-bold">{ t('without') }</h3>
          <ul className="space-y-4">
            {withoutList.map((item, i) => (
              <li key={i} className="flex items-start">
                <X className="mr-2 h-5 w-5 shrink-0 text-red-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="bg-green-50 p-6">
          <h3 className="mb-6 text-xl font-bold">{ t('with') }</h3>
          <ul className="space-y-4">
            {withList.map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
