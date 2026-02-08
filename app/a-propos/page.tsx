// app/a-propos/page.tsx
import Image from "next/image";
import Container from "@/app/components/Container";
import Link from "next/link";
import { ROUTES } from "../_lib/siteRoutes";

type Administrator = {
  name: string;
  role: string; // rôle officiel dans Tianuni (short, visible)
  qualifications: string; // parcours / background (long, secondary)
  image: string;
};

const ADMINISTRATEURS: Administrator[] = [
  {
    name: "Bintou Zio Gouba",
    role: "Présidente de l’Association Tianuni",
    qualifications:
      "Superviseure en entretien ménager, conseillère en techniques de gestion hôtelière et gestionnaire événementielle.",
    image: "/admin/presi.png",
  },
  {
    name: "M. GOUSSA Adama Gérard",
    role: "Vice-président – Relations extérieures et affaires culturelles",
    qualifications:
      "Gestionnaire de formation, agent dans les secteurs de l’aviation et des télécommunications, spécialisé en marketing digital. Promoteur de la start-up G. Carrière Group. Membre actif de l’Union Panafricaine de la Jeunesse et Secrétaire Général de l’Association des Burkinabè du Grand Montréal (ABGM).",
    image: "/admin/admin_5.jpg",
  },
  {
    name: "Nabede Mereza",
    role: "Coordination générale : supervision de l’ensemble des activités, gestion des imprévus et suivi du plan d’action de l’Association Tianuni",
    qualifications:
      "Conseiller en automatisation du bâtiment - Organization: CHU de Québec",
    image: "/admin/admin4.jpeg",
  },
  {
    name: "Jessica Yasmine Gouba",
    role: "Trésorière de l’Association Tianuni",
    qualifications:
      "Étudiante en soins infirmiers auxiliaires et maquilleuse professionnelle.",
    image: "/admin/admin_4.jpg",
  },
  {
    name: "Ramata Diallo",
    role: "Membre du Conseil d’Administration",
    qualifications: "Conseillère agréée en avantages sociaux.",
    image: "/admin/admin_3.jpg",
  },

  {
    name: "Solange Teila Baro",
    role: "Membre du Conseil d’Administration",
    qualifications:
      "Analyste en intelligence d’affaires et intelligence artificielle.",
    image: "/admin/admin_2.jpg",
  },
];

function AdminCard({ name, role, qualifications, image }: Administrator) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <div className="relative aspect-square w-full bg-neutral-100">
        <Image
          src={image}
          alt={`${name} — ${role}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        {/* Always visible */}
        <div className="text-base font-semibold tracking-tight">{name}</div>
        <div className="mt-1 text-sm font-medium text-neutral-800">{role}</div>

        {/* Collapsible */}
        {/* <details className="mt-3">
          <summary className="cursor-pointer text-sm font-medium border px-3 py-1.5 w-fit rounded-lg text-neutral-700  hover:text-neutral-900">
            Lire plus
          </summary> */}

        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {qualifications}
        </p>
        {/* </details> */}
      </div>
    </div>
  );
}

export default function AproposPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Qui sommes-nous ?
      </h1>
      <p className="mt-4 max-w-3xl text-neutral-700">
        Tianuni est une association basée à Québec dont la mission est de
        valoriser et célébrer la richesse des cultures d’origines afro, tout en
        favorisant le dialogue et le brassage culturel avec la culture
        québécoise.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Notre équipe</h2>
        <p className="mt-2 max-w-2xl text-neutral-700">
          L’équipe d’administration de Tianuni travaille à valoriser les
          cultures d’origines afro et à renforcer le dialogue interculturel au
          Québec.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADMINISTRATEURS.map((p) => (
            <AdminCard
              key={p.image}
              name={p.name}
              role={p.role}
              image={p.image}
              qualifications={p.qualifications}
            />
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">Nos valeurs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Respect et valorisation des cultures</li>
            <li>Partage et échange interculturel</li>
            <li>Transmission des traditions</li>
            <li>Inclusion et diversité</li>
          </ul>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold tracking-tight">
            Nos objectifs
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              Mettre en avant la culture afro via événements, ateliers et
              expositions
            </li>
            <li>
              Promouvoir la compréhension interculturelle entre communautés afro
              et québécoise
            </li>
            <li>Organiser des activités pour familles, jeunes et adultes</li>
            <li>
              Favoriser l’expression artistique, musicale, culinaire et
              artisanale
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={ROUTES.activities}
          className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Voir nos activités
        </Link>
        <Link
          href={ROUTES.contact}
          className="rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
        >
          Nous contacter
        </Link>
      </div>
    </Container>
  );
}
