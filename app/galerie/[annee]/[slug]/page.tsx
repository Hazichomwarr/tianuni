// app/galerie/[annee]/[slug]/page.tsx
import Container from "@/app/components/Container";

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ annee: string; slug: string }>;
}) {
  const { annee, slug } = await params;

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Album</h1>
      <p className="mt-2 text-sm text-neutral-500">
        {annee} — {slug}
      </p>

      <p className="mt-4 max-w-2xl text-neutral-700">
        Page album (stub). Ici tu afficheras une grille d’images/vidéos, ou un
        embed (YouTube, Drive, etc.) selon ce que le client fournit.
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="aspect-4/3 rounded-xl bg-neutral-100" />
        <div className="aspect-4/3 rounded-xl bg-neutral-100" />
        <div className="aspect-4/3 rounded-xl bg-neutral-100" />
      </div>
    </Container>
  );
}
