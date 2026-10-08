import Link from 'next/link'
import Container from '@/components/Container'
import SectionCard from '@/components/SectionCard'
import { press, sections, site } from '@/lib/site'

const platform = sections.find((s) => s.slug === 'learning-platform')!
const outlets = Array.from(new Set(press.map((p) => p.outlet)))

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 md:py-28">
          <p className="eyebrow">Fasaha · Hausa for technology</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Technology that speaks <span className="text-gold">your language.</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft md:text-xl">
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={platform.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit the learning platform ↗
            </a>
            <Link href="/about" className="btn-secondary">
              About Fasaha Tech
            </Link>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section>
        <Container className="py-20">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 font-display text-4xl font-bold">One home for all of it</h2>
          <p className="mt-3 max-w-prose text-ink-soft">
            The learning platform is live today. Research, tools, and services are on the way — each
            page shows what will live there.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {sections.map((section) => (
              <SectionCard key={section.slug} section={section} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ink text-paper">
        <Container className="grid gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Why it matters</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight">
              Language is not a barrier to computing. It is the interface.
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed text-paper/75">
              Most computing education assumes learners already think in English. Before a student
              can reason about a loop, they must translate the word, the syntax, and the explanation.
              We redesign that interface — beginning with Hausa, a language of roughly 94 million
              people with no standard technical vocabulary for computing until now.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6">
            {[
              ['94M', 'Hausa speakers across West Africa'],
              ['1', 'complete course live, entirely in Hausa'],
              ['77', 'interactive exercises on the platform'],
              ['$0', 'per-student cost target for our AI instructor'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-paper/10 bg-white/5 p-5">
                <dt className="font-display text-4xl font-bold text-gold-bright">{value}</dt>
                <dd className="mt-1 text-sm text-paper/70">{label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Press strip */}
      <section>
        <Container className="py-16">
          <p className="eyebrow text-center">Featured in</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-ink-soft">
            {outlets.map((outlet) => (
              <li key={outlet}>{outlet}</li>
            ))}
          </ul>
          <p className="mt-6 text-center">
            <Link href="/press" className="text-sm font-semibold text-indigo hover:underline">
              Read the coverage →
            </Link>
          </p>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-line bg-white">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">Working on education in African languages?</h2>
            <p className="mt-2 max-w-prose text-ink-soft">
              Schools, NGOs, researchers, and partners — we would like to hear from you.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  )
}
