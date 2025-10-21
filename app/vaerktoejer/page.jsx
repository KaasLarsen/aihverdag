const tools = [
  { title: 'ChatGPT', slug: 'chatgpt' },
  { title: 'Microsoft Copilot', slug: 'copilot' },
  { title: 'Google Gemini', slug: 'gemini' },
  { title: 'Canva', slug: 'canva' },
]

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Værktøjer</h1>
      <p className="text-slate-600 mt-2">Hvad kan de, hvad koster de – og hvordan kommer du i gang.</p>
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {tools.map(t => (
          <a key={t.slug} href={`/vaerktoejer/${t.slug}`} className="card hover:-translate-y-0.5 transition">
            <div className="text-lg font-medium">{t.title}</div>
            <p className="text-slate-600 mt-2">3 hurtige startopgaver.</p>
          </a>
        ))}
      </div>
    </div>
  )
}
