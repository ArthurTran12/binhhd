import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  download?: boolean;
};

export default function Button({ href, children, variant = "solid", className = "", download }: Props) {
  const base = "inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-xs md:px-5 md:py-3 transition-colors";
  const styles =
    variant === "solid"
      ? "bg-surface-2 text-white/90 hover:bg-[#232327] hover:text-white"
      : "border border-line text-white/80 hover:border-white/40 hover:text-white";
  return (
    <Link href={href} download={download} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
