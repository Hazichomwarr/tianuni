// components/SiteHeader.tsx

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { ROUTES } from "../_lib/siteRoutes";
import { HEADER_NAV } from "../_lib/nav";

export default function SiteHeader() {
  return (
    <header className="border-b">
      <Container>
        {/* LOGO */}
        <div className="flex items-center justify-between py-4">
          <Link href={ROUTES.home} className="flex items-center gap-3">
            <Image
              src="/logo2.jpeg"
              alt="Logo Tianuni"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span className="sr-only">Tianuni</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden gap-6 md:flex">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
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
        </div>
      </Container>
    </header>
  );
}
