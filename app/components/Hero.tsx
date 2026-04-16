// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../_lib/siteRoutes";
import { SITE } from "../_lib/site";
import PageTransition from "./ui/PageTransition";

export default function Hero() {
  return (
    <PageTransition>
      <section className="relative isolate overflow-hidden text-white">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/rubanOfficiel.jpg"
          alt="Événement culturel Tianuni"
          fill
          priority
          className="object-cover opacity-90 bg-center"
        />

        {/* LOGO (optional but powerful) */}
        <div className="relative z-50 flex justify-center pt-6">
          <Image
            src="/logo2.jpeg"
            alt="Tianuni"
            width={120}
            height={120}
            className="rounded-full opacity-80 shadow-xl"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
          <span className="inline-block rounded-full border border-red-400/30 bg-red-400/10 px-4 py-1 text-sm text-red-300">
            Cultures • Origines • Communauté
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Célébrer les cultures <br />
            <span className="text-red-400">Créer des liens durables</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            {SITE.name} rassemble les cultures afro au Québec à travers des
            événements, des échanges et des initiatives inclusives.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={ROUTES.activities}
              className="rounded-full bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-400"
            >
              Découvrir nos activités
            </Link>

            <Link
              href="/adhesion"
              className="rounded-full border border-neutral-600 px-8 py-3 text-neutral-200 transition hover:border-neutral-400"
            >
              Devenir membre
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
