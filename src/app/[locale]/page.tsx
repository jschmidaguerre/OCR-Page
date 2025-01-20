"use client"

// import Navigation from '@/components/Navigation'
// import HeroSection from '@/components/HeroSection'
// import BenefitsGrid from '@/components/BenefitsGrid'
// import UseCases from '@/components/UseCases'
// import ComparisonSection from '@/components/ComparisonSection'
// import ReclaimSection from '@/components/ReclaimSection'

import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('common');
  return (
    <div className="flex min-h-screen flex-col">
      <h1>{t('welcome')}</h1>
    </div>
  )
}
