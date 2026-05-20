import Container from "@/app/components/Container";
import { STRIPE_LINKS } from "@/app/_lib/stripeLinks";
import Link from "next/link";

// export default function PaymentPage() {
//   return (
//     <Container>
//       <h1 className="text-3xl font-semibold tracking-tight">
//         Paiement de l’adhésion
//       </h1>

//       <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
//         Finalisez votre adhésion en réglant la cotisation annuelle de{" "}
//         <span className="font-semibold text-neutral-900">100 CAD</span>. Le
//         paiement est sécurisé et traité par Stripe.
//       </p>

//       <div className="mt-8 rounded-2xl border bg-white p-6 md:p-8">
//         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <div className="text-lg font-semibold tracking-tight">
//               Adhésion annuelle — 100 CAD
//             </div>
//             <p className="mt-1 text-sm text-neutral-700">
//               Paiement sécurisé (carte bancaire, Apple Pay selon appareil).
//             </p>
//           </div>

//           <a
//             href={STRIPE_LINKS.membershipAnnual100Cad}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex w-fit items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
//           >
//             Payer maintenant →
//           </a>
//         </div>

//         <p className="mt-4 text-xs text-neutral-500">
//           Après paiement, vous serez redirigé vers la page de confirmation.
//         </p>
//       </div>

//       <div className="mt-10 text-sm text-neutral-700">
//         Besoin d’aide ?{" "}
//         <Link href="/contact" className="underline underline-offset-4">
//           Contactez-nous
//         </Link>
//         .
//       </div>
//     </Container>
//   );
// }

export default function PaymentPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Paiements & soutien
      </h1>

      <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
        Effectuez votre adhésion, soutenez l’association ou réservez vos billets
        d’événement grâce à notre système de paiement sécurisé via Stripe.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <PayCard
          title="💳 Payer l’adhésion"
          priceNote="Cotisation annuelle — 100 CAD"
          href={STRIPE_LINKS.adhesion}
        />

        <PayCard
          title="❤️ Faire un don"
          priceNote="Montant libre"
          href={STRIPE_LINKS.donation}
        />

        <PayCard
          title="🎟️ Billet adulte"
          priceNote="Soirée Afro Mandingue — 65 CAD"
          href={STRIPE_LINKS.eventAdult}
        />

        <PayCard
          title="🎟️ Billet enfant"
          priceNote="Soirée Afro Mandingue — 30 CAD"
          href={STRIPE_LINKS.eventChild}
        />
      </div>

      <div className="mt-10 rounded-xl border bg-white p-5 text-sm text-neutral-700">
        <p className="font-medium text-neutral-900">Besoin d’aide ?</p>
        <p className="mt-1">
          Si vous rencontrez un problème de paiement, contactez-nous et nous
          vous aiderons.
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex underline underline-offset-4"
        >
          Nous contacter →
        </Link>
      </div>
    </Container>
  );
}

function PayCard({
  title,
  priceNote,
  href,
}: {
  title: string;
  priceNote: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-lg font-semibold tracking-tight text-neutral-900">
        {title}
      </div>
      <p className="mt-2 text-sm text-neutral-700">{priceNote}</p>
      <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white group-hover:bg-neutral-800">
        Payer maintenant <span aria-hidden>→</span>
      </div>
      <p className="mt-3 text-xs text-neutral-500">
        Paiement sécurisé via Stripe
      </p>
    </a>
  );
}
