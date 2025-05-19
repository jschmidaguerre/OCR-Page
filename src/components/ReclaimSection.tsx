'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function ReclaimSection() {
  return (
    <section className="bg-blue-600 py-16" id="contacto">
      {/* Fondo con patrón radial */}
      <div className="container mx-auto px-4 text-center text-white relative">
        <div
          className="absolute inset-0 
            bg-[radial-gradient(circle_at_center,
              rgba(255,255,255,0.1)_1px,
              transparent_1px)]
            bg-[length:24px_24px]"
        />

        <div className="relative max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold">
            ¿Listo para llevar tu negocio al siguiente nivel?{' '}
            <span className="font-extrabold">Contáctanos</span>
          </h2>

          <p className="mb-8 text-lg opacity-90">
            Solicita más información y descubre cómo nuestras soluciones pueden ayudarte.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bautipriano@gmail.com&cc=juanseaguerre@gmail.com&su=Consulta%20de%20servicios&body=Hola%2C%0A%0AMe%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%20%0A%0APor%20favor%20cont%C3%A1ctenme%20para%20coordinar%20una%20reuni%C3%B3n.%0A%0AGracias%2C%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Mail className="mr-2 h-5 w-5" />
              Enviar consulta
            </Button>
          </a>

          <div className="mt-10 pt-6 border-t border-white/20 text-sm opacity-70">
            <p>© 2025 Spom. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
