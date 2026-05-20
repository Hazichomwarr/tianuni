"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function FloatingDonationButton() {
  return (
    <Link
      href="/payment?type=donation"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        rounded-full
        bg-amber-500
        px-5 py-3
        text-sm font-semibold text-black
        shadow-xl animate-pulse
        transition-all duration-300
        hover:scale-105 hover:bg-amber-400
      "
    >
      <Heart className="h-4 w-4 fill-current" />
      Faire un don
    </Link>
  );
}
