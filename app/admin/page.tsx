import Link from "next/link";
import { prisma } from "../_lib/prisma";
import Container from "@/app/components/Container";

export default async function AdminPage() {
  const members = await prisma.member.findMany({
    // where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">
        Admin — Membres Tianuni
      </h1>
      <p className="mt-2 text-neutral-600">Liste des membres enregistrés.</p>
      <div className="mt-6 flex justify-between items-center">
        <p className="rounded border border-neutral-300 text-neutral-700 text-sm font-semibold px-4 py-2 shadow-sm cursor-pointer">
          Total membres: {members.length}
        </p>
        <a
          href="/api/admin/export"
          className="rounded bg-neutral-900 px-4 py-2 text-white cursor-pointer hover:underline"
        >
          Exporter CSV
        </a>
      </div>

      <MembersTable members={members} />
    </Container>
  );
}

function MembersTable({ members }: { members: any[] }) {
  return (
    <div className="mt-8 overflow-x-scroll rounded-xl border">
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="border-t hover:bg-neutral-50">
              {/* <td className="px-4 py-3">{idx + 1}</td> */}
              <td className="px-4 py-3">
                {m.firstName} {m.lastName}
              </td>
              <td className="px-4 py-3">{m.email || "-"}</td>
              <td className="px-4 py-3">{m.phone}</td>

              <td className="px-4 py-3">{m.memberType}</td>
              <td className="px-4 py-3">{m.motivations.join(", ")}</td>
              <td className="px-4 py-3">
                <PaymentBadge status={m.paymentStatus} />
              </td>
              <td className="px-4 py-3">
                {new Date(m.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">
                <Link
                  href={`/admin/members/${m.id}`}
                  className="rounded bg-blue-900 text-white px-3 py-1 text-sm hover:bg-blue-800 hover:underline"
                >
                  Modifier
                </Link>
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
    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
      {status}
    </span>
  );
}
