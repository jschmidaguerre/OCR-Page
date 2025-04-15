import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Mail } from 'lucide-react'

export default function ReclaimSection() {
  const t = useTranslations('ReclaimSection');
  
  return (
    <section className="bg-blue-600 py-16" id="contacto">
      {/* Fondo con patrón radial */}
      <div className="container mx-auto px-4 text-center text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
        
        <div className="relative max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold">
            {t('title')} <span className="font-extrabold">{t('title-span')}</span>
          </h2>
          
          <p className="mb-8 text-lg opacity-90">
            {t('description')}
          </p>
          
          <Link href="mailto:contacto@tuempresa.com">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('button')}
            </Button>
          </Link>
          
          <div className="mt-10 pt-6 border-t border-white/20 text-sm opacity-70">
            <p>© 2025 Spom. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}