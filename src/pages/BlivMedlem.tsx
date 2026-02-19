import PageLayout from "@/components/PageLayout";

const BlivMedlem = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Bliv Medlem</h2>

      <p className="mb-4">
        Det er gratis at deltage i foredrag – men du kan vælge at blive medlem af Filosofisk Forum, hvorved du støtter foreningen økonomisk.
      </p>

      <div className="bg-card border border-border rounded p-5 mb-6">
        <p className="font-semibold mb-2">Kontingent:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Studenter, arbejdsløse og pensionister: <strong className="text-foreground">100 kr.</strong></li>
          <li>Medlemmer i arbejde: <strong className="text-foreground">200 kr.</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Giro: (+01) 113-5600
        </p>
      </div>

      <div className="bg-card border border-border rounded p-5 mb-6">
        <p className="font-semibold mb-2">Sådan betaler du via netbank:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Log ind i din netbank</li>
          <li>Vælg <strong className="text-foreground">Overfør til girokonto</strong> (eller "Betal regning")</li>
          <li>Indtast gironummer: <strong className="text-foreground">(+01) 113-5600</strong></li>
          <li>Indtast beløb: <strong className="text-foreground">100 kr.</strong> eller <strong className="text-foreground">200 kr.</strong></li>
          <li>Skriv evt. dit navn i beskedfeltet</li>
          <li>Godkend betalingen</li>
        </ol>
      </div>

    </article>
  </PageLayout>
);

export default BlivMedlem;
