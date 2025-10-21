  export const metadata = {
    title: 'Skabelon: Kundeservice-svar (hurtigt og venligt)',
    description: 'Copy-paste prompt og tekstskabelon til hurtige, venlige kundesvar.',
  };

  export default function Template() {
    return (
      <div className="container py-12 max-w-2xl">
        <h1>Skabelon: Kundeservice-svar (hurtigt og venligt)</h1>
        <p><strong>Formål:</strong> Svar hurtigt, venligt og præcist – og få kunden til at føle sig hjulpet.</p>

        <h2>Prompt til AI (kopiér)</h2>
        <pre><code>{`Du er kundeservicemedarbejder i [branche]. Svar kort, venligt og handlekraftigt.
Brug høflig tone på dansk og giv 1-2 konkrete næste skridt.
Her er kundens besked: "[indsæt besked]"`}</code></pre>

        <h2>Skabelon (udfyld [felter])</h2>
        <p>Hej [navn],<br/>
        Tak for din besked – og fordi du gjorde os opmærksom på det.<br/>
        [Kort svar/afklaring].<br/>
        Næste skridt: [1] [2].<br/>
        Skriv endelig igen, hvis der er mere, jeg kan hjælpe med.<br/>
        De bedste hilsner<br/>
        [Navn] / [Firma]</p>
      </div>
    )
  }
