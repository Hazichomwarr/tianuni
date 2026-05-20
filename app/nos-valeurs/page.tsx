import Container from "@/app/components/Container";
import Link from "next/link";

export default function ValeursPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Nos valeurs</h1>

      <p className="mt-3 max-w-2xl text-neutral-700">
        Les principes fondamentaux qui guident toutes les actions de
        l’Association Tianuni.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          href="/nos-valeurs/inclusion-diversite"
          className="rounded-xl border p-6 hover:shadow-md"
        >
          Inclusion & diversité
          <div className="mt-8 text-sm font-medium text-neutral-600 cursor-pointer hover:underline">
            Lire plus →
          </div>
        </Link>

        <Link
          href="/nos-valeurs/transmission"
          className="rounded-xl border p-6 hover:shadow-md"
        >
          Transmission
          <div className="mt-8 text-sm font-medium text-neutral-600 cursor-pointer hover:underline">
            Lire plus →
          </div>
        </Link>

        <Link
          href="/nos-valeurs/dialogue-interculturel"
          className="rounded-xl border p-6 hover:shadow-md"
        >
          Dialogue interculturel
          <div className="mt-8 text-sm font-medium text-neutral-600 cursor-pointer hover:underline">
            Lire plus →
          </div>
        </Link>
      </div>
    </Container>
  );
}
