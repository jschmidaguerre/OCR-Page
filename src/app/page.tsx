import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import BenefitsGrid from '@/components/BenefitsGrid'
import UseCases from '@/components/UseCases'
import ComparisonSection from '@/components/ComparisonSection'
import ReclaimSection from '@/components/ReclaimSection'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation/>
      <HeroSection />
      <BenefitsGrid />
      <UseCases />
      <ComparisonSection />
      <ReclaimSection />
    </div>
  )
}
