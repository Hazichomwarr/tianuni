import { prisma } from "@/app/_lib/prisma";

export async function GET() {
  const members = await prisma.member.findMany({
    orderBy: { createdAt: "desc" },
  });

  const header = [
    "Nom",
    "Prenom",
    "Email",
    "Telephone",
    "Type",
    "Motivations",
    "Paiement",
    "Date",
  ];

  const rows = members.map((m) => [
    m.lastName,
    m.firstName,
    m.email || "-",
    m.phone,
    m.memberType,
    m.motivations.join(", "),
    m.paymentStatus,
    m.createdAt.toISOString(),
  ]);

  const csv = [header, ...rows].map((row) => row.join(", ")).join("\n");

  console.log("csv:", csv);

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=members.csv",
    },
  });
}
