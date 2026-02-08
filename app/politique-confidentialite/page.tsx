// app/politique-confidentialite/page.tsx
import Container from "@/app/components/Container";

export default function PolitiqueConfidentialitePage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Politique de confidentialité
      </h1>
      <p className="mt-4 max-w-3xl text-neutral-700">
        Page confidentialité (stub). Décrire quelles données sont collectées
        (formulaire), comment elles sont utilisées, la durée de conservation, et
        les droits des utilisateurs.
      </p>

      <div className="mt-8 rounded-xl border p-6 text-neutral-700">
        <h2 className="text-lg font-semibold tracking-tight">Résumé</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Nous collectons uniquement les données nécessaires pour répondre aux
            messages.
          </li>
          <li>Nous ne vendons pas vos informations.</li>
          <li>
            Vous pouvez demander la suppression de vos données en nous
            contactant.
          </li>
        </ul>
      </div>
    </Container>
  );
}
