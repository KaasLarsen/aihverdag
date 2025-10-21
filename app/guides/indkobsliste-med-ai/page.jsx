  export const metadata = {
    title: 'Lav en indkøbsliste på 2 min med AI',
    description: 'En enkel guide til at generere ugens indkøbsliste baseret på dine måltider.'
  };

  export default function Guide() {
    return (
      <div className="container py-12 max-w-2xl">
        <h1>Lav en indkøbsliste på 2 min med AI</h1>
        <p><strong>TL;DR:</strong> Brug en kort prompt og få en pæn liste med mængder – kopiér direkte til Notes eller Sheets.</p>

        <h2>Det får du brug for</h2>
        <ul>
          <li>En AI-chat (fx ChatGPT, Copilot eller Gemini)</li>
          <li>Ca. 5 minutter</li>
        </ul>

        <h2>Trin-for-trin</h2>
        <ol>
          <li>Åbn din AI-chat og indsæt denne prompt:</li>
        </ol>
        <pre><code>{`Jeg vil lave en indkøbsliste til 4 personer for næste uge. Vi spiser aftensmad 5 dage.
Foreslå retter og lav en indkøbsliste opdelt i kategorier. Inkluder mængder.`}</code></pre>
        <ol start={2}>
          <li>Kopiér listen over i din notes-app eller et Google Sheet.</li>
          <li>Tilpas mængder og slet det, du allerede har i skabet.</li>
        </ol>

        <h2>Tip</h2>
        <ul>
          <li>Bed AI’en om at tage hensyn til allergier eller budget (fx maks. 600 kr.).</li>
          <li>Spørg efter “indkøbsliste som tabel” for nem import til Sheets.</li>
        </ul>
      </div>
    )
  }
