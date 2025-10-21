const items = [
  { title: 'Kundeservice-svar (hurtigt og venligt)', slug: 'kundesvar-venligt' },
  { title: 'Jobannonce (klar og konkret)', slug: 'jobannonce' },
  { title: 'SoMe-opslag (Facebook/Instagram)', slug: 'some-opslag' },
]

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Skabeloner</h1>
      <p className="text-slate-600 mt-2">Kopiér og brug med det samme.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map(i => (
          <a key={i.slug} href={`/skabeloner/${i.slug}`} className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-0.5 transition">
            <div className="text-lg font-medium">{i.title}</div>
            <p className="text-slate-600 mt-2">Eksempler før/efter + tilpasningsfelter.</p>
          </a>
        ))}
      </div>
    </div>
  )
}
