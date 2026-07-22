"use client";

import { useState } from "react";

const CATEGORIES = [
  "All Star",
  "Coturno",
  "Camiseta",
  "Baby Look",
  "Infantil",
  "Kits",
  "Acessórios",
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blood/40 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#topo"
          className="font-display text-xl tracking-wide text-paper sm:text-2xl"
        >
          ROCK<span className="text-blood">N&apos;</span>ROLL
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href="#categorias"
              className="font-mono text-xs uppercase tracking-wider text-smoke transition-colors hover:text-gold"
            >
              {cat}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5521996049885"
            className="hidden rounded-full border border-gold/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-ink sm:inline-block"
          >
            (21) 99604-9885
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Abrir menu de categorias"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-blood/40 bg-ink px-6 py-4 lg:hidden"
        >
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href="#categorias"
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 font-mono text-sm uppercase tracking-wider text-smoke hover:bg-ink-soft hover:text-gold"
            >
              {cat}
            </a>
          ))}
          <a
            href="https://wa.me/5521996049885"
            className="mt-2 rounded-full border border-gold/60 px-4 py-2 text-center font-mono text-xs uppercase tracking-wider text-gold"
          >
            (21) 99604-9885
          </a>
        </nav>
      )}
    </header>
  );
}
