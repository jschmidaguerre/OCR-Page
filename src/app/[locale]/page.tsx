import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import BenefitsGrid from '@/components/BenefitsGrid'
import UseCases from '@/components/UseCases'
import ComparisonSection from '@/components/ComparisonSection'
import ReclaimSection from '@/components/ReclaimSection'
import DocumentsOcr from '@/components/DocumentsOcr'
import { Badge } from "@/components/ui/badge"


export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#FBF8F4] justify-center flex-col mx-auto">
      <Navigation/>
      <HeroSection />
      <BenefitsGrid />
      <UseCases />
      <ComparisonSection />
      <ReclaimSection />
    </div>
  )
}
