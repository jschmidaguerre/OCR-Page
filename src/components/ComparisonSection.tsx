import { Card } from '@/components/ui/card'
import { Check, X, ArrowRight, Calendar, Users, Zap} from 'lucide-react'
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
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" id="comparison">
      <div className="container mx-auto px-4 pt-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight">
            {t('title')} <span className="text-blue-600 relative">
              {t('title-span')}
              <span className="absolute bottom-1 left-0 w-full border-b-4 border-blue-200"></span>
            </span> {t('title2')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('description')}
          </p>
          
          <div className="flex justify-center items-center space-x-10 mb-12">
            <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Seguimiento continuo</span>
            </div>
            <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Expertos dedicados</span>
            </div>
            <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Resultados tangibles</span>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto relative">
          {/* Flecha de conexión entre tarjetas */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <ArrowRight className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          {/* Tarjeta "Sin nosotros" */}
          <Card className="p-8 border border-red-100 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <div className="bg-red-50 inline-block px-3 py-1 rounded-full text-red-700 font-medium text-sm mb-4">
              { t('without') }
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-800">Desafíos actuales</h3>
            <ul className="space-y-5">
              {withoutList.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-white bg-red-500 rounded-full p-1" />
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          {/* Tarjeta "Con nosotros" */}
          <Card className="p-8 border-0 shadow-lg relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 text-white transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8">
              <div className="w-full h-full bg-blue-400 rounded-full opacity-20"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 transform -translate-x-10 translate-y-10">
              <div className="w-full h-full bg-blue-400 rounded-full opacity-20"></div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full text-white font-medium text-sm mb-4">
              { t('with') }
            </div>
            <h3 className="mb-6 text-2xl font-bold">Beneficios inmediatos</h3>
            <ul className="space-y-5 relative z-10">
              {withList.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-blue-600 bg-white rounded-full p-1" />
                  </div>
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}