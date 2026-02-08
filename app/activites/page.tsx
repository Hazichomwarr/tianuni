import Link from "next/link";
import Container from "../components/Container";
import { ACTIVITES_NAV } from "../_lib/nav";

export default function ActivitesPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Nos activités</h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Tianuni valorise les cultures d’origines afro à travers des événements,
        des ateliers, et des programmes qui favorisent l’inclusion et le
        dialogue interculturel au Québec.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {ACTIVITES_NAV.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="rounded-xl border p-5 hover:bg-neutral-50"
          >
            <div className="font-medium">{a.label}</div>
            <div className="mt-2 text-sm text-neutral-700">Découvrir →</div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
