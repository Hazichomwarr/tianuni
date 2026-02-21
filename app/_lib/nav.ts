// lib/nav.ts
import { ROUTES } from "./siteRoutes";

export type NavItem = { label: string; href: string };

export const HEADER_NAV: NavItem[] = [
  { label: "Accueil", href: ROUTES.home },
  { label: "À propos", href: ROUTES.about },
  { label: "Activités", href: ROUTES.activities },
  { label: "Galerie", href: ROUTES.gallery },
  { label: "Mission", href: ROUTES.mission },
  { label: "Impact", href: ROUTES.impact },
];

export const ACTIVITES_NAV: NavItem[] = [
  { label: "Événements culturels", href: ROUTES.activities_events },
  { label: "Ateliers interculturels", href: ROUTES.activities_workshops },
  { label: "Programmes & initiatives", href: ROUTES.activities_programs },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "Mentions légales", href: ROUTES.legal },
  { label: "Confidentialité", href: ROUTES.privacy },
];
