// app/contact/page.tsx
import Container from "@/app/components/Container";
import { SITE } from "../_lib/site";

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Une question, une proposition de partenariat, une envie de participer ?
        Écrivez-nous ou appelez-nous.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">Coordonnées</h2>
          <div className="mt-3 space-y-2 text-neutral-700">
            <div>📍 {SITE.address}</div>
            <div>
              📞 {SITE.phones[0]}
              <br />
              📞 {SITE.phones[1]}
            </div>
            <div>
              📧{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">
            Formulaire (stub)
          </h2>
          <p className="mt-2 text-neutral-700">
            Ici tu ajouteras un formulaire (nom, email, message) — soit via une
            action server, soit via un service (Formspree, etc.).
          </p>

          <div className="mt-4 grid gap-3">
            <div className="h-10 rounded-md bg-neutral-100" />
            <div className="h-10 rounded-md bg-neutral-100" />
            <div className="h-28 rounded-md bg-neutral-100" />
            <div className="h-10 w-40 rounded-md bg-neutral-900" />
          </div>
        </section>
      </div>
    </Container>
  );
}
