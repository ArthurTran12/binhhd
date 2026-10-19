import { skills } from "@/data/portfolio";
import { Sparkle } from "@/components/ui/Icons";

export default function SkillsMarquee() {
  // Nhân đôi danh sách để chạy vòng lặp liền mạch
  const items = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-line py-3">
      <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center gap-8 text-[11px] tracking-wider whitespace-nowrap text-white/70 uppercase">
            <Sparkle className="h-2.5 w-2.5 text-accent-soft" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
