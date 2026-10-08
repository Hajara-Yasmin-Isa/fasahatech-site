import Link from 'next/link'
import Container from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-5xl font-bold">That page doesn&rsquo;t exist</h1>
      <p className="mt-4 text-ink-soft">The link may be old, or the page hasn&rsquo;t been built yet.</p>
      <p className="mt-8">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </p>
    </Container>
  )
}
