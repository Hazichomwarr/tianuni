"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { ROUTES } from "../_lib/siteRoutes";
import { HEADER_NAV } from "../_lib/nav";
import { useState } from "react";
import AnnouncementBar from "./AnouncementBar";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b px-6 py-2">
      <AnnouncementBar />
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link href={ROUTES.home} className="flex items-center gap-3">
          <Image
            src="/logo2.jpeg"
            alt="Association Tianuni"
            width={75}
            height={75}
            priority
            className="rounded-full bg-gray-100 p-1.5 object-contain shadow-lg"
            sizes="(max-width: 768px) 56px, 64px"
          />
          <span className="sr-only">Tianuni</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden gap-6 md:flex">
          {HEADER_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-700 text-sm transition hover:text-neutral-900 hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/event/afro-mandingue-2026"
            className="text-neutral-700 text-sm transition hover:text-neutral-900 hover:underline"
          >
            Evenement
          </Link>
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={ROUTES.participate}
            className="rounded-md border px-3 py-2 text-sm hover:bg-neutral-50"
          >
            Participer
          </Link>
          <Link
            href={ROUTES.contact}
            className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Contact
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-black dark:bg-white" />
            <span className="block h-0.5 w-6 bg-black dark:bg-white" />
            <span className="block h-0.5 w-6 bg-black dark:bg-white" />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="pb-4 md:hidden">
          <div className="flex flex-col gap-4 border-t pt-4">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/event/afro-mandingue-2026"
              className="text-neutral-700 text-sm transition hover:text-neutral-900 hover:underline"
              onClick={() => setOpen(false)}
            >
              Evenement
            </Link>
            <div className="mt-2 flex flex-col gap-2">
              <Link
                href={ROUTES.participate}
                onClick={() => setOpen(false)}
                className="rounded-md border px-3 py-2 text-sm text-center hover:bg-neutral-50"
              >
                Participer
              </Link>
              <Link
                href={ROUTES.contact}
                onClick={() => setOpen(false)}
                className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white text-center hover:bg-neutral-800"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
