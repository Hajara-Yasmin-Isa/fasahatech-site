import Link from 'next/link'
import { site } from '@/lib/site'

// Typographic wordmark until a Fasaha Tech logo exists; swap for an <Image> then.
export default function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`font-display text-2xl font-bold tracking-tight ${light ? 'text-paper' : 'text-ink'}`}
    >
      Fasaha<span className="text-gold">Tech</span>
    </Link>
  )
}
