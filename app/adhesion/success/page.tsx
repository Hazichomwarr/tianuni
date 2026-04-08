import { SITE } from "@/app/_lib/site";
import Container from "@/app/components/Container";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Enregistrement réussi ✅
      </h1>

      <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
        Merci ! Votre demande d’adhésion a été enregistrée. Nous vous
        contacterons rapidement pour la suite.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {/* <Link
          href="/payment"
          className="rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
        >
          Payer l’adhésion →
        </Link> */}
        <p className="text-lg font-semibold">
          Veuillez payer maintenant les frais d{"'"}ahesion par virement
          INTERACT a ce couriel: {SITE.email}
        </p>
        <Link
          href="/"
          className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Retour à l’accueil
        </Link>
      </div>
    </Container>
  );
}
