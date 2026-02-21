// _lib/siteRoutes.ts

//Centralized routes
export const ROUTES = {
  home: "/",
  about: "/a-propos",
  activities: "/activites",
  mission: "/nos-valeurs",
  gallery: "/galerie",
  participate: "/participer",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/politique-confidentialite",

  // Activities (reduced)
  activities_events: "/activites/evenements",
  activities_workshops: "/activites/ateliers",
  activities_programs: "/activites/programmes",
} as const;
