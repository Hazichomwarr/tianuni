import Container from "../components/Container";
import MemberForm from "../components/MemberForm";

export default function page() {
  return (
    <section className="bg-neutral-100 bg-[url('/images/presi_talk.jpeg')] bg-cover bg-center px-4 py-12">
      <Container>
        <MemberForm />;
      </Container>
    </section>
  );
}

// // app/adhesion/page.tsx
// import Container from "@/app/components/Container";
// import Link from "next/link";

// export default function AdhesionPage() {
//   return (
//     <Container>
//       <h2 className="text-3xl font-semibold tracking-tight">Adhésion</h2>
//       <p className="mt-3 max-w-2xl text-neutral-700">
//         Remplissez le formulaire ci-dessous pour devenir membre.
//       </p>
//       <p className="mt-4 text-neutral-700 mx-auto">
//         Apres avoir remplit le formulaire,
//         <Link
//           href="/payment"
//           className="text-blue-800 font-semibold hover:underline"
//         >
//           Cliquer ici
//         </Link>{" "}
//         pour finaliser votre adhésion.
//       </p>

//       <div className="mt-8 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm">
//         <iframe
//           src="https://forms.gle/REAs18p4qVLP7a699"
//           className="h-275 w-full"
//           loading="lazy"
//         />
//       </div>

//       <a
//         href="/payment"
//         className="inline-block mt-12 rounded-md bg-black px-5 py-2.5 text-base font-medium text-neutral-50 hover:bg-black/80"
//       >
//         {" "}
//         Finaliser votre adhésion
//       </a>
//     </Container>
//   );
// }
