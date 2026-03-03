//adhesion/@modal/(.)succes/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function SuccessModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl px-10 py-6 max-w-md shadow-lg">
        <h3 className="text-lg font-semibold tracking-tight">
          Enregistrement reussit! 🎉{" "}
        </h3>
        <p className="mt-4">
          Felicitations et Bienvenue dans la communauté TIANUNI.
          <p>
            En tant que membre, vous avez le droit de participer aux assemblées
            générales et de voter sur les décisions de l{"'"}
            association Tianuni. Vous vous engagez également à respecter le
            règlement intérieur.
          </p>
        </p>
        <div className="mx-auto text-center">
          <button
            onClick={() => router.push("/payment")}
            className=" mt-4 rounded bg-black px-4 py-2 text-sm text-white cursor-pointer hover:bg-black/80 active:scale-[.95]"
          >
            Paye frais d{"'"}adhesion
          </button>
        </div>
      </div>
    </div>
  );
}
