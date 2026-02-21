// components/Container.tsx
import React from "react";
import PageTransition from "./ui/PageTransition";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
    </PageTransition>
  );
}
