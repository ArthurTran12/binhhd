import Link from "next/link";
import { asset } from "@/lib/asset";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  /** true hoặc tên file muốn lưu */
  download?: boolean | string;
};

export default function Button({ href, children, variant = "solid", className = "", download }: Props) {
  const base = "inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-xs md:px-5 md:py-3 transition-colors";
  const styles =
    variant === "solid"
      ? "bg-surface-2 text-white/90 hover:bg-[#232327] hover:text-white"
      : "border border-line text-white/80 hover:border-white/40 hover:text-white";
  // Link ngoài (http...) mở tab mới
  const external = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
  // File tải về: dùng <a> thường để trình duyệt tự tải, không đi qua router của Next
  if (download) {
    return (
      <a href={asset(href)} download={download === true ? "" : download} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...external}>
      {children}
    </Link>
  );
}
