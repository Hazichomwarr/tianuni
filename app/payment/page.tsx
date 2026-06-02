import Container from "@/app/components/Container";
import { STRIPE_LINKS } from "@/app/_lib/stripeLinks";
import Link from "next/link";
import { PAYMENT_OPTIONS } from "../_lib/paymentOptions";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { type } = await searchParams;
  console.log("type of payment:", type);

  let options;

  if (type === "event") {
    options = [PAYMENT_OPTIONS["event-adult"], PAYMENT_OPTIONS["event-child"]];
  } else {
    const selectedOption =
      type && type in PAYMENT_OPTIONS
        ? PAYMENT_OPTIONS[type as keyof typeof PAYMENT_OPTIONS]
        : null;

    options = selectedOption
      ? [selectedOption]
      : Object.values(PAYMENT_OPTIONS);
  }
  const message =
    type === "adhesion"
      ? "Effectuez votre adhésion annuelle"
      : type === "event"
        ? "Réservez vos billets d'événement"
        : type === "donation"
          ? "Soutenez notre association par vos genereux dons."
          : "Effectuez votre adhésion, soutenez l’association ou réservez vos billets d’événement";
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Paiements & soutien
      </h1>

      <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
        {message} grâce à notre système de paiement sécurisé via Stripe.
      </p>
      {/* NEW NOTE */}
      {/* <p className="mt-3 rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800">
        ℹ️ Un léger frais de traitement peut être appliqué.
      </p> */}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {/* <PayCard
          title="💳 Payer l’adhésion"
          priceNote="Cotisation annuelle — 100 CAD"
          href={STRIPE_LINKS.adhesion}
        /> */}

        {/* <PayCard
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
        /> */}
        {options.map((option) => (
          <PayCard
            key={option.title}
            title={option.title}
            priceNote={option.note}
            href={option.href}
          />
        ))}
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
