import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aihverdag.dk/', lastModified: new Date() },
    { url: 'https://aihverdag.dk/guides', lastModified: new Date() },
    { url: 'https://aihverdag.dk/skabeloner', lastModified: new Date() },
    { url: 'https://aihverdag.dk/vaerktoejer', lastModified: new Date() },
    { url: 'https://aihverdag.dk/om', lastModified: new Date() },
  ]
}
