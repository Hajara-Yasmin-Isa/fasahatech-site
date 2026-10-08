// Single source of truth for names, links, and contact details.
// Change a value here and every page picks it up.

export const site = {
  name: 'Fasaha Tech',
  tagline: 'Technology that speaks your language.',
  description:
    'Fasaha Tech builds research, software tools, and digital services that bring computing to people in the languages they think in — starting with Hausa.',
  url: 'https://fasahatech.com',
  // TODO: switch to a fasahatech.com address once that mailbox exists.
  contactEmail: 'contact@littafinfasaha.com',
  social: {
    // TODO: confirm the company page slug on LinkedIn before launch.
    linkedin: 'https://www.linkedin.com/company/littafin-fasaha/',
    founderLinkedin: 'https://www.linkedin.com/in/hajara-yasmin-isa/',
  },
}

export type SectionStatus = 'live' | 'coming-soon'

export interface Section {
  slug: string
  title: string
  blurb: string
  href: string
  external: boolean
  status: SectionStatus
  /** What this section will hold — shown on its coming-soon page. */
  roadmap?: string[]
}

export const sections: Section[] = [
  {
    slug: 'learning-platform',
    title: 'Littafin Fasaha',
    blurb:
      'Our learning platform teaches computer science in Hausa — an original textbook, a pioneering technical vocabulary, and interactive courses, live today.',
    href: 'https://littafinfasaha.com',
    external: true,
    status: 'live',
  },
  {
    slug: 'research',
    title: 'Research',
    blurb:
      'How people learn computing in their first language, the Hausa technical lexicon, and what we measure when we put it in classrooms.',
    href: '/research',
    external: false,
    status: 'coming-soon',
    roadmap: [
      'The Hausa technical lexicon and how each term was chosen',
      'Design proposals from our student research program',
      'Results from classroom pilots in Northern Nigeria',
      'Malamin AI: evaluating open-source models as tutors in low-resource languages',
    ],
  },
  {
    slug: 'tools',
    title: 'Software Tools',
    blurb:
      'Open tools for language-first computing — from the lexicon itself to an AI instructor that runs on open-source models.',
    href: '/tools',
    external: false,
    status: 'coming-soon',
    roadmap: [
      'Malamin AI — a Hausa-speaking AI instructor built on open-source models',
      'The Hausa computing lexicon as a searchable, community-editable reference',
      'Open-source releases from the learning platform',
    ],
  },
  {
    slug: 'services',
    title: 'Digital Services',
    blurb:
      'Localization, curriculum design, and training for organizations that need technology education to work in African languages.',
    href: '/services',
    external: false,
    status: 'coming-soon',
    roadmap: [
      'Curriculum localization into Hausa and other African languages',
      'Digital-skills training programs for schools and NGOs',
      'Advisory for education programs entering Northern Nigeria',
    ],
  },
]

export const navLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Tools', href: '/tools' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
]

export interface PressItem {
  outlet: string
  title: string
  date: string // ISO, for sorting; rendered as a plain month/year
  href: string
}

export const press: PressItem[] = [
  {
    outlet: 'NCSA, University of Illinois',
    title: 'NCSA Awards 2026 Fiddler Innovation Fellowship',
    date: '2026-05-04',
    href: 'https://www.ncsa.illinois.edu/2026/05/04/ncsa-awards-2026-fiddler-innovation-fellowship/',
  },
  {
    outlet: 'HPCwire',
    title: 'NCSA Awards 2026 Fiddler Innovation Fellowship',
    date: '2026-05-04',
    href: 'https://www.hpcwire.com/off-the-wire/ncsa-awards-2026-fiddler-innovation-fellowship/',
  },
  {
    outlet: 'Siebel School of Computing and Data Science',
    title: 'CS Ph.D. student shares textbook with West Africa',
    date: '2026-03-03',
    href: 'https://siebelschool.illinois.edu/news/yasmin-isa-textbook',
  },
  {
    outlet: 'Daily Trust',
    title: 'Why I authored a coding book in Hausa',
    date: '2026-03-01', // TODO: confirm publication date
    href: 'https://dailytrust.com/why-i-authored-a-coding-book-in-hausa-hajara-yasmin/',
  },
]

export const recognition = [
  '2026 Fiddler Innovation Fellowship — National Center for Supercomputing Applications',
  '2026 NCWIT Aspirations in Computing Collegiate Award Finalist',
]
