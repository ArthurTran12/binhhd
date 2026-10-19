"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight, Chevron } from "@/components/ui/Icons";

export default function Experience() {
  const [index, setIndex] = useState(0);
  const exp = experiences[index];
  const total = experiences.length;

  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const navBtn =
    "flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-white/80 hover:bg-line hover:text-white disabled:opacity-40";

  return (
    <section id="experience" className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="My Work Experience"
        action={
          <>
            {/* Mobile: nút như thiết kế */}
            <Button href="#experience" variant="solid" className="md:hidden">
              View All Experience <ArrowRight />
            </Button>
            <div className="flex gap-2 max-md:hidden">
            <button type="button" aria-label="Previous" onClick={() => go(-1)} disabled={total < 2} className={navBtn}>
              <Chevron dir="left" />
            </button>
            <button type="button" aria-label="Next" onClick={() => go(1)} disabled={total < 2} className={navBtn}>
              <Chevron />
            </button>
            </div>
          </>
        }
      />

      <article key={index} className="mt-12 rounded-xl border border-line bg-surface p-5 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-medium uppercase md:text-base">{exp.company}</h3>
          <span className="text-sm text-white/80">{exp.period}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary}</p>

        <p className="mt-6 mb-3 text-[11px] text-white/60">Featured Projects</p>
        <div className="flex flex-col gap-2">
          {exp.projects.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-bg/40 p-4">
              <h4 className="text-xs font-medium uppercase md:text-sm">{p.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Mobile: nút chuyển chỉ hiện khi có nhiều hơn 1 công ty */}
      {total > 1 && (
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className={navBtn}>
            <Chevron dir="left" />
          </button>
          <button type="button" aria-label="Next" onClick={() => go(1)} className={navBtn}>
            <Chevron />
          </button>
        </div>
      )}
    </section>
  );
}
