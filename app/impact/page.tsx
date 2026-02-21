import Link from "next/link";
import Container from "../components/Container";
import { IMPACT } from "../_lib/impact";

export default function ImpactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Notre impact</h1>

      <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
        À travers ses actions, l’Association Tianuni contribue activement à la
        valorisation des cultures d’origines afro et au renforcement du dialogue
        interculturel au Québec. Nos initiatives créent des espaces de
        rencontre, de transmission et d’inclusion, permettant aux individus et
        aux communautés de se rapprocher, d’apprendre les uns des autres et de
        construire ensemble un avenir fondé sur le respect et la compréhension
        mutuelle.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {IMPACT.map((i) => (
          <Link
            key={i.slug}
            href={`/notre-impact/${i.slug}`}
            className="group rounded-xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold tracking-tight">
              {i.title}
            </div>

            <p className="mt-2 text-sm text-neutral-700">{i.description}</p>

            <div className="mt-4 text-sm font-medium text-neutral-900 group-hover:underline">
              En savoir plus →
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
