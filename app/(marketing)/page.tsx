import { Lightbulb, Sparkles, Rocket, ChevronRight } from "lucide-react"

export default function Page() {
  return (
    <div>
      <Hero />
      <QuickTiles />
      <Features />
      <CTA />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
           aria-hidden>
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[1200px] h-[1200px] bg-brand/20 blur-3xl rounded-full" />
      </div>
      <div className="container py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 text-sm bg-white/80 rounded-full px-3 py-1 border shadow-soft">
          <Sparkles className="w-4 h-4" /> Simpelt. Dansk. Praktisk.
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
          Lær at bruge AI i din hverdag
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Trin-for-trin guides, skabeloner og konkrete eksempler – uden nørdesnak.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a className="btn btn-primary" href="/guides">
            Find en guide <ChevronRight className="ml-1 w-4 h-4" />
          </a>
          <a className="btn btn-ghost" href="/skabeloner">
            Se skabeloner
          </a>
        </div>
      </div>
    </section>
  )
}

function QuickTiles() {
  const tiles = [
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Begynd her', desc: 'Kom i gang på 10 minutter.' , href: '/guides/begynder' },
    { icon: <Rocket className="w-5 h-5" />, title: 'Til små virksomheder', desc: 'Få hjælp til opslag, tilbud og kundesvar.' , href: '/branche/sma-virksomheder' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Skabeloner', desc: 'Kopiér og brug med det samme.' , href: '/skabeloner' },
  ]
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {tiles.map((t, i) => (
          <a key={i} href={t.href} className="card hover:-translate-y-0.5 transition">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand/10 text-brand">{t.icon}</div>
              <div className="font-medium">{t.title}</div>
            </div>
            <p className="text-slate-600 mt-2">{t.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { title: 'Trin-for-trin', desc: 'Skærmbilleder, tjeklister og faldgruber.' },
    { title: 'Danske use cases', desc: 'Eksempler fra hverdagen og små virksomheder.' },
    { title: 'Etisk & trygt', desc: 'Data og privatliv forklaret uden drama.' },
  ]
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="card">
            <div className="text-lg font-medium">{f.title}</div>
            <p className="text-slate-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="container py-16 text-center">
      <div className="card">
        <h2 className="text-2xl md:text-3xl font-semibold">Klar til at spare tid?</h2>
        <p className="text-slate-600 mt-2">Start med vores mest populære guides og skabeloner.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="btn btn-primary" href="/guides">Se guides</a>
          <a className="btn btn-ghost" href="/skabeloner">Se skabeloner</a>
        </div>
      </div>
    </section>
  )
}
