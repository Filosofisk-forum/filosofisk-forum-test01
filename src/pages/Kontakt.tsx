import PageLayout from "@/components/PageLayout";

const Kontakt = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Kontakt</h2>

      <p className="mb-4">
        Kontakt os per e-mail:{" "}
        <a href="mailto:filosofisk-forum@filosofisk-forum.dk" className="text-accent hover:underline">
          filosofisk-forum@filosofisk-forum.dk
        </a>
      </p>

      <p className="mb-2">Almindelig post kan sendes til:</p>
      <address className="not-italic mb-6 pl-4 border-l-2 border-accent/30 text-muted-foreground">
        <p className="italic">Benedicta Pécseli,</p>
        <p className="italic">Søndermarksvej 2A,</p>
        <p className="italic">6200 Aabenraa</p>
      </address>

      <p className="mb-4">
        <a
          href="https://www.facebook.com/groups/155537601124000/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Filosofisk Forum på Facebook
        </a>
      </p>

      <div>
        <p className="font-semibold">Webmaster</p>
        <p>Mogens Grosen Nielsen</p>
        <p>
          Email:{" "}
          <a href="mailto:mogensgrosen@gmail.com" className="text-accent hover:underline">
            mogensgrosen@gmail.com
          </a>
        </p>
        <p>
          Web:{" "}
          <a
            href="https://nielsenstatistics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            nielsenstatistics.com
          </a>
        </p>
      </div>
    </article>
  </PageLayout>
);

export default Kontakt;
