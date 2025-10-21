export default function sitemap() {
  const now = new Date();
  return [
    { url: 'https://aihverdag.dk/', lastModified: now },
    { url: 'https://aihverdag.dk/guides', lastModified: now },
    { url: 'https://aihverdag.dk/skabeloner', lastModified: now },
    { url: 'https://aihverdag.dk/vaerktoejer', lastModified: now },
    { url: 'https://aihverdag.dk/om', lastModified: now },
  ];
}
