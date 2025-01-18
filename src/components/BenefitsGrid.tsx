import { Card } from '@/components/ui/card'
import { Clock, BarChart2, Settings, Shield } from 'lucide-react'

export default function BenefitsGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <Clock className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">Reduce response time by 90%</h3>
            <p className="text-gray-600">
              Dramatically reduce response times by processing documents in 5 seconds, not minutes.
            </p>
          </Card>
          <Card className="p-6">
            <BarChart2 className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">Save up to 80% in operational costs</h3>
            <p className="text-gray-600">
              Eliminate data entry and reduce administrative costs by up to 80% with automation.
            </p>
          </Card>
          <Card className="p-6">
            <Settings className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">Maximize your team's efficiency</h3>
            <p className="text-gray-600">
              Empower your team to achieve more in less time by automating repetitive tasks.
            </p>
          </Card>
          <Card className="p-6">
            <Shield className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">Detect fraud and ensure compliance</h3>
            <p className="text-gray-600">
              Protect your business from invoice, identity, and expense fraud with intelligent algorithms.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
