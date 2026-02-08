// app/galerie/page.tsx
import Container from "@/app/components/Container";
import Link from "next/link";

export default function GaleriePage() {
  const years = ["2026", "2025"]; // placeholder until real data

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Galerie</h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Albums photos/vidéos de nos événements. Choisissez une année pour
        explorer.
      </p>

      {/* Video */}
      <div className="mt-8 grid gap-3 md:grid-cols-3"></div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {years.map((y) => (
          <Link
            key={y}
            href={`/galerie/${y}`}
            className="rounded-xl border p-6 hover:bg-neutral-50"
          >
            <div className="text-lg font-semibold tracking-tight">{y}</div>
            <p className="mt-2 text-sm text-neutral-700">Voir les albums →</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
