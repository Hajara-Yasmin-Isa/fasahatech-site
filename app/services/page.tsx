import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Digital Services',
  description: 'Localization, curriculum design, and training for technology education in African languages.',
}

export default function ServicesPage() {
  return <ComingSoon slug="services" />
}
