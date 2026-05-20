import { prisma } from "@/app/_lib/prisma";
import Container from "@/app/components/Container";
import { notFound } from "next/navigation";
import updateMember from "./action";

export default async function EditMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = await prisma.member.findUnique({
    where: { id },
  });
  if (!member) return notFound();

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Modifier membre{" "}
      </h1>
      <p className="text-sm font-medium text-neutral-500">
        {" "}
        {member.firstName}
      </p>
      <form
        action={updateMember}
        className="mt-8 space-y-4 max-w-xl flex flex-col gap-3"
      >
        <input type="hidden" name="id" value={member.id} />

        <label className="text-lg font-medium">
          {" "}
          Status du Payement
          <select
            name="paymentStatus"
            defaultValue={member.paymentStatus}
            className="w-full border border-neutral-300 text-sm rounded px-3 py-2 cursor-pointer"
          >
            <option value="pending">En attente</option>
            <option value="paid">Payé</option>
            <option value="failed">Echoué</option>
            <option value="refunded">Remboursé</option>
          </select>
        </label>
        <label className="text-lg font-medium">
          Téléphone
          <input
            name="phone"
            defaultValue={member.phone}
            className="w-full border border-neutral-300 text-sm rounded px-3 py-2 cursor-pointer"
          />
        </label>
        <button
          type="submit"
          className="rounded bg-neutral-900 px-4 py-2 text-white cursor-pointer hover:bg-neutral-800 active:scale-95"
        >
          Enregistrer
        </button>
      </form>
    </Container>
  );
}
