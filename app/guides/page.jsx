const guides = [
  { slug: 'indkobsliste-med-ai', title: 'Lav en indkøbsliste på 2 min med AI', time: '5-10 min', level: 'Let' },
  { slug: 'opsummer-mode', title: 'Opsummer dine mødenoter automatisk', time: '10-15 min', level: 'Let' },
  { slug: 'planlaeg-uge', title: 'Planlæg din uge med AI', time: '10 min', level: 'Let' },
]

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Guides</h1>
      <p className="text-slate-600 mt-2">Filtrerbar oversigt (MVP: statisk liste).</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {guides.map(g => (
          <a href={`/guides/${g.slug}`} key={g.slug} className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-0.5 transition">
            <div className="text-lg font-medium">{g.title}</div>
            <div className="mt-2 text-sm text-slate-600">Tid: {g.time} • Niveau: {g.level}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
