"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import IconGroup, { iconCircle } from "@/components/ui/IconGroup";
import { ArrowRight, Chevron } from "@/components/ui/Icons";

export default function Experience() {
  const [index, setIndex] = useState(0);
  const exp = experiences[index];
  const total = experiences.length;

  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const nav = (
    <IconGroup>
      <button type="button" aria-label="Previous" onClick={() => go(-1)} disabled={total < 2} className={iconCircle}>
        <Chevron dir="left" />
      </button>
      <button type="button" aria-label="Next" onClick={() => go(1)} disabled={total < 2} className={iconCircle}>
        <Chevron />
      </button>
    </IconGroup>
  );

  return (
    <section id="experience" className="container-page py-12 md:py-[50px]">
      <SectionHeading
        eyebrow="Experience"
        title="My Work Experience"
        action={
          <>
            {/* Mobile: nút như thiết kế */}
            <Button href="#experience" className="md:hidden">
              View All Experience <ArrowRight />
            </Button>
            <div className="max-md:hidden">{nav}</div>
          </>
        }
      />

      <article key={index} className="mt-10 rounded-xl border border-line bg-surface p-5 md:mt-[60px] md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-medium uppercase md:text-lg lg:text-[22px]">{exp.company}</h3>
          <span className="text-base text-white/80 md:text-lg lg:text-[22px]">{exp.period}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{exp.summary}</p>

        <p className="mt-7 mb-3 text-[11px] text-white/70">Featured Projects</p>
        <div className="flex flex-col gap-2">
          {exp.projects.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-surface-3 px-4 py-3.5">
              <h4 className="text-sm font-medium uppercase md:text-base">{p.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted md:text-[13px]">{p.description}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Mobile: nút chuyển chỉ hiện khi có nhiều hơn 1 công ty */}
      {total > 1 && <div className="mt-4 flex justify-center md:hidden">{nav}</div>}
    </section>
  );
}
