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
            {SITE.phones.map((p) => (
              <div key={p.href}>
                <a
                  href={p.href}
                  className="uderline underline-offset-4 hover:text-neutral-900"
                >
                  📞 {p.label}
                </a>
              </div>
            ))}
            <div>
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">
            Formulaire de contact
          </h2>
          {/* <p className="mt-2 text-neutral-700">
            Vous pouvez nous contacter directement par email ou téléphone. Un
            formulaire de contact sera bientôt disponible sur cette page.
          </p> */}

          {/* Visual placeholder (kept intentionally minimal) */}
          {/* <div className="mt-4 grid gap-3">
            <div className="h-10 rounded-md bg-neutral-100" />
            <div className="h-10 rounded-md bg-neutral-100" />
            <div className="h-28 rounded-md bg-neutral-100" />
            <div className="h-10 w-40 rounded-md bg-neutral-300" />
          </div> */}
          <p className="mt-2 text-neutral-700">
            Devenez membre de notre association
            <span className="mt-6 block">
              <a
                // href="https://forms.gle/REAs18p4qVLP7a699"
                href="/adhesion"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black px-5 py-2.5 text-base font-medium text-neutral-50 hover:bg-black/80"
              >
                S&apos;inscrire
              </a>
            </span>
          </p>
        </section>
      </div>
    </Container>
  );
}
