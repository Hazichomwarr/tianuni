//components/MemberForm.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const MOTIVATIONS_OPTIONS = [
  "Participer à des événements",
  "Bénévolat",
  "Recevoir des informations",
  "other",
];

export default function MemberForm() {
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);
  const [next, setNext] = useState<number>(1);

  const handleToggle = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  return (
    <form className="mx-auto max-w-2xl space-y-6 bg-neutral-100 p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl text-center text-neutral-900 font-semibold p-1">
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
        {/* PERSONAL INFOS */}
        {next <= 1 && (
          <div>
            <h3 className="text-sm font-semibold p-2 bg-green-600 text-center rounded-md mb-4 text-white">
              Informations Personelles
            </h3>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full rounded border-neutral-400 border px-3 py-2"
              />
              <input
                type="text"
                placeholder="Prénom(s)"
                className="w-full rounded border-neutral-400 border px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border-neutral-400 border px-3 py-2"
              />
              <input
                type="phone"
                placeholder="Telephone"
                className="w-full rounded border-neutral-400 border px-3 py-2"
              />
              <input
                type="text"
                placeholder="Adresse"
                className="w-full rounded border-neutral-400 border px-3 py-2"
              />
              <div>
                <label htmlFor="date" className="text-neutral-500 text-sm">
                  Date de naissance
                </label>
                <input
                  id="date"
                  type="date"
                  className=" w-full rounded border  border-neutral-400 px-3 py-2"
                />
              </div>
            </div>
          </div>
        )}

        {next === 2 && (
          <>
            {/* MEMBER TYPE */}
            <div>
              <label htmlFor="memberType" className="text-sm font-medium">
                Type de membre
              </label>
              <select
                name="memberType"
                id="memberType"
                className=" w-full rounded border border-neutral-400 px-3 py-2 cursor-pointer"
              >
                <option value="regulier">Membre reguliér</option>
                <option value="etudiant">Membre étudiant</option>
                <option value="bienfaiteur">Membre Bienfaiteur</option>
              </select>
            </div>

            {/* MOTIVATION */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold p-2 bg-green-600 text-center rounded-md mb-4 text-white">
                Motivation à devenir membre
              </h3>
              <div className="flex flex-col gap-2">
                {MOTIVATIONS_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="block text-sm font-neutral-500"
                  >
                    <input
                      type="checkbox"
                      name="motivations"
                      checked={selected.includes(option)}
                      onChange={() => handleToggle(option)}
                      className="w-4 h-4 accent-green-800 rounded"
                    />{" "}
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* ENGAGMENT & Signature */}
            <div>
              <h3 className="mt-4 text-sm text-center text-neutral-100 font-semibold bg-green-600 p-2 rounded-md">
                Engagement et Signature
              </h3>
              <p className="mt-2">
                {" "}
                Je souhaite devenir membre de l{"'"}association Tianuni et je m
                {"'"}
                engage à respecter les valeurs et les objectifs de l{"'"}
                organisation.
              </p>
              <p className="mt-2">
                Et je certifie que les informations fournies sont exactes et
                complètes.
              </p>
              <label className="mt-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="engagment&Payment"
                  value={"oui"}
                  className="w-4 h-4"
                  required
                />
                Oui
              </label>
            </div>
          </>
        )}
        {/* Back/Next */}
        <div
          className={`mt-4 w-full flex items-center ${next === 1 && "justify-end"} gap-2`}
        >
          <button
            type="button"
            className="flex w-[20%] justify-center rounded bg-black px-4 py-2 text-sm text-neutral-100 cursor-pointer hover:bg-black/80 active:scale-[.95]"
            onClick={() => {
              if (next === 1) setNext(2);
              if (next === 2) setNext(1);
            }}
          >
            {next === 1 ? "Next" : "Back"}
          </button>
        </div>
        {/* Submit */}
        {next === 2 && (
          <div className=" mt-4 w-full flex flex-col gap-2">
            <button
              type="submit"
              className="rounded bg-green-600 px-4 py-2 text-sm text-neutral-100 cursor-pointer hover:bg-green-500 active:scale-[.95]"
            >
              S{"'"}enregistrer
            </button>
            <button
              className="rounded border border-neutral-400 px-4 py-2 text-sm cursor-pointer hover:bg-neutral-200 active:scale-[.95]"
              type="button"
              onClick={() => router.push("/adhesion/success")} //test. the redirect goes thru. but nothing on the screen
            >
              Annuler
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
