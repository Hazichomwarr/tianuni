import Link from "next/link";
import { IMPACT } from "../_lib/impact";
import { ROUTES } from "../_lib/siteRoutes";

export default function Impact() {
  return (
    <section className="py-10 px-4 rounded-2xl bg-neutral-200">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-3 max-w-xl text-neutral-700 leading-relaxed">
            Parce que la culture rapproche. Tianuni crée des espaces concrets où
            l’on découvre, partage et construit des liens durables.
          </p>
          <Link
            href={ROUTES.impact}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-900/15 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
          >
            Notre Impact <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-3">
          {IMPACT.map((i) => (
            <Link
              key={i.slug}
              href={`/impact/${i.slug}`}
              className="group rounded-xl border border-rose-900 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
            >
              <div className="font-medium text-neutral-900">{i.title}</div>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                {i.description}
              </p>
              <div className="mt-3 text-sm font-medium text-neutral-900 group-hover:underline">
                Lire →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
