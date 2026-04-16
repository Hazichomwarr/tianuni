// event/page.tsx
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
            alt="Wonder Woman Africa International"
            fill
            priority
            className="object-cover"
          />
        </div>

        <Container>
          <div className="relative py-20">
            <p className="text-sm bold text-orange-300">
              Upcoming Event • Quebec
            </p>

            <h1 className="mt-1 text-3xl">
              Soirée Afro Mandingue — 3ème édition
            </h1>

            <p className="mt-2">
              Une célébration vibrante des cultures afro à Québec à travers la
              musique, la danse et le partage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank">
                <button className="rounded-md bg-orange-700 px-3 py-2 text-sm text-white hover:bg-orange-800 cursor-pointer">
                  Reserve via WhatsApp
                </button>
              </a>

              <a href="tel:4189053692">
                <button className="rounded-md border px-3 py-2 text-sm hover:bg-neutral-50 hover:text-black cursor-pointer">
                  Call Organizer
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
                1 Août 2026
              </p>
              <p className="text-sm text-neutral-600">8 PM</p>
            </div>

            <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">LOCATION</p>
              <p className="mt-2 text-xl font-semibold text-black dark:text-white">
                Québec, Canada
              </p>
              {/* <p className="text-sm text-neutral-600">405 W 125th Street</p> */}
            </div>

            {/* <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">
                PERFORMER
              </p>
              <p className="mt-2 text-xl font-semibold text-black">
                Le Magnific
              </p>
              <p className="text-sm text-neutral-600">
                Live performance & entertainment
              </p>
            </div> */}
          </div>
        </Container>
      </section>

      {/* DETAILS */}
      <section className=" bg-neutral-50 py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">
                What to expect
              </h2>

              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Live African music performance</li>
                <li>• Cultural celebration</li>
                <li>• Community gathering</li>
                <li>• Food & experiences</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank">
                  <button>Reserve your spot</button>
                </a>

                <a href="tel:4189053692">
                  <button className="text-black">Call second contact</button>
                </a>
              </div>
            </div>

            {/* Poster */}
            <div className="relative rounded-2xl shadow-lg">
              <Image
                src="/event/tianuni-afro-mandingue.jpg"
                alt="Event Poster"
                width={545}
                height={55}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* GOALS */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900">
              Event Goals
            </h3>
            <p className="mt-2 text-base  text-neutral-700">
              Les objectifs spécifiques pour cet événement.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-neutral-900">
                Afrique - Diaspora
              </h4>
              <ul className="mt-4 pl-5 space-y-2 text-neutral-700 list-disc leading-relaxed marker:text-neutral-400">
                <li>
                  Célébrer et valoriser les femmes africaines et de la diaspora
                </li>

                <li>⁠ ⁠Renforcer les liens entre l’Afrique et la diaspora</li>
                <li>⁠Promouvoir les produits locaux à l’international</li>
                <li>⁠ ⁠Faire rayonner la culture africaine</li>
              </ul>
            </div>
            <div className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-neutral-900">
                Femmes - Famille
              </h4>
              <ul className="mt-4 space-y-2 pl-5 text-neutral-700 list-disc leading-relaxed marker:text-neutral-400">
                <li>⁠ ⁠Promouvoir l’autonomisation et le leadership féminin</li>

                <li>
                  ⁠Offrir un espace de formation, de coaching et de
                  transformation
                </li>
                <li>⁠Soutenir l’entrepreneuriat féminin</li>
                <li>
                  ⁠Promouvoir le bien-être, la santé et l’équilibre familial
                </li>
              </ul>
            </div>
            <div className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-neutral-900">
                Solidarité - Effort
              </h4>
              <ul className="mt-4 space-y-2 pl-5 text-neutral-700 list-disc leading-relaxed marker:text-neutral-400">
                <li>
                  ⁠Encourager la solidarité, la sororité et l’engagement
                  communautaire
                </li>
                <li>⁠Récompenser l’excellence et l’impact social</li>
                <li>
                  ⁠Positionner le festival comme un rendez-vous international
                  incontournable
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      {/* CTA */}
      <section className="bg-neutral-900 py-8 rounded-xl text-white ">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-around">
            <div>
              <h3 className="text-2xl font-bold">
                Don’t miss this special edition.
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Join us for a unique celebration of African culture.
              </p>
            </div>

            <div className="flex gap-3">
              <a href={whatsapp} target="_blank">
                <button className="rounded-md bg-white text-black px-3 py-2 text-sm hover:bg-neutral-200 cursor-pointer dark:text-white">
                  Reserve Maintenant
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
