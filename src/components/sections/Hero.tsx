import Link from "next/link";
import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";

export function LetsWorkTogether({ className = "" }: { className?: string }) {
  return (
    <div className={`text-2xl leading-tight font-medium uppercase md:text-4xl ${className}`}>
      <div className="flex items-center gap-3">
        <span>Let&apos;s</span>
        <Link
          href="#contact"
          aria-label="Contact"
          className="inline-flex h-8 w-16 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent-soft md:h-10 md:w-20"
        >
          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
        </Link>
      </div>
      <div>Work Together</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Vòng tròn đồng tâm trang trí */}
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[160, 260, 360].map((s) => (
          <div
            key={s}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-white/[0.03]"
            style={{ width: s, height: s }}
          />
        ))}
      </div>

      <div className="container-page relative flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <p className="mb-3 text-[11px] tracking-widest text-muted uppercase">{profile.role}</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{profile.name}</h1>
        </div>
        <LetsWorkTogether />
      </div>
    </section>
  );
}
