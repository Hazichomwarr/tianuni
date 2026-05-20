// components/EventPopup.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PageTransition from "./ui/PageTransition";

const STORAGE_KEY = "tianuni_event_popup_v1";

export default function EventPopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const dismissed = localStorage.getItem(STORAGE_KEY);
    // if (dismissed === "1") return;

    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    // localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  function goToEvent() {
    // localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
    router.push("/event/afro-mandingue-2026");
  }

  return (
    <PageTransition>
      <div
        className={`fixed inset-0 z-999 grid place-items-center p-4 transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* overlay */}
        <div
          onClick={close}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* modal */}
        <div
          className={`relative w-full max-w-md rounded-2xl bg-white p-5 shadow-xl transition ${
            open ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <p className="text-xs text-center font-semibold text-red-600">
            ÉVÉNEMENT À VENIR
          </p>

          <h3 className="mt-2 text-lg text-center font-bold text-neutral-900">
            Soirée Afro Mandingue — 1 Août 2026
          </h3>

          <Image
            src="/event/tianuni-afro-mandingue.jpg"
            alt="Soirée Afro Mandingue"
            width={300}
            height={400}
            className="mx-auto mt-4 rounded-xl shadow-lg"
          />

          <p className="mt-3 text-sm text-neutral-600 text-center">
            Musique • Culture • Communauté — Une soirée inoubliable.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            <button
              onClick={goToEvent}
              className="rounded-full bg-red-600 px-5 py-2 text-sm text-white hover:bg-red-700 cursor-pointer"
            >
              Voir l’événement
            </button>

            <button
              onClick={close}
              className="rounded-full border px-5 py-2 text-sm hover:bg-neutral-100 cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
