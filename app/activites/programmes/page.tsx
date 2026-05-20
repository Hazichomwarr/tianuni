import Container from "@/app/components/Container";

export default function ProgrammesPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Programmes & initiatives
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Des actions concrètes pour renforcer l’intégration, soutenir la
        jeunesse, créer des ponts avec les institutions, et favoriser la
        cohésion à travers le sport et le socioculturel.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Mentorat & intégration</h2>
          <p className="mt-2 text-neutral-700">
            Accompagnement des nouveaux arrivants pour faciliter l’intégration
            sociale et culturelle.
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Partenariats éducatifs</h2>
          <p className="mt-2 text-neutral-700">
            Collaboration avec écoles et institutions : sensibilisation,
            échanges et initiatives éducatives.
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Volet sport</h2>
          <p className="mt-2 text-neutral-700">
            Compétitions sportives interdisciplinaires pour renforcer l’esprit
            d’équipe et la cohésion.
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">
            Volet socioculturel & leadership jeunesse
          </h2>
          <p className="mt-2 text-neutral-700">
            Concours mettant en lumière les origines et traditions
            (Miss/Mister…), art oratoire, et initiatives qui développent le
            leadership des jeunes.
          </p>
        </section>
      </div>
    </Container>
  );
}
