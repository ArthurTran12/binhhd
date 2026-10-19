"use client";

import { useState } from "react";
import Link from "next/link";
import { allWorksUrl, projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import IconGroup, { iconCircle } from "@/components/ui/IconGroup";
import { ArrowRight, ArrowUpRight, Chevron } from "@/components/ui/Icons";

export default function Projects() {
  // Mobile: carousel 1 project / lần. Từ sm trở lên: lưới.
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const go = (step: number) => setIndex((i) => (i + step + total) % total);


  return (
    <section id="projects" className="container-page pt-12 pb-12 md:pt-[50px] md:pb-[100px]">
      <SectionHeading
        eyebrow="Portfolio"
        title="Explore My Selected Projects."
        action={
          <Button href={allWorksUrl}>
            View All Works <ArrowRight />
          </Button>
        }
      />

      <div className="mt-10 grid gap-x-6 gap-y-10 md:mt-[60px] lg:gap-x-9 lg:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Link key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className={`group block ${i === index ? "" : "max-sm:hidden"}`}>
            <ImagePlaceholder
              src={p.image}
              alt={p.title}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              fit="contain"
              className="aspect-[499/389] transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="mt-3 flex items-start justify-between gap-4 max-sm:flex-col max-sm:gap-3">
              <h3 className="max-w-[230px] text-[13px] leading-snug text-white/75 group-hover:text-white">{p.title}</h3>
              <span className="flex shrink-0 items-center gap-1.5 border-b border-line pb-1 text-[11px] text-white/80 uppercase group-hover:border-accent-soft group-hover:text-accent-soft">
                View Project <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {total > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button type="button" aria-label="Previous project" onClick={() => go(-1)} className={iconCircle}>
            <Chevron dir="left" />
          </button>
          <span className="text-[11px] text-muted tabular-nums">
            {index + 1} / {total}
          </span>
          <button type="button" aria-label="Next project" onClick={() => go(1)} className={iconCircle}>
            <Chevron />
          </button>
        </div>
      )}
    </section>
  );
}
