"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      {/* Đường kẻ dọc 2 bên như design (desktop) */}
      <div className="mx-auto max-w-[1264px] md:border-x md:border-line">
      <div className="container-page flex h-16 items-center justify-between md:h-[88px]">
        <Link href="/" className="text-base font-medium tracking-wide md:text-xl">
          {profile.brand}
        </Link>

        <Button href="#contact" className="px-5 py-3 max-md:hidden">
          Contact Me
        </Button>

        {/* Mobile: nút hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M10 17h10" />}
          </svg>
        </button>
      </div>
      </div>

      {/* Mobile: menu xổ xuống */}
      {open && (
        <nav className="border-t border-line bg-bg md:hidden">
          <ul className="container-page flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-white/80 uppercase hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
