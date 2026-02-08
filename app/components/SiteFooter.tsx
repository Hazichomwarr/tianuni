// components/SiteFooter.tsx

import Link from "next/link";
import { SITE } from "../_lib/site";
import Container from "./Container";
import { ROUTES } from "../_lib/siteRoutes";
import { FOOTER_NAV } from "../_lib/nav";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="font-semibold">{SITE.name}</div>
            <p className="text-sm text-neutral-700">{SITE.tagline}</p>

            <div className="mt-2">
              {SITE.phones.map((p) => (
                <div key={p}>{p}</div>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <a className="underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-3 font-semibold">Navigation</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <Link className="hover:underline" href={ROUTES.about}>
                  À propos
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/activites">
                  Activités
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/galerie">
                  Galerie
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/participer">
                  Participer
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* INFOS */}
          <div>
            <div className="mb-3 font-semibold">Infos</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link className="hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xs text-neutral-500">
              © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
