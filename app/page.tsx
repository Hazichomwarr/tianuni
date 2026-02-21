// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";
import { ROUTES } from "./_lib/siteRoutes";
import { ACTIVITES_NAV } from "./_lib/nav";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <Pillars />
      {/* WHY CHOOSE US */}
      <section className="py-10 px-4 rounded-2xl bg-neutral-200">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Pourquoi nous choisir ?
            </h2>
            <p className="mt-3 max-w-xl text-neutral-700">
              Parce que la culture rapproche. Tianuni crée des espaces concrets
              où l’on découvre, partage et construit des liens durables.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-xl border border-red-400 bg-white p-5">
              <div className="font-medium">Découvrir & partager</div>
              <p className="mt-2 text-sm text-neutral-700">
                Traditions, histoires, valeurs — dans un esprit d’échange.
              </p>
            </div>
            <div className="rounded-xl border border-red-400 bg-white p-5">
              <div className="font-medium">Créer des liens</div>
              <p className="mt-2 text-sm text-neutral-700">
                Rencontres interculturelles et activités pour tous les âges.
              </p>
            </div>
            <div className="rounded-xl border border-red-400 bg-white p-5">
              <div className="font-medium">
                Soutenir une initiative inclusive
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Une approche qui valorise l’inclusion, la diversité et le
                respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Nos activités
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-700">
              Événements culturels, ateliers interculturels et programmes
              d’intégration — pour les familles, les jeunes et les adultes.
            </p>
          </div>

          <Link
            href={ROUTES.activities}
            className="inline-flex w-fit rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
          >
            Voir toutes les activités →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ACTIVITES_NAV.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="rounded-xl border p-6 hover:bg-neutral-50"
            >
              <div className="text-lg font-semibold tracking-tight">
                {a.label}
              </div>
              <p className="mt-3 text-sm text-neutral-700">
                Découvrir le programme, le public concerné, et comment
                participer.
              </p>
              <div className="mt-4 text-sm font-medium">Découvrir →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-10">
        <div className="rounded-2xl border p-7 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Galerie & souvenirs
              </h2>
              <p className="mt-3 text-neutral-700">
                Photos et vidéos de nos événements passés — pour revivre
                l’énergie, la créativité et l’esprit de communauté.
              </p>
            </div>

            <Link
              href={ROUTES.gallery}
              className="inline-flex w-fit rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Explorer la galerie →
            </Link>
          </div>

          {/* Gallery preview */}
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              {
                src: "/gallery/guests.jpeg",
                alt: "Souvenir d’un événement Tianuni",
              },
              {
                src: "/gallery/presi&guests.jpeg",
                alt: "Moment fort de la communauté",
              },
              {
                src: "/gallery/guests2.jpeg",
                alt: "Atelier et échanges culturels",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-4/3 overflow-hidden rounded-xl border bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            Découvrez quelques moments forts de nos activités. La galerie
            complète sera mise à jour régulièrement.
          </p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="pb-14 pt-10">
        <div className="rounded-2xl bg-neutral-900 p-7 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Rejoignez l’aventure Tianuni
              </h2>
              <p className="mt-3 text-neutral-200">
                Bénévole, participant, partenaire, artiste — il y a une place
                pour vous.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href={ROUTES.participate}
                className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Participer
              </Link>
              <Link
                href={ROUTES.contact}
                className="rounded-md border border-white/30 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
