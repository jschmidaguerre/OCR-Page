import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import ReclaimSection from '@/components/ReclaimSection'

export default function PricingPage() {
  return (
    <main>
    <Navigation/>
    <div className="container mx-auto px-4 my-4">
   
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="my-4 text-4xl font-bold">Pricing Plans</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Choose the plan that best suits your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Starter Plan */}
        <Card className="flex flex-col items-center p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">Starter</h2>
          <p className="mb-4 text-gray-500">Great for small projects and tests</p>
          <div className="mb-4 text-4xl font-extrabold">$9</div>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>Up to 1,000 documents/month</li>
            <li>Basic data extraction</li>
            <li>Standard support</li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </Card>

        {/* Pro Plan */}
        <Card className="flex flex-col items-center p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">Pro</h2>
          <p className="mb-4 text-gray-500">Perfect for growing businesses</p>
          <div className="mb-4 text-4xl font-extrabold">$29</div>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>Up to 10,000 documents/month</li>
            <li>Advanced data extraction</li>
            <li>Priority support</li>
          </ul>
          <Button className="w-full">Upgrade Now</Button>
        </Card>

        {/* Enterprise Plan */}
        <Card className="flex flex-col items-center p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">Enterprise</h2>
          <p className="mb-4 text-gray-500">Advanced features for large-scale needs</p>
          <div className="mb-4 text-4xl font-extrabold">Custom</div>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>Unlimited documents</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations & SLAs</li>
          </ul>
          <Button className="w-full" variant="outline">Contact Us</Button>
        </Card>
        
      </div>
      
    </div>
    <ReclaimSection />
    </main>
  )
}
