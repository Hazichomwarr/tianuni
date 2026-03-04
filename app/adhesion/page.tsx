// import Container from "../components/Container";
// import MemberForm from "../components/MemberForm";

// export default function page() {
//   return (
//     <section className="bg-neutral-100 bg-[url('/images/presi_talk.jpeg')] bg-cover bg-center px-4 py-12">
//       <Container>
//         <MemberForm />;
//       </Container>
//     </section>
//   );
// }

// app/adhesion/page.tsx
import Container from "@/app/components/Container";

export default function AdhesionPage() {
  return (
    <Container>
      <h2 className="text-3xl font-semibold tracking-tight">Adhésion</h2>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Remplissez le formulaire ci-dessous pour devenir membre.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border bg-white">
        <iframe
          src="https://forms.gle/REAs18p4qVLP7a699"
          className="h-200 w-full"
          loading="lazy"
        />
      </div>
    </Container>
  );
}
