import Container from "../components/Container";
import MemberForm from "../components/MemberForm";

export default function page() {
  return (
    <section className="bg-neutral-100 bg-[url('/images/presi_talk.jpeg')] bg-cover bg-center px-4 py-12">
      <Container>
        <MemberForm />;
      </Container>
    </section>
  );
}
