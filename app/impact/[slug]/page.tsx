import { IMPACT } from "@/app/_lib/impact";
import Container from "@/app/components/Container";
import { notFound } from "next/navigation";

export default async function ImpactItem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = IMPACT.find((i) => i.slug === slug);
  if (!item) return notFound();

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
        <p>{item.description}</p>
        <p>{item.content}</p>
      </div>
    </Container>
  );
}
