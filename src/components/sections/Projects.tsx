"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Chevron } from "@/components/ui/Icons";

export default function Projects() {
  // Mobile: carousel 1 project / lần. Từ sm trở lên: lưới.
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const navBtn =
    "flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-white/80 hover:bg-line hover:text-white";

  return (
    <section id="projects" className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Explore My Selected Projects."
        action={
          <Button href="#projects" variant="solid">
            View All Works <ArrowRight />
          </Button>
        }
      />

      <div className="mt-12 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Link key={p.title} href={p.href} className={`group block ${i === index ? "" : "max-sm:hidden"}`}>
            <ImagePlaceholder
              src={p.image}
              alt={p.title}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              fit="contain"
              className="aspect-[499/389] transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="mt-3 flex items-start justify-between gap-4 max-sm:flex-col max-sm:gap-3">
              <h3 className="text-xs leading-snug text-white/80 group-hover:text-white max-sm:text-sm">{p.title}</h3>
              <span className="flex shrink-0 items-center gap-1 text-[11px] text-white/80 uppercase group-hover:text-accent-soft">
                View Project <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {total > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button type="button" aria-label="Previous project" onClick={() => go(-1)} className={navBtn}>
            <Chevron dir="left" />
          </button>
          <span className="text-[11px] text-muted tabular-nums">
            {index + 1} / {total}
          </span>
          <button type="button" aria-label="Next project" onClick={() => go(1)} className={navBtn}>
            <Chevron />
          </button>
        </div>
      )}
    </section>
  );
}
