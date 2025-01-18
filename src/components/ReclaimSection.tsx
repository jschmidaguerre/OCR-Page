import { Button } from '@/components/ui/button'

export default function ReclaimSection() {
  return (
    <section className="bg-emerald-600 py-24">
      <div className="container mx-auto px-4 text-center text-white relative">
        {/* Fondo con patrón radial */}
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
            <Button size="lg" variant="secondary">
              Book a demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white/10"
            >
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
