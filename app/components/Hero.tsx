// components/Hero.tsx
// import Image from "next/image";
// import Link from "next/link";
// import Container from "./Container";
// import { SITE } from "../_lib/site";
// import { ROUTES } from "../_lib/siteRoutes";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden rounded-2xl py-16 text-white">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         {/* Deep gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#2B0A2E] via-[#4A0D3A] to-[#0F172A]" />

//         {/* Soft glow accents */}
//         <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
//       </div>

//       <Container>
//         <div className="grid gap-10 md:grid-cols-2 md:items-center">
//           {/* TEXT */}
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
//               CULTURES & ORIGINES
//             </p>

//             <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
//               Valoriser les cultures d’origines afro et créer des liens au
//               Québec
//             </h1>

//             <p className="mt-5 max-w-lg text-white/80 leading-relaxed">
//               {SITE.name} est une association basée à Québec. Nous célébrons la
//               richesse des cultures afro, tout en favorisant le dialogue et le
//               brassage culturel avec la culture québécoise.
//             </p>

//             {/* CTA */}
//             <div className="mt-7 flex flex-wrap gap-3">
//               <Link
//                 href={ROUTES.activities}
//                 className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
//               >
//                 Découvrir nos activités
//               </Link>

//               <Link
//                 href="/adhesion"
//                 className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
//               >
//                 Devenir membre
//               </Link>
//             </div>

//             {/* INFO */}
//             <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
//               <span>📍 {SITE.address}</span>
//               <span>
//                 📧{" "}
//                 <a
//                   href={`mailto:${SITE.email}`}
//                   className="underline underline-offset-4"
//                 >
//                   {SITE.email}
//                 </a>
//               </span>
//             </div>
//           </div>

//           {/* IMAGE */}
//           <div className="relative">
//             <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl">
//               <Image
//                 src="/images/rubanOfficiel.jpg"
//                 alt="Événement culturel Tianuni"
//                 width={600}
//                 height={500}
//                 className="object-cover"
//               />
//             </div>

//             {/* subtle overlay glow */}
//             <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../_lib/siteRoutes";
import { SITE } from "../_lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/rubanOfficiel.jpg"
        alt="Événement culturel Tianuni"
        fill
        priority
        className="object-cover opacity-90 bg-left"
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
  );
}
