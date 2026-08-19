// app/galerie/[annee]/page.tsx

import Container from "@/app/components/Container";
import Link from "next/link";
import { notFound } from "next/navigation";

const ALBUMS_BY_YEAR = {
  "2025": [
    {
      slug: "festival-origines",
      title: "Festival Cultures & Origines",
    },
    {
      slug: "atelier-cuisine",
      title: "Atelier Cuisine",
    },
    {
      slug: "conference-histoire",
      title: "Conférence & Débat",
    },
  ],

  "2026": [
    {
      slug: "soiree-afro-mandingue",
      title: "Soirée Afro Mandingue",
    },
  ],
} as const;

export default async function GalerieAnneePage({
  params,
}: {
  params: Promise<{ annee: string }>;
}) {
  const { annee } = await params;

  const albums = ALBUMS_BY_YEAR[annee as keyof typeof ALBUMS_BY_YEAR];

  if (!albums) {
    return notFound();
  }

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Galerie {annee}
        </h1>

        <p className="mt-3 max-w-2xl text-neutral-700">
          Sélection d’albums photos de nos activités et festivités.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {albums.map((album) => (
            <Link
              key={album.slug}
              href={`/galerie/${annee}/${album.slug}`}
              className="rounded-xl border p-6 transition hover:bg-neutral-50 hover:shadow-sm"
            >
              <div className="text-lg font-semibold tracking-tight">
                {album.title}
              </div>

              <p className="mt-2 text-sm text-neutral-700">Ouvrir l’album →</p>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
