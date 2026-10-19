import type { ReactNode } from "react";

/** Nhóm nút tròn nằm trong một "viên thuốc" nền tối (social icons, nút ‹ ›) */
export default function IconGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface p-1 ${className}`}>
      {children}
    </div>
  );
}

export const iconCircle =
  "flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-white/80 transition-colors hover:bg-[#232327] hover:text-white disabled:opacity-40";
