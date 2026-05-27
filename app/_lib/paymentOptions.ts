// app/_lib/paymentOptions.ts

import { STRIPE_LINKS } from "./stripeLinks";

export const PAYMENT_OPTIONS = {
  "event-adult": {
    title: "🎟️ Billet Adulte — Soirée Afro Mandingue",
    note: "65 CAD",
    href: STRIPE_LINKS.eventAdult,
  },
  "event-child": {
    title: "🎟️ Billet Enfant — Soirée Afro Mandingue",
    note: "25 CAD",
    href: STRIPE_LINKS.eventChild,
  },
  adhesion: {
    title: "Payer l’adhésion",
    note: "Cotisation annuelle — 100 CAD",
    href: STRIPE_LINKS.adhesion,
  },
  donation: {
    title: "Faire un don",
    note: "Montant libre",
    href: STRIPE_LINKS.donation,
  },
} as const;
