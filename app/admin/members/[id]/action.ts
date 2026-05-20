"use server";

import { prisma } from "@/app/_lib/prisma";
import { redirect } from "next/navigation";

type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export default async function updateMember(formData: FormData) {
  const id = String(formData.get("id"));
  const paymentStatus = formData.get("paymentStatus") as PaymentStatus;
  const phone = String(formData.get("phone"));

  await prisma.member.update({
    where: { id },
    data: { phone, paymentStatus },
  });

  redirect("/admin");
}
