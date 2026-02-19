// components/Container.tsx
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 bg-neutral-50">
      {children}
    </div>
  );
}
