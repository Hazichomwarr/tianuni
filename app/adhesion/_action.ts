//adhesion/_action.ts
"use server";

import { redirect } from "next/navigation";

function s(v: FormDataEntryValue | null) {
  return typeof v === "string" ? v.trim() : "";
}

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// validate + redirect for NOW.
// Later, we’ll store in DB/Sheet and create Stripe payment.
export async function registerMember(formData: FormData) {}
