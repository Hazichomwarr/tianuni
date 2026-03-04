import Container from "@/app/components/Container";
import { STRIPE_LINKS } from "@/app/_lib/stripeLinks";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Paiement de l’adhésion
      </h1>

      <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
        Finalisez votre adhésion en réglant la cotisation annuelle de{" "}
        <span className="font-semibold text-neutral-900">100 CAD</span>. Le
        paiement est sécurisé et traité par Stripe.
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              Adhésion annuelle — 100 CAD
            </div>
            <p className="mt-1 text-sm text-neutral-700">
              Paiement sécurisé (carte bancaire, Apple Pay selon appareil).
            </p>
          </div>

          <a
            href={STRIPE_LINKS.membershipAnnual100Cad}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Payer maintenant →
          </a>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Après paiement, vous serez redirigé vers la page de confirmation.
        </p>
      </div>

      <div className="mt-10 text-sm text-neutral-700">
        Besoin d’aide ?{" "}
        <Link href="/contact" className="underline underline-offset-4">
          Contactez-nous
        </Link>
        .
      </div>
    </Container>
  );
}
