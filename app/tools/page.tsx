import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Software Tools',
  description: 'Open tools for language-first computing, including an AI instructor built on open-source models.',
}

export default function ToolsPage() {
  return <ComingSoon slug="tools" />
}
