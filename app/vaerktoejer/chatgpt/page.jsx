export const metadata = {
  title: 'ChatGPT – kom godt i gang',
  description: 'Hvad det kan, pris, styrker/svagheder og 3 hurtige opgaver.',
};

export default function Tool() {
  return (
    <div className="container py-12 prose max-w-2xl">
      <h1>ChatGPT – kom godt i gang</h1>
      <p><strong>Kort fortalt:</strong> ChatGPT er en alsidig hjælper til tekst, ideer og forklaringer.</p>

      <h2>Pris (typisk)</h2>
      <ul>
        <li>Gratis niveau til simple opgaver</li>
        <li>Betalt plan til mere avancerede funktioner</li>
      </ul>

      <h2>Styrker</h2>
      <ul>
        <li>God til sprog og struktur</li>
        <li>Hurtig til ideer og udkast</li>
      </ul>

      <h2>Svagheder</h2>
      <ul>
        <li>Kan tage fejl – tjek altid vigtige facts</li>
        <li>Giver bedst svar med gode eksempler</li>
      </ul>

      <h2>3 hurtige startopgaver</h2>
      <ol>
        <li>Skriv et venligt kundesvar</li>
        <li>Lav en indkøbsliste ud fra retter</li>
        <li>Sammensæt et ugeprogram for lektier eller træning</li>
      </ol>
    </div>
  )
}
