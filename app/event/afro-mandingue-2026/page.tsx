// app/event/afro-mandingue-2026/page.tsx
import Image from "next/image";
import Container from "../../components/Container";

export default function Page() {
  const whatsapp = "https://wa.me/14189053692";

  return (
    <div className="bg-neutral-100">
      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/event/tianuni-afro-mandingue.jpg"
            alt="Soirée Afro Mandingue"
            fill
            priority
            className="object-cover"
          />
        </div>

        <Container>
          <div className="relative py-20">
            <p className="text-sm font-semibold text-orange-300">
              Événement à venir • Québec
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold">
              Soirée Afro Mandingue — 3ème édition
            </h1>

            <p className="mt-4 max-w-2xl text-white/80">
              Une célébration vibrante des cultures afro à Québec à travers la
              musique, la danse et le partage. Venez vivre une soirée riche en
              émotions, en découvertes et en connexions humaines.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank">
                <button className="rounded-md bg-orange-700 px-4 py-2 text-sm text-white hover:bg-orange-800 cursor-pointer">
                  Réserver via WhatsApp
                </button>
              </a>

              <a href="tel:4189053692">
                <button className="rounded-md border px-4 py-2 text-sm hover:bg-neutral-50 hover:text-black cursor-pointer">
                  Appeler l’organisateur
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* INFO CARDS */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">DATE</p>
              <p className="mt-2 text-xl font-semibold text-black dark:text-white">
                1 août 2026
              </p>
              <p className="text-sm text-neutral-600">20h00</p>
            </div>

            <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">LIEU</p>
              <p className="mt-2 text-xl font-semibold text-black">
                Québec, Canada
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* DETAILS */}
      <section className="bg-neutral-50 py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">
                À quoi s’attendre
              </h2>

              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Musique africaine en live</li>
                <li>• Célébration culturelle</li>
                <li>• Rencontre et réseautage communautaire</li>
                <li>• Gastronomie et expériences uniques</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank">
                  <button className="rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-neutral-800 cursor-pointer">
                    Réserver votre place
                  </button>
                </a>

                <a href="tel:4189053692">
                  <button className="text-black underline cursor-pointer">
                    Contacter l’organisateur
                  </button>
                </a>
              </div>
            </div>

            {/* Poster */}
            <div className="relative rounded-2xl shadow-lg">
              <Image
                src="/event/tianuni-afro-mandingue.jpg"
                alt="Affiche de l’événement"
                width={545}
                height={600}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* OBJECTIFS */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900">
              Objectifs de l’événement
            </h3>
            <p className="mt-2 text-base text-neutral-700">
              Les objectifs principaux de cette soirée culturelle.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-neutral-900">
                Afrique & Diaspora
              </h4>
              <ul className="mt-4 pl-5 space-y-2 text-neutral-700 list-disc leading-relaxed">
                <li>Célébrer et valoriser les cultures africaines</li>
                <li>Renforcer les liens avec la diaspora</li>
                <li>Promouvoir les richesses culturelles</li>
                <li>Faire rayonner l’identité africaine</li>
              </ul>
            </div>

            <div className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-neutral-900">
                Communauté & Transmission
              </h4>
              <ul className="mt-4 pl-5 space-y-2 text-neutral-700 list-disc leading-relaxed">
                <li>Créer un espace de partage intergénérationnel</li>
                <li>Transmettre les valeurs culturelles</li>
                <li>Favoriser l’apprentissage et les échanges</li>
                <li>Encourager l’engagement communautaire</li>
              </ul>
            </div>

            <div className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-neutral-900">
                Cohésion & Impact
              </h4>
              <ul className="mt-4 pl-5 space-y-2 text-neutral-700 list-disc leading-relaxed">
                <li>Renforcer la cohésion sociale</li>
                <li>Valoriser les talents locaux</li>
                <li>Encourager la solidarité</li>
                <li>Créer un événement marquant et durable</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-10 rounded-xl text-white">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Ne manquez pas cette édition spéciale
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Rejoignez-nous pour une expérience culturelle unique et
                inoubliable.
              </p>
            </div>

            <div>
              <a href={whatsapp} target="_blank">
                <button className="rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-neutral-200 cursor-pointer dark:border dark:border-white dark:text-white">
                  Réserver maintenant
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
