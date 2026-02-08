import Container from "@/app/components/Container";

export default function AteliersPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Ateliers interculturels
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Des ateliers pratiques pour découvrir, apprendre et transmettre — dans
        un esprit d’échange entre cultures afro et québécoise.
      </p>

      <div className="mt-8 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Thématiques</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
          <li>Cuisine</li>
          <li>Danse</li>
          <li>Musique</li>
          <li>Artisanat</li>
        </ul>
      </div>
    </Container>
  );
}
