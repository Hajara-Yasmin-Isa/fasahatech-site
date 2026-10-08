import type { MetadataRoute } from 'next'
import { navLinks, site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', ...navLinks.map((l) => l.href)]
  return routes.map((route) => ({
    url: `${site.url}${route === '/' ? '' : route}`,
    lastModified: new Date(),
  }))
}
