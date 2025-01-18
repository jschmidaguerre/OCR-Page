import { Card } from '@/components/ui/card'
import { Check, X } from 'lucide-react'

export default function ComparisonSection() {
  const withoutList = [
    'Wasting time on manual data entry & error correction tasks',
    'Difficulty in handling multi-language documents',
    'Costly to scale document processing with high efficiency',
    'Poor quality scans and images cannot be extracted',
    'No automated document extraction workflows',
  ]

  const withList = [
    'Process documents in seconds with AI-powered OCR',
    'Get structured data extracted from any document',
    'Save money and time with batch processing',
    'Detect document fraud with AI technologies',
    'Automate the entire document processing workflow',
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold">
          We Ensure You <span className="text-green-500">Get Accurate Data</span> from Your Documents
        </h2>
        <p className="text-lg text-gray-600">
          Manual data entry is slow and error-prone, and traditional OCR struggles with complex layouts and multiple
          languages. With AI-powered OCR software from our solution, you won't have these issues.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-6 text-xl font-bold">Without Our Solution</h3>
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
          <h3 className="mb-6 text-xl font-bold">With Our Solution</h3>
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
