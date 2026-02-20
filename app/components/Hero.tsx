import Image from "next/image";
import { SITE } from "../_lib/site";
import { ROUTES } from "../_lib/siteRoutes";
import Link from "next/link";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-12 px-6 bg-neutral-200 md:py-10">
      <div className="grid gap-6 md:grid-cols-2 md:place-items-center">
        {/* Content */}
        <div className="px-6 py-14 md:px-10 md:py-20">
          <p className="text-sm font-extrabold text-red-700">
            CULTURES &amp; ORIGINES
          </p>

          <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-5xl">
            Valoriser les cultures d’origines afro et créer des liens au Québec
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed">
            {SITE.name} est une association basée à Québec. Nous célébrons la
            richesse des cultures afro, tout en favorisant le dialogue et le
            brassage culturel avec la culture québécoise.
          </p>

          {/* <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={ROUTES.activities}
              className="rounded-md bg-orange-600 px-4 py-2.5 text-sm font-medium text-neutral-50 shadow-sm hover:bg-[#6b3f23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Découvrir nos activités
            </Link>
            <Link
              href={ROUTES.gallery}
              className="rounded-md border border-white/30 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Galerie
            </Link>
            <Link
              href={ROUTES.about}
              className="rounded-md border border-white/30 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              En savoir plus
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span>📍 {SITE.address}</span>
            <span>
              📧{" "}
              <a
                className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </span>
          </div> */}
        </div>

        {/* Background photo */}
        <div className="flex flex-col gap-6">
          <Image
            src="/images/rubanOfficiel.jpg"
            alt="Événement culturel Tianuni"
            width={845}
            height={845}
            priority
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={ROUTES.activities}
              className="rounded-md bg-orange-600 px-4 py-2.5 text-sm font-medium text-neutral-50 shadow-sm hover:bg-[#6b3f23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Découvrir nos activités
            </Link>
            <Link
              href={ROUTES.gallery}
              className="rounded-md border border-black/30 px-4 py-2.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Galerie
            </Link>
            <Link
              href={ROUTES.about}
              className="rounded-md border border-black/30 px-4 py-2.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              En savoir plus
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/80">
            <span>📍 {SITE.address}</span>
            <span>
              📧{" "}
              <a
                className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* “Proof” cards under hero */}
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-lime-600 bg-white p-5">
          <div className="text-sm font-medium">Inclusion & diversité</div>
          <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
            Une initiative ouverte, respectueuse, et tournée vers la cohésion.
          </p>
        </div>
        <div className="rounded-xl border border-lime-600 bg-white p-5">
          <div className="text-sm font-medium">Transmission</div>
          <p className="mt-2 text-sm text-neutral-700">
            Traditions, histoires et valeurs partagées à travers des formats
            vivants.
          </p>
        </div>
        <div className="rounded-xl border border-lime-600 bg-white p-5">
          <div className="text-sm font-medium">Dialogue interculturel</div>
          <p className="mt-2 text-sm text-neutral-700">
            Ponts entre communautés afro et québécoise, avec respect et
            curiosité.
          </p>
        </div>
      </div>
    </section>
  );
}
