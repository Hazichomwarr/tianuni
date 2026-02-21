// components/Pillars.tsx

export default function Pillars() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl font-bold tracking-tight">OUR VALUES</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-lime-600 bg-white p-5">
          <div className="text-sm font-medium">Inclusion & diversité</div>
          <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
            Une initiative ouverte, respectueuse, et tournée vers la cohésion.
          </p>
        </div>
        <div className="rounded-xl border border-lime-600 bg-white p-5">
          <div className="text-sm font-medium">Transmission</div>
          <p className="mt-2 text-sm text-neutral-700">
            Traditions, histoires et valeurs partagées à travers des formats
            vivants.
          </p>
        </div>
        <div className="rounded-xl border border-lime-600 bg-white p-5">
          <div className="text-sm font-medium">Dialogue interculturel</div>
          <p className="mt-2 text-sm text-neutral-700">
            Ponts entre communautés afro et québécoise, avec respect et
            curiosité.
          </p>
        </div>
      </div>
    </section>
  );
}
