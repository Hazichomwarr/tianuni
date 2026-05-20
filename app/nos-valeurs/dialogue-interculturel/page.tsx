import Container from "@/app/components/Container";

export default function DialoguePage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Dialogue interculturel
      </h1>

      <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
        <p>
          Nous favorisons le dialogue entre les communautés afro et québécoise.
        </p>

        <p>
          Le respect, l’écoute et le partage permettent de construire des ponts
          durables.
        </p>
      </div>
    </Container>
  );
}
