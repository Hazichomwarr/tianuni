// app/galerie/[annee]/[slug]/page.tsx
import Image from "next/image";
import Container from "@/app/components/Container";

export type AlbumType = { src: string; alt: string };
export type Pictures = { slug: string; albums: AlbumType[] }[];

const PICTURES: Pictures = [
  {
    slug: "festival-origines",
    albums: [
      { src: "/images/img1.jpg", alt: "festival" },
      { src: "/images/img3.jpg", alt: "festival" },
      { src: "/images/presi.jpg", alt: "festival" },
      { src: "/images/img12.jpg", alt: "festival" },
      { src: "/images/img14.jpg", alt: "festival" },
      { src: "/images/img17.jpg", alt: "conference débat" },
    ],
  },
  {
    slug: "atelier-cuisine",
    albums: [
      { src: "/images/img4.jpg", alt: "atelier cuisine" },
      { src: "/images/img5.jpg", alt: "atelier cuisine" },
      { src: "/images/img6.jpg", alt: "atelier cuisine" },
      { src: "/images/img2.jpg", alt: "atelier cuisine" },
      { src: "/images/img11.jpg", alt: "conference débat" },
      { src: "/images/img23.jpeg", alt: "conference débat" },
    ],
  },
  {
    slug: "conference-histoire",
    albums: [
      { src: "/images/img10.jpg", alt: "conference débat" },
      { src: "/images/img8.jpg", alt: "conference débat" },
      { src: "/images/img16.jpg", alt: "festival" },
      { src: "/images/img9.jpg", alt: "conference débat" },
      { src: "/images/img15.jpg", alt: "conference débat" },
      { src: "/images/img13.jpg", alt: "conference débat" },
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
          Coming soon. Stay Tune...
        </h1>
      </Container>
    );

  const slugPics = PICTURES.filter((p) => p.slug === slug);

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
        {slugPics[0].albums.map((p) => (
          <div key={p.src} className="aspect-4/3 rounded-xl bg-neutral-100">
            <Image
              src={p.src}
              alt={p.alt}
              width={360}
              height={160}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
