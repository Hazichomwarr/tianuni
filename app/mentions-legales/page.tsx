// app/mentions-legales/page.tsx
import Container from "@/app/components/Container";
import { SITE } from "../lib/site";

export default function MentionsLegalesPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Mentions légales
      </h1>
      <p className="mt-4 max-w-3xl text-neutral-700">
        Page légale (stub). Remplir avec les informations officielles fournies
        par l’association : statut, responsable, hébergeur, etc.
      </p>

      <div className="mt-8 rounded-xl border p-6 text-neutral-700">
        <div className="font-medium">{SITE.name}</div>
        <div className="mt-2">{SITE.address}</div>
        <div className="mt-2">
          <a className="underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
      </div>
    </Container>
  );
}
