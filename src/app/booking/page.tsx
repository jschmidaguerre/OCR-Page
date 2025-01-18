"use client"

import Navigation from '@/components/Navigation'
import ReclaimSection from '@/components/ReclaimSection'
import { InlineWidget } from 'react-calendly'

export default function BookingPage() {
  return (
    <main >
    <Navigation/>
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Book a Demo</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Schedule a 30-minute meeting at your convenience.
        </p>
      </div>

      {/* Calendly embed */}
      <div className="mx-auto max-w-3xl">
        <InlineWidget
          url="https://calendly.com/juanseaguerre/30min"
          styles={{ height: '700px' }}
        />
      </div>
    </div>
    <ReclaimSection/>
    </main>
    
  )
}
