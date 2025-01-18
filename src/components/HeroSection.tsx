import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Made By Developers,
        <span className="block">For Developers.</span>
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
        Reduces operating costs. Save valuable time. Avoid fraud.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" className="w-full sm:w-auto">
          Agenda Una Llamada
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          Casos de Uso
        </Button>
      </div>
    </section>
  )
}
