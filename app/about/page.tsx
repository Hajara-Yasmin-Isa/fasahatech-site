import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import { recognition, sections, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Fasaha Tech is the home of Littafin Fasaha and our work on technology education in African languages.',
}

const platform = sections.find((s) => s.slug === 'learning-platform')!

export default function AboutPage() {
  return (
    <Container className="py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-tight">
        Computing education should meet people in the language they think in.
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            <em>Fasaha</em> is the Hausa word for technology. Fasaha Tech is the home of our ventures
            in language-first computing: research into how people learn computing in their first
            language, software tools built on that research, and services for organizations that
            need technology education to work in African languages.
          </p>
          {/* TODO(legal): revise once the Fasaha Tech holding-company registration is complete. */}
          <p>
            Our first company, <strong className="text-ink">Littafin Fasaha Labs Limited</strong>,
            builds the learning platform at littafinfasaha.com. It began with an original
            introduction-to-programming textbook written in Hausa and a technical vocabulary created
            alongside it, because none existed. Today the platform is live in public beta, with its
            first complete course used by learners in Nigeria.
          </p>
          <p>
            Hausa is where we prove the model, not where it ends. The approach is language-agnostic by
            design: the same method for building a technical vocabulary, the same curriculum
            structure, and the same AI instructor can be rebuilt for Yoruba, Igbo, Fulfulde, Swahili,
            and the many other languages that today&rsquo;s learning technology leaves out.
          </p>
        </div>

        <aside className="space-y-8">
          <div className="rounded-xl border border-line bg-white p-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">Founder</h2>
            <p className="mt-3 font-display text-2xl font-bold">Hajara-Yasmin Isa</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Native Hausa speaker and Ph.D. student in computer science at the University of
              Illinois Urbana-Champaign. Author of the Hausa programming textbook and its technical
              lexicon.
            </p>
            <a
              href={site.social.founderLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-indigo hover:underline"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="rounded-xl border border-line bg-white p-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">Recognition</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
              {recognition.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <a
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 hover:shadow-md"
          >
            <Image src="/littafin-fasaha-logo.png" alt="Littafin Fasaha" width={56} height={56} className="h-14 w-14" />
            <span>
              <span className="block font-display text-xl font-bold">Littafin Fasaha</span>
              <span className="block text-sm text-ink-soft">The learning platform ↗</span>
            </span>
          </a>
        </aside>
      </div>

      <p className="mt-16">
        <Link href="/contact" className="btn-primary">
          Work with us
        </Link>
      </p>
    </Container>
  )
}
