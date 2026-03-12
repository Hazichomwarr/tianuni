import { prisma } from "../_lib/prisma";
import Container from "@/app/components/Container";

export default async function AdminPage() {
  const members = await prisma.member.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Admin — Membres Tianuni
      </h1>

      <p className="mt-2 text-neutral-600">Liste des membres enregistrés.</p>

      <MembersTable members={members} />
    </Container>
  );
}

function MembersTable({ members }: { members: any[] }) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-neutral-100">
          <tr>
            {/* <th>No</th> */}
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Type</th>
            <th>Motivations</th>

            <th>Paiement</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="border-t hover:bg-neutral-50">
              {/* <td className="px-4 py-3">{idx + 1}</td> */}
              <td className="px-4 py-3">
                {m.firstName} {m.lastName}
              </td>
              <td className="px-4 py-3">{m.email || "(Not provided)"}</td>
              <td className="px-4 py-3">{m.phone}</td>

              <td className="px-4 py-3">{m.memberType}</td>
              <td className="px-4 py-3">{m.motivations.join(", ")}</td>
              <td className="px-4 py-3">
                <PaymentBadge status={m.paymentStatus} />
              </td>
              <td className="px-4 py-3">
                {new Date(m.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PaymentBadge({ status }: { status: string }) {
  if (status === "paid") {
    return (
      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        payé
      </span>
    );
  }
  return (
    <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
      en attente
    </span>
  );
}
