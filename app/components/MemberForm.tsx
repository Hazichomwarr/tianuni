// //components/MemberForm.tsx
// "use client";

// import { useRouter } from "next/navigation";
// import { useActionState, useState } from "react";
// import { registerMember } from "../adhesion/_action";

// const MOTIVATIONS_OPTIONS = [
//   "Participer à des événements",
//   "Bénévolat",
//   "Recevoir des informations",
//   "other",
// ];

// type ActionState =
//   | { ok: true }
//   | { ok: false; errors: Record<string, string> }
//   | null;

// const initialState: ActionState = null;

// export default function MemberForm() {
//   const router = useRouter();

//   const [next, setNext] = useState<number>(1);
//   const [state, action, pending] = useActionState(registerMember, initialState);

//   const err = (name: string) =>
//     state && "ok" in state && !state.ok ? state.errors[name] : undefined;
//   return (
//     <form
//       action={action}
//       className="mx-auto max-w-2xl space-y-6 bg-neutral-100 p-6 rounded-xl shadow-xl"
//     >
//       <h2 className="text-3xl text-center text-neutral-900 font-semibold p-1">
//         Formulaire d{"'"}adhésion
//       </h2>

//       {/* honeypot anti-bot (hidden) */}
//       <input
//         type="text"
//         name="company"
//         tabIndex={-1}
//         autoComplete="off"
//         className="hidden"
//       />

//       <div className="flex flex-col gap-4">
//         {/* PERSONAL INFOS */}
//         {next <= 1 && (
//           <div>
//             <h3 className="text-sm font-semibold p-2 bg-green-600 text-center rounded-md mb-4 text-white">
//               Informations Personelles
//             </h3>
//             <div className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 placeholder="Nom"
//                 name="lastName"
//                 className="w-full rounded border-neutral-400 border px-3 py-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Prénom(s)"
//                 name="firstName"
//                 className="w-full rounded border-neutral-400 border px-3 py-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email (optionnel)"
//                 name="email"
//                 className="w-full rounded border-neutral-400 border px-3 py-2"
//               />
//               <input
//                 type="phone"
//                 name="phone"
//                 placeholder="Téléphone"
//                 className="w-full rounded border-neutral-400 border px-3 py-2"
//               />
//               <input
//                 type="text"
//                 name="adress"
//                 placeholder="Adresse"
//                 className="w-full rounded border-neutral-400 border px-3 py-2"
//               />
//               <div>
//                 <label htmlFor="birthDate" className="text-neutral-500 text-sm">
//                   Date de naissance
//                 </label>
//                 <input
//                   id="birthDate"
//                   type="date"
//                   name="birthDate"
//                   className="mt-2 w-full rounded border border-neutral-400 py-1"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {next === 2 && (
//           <>
//             {/* MEMBER TYPE */}
//             <div>
//               <div className="text-sm font-semibold bg-green-600 rounded-md  text-center text-neutral-100 p-2">
//                 Type de membre
//               </div>
//               <select
//                 name="memberType"
//                 id="memberType"
//                 className="mt-2 w-full rounded border border-neutral-400 px-3 py-2 cursor-pointer"
//                 defaultValue="regulier"
//               >
//                 <option value="regulier">Membre reguliér</option>
//                 <option value="etudiant">Membre étudiant</option>
//                 <option value="bienfaiteur">Membre Bienfaiteur</option>
//               </select>
//             </div>

//             {/* MOTIVATION */}
//             <div className="mt-4">
//               <h3 className="text-sm font-semibold p-2 bg-green-600 text-center rounded-md mb-4 text-white">
//                 Motivation à devenir membre
//               </h3>
//               <div className="flex flex-col gap-2">
//                 {MOTIVATIONS_OPTIONS.map((option) => (
//                   <label
//                     key={option}
//                     className="block text-sm font-neutral-500"
//                   >
//                     <input
//                       type="checkbox"
//                       name="motivations"
//                       className="w-4 h-4 accent-green-800 rounded"
//                     />{" "}
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* ENGAGMENT & Signature */}
//             <div>
//               <h3 className="mt-4 text-sm text-center text-neutral-100 font-semibold bg-green-600 p-2 rounded-md">
//                 Engagement et Signature
//               </h3>
//               <p className="mt-2">
//                 {" "}
//                 Je souhaite devenir membre de l{"'"}association Tianuni et je m
//                 {"'"}
//                 engage à respecter les valeurs et les objectifs de l{"'"}
//                 organisation.
//               </p>
//               <p className="mt-2">
//                 {" "}
//                 Je m{"'"}engage aussi a payer les cotisations mensuelles.
//               </p>
//               <p className="mt-2">
//                 Je certifie que les informations fournies sont exactes et
//                 complètes.
//               </p>
//               <label className="mt-4 flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="isAgreed"
//                   value={"oui"}
//                   className="w-4 h-4"
//                   required
//                 />
//                 Oui
//               </label>
//             </div>
//           </>
//         )}
//         {/* Back/Next */}
//         <div
//           className={`mt-4 w-full flex items-center ${next === 1 && "justify-end"} gap-2`}
//         >
//           <button
//             type="button"
//             className="flex w-[20%] justify-center rounded bg-black px-4 py-2 text-sm text-neutral-100 cursor-pointer hover:bg-black/80 active:scale-[.95]"
//             onClick={() => {
//               if (next === 1) setNext(2);
//               if (next === 2) setNext(1);
//             }}
//           >
//             {next === 1 ? "Next" : "Back"}
//           </button>
//         </div>
//         {/* Submit */}
//         {next === 2 && (
//           <div className=" mt-4 w-full flex flex-col gap-2">
//             <button
//               type="submit"
//               className="rounded bg-green-600 px-4 py-2 text-sm text-neutral-100 cursor-pointer hover:bg-green-500 active:scale-[.95]"
//             >
//               S{"'"}enregistrer
//             </button>
//             <button
//               className="rounded border border-neutral-400 px-4 py-2 text-sm cursor-pointer hover:bg-neutral-200 active:scale-[.95]"
//               type="button"
//               onClick={() => router.push("/adhesion/success")} //test. the redirect goes thru. but nothing on the screen
//             >
//               Annuler
//             </button>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }

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

        <Input
          name="email"
          type="email"
          placeholder="Email (optionnel)"
          error={err("email")}
        />
        <Input
          name="phone"
          placeholder="Téléphone (optionnel)"
          error={err("phone")}
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
          <p className="mx-auto w-fit p-2 text-center text-sm text-neutral-700">
            Après l’enregistrement, vous pourrez payer votre adhésion en ligne.
          </p>
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
