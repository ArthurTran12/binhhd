import { skills } from "@/data/portfolio";
import { GlowStar } from "@/components/ui/Icons";

export default function SkillsMarquee() {
  // Nhân đôi danh sách để chạy vòng lặp liền mạch
  const items = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-line bg-band py-3.5">
      <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center gap-5 text-[11px] tracking-wide whitespace-nowrap text-white/70 uppercase">
            <GlowStar className="h-3 w-3" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
