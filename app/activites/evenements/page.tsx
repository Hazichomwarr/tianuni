import Container from "../../components/Container";

export default function EvenementsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Événements culturels
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Festivals, concerts, expositions et célébrations traditionnelles — des
        moments de partage, de fierté culturelle et de rencontres
        interculturelles.
      </p>

      <div className="mt-8 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Ce que vous y trouverez</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
          <li>Célébrations de fêtes traditionnelles</li>
          <li>Concerts et performances artistiques</li>
          <li>Expositions (culture, artisanat, gastronomie)</li>
          <li>Événements pour familles, jeunes et adultes</li>
        </ul>
      </div>
    </Container>
  );
}
