import type { Metadata } from 'next'
import Container from '@/components/Container'
import { press, recognition, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Press',
  description: 'News coverage and recognition for Fasaha Tech and Littafin Fasaha.',
}

function monthYear(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default function PressPage() {
  const items = [...press].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <Container className="py-20">
      <p className="eyebrow">Press</p>
      <h1 className="mt-3 font-display text-5xl font-bold">In the news</h1>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid gap-1 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6 hover:bg-white"
            >
              <span className="text-sm text-ink-faint">{monthYear(item.date)}</span>
              <span>
                <span className="block font-semibold text-ink">{item.title} ↗</span>
                <span className="block text-sm text-ink-soft">{item.outlet}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">Recognition</h2>
        <ul className="mt-4 space-y-2 text-ink-soft">
          {recognition.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="mt-16 text-sm text-ink-soft">
        Media inquiries:{' '}
        <a href={`mailto:${site.contactEmail}?subject=Media%20inquiry`} className="font-semibold text-indigo hover:underline">
          {site.contactEmail}
        </a>
      </p>
    </Container>
  )
}
