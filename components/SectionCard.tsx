import Link from 'next/link'
import Image from 'next/image'
import type { Section } from '@/lib/site'

function StatusPill({ status }: { status: Section['status'] }) {
  if (status === 'live') {
    return (
      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
        Live
      </span>
    )
  }
  return (
    <span className="rounded-full bg-paper-deep px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink-faint">
      Coming soon
    </span>
  )
}

export default function SectionCard({ section }: { section: Section }) {
  const isPlatform = section.slug === 'learning-platform'
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        {isPlatform ? (
          <Image src="/littafin-fasaha-logo.png" alt="" width={56} height={56} className="h-14 w-14" />
        ) : (
          <span aria-hidden="true" className="block h-1.5 w-12 rounded-full bg-gold" />
        )}
        <StatusPill status={section.status} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold">{section.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{section.blurb}</p>
      <span className="mt-5 inline-block text-sm font-semibold text-indigo">
        {section.external ? 'Visit the platform ↗' : section.status === 'live' ? 'Explore →' : 'See what’s coming →'}
      </span>
    </>
  )
  const className =
    'group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md'

  return section.external ? (
    <a href={section.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={section.href} className={className}>
      {body}
    </Link>
  )
}
