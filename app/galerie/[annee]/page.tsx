// app/galerie/[annee]/page.tsx
import Container from "@/app/components/Container";
import Link from "next/link";

export default async function GalerieAnneePage({
  params,
}: {
  params: Promise<{ annee: string }>;
}) {
  const { annee } = await params;

  // placeholder albums until you wire a CMS/data source
  const albums = [
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
  ];

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Galerie {annee}</h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Sélection d’albums (exemples). Remplace ces éléments par les vrais
        albums du client.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {albums.map((a) => (
          <Link
            key={a.slug}
            href={`/galerie/${annee}/${a.slug}`}
            className="rounded-xl border p-6 hover:bg-neutral-50"
          >
            <div className="text-lg font-semibold tracking-tight">
              {a.title}
            </div>
            <p className="mt-2 text-sm text-neutral-700">Ouvrir l’album →</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
