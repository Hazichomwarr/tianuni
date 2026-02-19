// app/galerie/[annee]/[slug]/page.tsx
import Image from "next/image";
import Container from "@/app/components/Container";
import { notFound } from "next/navigation";
// import AlbumGrid from "@/app/components/AlbumGrid";

export type AlbumType = {
  src: string;
  alt: string;
  label?: { title?: string; text: string };
};
export type Pictures = { slug: string; albums: AlbumType[] }[];

const PICTURES: Pictures = [
  {
    slug: "festival-origines",
    albums: [
      {
        src: "/images/parrain&presi.jpg",
        alt: "festival",
        label: {
          title:
            "Le parrain du festival et la Presidente de l'association Tianuni.",
          text: "Le parrain du festival, monsieur Amadou Kienou en compagnie de la présidente de l’association Tianuni.",
        },
      },
      {
        src: "/images/img17.jpg",
        alt: "conference débat",
        label: {
          title:
            "Mot du Président du Comité d’Organisation ,Québec, le 9 août 2025",
          text: `
En tant que Président du comité d’organisation et chargé des affaires culturelles et extérieures de l’Association Tianuni, je souhaite la bienvenue à toutes et à tous à cette deuxième édition du Festival Afro Mandingue.

Nous organisons ce festival pour préserver, valoriser et transmettre la richesse des cultures mandingues, tout en créant un espace de rencontre et d’unité entre les communautés. C’est l’essence même de Tianuni, qui signifie rassembler, unir et avancer ensemble.

Je remercie nos artistes, partenaires et bénévoles pour leur engagement, ainsi que notre parrain, Monsieur Amadou Kienou, pour son soutien précieux.

Que cette édition soit un moment de partage, d’harmonie et de célébration.

Adama Gérard GOUSSA
Président du Comité d’Organisation
Chargé des Affaires Culturelles et Extérieures
Association Tianuni`,
        },
      },
      {
        src: "/images/presi.jpg",
        alt: "festival",
        label: {
          title:
            "Mot de bienvenue de la Présidente de l'association lors de la 2ieme édition de la soirée afro mandingue le 09 Août2025 à Québec.",
          text: ` 

Au nom de l’Association Tianuni, je souhaite la bienvenue à toutes et à tous à cette deuxième édition du Festival Afro Mandingue. Nous sommes heureux de vous accueillir à Québec pour célébrer la richesse de nos cultures et la vitalité de nos talents.

Nous exprimons notre profonde gratitude à notre parrain, Monsieur Amadou Kienou, pour son soutien précieux et son engagement envers la promotion du patrimoine mandingue.

Que cette édition soit un moment de partage, de découverte et d’unité.

La Présidente de l’Association Tianuni`,
        },
      },
      {
        src: "/images/rubanOfficiel.jpg",
        alt: "festival",
        label: {
          title:
            "Coupure officielle du ruban lors de l’inauguration de l’Association Tianuni",
          text: "Coupure officielle du ruban, en présence de la présidente Madame Zio Bintou, du Président de la Chambre de Commerce et d’Industrie Burkinabè au Canada M. Kaboré Désiré et son conseil d’administration, des présidents d’associations et institutions internationales invitées, du délégué suppléant du H.C.B.E. Zone II, ainsi que des membres fondateurs de Tianuni.",
        },
      },
      {
        src: "/images/manequins.jpg",
        alt: "festival",
        label: {
          title: "Photo de famille des mannequins",
          text: "Mannequins, réunis dans une posture solennelle pour immortaliser ce moment d’élégance, de fierté et de représentation culturelle. Une image qui célèbre l’unité, la diversité des styles et l’engagement artistique de celles et ceux qui ont porté les créations avec grâce et dignité tout au long de la parade.",
        },
      },
      {
        src: "/images/styliste.jpg",
        alt: "festival",
        label: {
          title: "Ben Isaac Compaoré le styliste",
          text: "Défilé cérémonial du créateur burkinabè Ben Isaac Compaoré, venu présenter ses œuvres lors de la parade de mode, dans un esprit d’honneur, d’élégance et de valorisation du patrimoine africain.",
        },
      },
      {
        src: "/images/regie_technic.jpg",
        alt: "festival",
        label: {
          title: "La régie technique",
          text: "La régie technique assurant la gestion du son, de la musique et de la coordination audiovisuelle, garantissant le bon déroulement de l’ensemble des prestations du festival.",
        },
      },
      {
        src: "/images/concert.jpg",
        alt: "festival",
        label: {
          title: "Prestation d’artistes africains et canadiens",
          text: "Prestation d’artistes africains et canadiens lors du Festival Afro Mandingue, mettant en valeur la richesse des traditions musicales et le dialogue culturel entre les deux continents.",
        },
      },
      // {
      //   src: "/images/buffetService.jpg",
      //   alt: "atelier cuisine",
      //   label: {
      //     title: "Moment de partage autour du buffet",
      //     text: "Les participants se retrouvent pour savourer des mets variés, échanger, tisser des liens et renforcer la convivialité qui caractérise l’esprit du festival. Un espace de réseautage naturel, où la culture, la gastronomie et les rencontres humaines se rejoignent dans une ambiance chaleureuse et inclusive.",
      //   },
      // },
    ],
  },
  {
    slug: "atelier-cuisine",
    albums: [
      {
        src: "/images/buffetService.jpg",
        alt: "atelier cuisine",
        label: {
          title: "Moment de partage autour du buffet",
          text: "Les participants se retrouvent pour savourer des mets variés, échanger, tisser des liens et renforcer la convivialité qui caractérise l’esprit du festival. Un espace de réseautage naturel, où la culture, la gastronomie et les rencontres humaines se rejoignent dans une ambiance chaleureuse et inclusive.",
        },
      },
      { src: "/images/img5.jpg", alt: "atelier cuisine" },
      { src: "/images/img6.jpg", alt: "atelier cuisine" },
      { src: "/images/img2.jpg", alt: "atelier cuisine" },
      // {
      //   src: "/images/kakemono.jpg",
      //   alt: "conference débat",
      //   label: {
      //     title: "Le kakémono de l’Association Tianuni",
      //     text: "Symbole de notre engagement pour la culture, l’unité et la transmission des valeurs mandingues au sein de la communauté.",
      //   },
      // },
      // { src: "/images/img23.jpeg", alt: "conference débat" },
    ],
  },
  {
    slug: "conference-histoire",
    albums: [
      {
        src: "/images/img10.jpg",
        alt: "conference débat",
        label: {
          title: "Moment de recueillement et d’unité",
          text: "Moment de recueillement et d’unité lors de l’hymne, rassemblant les participants autour des valeurs de respect, de diversité et de cohésion communautaire.",
        },
      },
      { src: "/images/img8.jpg", alt: "conference débat" },

      // {
      //   src: "/images/manequins3.jpg",
      //   alt: "conference débat",
      //   label: {
      //     title: "Defilé des manequins",
      //     text: "Les manequins dans les styles et l’engagement artistique de celles et ceux qui ont porté les créations avec grâce et dignité tout au long de la parade.",
      //   },
      // },
      {
        src: "/images/img15.jpg",
        alt: "conference débat",
        label: {
          title:
            "Discours du Président de la Chambre de Commerce et d’Industrie Burkinabè au Canada",
          text: `
Mesdames et Messieurs,
Chers invités,
Chers partenaires communautaires,

C’est pour moi un réel honneur de prendre la parole à l’occasion de l’inauguration officielle de l’Association Tianuni. Je tiens à saluer la vision, l’engagement et la détermination de ses membres fondateurs, qui ont su créer un espace dédié à la culture, à l’unité et au rayonnement de notre communauté.

La Chambre de Commerce et d’Industrie Burkinabè au Canada accorde une grande importance aux initiatives qui renforcent la cohésion, valorisent notre patrimoine et contribuent au développement social et économique de la diaspora. Tianuni s’inscrit pleinement dans cette dynamique, en offrant une plateforme de rassemblement, de transmission et de collaboration.

Je félicite la présidente, Madame Zio Bintou, ainsi que toute son équipe, pour ce travail remarquable. Votre engagement témoigne de la vitalité et du leadership de notre communauté ici au Canada.

Au nom de la CCIBC, je vous assure de notre disponibilité à accompagner Tianuni dans ses projets, dans un esprit de partenariat, de solidarité et de progrès partagé.

Je souhaite plein succès à cette association et à toutes les initiatives qui contribueront à faire briller nos valeurs et notre identité.

Je vous remercie.`,
        },
      },
      {
        src: "/images/mc.jpg",
        alt: "conference débat",
        label: {
          title: "Maître de cérémonie",
          text: "Le maître de cérémonie assurant avec brio la présentation et la coordination de la soirée, guidant le public à travers les différentes étapes du programme avec professionnalisme et élégance.",
        },
      },
      // {
      //   src: "/images/manequins2.jpeg",
      //   alt: "festival",
      //   label: {
      //     title: "Photo de couverture des manequins",
      //     text: "Une photo portrait de quelques manequins apres le defilé.",
      //   },
      // },
    ],
  },
];

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ annee: string; slug: string }>;
}) {
  const { annee, slug } = await params;

  if (annee === "2026")
    return (
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">
          Coming soon. Bientôt disponible.
        </h1>
      </Container>
    );

  const album = PICTURES.find((p) => p.slug === slug);
  if (!album) return notFound();

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Album</h1>
      <p className="mt-2 text-sm text-neutral-500">
        {annee} — {slug}
      </p>

      <p className="mt-4 max-w-2xl text-neutral-700">
        Quelques beaux souvenirs de notre festival {annee}. Devenez membre pour
        partager ces moments avec nous.
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {album.albums.map((p) => (
          <div
            key={p.src}
            className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200"
          >
            <div className="relative aspect-3/3">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            {p.label && (
              <div className="p-4">
                <details>
                  <summary className="cursor-pointer select-none text-sm font-medium text-neutral-900">
                    {p.label.title ?? "Détails"}{" "}
                    <span className="font-normal text-neutral-400">
                      — Lire plus
                    </span>
                  </summary>
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-neutral-700">
                    {p.label.text}
                  </p>
                </details>
              </div>
            )}
          </div>
        ))}
        {/* <AlbumGrid items={album.albums} /> */}
      </div>
    </Container>
  );
}
