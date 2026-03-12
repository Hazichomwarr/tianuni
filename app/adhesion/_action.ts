"use server";

import { redirect } from "next/navigation";
import { ActionState } from "../components/MemberForm";
import { prisma } from "@/app/_lib/prisma";

function s(v: FormDataEntryValue | null) {
  return typeof v === "string" ? v.trim() : "";
}

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function registerMember(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const lastName = s(formData.get("lastName"));
  const firstName = s(formData.get("firstName"));
  const address = s(formData.get("address"));
  const birthDate = s(formData.get("birthDate"));
  const memberType = s(formData.get("memberType"));

  const email = s(formData.get("email"));
  const phone = s(formData.get("phone"));

  // checkbox group: motivations
  const motivations = formData.getAll("motivations").map((v) => String(v));

  const agreementAccepted = s(formData.get("agreement")); // "on" if checked
  const paymentAccepted = s(formData.get("payment"));
  const honey = s(formData.get("company")); // honeypot

  // Anti-spam: if bot filled hidden field, silently redirect
  if (honey) redirect("/adhesion/success");

  const errors: Record<string, string> = {};

  if (lastName.length < 2) errors.lastName = "Nom requis.";
  if (firstName.length < 2) errors.firstName = "Prénom requis.";
  if (address.length < 5) errors.address = "Adresse requise.";
  if (!birthDate) errors.birthDate = "Date de naissance requise.";
  if (!memberType) errors.memberType = "Choisissez un type de membre.";

  if (email && !isEmail(email)) errors.email = "Email invalide.";
  if (phone.length < 7) errors.phone = "Téléphone invalide.";

  if (motivations.length === 0)
    errors.motivations = "Choisissez au moins une motivation.";
  if (agreementAccepted !== "on")
    errors.agreement = "Veuillez confirmer votre engagement.";
  if (paymentAccepted !== "on")
    errors.payment = "Vous devez accepter de payer les frais d'adhesion.";

  if (Object.keys(errors).length) {
    return { ok: false as const, errors };
  }

  console.log(lastName, firstName, agreementAccepted, motivations);

  //Prevent duplicates
  const existing = await prisma.member.findFirst({
    where: {
      OR: [{ email: email || undefined }, { phone }],
    },
  });

  if (existing) {
    return {
      ok: false as const,
      errors: { email: "Un membre avec cet email ou téléphone existe déjà." },
    };
  }

  // Store member request (DB)
  await prisma.member.create({
    data: {
      lastName,
      firstName,
      address,
      birthDate,
      memberType,

      email: email || null,
      phone,
      motivations,

      paymentAccepted: paymentAccepted === "on",
      agreementAccepted: agreementAccepted === "on",
    },
  });
  // ✅ TODO next:
  // - create Stripe payment intent / checkout
  // For now:
  redirect("/adhesion/success");
}
