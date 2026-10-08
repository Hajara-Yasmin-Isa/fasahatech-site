import Link from 'next/link'
import Container from './Container'
import Wordmark from './Wordmark'
import { navLinks, sections, site } from '@/lib/site'

const platform = sections.find((s) => s.slug === 'learning-platform')!

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <Wordmark light />
          <p className="max-w-xs text-sm text-paper/70">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-paper/80 hover:text-gold-bright">
              {link.label}
            </Link>
          ))}
          <a href={platform.href} target="_blank" rel="noopener noreferrer" className="text-paper/80 hover:text-gold-bright">
            Littafin Fasaha ↗
          </a>
        </nav>

        <div className="space-y-2 text-sm">
          <a href={`mailto:${site.contactEmail}`} className="block text-paper/80 hover:text-gold-bright">
            {site.contactEmail}
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="block text-paper/80 hover:text-gold-bright">
            LinkedIn
          </a>
        </div>
      </Container>
      <div className="border-t border-paper/10">
        <Container className="flex flex-col gap-1 py-5 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Home of Littafin Fasaha Labs Limited.</span>
        </Container>
      </div>
    </footer>
  )
}
