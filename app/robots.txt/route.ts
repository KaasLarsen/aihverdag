export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://aihverdag.dk/sitemap.xml`, {
    headers: { 'Content-Type': 'text/plain' }
  })
}
