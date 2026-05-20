// _components/AlbumGrid.tsx

"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type AlbumItem = {
  src: string;
  alt: string;
  label?: { title?: string; text: string };
};

export default function AlbumGrid({ items }: { items: AlbumItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = items[activeIndex];

  const hasCaption = !!active?.label?.title || !!active?.label?.text;

  const openAt = (idx: number) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);

  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  // Lock scroll + keyboard controls
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  // Small perf: precompute thumbnails sizes string once
  const thumbSizes = useMemo(() => "(min-width: 768px) 33vw, 100vw", []);

  return (
    <>
      {/* GRID */}
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((p, idx) => (
          <button
            key={p.src}
            type="button"
            onClick={() => openAt(idx)}
            className="group overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900"
            aria-label={`Open image ${idx + 1}`}
          >
            <div className="relative aspect-4/3">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={thumbSizes}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Optional mini caption line */}
            {p.label?.title ? (
              <div className="px-3 py-2 text-left text-sm text-neutral-700">
                <span className="line-clamp-1">{p.label.title}</span>
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {/* MODAL */}
      {open ? (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            onClick={close}
            aria-label="Close modal"
          />

          {/* Modal content */}
          <div className="relative z-1000 w-full max-w-6xl">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm text-white/80">
                {activeIndex + 1} / {items.length}
              </div>

              <button
                type="button"
                onClick={close}
                className="rounded-full bg-white/10 px-3 py-2 text-sm text-white backdrop-blur hover:bg-white/15"
              >
                Close (Esc)
              </button>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
              {/* Image panel */}
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <div className="relative aspect-16/10 sm:aspect-video">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Prev / Next arrows */}
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/15"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/15"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>

              {/* Caption panel */}
              <aside className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5">
                <h3 className="text-base font-semibold text-neutral-900">
                  {active.label?.title ?? "Photo"}
                </h3>

                {active.label?.text ? (
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-neutral-700">
                    {active.label.text}
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-neutral-500">
                    Aucune description pour cette photo.
                  </p>
                )}

                {hasCaption ? (
                  <p className="mt-4 text-xs text-neutral-400">
                    Tip: use ← → on your keyboard
                  </p>
                ) : null}
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
