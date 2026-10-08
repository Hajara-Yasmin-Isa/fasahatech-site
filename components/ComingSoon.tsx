import Link from 'next/link'
import Container from './Container'
import { sections, site } from '@/lib/site'

const platform = sections.find((s) => s.slug === 'learning-platform')!

// One template for every section that isn't built yet. Each page keeps its
// own URL, so content can land later without breaking any links.
export default function ComingSoon({ slug }: { slug: string }) {
  const section = sections.find((s) => s.slug === slug)
  if (!section) return null

  const subject = encodeURIComponent(`Keep me posted: ${section.title}`)

  return (
    <Container className="py-20">
      <p className="eyebrow">Coming soon</p>
      <h1 className="mt-3 font-display text-5xl font-bold">{section.title}</h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">{section.blurb}</p>

      {section.roadmap && (
        <div className="mt-10 max-w-prose rounded-xl border border-line bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">What will live here</h2>
          <ul className="mt-4 space-y-3">
            {section.roadmap.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${site.contactEmail}?subject=${subject}`} className="btn-primary">
          Keep me posted
        </a>
        <a href={platform.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Visit the learning platform ↗
        </a>
        <Link href="/" className="btn-secondary">
          Back to home
        </Link>
      </div>
    </Container>
  )
}
