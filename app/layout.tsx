import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIhverdag.dk – Lær at bruge AI i hverdagen',
  description: 'Guides, skabeloner og værktøjer på dansk. Praktisk, enkelt og trygt.',
  metadataBase: new URL('https://aihverdag.dk')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-semibold tracking-tight">AIhverdag.dk</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="/guides" className="hover:text-slate-900">Guides</a>
          <a href="/skabeloner" className="hover:text-slate-900">Skabeloner</a>
          <a href="/vaerktoejer" className="hover:text-slate-900">Værktøjer</a>
          <a href="/branche" className="hover:text-slate-900">Branche</a>
          <a href="/om" className="hover:text-slate-900">Om</a>
        </nav>
        <a href="#nyhedsbrev" className="btn btn-primary text-sm">Få tips på mail</a>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t py-10 mt-20">
      <div className="container grid md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="font-medium mb-2">AIhverdag.dk</div>
          <p>Praktiske guides på dansk. Ingen hype – bare hjælp.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Indhold</div>
          <ul className="space-y-1">
            <li><a href="/guides" className="hover:text-slate-900">Guides</a></li>
            <li><a href="/skabeloner" className="hover:text-slate-900">Skabeloner</a></li>
            <li><a href="/vaerktoejer" className="hover:text-slate-900">Værktøjer</a></li>
          </ul>
        </div>
        <div id="nyhedsbrev">
          <div className="font-medium mb-2">Nyhedsbrev</div>
          <form className="flex gap-2">
            <input type="email" required placeholder="din@email"
                   className="flex-1 rounded-2xl border px-4" />
            <button className="btn btn-primary">Tilmeld</button>
          </form>
          <p className="text-xs mt-2">1–2 mails/måned. Afmeld når som helst.</p>
        </div>
      </div>
    </footer>
  )
}
