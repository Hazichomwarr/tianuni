// app/participer/page.tsx
import Container from "@/app/components/Container";
import Link from "next/link";
import { ROUTES } from "../lib/route";

export default function ParticiperPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Participer</h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Il y a plusieurs façons de s’impliquer : participer aux activités,
        devenir bénévole, proposer une collaboration, ou soutenir l’association.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">Bénévolat</h2>
          <p className="mt-2 text-neutral-700">
            Aidez-nous lors des événements, ateliers, accueil, logistique,
            communication.
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">Partenariat</h2>
          <p className="mt-2 text-neutral-700">
            Écoles, institutions, organisations : construisons un projet commun.
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">
            Artistes & intervenants
          </h2>
          <p className="mt-2 text-neutral-700">
            Proposez une performance, un atelier, une conférence, ou une
            exposition.
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">Soutien</h2>
          <p className="mt-2 text-neutral-700">
            Soutenez l’initiative pour renforcer l’inclusion et la diversité.
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={ROUTES.contact}
          className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Nous contacter
        </Link>
        <Link
          href={ROUTES.activities}
          className="rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
        >
          Voir les activités
        </Link>
      </div>
    </Container>
  );
}
