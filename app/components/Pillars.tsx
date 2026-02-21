// components/Pillars.tsx

import Link from "next/link";
import Container from "./Container";
import { ROUTES } from "../_lib/siteRoutes";

export default function Pillars() {
  // const pillars = [
  //   {
  //     title: "Inclusion & diversité",
  //     text: "Une initiative ouverte, respectueuse, et tournée vers la cohésion.",
  //     slug: "inclusion-diversite",
  //   },
  //   {
  //     title: "Transmission",
  //     text: "Traditions, histoires et valeurs partagées à travers des formats vivants.",
  //     slug: "transmission",
  //   },
  //   {
  //     title: "Dialogue interculturel",
  //     text: "Ponts entre communautés afro et québécoise, avec respect et curiosité.",
  //     slug: "dialogue-interculturel",
  //   },
  // ];
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Nos Valeurs</h2>
          <Link
            href={ROUTES.mission}
            className="inline-flex w-fit rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Lire plus →
          </Link>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <Link
            href="/nos-valeurs/inclusion-diversite"
            className="rounded-xl border border-lime-600 bg-white p-5 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">Inclusion & diversité</div>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              Une initiative ouverte, respectueuse, et tournée vers la cohésion.
            </p>
          </Link>

          <Link
            href="/nos-valeurs/transmission"
            className="rounded-xl border border-lime-600 bg-white p-5 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">Transmission</div>
            <p className="mt-2 text-sm text-neutral-700">
              Traditions, histoires et valeurs partagées à travers des formats
              vivants.
            </p>
          </Link>

          <Link
            href="/nos-valeurs/dialogue-interculturel"
            className="rounded-xl border border-lime-600 bg-white p-5 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">Dialogue interculturel</div>
            <p className="mt-2 text-sm text-neutral-700">
              Ponts entre communautés afro et québécoise, avec respect et
              curiosité.
            </p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
