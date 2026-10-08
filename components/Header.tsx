'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import Wordmark from './Wordmark'
import { navLinks, sections } from '@/lib/site'

const platform = sections.find((s) => s.slug === 'learning-platform')!

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink-soft hover:text-ink">
              {link.label}
            </Link>
          ))}
          <a href={platform.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Learning platform ↗
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-md border border-line px-3 py-2 text-sm font-medium"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink-soft hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <a href={platform.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 justify-center">
              Learning platform ↗
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}
