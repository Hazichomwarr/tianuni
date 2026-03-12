"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { registerMember } from "../adhesion/_action";

const MOTIVATIONS_OPTIONS = [
  "Participer à des événements",
  "Bénévolat",
  "Recevoir des informations",
  "Autre",
];

export type ActionState =
  | { ok: true }
  | { ok: false; errors: Record<string, string> }
  | null;

const initialState: ActionState = null;

export default function MemberForm() {
  const router = useRouter();
  const [state, action, pending] = useActionState(registerMember, initialState);

  const err = (name: string) =>
    state && "ok" in state && !state.ok ? state.errors[name] : undefined;

  return (
    <form
      action={action}
      className="mx-auto max-w-2xl space-y-6 rounded-xl bg-neutral-100 p-6 shadow-xl"
    >
      <h2 className="p-1 text-center text-3xl font-semibold text-neutral-900">
        Formulaire d{"'"}adhésion
      </h2>

      {/* honeypot anti-bot (hidden) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="flex flex-col gap-4">
        <Input name="lastName" placeholder="Nom" error={err("lastName")} />
        <Input
          name="firstName"
          placeholder="Prénom(s)"
          error={err("firstName")}
        />
        <Input name="address" placeholder="Adresse" error={err("address")} />

        <Input name="phone" placeholder="Téléphone" error={err("phone")} />
        <Input
          name="email"
          type="email"
          placeholder="Email (optionnel)"
          error={err("email")}
        />

        <div>
          <label htmlFor="birthDate" className="text-sm text-neutral-600">
            Date de naissance
          </label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            className="mt-2 w-full rounded border border-neutral-400 px-3 py-2"
          />
          {err("birthDate") ? (
            <p className="mt-2 text-sm text-red-600">{err("birthDate")}</p>
          ) : null}
        </div>

        {/* MEMBER TYPE */}
        <div>
          <label htmlFor="memberType" className="text-sm font-medium">
            Type de membre
          </label>
          <select
            name="memberType"
            id="memberType"
            className="mt-2 w-full cursor-pointer rounded border border-neutral-400 px-3 py-2"
            defaultValue="regulier"
          >
            <option value="regulier">Membre régulier</option>
            <option value="etudiant">Membre étudiant</option>
            <option value="bienfaiteur">Membre bienfaiteur</option>
          </select>
          {err("memberType") ? (
            <p className="mt-2 text-sm text-red-600">{err("memberType")}</p>
          ) : null}
        </div>

        {/* MOTIVATION */}
        <div className="mt-2">
          <h3 className="mb-4 rounded-md bg-neutral-900 p-2 text-center text-sm font-semibold text-white">
            Motivation à devenir membre
          </h3>

          <div className="flex flex-col gap-2">
            {MOTIVATIONS_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-sm text-neutral-700"
              >
                <input
                  type="checkbox"
                  name="motivations"
                  value={option}
                  className="h-4 w-4 rounded accent-neutral-900"
                />
                {option}
              </label>
            ))}
          </div>

          {err("motivations") ? (
            <p className="mt-2 text-sm text-red-600">{err("motivations")}</p>
          ) : null}
        </div>

        {/* Payment */}
        <div>
          <h3 className="mt-2 rounded-md bg-neutral-900 p-2 text-center text-sm font-semibold text-white">
            Paiement
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Après l’enregistrement, je m{"'"}engage payer a les frais d{"'"}
            adhésion en ligne.
          </p>
          <label className="mt-3 flex items-center gap-2 text-sm text-neutral-800">
            <input type="checkbox" name="payment" className="h-4 w-4" />
            Oui
          </label>
          {err("payment") ? (
            <p className="mt-2 text-sm text-red-600">{err("payment")}</p>
          ) : null}
        </div>

        {/* ENGAGEMENT */}
        <div>
          <h3 className="mt-2 rounded-md bg-neutral-900 p-2 text-center text-sm font-semibold text-white">
            Engagement
          </h3>

          <p className="mt-2 text-sm text-neutral-700">
            Je souhaite devenir membre de l{"'"}association Tianuni et je m{"'"}
            engage à respecter les valeurs et les objectifs de l{"'"}
            organisation.
          </p>
          <p className="mt-2 text-sm text-neutral-700">
            Je certifie que les informations fournies sont exactes et complètes.
          </p>

          <label className="mt-3 flex items-center gap-2 text-sm text-neutral-800">
            <input type="checkbox" name="agreement" className="h-4 w-4" />
            Oui
          </label>

          {err("agreement") ? (
            <p className="mt-2 text-sm text-red-600">{err("agreement")}</p>
          ) : null}
        </div>

        {/* CTAs */}
        <div className="mt-2 flex w-full flex-col gap-2">
          <button
            type="submit"
            disabled={pending}
            className="cursor-pointer rounded bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800 active:scale-[.99] disabled:opacity-60"
          >
            {pending ? "Envoi..." : "S'enregistrer"}
          </button>

          <button
            className="cursor-pointer rounded border border-neutral-400 px-4 py-2 text-sm hover:bg-neutral-200 active:scale-[.99]"
            type="button"
            onClick={() => router.push("/")}
          >
            Annuler
          </button>

          {state && "ok" in state && !state.ok ? (
            <p className="text-sm text-red-600">
              Veuillez corriger les champs en rouge puis réessayer.
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded border border-neutral-400 px-3 py-2"
      />
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
