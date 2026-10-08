import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research on learning computing in a first language, the Hausa technical lexicon, and classroom pilots.',
}

export default function ResearchPage() {
  return <ComingSoon slug="research" />
}
