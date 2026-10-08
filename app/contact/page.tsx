import type { Metadata } from 'next'
import Container from '@/components/Container'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Fasaha Tech.',
}

const reasons = [
  { label: 'Partner with us (schools, NGOs, programs)', subject: 'Partnership' },
  { label: 'Research collaboration', subject: 'Research collaboration' },
  { label: 'Media inquiry', subject: 'Media inquiry' },
  { label: 'Something else', subject: 'Hello' },
]

export default function ContactPage() {
  return (
    <Container className="py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 font-display text-5xl font-bold">Let&rsquo;s talk</h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">
        We work with schools, NGOs, researchers, and partners who want technology education to work
        in African languages. Pick the closest reason and it will open an email to us.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {reasons.map((r) => (
          <li key={r.subject}>
            <a
              href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(r.subject)}`}
              className="block rounded-xl border border-line bg-white p-5 font-semibold hover:shadow-md"
            >
              {r.label} →
            </a>
          </li>
        ))}
      </ul>

      <dl className="mt-12 grid gap-6 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">Email</dt>
          <dd className="mt-2">
            <a href={`mailto:${site.contactEmail}`} className="font-semibold hover:underline">
              {site.contactEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">LinkedIn</dt>
          <dd className="mt-2">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
              Littafin Fasaha ↗
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">Code</dt>
          <dd className="mt-2">
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
              GitHub ↗
            </a>
          </dd>
        </div>
      </dl>
    </Container>
  )
}
