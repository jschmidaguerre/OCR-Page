import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function UseCases() {
  return (
    <section className="container mx-auto px-4 py-16" id='usecases'>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Use Cases</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Hospitalization & Medical Forms */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <Image
              src="/hospital-file-form-svgrepo-com.svg"
              alt="Hospitalization & Medical Forms"
              width={80}
              height={80}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">Hospitalization & Medical Forms</h3>
          </div>
        </Card>

        {/* Financial & Invoice Processing */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <Image
              src="/financial-report-svgrepo-com.svg"
              alt="Financial & Invoice Processing"
              width={80}
              height={80}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">Financial & Invoice Processing</h3>
          </div>
        </Card>

        {/* Legal & Compliance Documents */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <Image
              src="/agreement-contract-a4-paper-svgrepo-com.svg"
              alt="Legal & Compliance Documents"
              width={80}
              height={80}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold">Legal & Compliance Documents</h3>
          </div>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <Button size="lg">Explore Use Cases</Button>
      </div>
    </section>
  )
}
