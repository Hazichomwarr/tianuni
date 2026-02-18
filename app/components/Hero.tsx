import Image from "next/image";
import { SITE } from "../_lib/site";
import { ROUTES } from "../_lib/siteRoutes";
import Link from "next/link";

// components/Hero.tsx
export default function Hero() {
  return (
    // <section className="py-10 md:py-14">
    //   <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
    //     {/* soft decorative glows */}
    //     <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
    //     <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

    //     {/* optional watermark (very subtle)  */}
    //     <div className="pointer-events-none absolute right-[-60px] top-1/2 hidden w-[420px] -translate-y-1/2 opacity-[0.08] md:block">
    //       <Image
    //         src="/logo2.jpeg"
    //         alt=""
    //         width={700}
    //         height={700}
    //         className="h-auto w-full select-none"
    //         aria-hidden="true"
    //       />
    //     </div>

    //     <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[340px_1fr] md:px-10 md:py-16">
    //       {/* Logo block */}
    //       <div className="flex justify-center md:justify-start">
    //         <div className="relative">
    //           {/* logo badge */}
    //           <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-neutral-900/5">
    //             <Image
    //               src="/logo2.jpeg"
    //               alt="Logo de l’Association Tianuni"
    //               width={280}
    //               height={280}
    //               priority
    //               className="h-auto w-[240px] rounded-2xl object-contain md:w-[280px]"
    //             />
    //           </div>

    //           {/* tiny label under logo (optional) */}
    //           <p className="mt-3 text-xs font-medium tracking-wide text-neutral-600 text-center">
    //             Culture • Unité • Richesse
    //           </p>
    //         </div>
    //       </div>

    //       {/* Content */}
    //       <div className="flex items-center">
    //         {/* Glass wrapper */}
    //         <div className="w-full rounded-3xl border border-white/40 bg-white/55 p-6 shadow-sm backdrop-blur-md md:p-8">
    //           <p className="text-sm font-semibold tracking-wide text-neutral-700">
    //             CULTURES &amp; ORIGINES
    //           </p>

    //           <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
    //             Valoriser les cultures afro et créer des liens au Québec
    //           </h1>

    //           <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
    //             {SITE.name} est une association basée à Québec. Nous célébrons
    //             la richesse des cultures afro, tout en favorisant le dialogue et
    //             le brassage culturel avec la culture québécoise.
    //           </p>

    //           <div className="mt-7 flex flex-wrap gap-3">
    //             <Link
    //               href={ROUTES.activities}
    //               className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
    //             >
    //               Découvrir nos activités
    //             </Link>

    //             <Link
    //               href={ROUTES.gallery}
    //               className="rounded-md border border-neutral-300 bg-white/60 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
    //             >
    //               Galerie
    //             </Link>

    //             <Link
    //               href={ROUTES.about}
    //               className="rounded-md border border-neutral-300 bg-white/60 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
    //             >
    //               En savoir plus
    //             </Link>
    //           </div>

    //           <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
    //             <span>📍 {SITE.address}</span>
    //             <span>
    //               📧{" "}
    //               <a
    //                 className="underline underline-offset-4 hover:text-neutral-900"
    //                 href={`mailto:${SITE.email}`}
    //               >
    //                 {SITE.email}
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Proof cards */}
    //   <div className="mt-6 grid gap-4 md:grid-cols-3">
    //     <div className="rounded-xl border border-neutral-200 bg-white p-5">
    //       <div className="text-sm font-semibold text-neutral-900">
    //         Inclusion & diversité
    //       </div>
    //       <p className="mt-2 text-sm leading-relaxed text-neutral-700">
    //         Une initiative ouverte, respectueuse, et tournée vers la cohésion.
    //       </p>
    //     </div>
    //     <div className="rounded-xl border border-neutral-200 bg-white p-5">
    //       <div className="text-sm font-semibold text-neutral-900">
    //         Transmission
    //       </div>
    //       <p className="mt-2 text-sm leading-relaxed text-neutral-700">
    //         Traditions, histoires et valeurs partagées à travers des formats
    //         vivants.
    //       </p>
    //     </div>
    //     <div className="rounded-xl border border-neutral-200 bg-white p-5">
    //       <div className="text-sm font-semibold text-neutral-900">
    //         Dialogue interculturel
    //       </div>
    //       <p className="mt-2 text-sm leading-relaxed text-neutral-700">
    //         Ponts entre communautés afro et québécoise, avec respect et
    //         curiosité.
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section className="py-6 md:py-10">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/logo2.jpeg"
            alt="Événement culturel Tianuni"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          {/* Dark overlays for readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative px-6 py-14 md:px-10 md:py-20">
          <p className="text-sm font-medium text-white/90">
            CULTURES &amp; ORIGINES
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Valoriser les cultures d’origines afro et créer des liens au Québec
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {SITE.name} est une association basée à Québec. Nous célébrons la
            richesse des cultures afro, tout en favorisant le dialogue et le
            brassage culturel avec la culture québécoise.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={ROUTES.activities}
              className="rounded-md bg-[#5b280d] px-4 py-2.5 text-sm font-medium text-neutral-50 shadow-sm hover:bg-[#6b3f23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
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
          </div>
        </div>
      </div>

      {/* “Proof” cards under hero (still clean, but now festive overall) */}
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-neutral-200bg-white p-5">
          <div className="text-sm font-medium">Inclusion & diversité</div>
          <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
            Une initiative ouverte, respectueuse, et tournée vers la cohésion.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-5">
          <div className="text-sm font-medium">Transmission</div>
          <p className="mt-2 text-sm text-neutral-700">
            Traditions, histoires et valeurs partagées à travers des formats
            vivants.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-5">
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
