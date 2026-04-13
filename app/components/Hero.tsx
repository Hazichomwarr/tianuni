// import Image from "next/image";
// import { SITE } from "../_lib/site";
// import { ROUTES } from "../_lib/siteRoutes";
// import Link from "next/link";
// import Container from "./Container";

// // components/Hero.tsx
// export default function Hero() {
//   return (
//     <section className="py-12 px-2 rounded-2xl bg-gradient-to-br from-[#3B0F2B] via-[#5A1E3C] to-[#1E1B4B] text-white">
//       <Container>
//         {/* Content */}
//         <div className="p-6">
//           <p className="text-sm font-extrabold text-red-700">
//             CULTURES &amp; ORIGINES
//           </p>

//           <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-5xl">
//             Valoriser les cultures d’origines afro et créer des liens au Québec
//           </h1>
//         </div>

//         {/* Background photo */}
//         <div className="flex flex-col gap-4">
//           <Image
//             src="/images/rubanOfficiel.jpg"
//             alt="Événement culturel Tianuni"
//             width={1024}
//             height={845}
//             priority
//             className="object-cover rounded-xl"
//             sizes="(max-width: 768px) 100vw, 1100px"
//           />

//           <p className="mt-5 max-w-2xl text-base leading-relaxed">
//             {SITE.name} est une association basée à Québec. Nous célébrons la
//             richesse des cultures afro, tout en favorisant le dialogue et le
//             brassage culturel avec la culture québécoise.
//           </p>
//           <div className="mt-7 flex flex-wrap gap-3">
//             <Link
//               href={ROUTES.activities}
//               className="rounded-md bg-red-700 px-4 py-2.5 text-sm font-medium text-neutral-50 shadow-sm hover:bg-[#6b3f23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
//             >
//               Découvrir nos activités
//             </Link>
//             <Link
//               href={ROUTES.gallery}
//               className="rounded-md border border-black/30 px-4 py-2.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
//             >
//               Galerie
//             </Link>
//             <Link
//               href={ROUTES.about}
//               className="rounded-md border border-black/30 px-4 py-2.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
//             >
//               En savoir plus
//             </Link>
//             <Link
//               href="/adhesion"
//               className="rounded-md border border-black/30 px-4 py-2.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
//             >
//               Devenir membre
//             </Link>
//           </div>

//           <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/80 dark:text-neutral-300">
//             <span>📍 {SITE.address}</span>
//             <span>
//               📧{" "}
//               <a
//                 className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 dark:text-neutral-300"
//                 href={`mailto:${SITE.email}`}
//               >
//                 {SITE.email}
//               </a>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden rounded-2xl text-white">
//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src="/images/rubanOfficiel.jpg"
//           alt="Événement Tianuni"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 -z-10 bg-black/60" />

//       {/* COLOR GRADIENT OVERLAY */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2B0A2E]/80 via-[#7C2D12]/60 to-[#0F172A]/80" />

//       {/* SUBTLE PATTERN (African vibe) */}
//       <div
//         className="absolute inset-0 -z-10 opacity-[0.08]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <Container>
//         <div className="py-20 text-center md:py-28">
//           {/* LABEL */}
//           <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
//             CULTURES & ORIGINES
//           </p>

//           {/* TITLE */}
//           <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-6xl">
//             Valoriser les cultures d’origines afro et créer des liens au Québec
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="mx-auto mt-6 max-w-2xl text-white/80 leading-relaxed">
//             {SITE.name} célèbre la richesse des cultures afro et crée des ponts
//             entre les communautés à travers des événements, des échanges et des
//             expériences culturelles uniques.
//           </p>

//           {/* CTA */}
//           <div className="mt-8 flex flex-wrap justify-center gap-3">
//             <Link
//               href={ROUTES.activities}
//               className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
//             >
//               Découvrir nos activités
//             </Link>

//             <Link
//               href="/adhesion"
//               className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
//             >
//               Devenir membre
//             </Link>
//           </div>

//           {/* INFO */}
//           <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
//             <span>📍 {SITE.address}</span>
//             <span>
//               📧{" "}
//               <a
//                 href={`mailto:${SITE.email}`}
//                 className="underline underline-offset-4"
//               >
//                 {SITE.email}
//               </a>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { SITE } from "../_lib/site";
import { ROUTES } from "../_lib/siteRoutes";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl py-16 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B0A2E] via-[#4A0D3A] to-[#0F172A]" />

        {/* Soft glow accents */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* TEXT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
              CULTURES & ORIGINES
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Valoriser les cultures d’origines afro et créer des liens au
              Québec
            </h1>

            <p className="mt-5 max-w-lg text-white/80 leading-relaxed">
              {SITE.name} est une association basée à Québec. Nous célébrons la
              richesse des cultures afro, tout en favorisant le dialogue et le
              brassage culturel avec la culture québécoise.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={ROUTES.activities}
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Découvrir nos activités
              </Link>

              <Link
                href="/adhesion"
                className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
              >
                Devenir membre
              </Link>
            </div>

            {/* INFO */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span>📍 {SITE.address}</span>
              <span>
                📧{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <Image
                src="/images/rubanOfficiel.jpg"
                alt="Événement culturel Tianuni"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>

            {/* subtle overlay glow */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
