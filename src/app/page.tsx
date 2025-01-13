import Image from 'next/image'
import { Check, Clock, BarChart2, Settings, Shield, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b">
        <nav className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-2xl font-bold">OCR AI</a>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Productos</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Recursos</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Precios</a>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost">Iniciar sesión</Button>
            <Button>Solicitar demostración</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Automatización de Documentos con IA: 
          <span className="block">Más Satisfacción Laboral</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Reduce costos operativos. Ahorra tiempo valioso. Evita fraudes.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Agenda Una Llamada
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Explora Los Productos
          </Button>
        </div>
      </section>



      {/* Benefits Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <Clock className="mb-4 h-8 w-8 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">Reduce el tiempo de respuesta en un 90%</h3>
              <p className="text-gray-600">
                Reduce drásticamente el tiempo de respuesta procesando documentos en 5 segundos, no minutos.
              </p>
            </Card>
            <Card className="p-6">
              <BarChart2 className="mb-4 h-8 w-8 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">Ahorra hasta un 80% en costos operativos</h3>
              <p className="text-gray-600">
                Elimina la entrada de datos y reduzca hasta un 80% en costos administrativos con la automatización.
              </p>
            </Card>
            <Card className="p-6">
              <Settings className="mb-4 h-8 w-8 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">Maximiza la eficiencia de tu equipo</h3>
              <p className="text-gray-600">
                Potencia tu equipo para lograr más en menos tiempo, automatizando tareas repetitivas.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="mb-4 h-8 w-8 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">Detecta fraudes y garantiza el cumplimiento</h3>
              <p className="text-gray-600">
                Protege tu negocio contra fraudes de facturas, identidad y gastos con algoritmos inteligentes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Casos de Uso</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-100" />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Gestión De Gastos</h3>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-100" />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Procesamiento De Reembolsos</h3>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-100" />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Compensación De Recibos</h3>
            </div>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button size="lg">Explora Los Casos de Uso</Button>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">
            We Ensure You{' '}
            <span className="text-green-500">Get Accurate Data</span>{' '}
            from Your Documents
          </h2>
          <p className="text-lg text-gray-600">
            Manual data entry is slow and error-prone, and traditional OCR struggles with complex layouts and multiple languages. With AI-powered OCR software from our solution, you won't have these issues.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-6 text-xl font-bold">Without Our Solution</h3>
            <ul className="space-y-4">
              {[
                'Wasting time on manual data entry & error correction tasks',
                'Difficulty in handling multi-language documents',
                'Costly to scale document processing with high efficiency',
                'Poor quality scans and images cannot be extracted',
                'No automated document extraction workflows',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <X className="mr-2 h-5 w-5 shrink-0 text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-green-50 p-6">
            <h3 className="mb-6 text-xl font-bold">With Our Solution</h3>
            <ul className="space-y-4">
              {[
                'Process documents in seconds with AI-powered OCR',
                'Get structured data extracted from any document',
                'Save money and time with batch processing',
                'Detect document fraud with AI technologies',
                'Automate the entire document processing workflow',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
            {/* Add this new section */}
            <section className="bg-emerald-600 py-24">
        <div className="container mx-auto px-4 text-center text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
          <div className="relative">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Reclaim Your Time and Money
              <br />
              with <span className="font-extrabold">AI-powered document OCR.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Empower your teams with automated data extraction for any document workflow. 
              No more time-wasted on data entry.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">Book a demo</Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

