'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, MessageCircle, LineChart, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('benefits');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-4 pb-20 text-center relative bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Highlight */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle size={16} />
            <span>Enfoque consultivo</span>
            <ArrowRight size={16} />
            <LineChart size={16} />
            <span>Resultados medibles</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Impulsá tu negocio 🚀 
            <span className="block text-blue-600 pt-5 text-4xl">
            Procesos automatizados, resultados acelerados         
            </span>
        </h1>

        {/* Descripción */}
        <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-10">
        Transforma tareas manuales en procesos automatizados para impulsar tus ventas, reducir costos operativos y escalar tu negocio con inteligencia artificial.
        </p>

        {/* Botones */}
        <div className="flex flex-col items-center justify-center gap-8 mt-10 sm:flex-row">
          <a
            href="mailto:bautipriano@gmail.com?subject=Consulta%20de%20servicios&body=Hola%2C%0A%0AMe%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%0A%0AGracias%2C"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-[280px] text-xl bg-blue-600 hover:bg-blue-700 px-8 py-7 shadow-lg"
            >
              Contáctanos
            </Button>
          </a>

          <button
            onClick={scrollToNextSection}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-[280px] text-xl px-8 py-7 border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              Ver beneficios
            </Button>
          </button>
        </div>
      </div>

      {/* Proceso visual simplificado */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-16 max-w-4xl mx-auto text-gray-700">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
            <MessageCircle size={24} className="text-blue-600" />
          </div>
          <span>Escuchamos</span>
        </div>
        <ArrowRight className="hidden sm:block text-gray-400" />
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-600"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <span>Analizamos</span>
        </div>
        <ArrowRight className="hidden sm:block text-gray-400" />
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <span>Resolvemos</span>
        </div>
      </div>

      {/* Flecha animada en la parte inferior */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce mb-16"
        onClick={scrollToNextSection}
      >
        <ChevronDown size={46} className="text-gray-700" />
      </div>
    </section>
  );
}
