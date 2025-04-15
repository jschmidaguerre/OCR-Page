import { Card } from '@/components/ui/card'
import { Clock, BarChart2, Settings, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function BenefitsGrid() {
  const t = useTranslations('BenefitsGrid');
  
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestra propuesta de valor
          </h2>
          <p className="text-xl text-gray-600">
            Enfoque consultivo centrado en tus necesidades específicas
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="rounded-full bg-blue-50 p-4 inline-flex mb-6 group-hover:bg-blue-100 transition-colors duration-300">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('title1')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('description1')}
            </p>
          </Card>
          
          <Card className="group p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
            <div className="rounded-full bg-indigo-50 p-4 inline-flex mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
              <BarChart2 className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('title2')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('description2')}
            </p>
          </Card>
          
          <Card className="group p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
            <div className="rounded-full bg-amber-50 p-4 inline-flex mb-6 group-hover:bg-amber-100 transition-colors duration-300">
              <Settings className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('title3')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('description3')}
            </p>
          </Card>
          
          <Card className="group p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            <div className="rounded-full bg-green-50 p-4 inline-flex mb-6 group-hover:bg-green-100 transition-colors duration-300">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('title4')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('description4')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}