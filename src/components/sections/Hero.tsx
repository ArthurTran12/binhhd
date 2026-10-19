import Link from "next/link";
import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";

export function LetsWorkTogether({ className = "" }: { className?: string }) {
  return (
    <div className={`text-[28px] leading-[1.35] font-medium uppercase md:text-[36px] lg:text-[44px] ${className}`}>
      <div className="flex items-center gap-3">
        <span>Let&apos;s</span>
        <Link
          href="#contact"
          aria-label="Contact"
          className="group inline-flex h-8 w-16 animate-glow-pulse items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent-soft md:h-10 md:w-[76px]"
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-5 md:w-5" />
        </Link>
      </div>
      <div>Work Together</div>
    </div>
  );
}

/** Nhóm vòng tròn đồng tâm; chỉ nửa trong khung được nhìn thấy */
function Rings({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" aria-hidden className={`pointer-events-none absolute left-1/2 h-[300px] w-[300px] -translate-x-1/2 ${className}`}>
      {[140, 104, 68].map((r) => (
        <circle key={r} cx="150" cy="150" r={r} stroke="white" strokeOpacity="0.035" strokeWidth="18" />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Rings className="-top-[150px]" />
      <Rings className="-bottom-[150px]" />

      <div className="container-page relative flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-[78px]">
        <div>
          <p className="mb-3 text-[11px] tracking-widest text-muted uppercase">{profile.role}</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-[44px] lg:text-[58px]">{profile.name}</h1>
        </div>
        <LetsWorkTogether />
      </div>
    </section>
  );
}
