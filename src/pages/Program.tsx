import PageLayout from "@/components/PageLayout";

const Program = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Aktuelt Program</h2>

      <p className="mb-6">
        Dette er det aktuelle program for Filosofisk Forums arrangementer. Du kan <strong>downloade</strong> det aktuelle program ved at klikke på linket. Programmet er i PDF-format.
      </p>

      <div className="bg-card border border-border rounded p-5">
        <h3 className="font-display text-lg text-primary mb-2">Aktuelt program:</h3>
        <a
          href="/pdfs/2026_02_01_program_foraar_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline font-semibold"
        >
          Filosofisk Forum Program for foråret 2026
        </a>
      </div>
    </article>
  </PageLayout>
);

export default Program;
