import Image from "next/image";
import { SITE } from "../_lib/site";
import { ROUTES } from "../_lib/siteRoutes";
import Link from "next/link";
import Container from "./Container";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-12 px-2 bg-neutral-200 rounded-2xl md:py-10">
      <Container>
        {/* Content */}
        <div className="p-6">
          <p className="text-sm font-extrabold text-red-700">
            CULTURES &amp; ORIGINES
          </p>

          <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-5xl">
            Valoriser les cultures d’origines afro et créer des liens au Québec
          </h1>
        </div>

        {/* Background photo */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/rubanOfficiel.jpg"
            alt="Événement culturel Tianuni"
            width={1024}
            height={845}
            priority
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed">
            {SITE.name} est une association basée à Québec. Nous célébrons la
            richesse des cultures afro, tout en favorisant le dialogue et le
            brassage culturel avec la culture québécoise.
          </p>
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
      </Container>
    </section>
  );
}
