import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Có `src` -> render ảnh (object-cover, lấp đầy khung cha).
 * Không có `src` -> render khung placeholder để sau này thêm ảnh.
 * Khung cha cần có kích thước (aspect-* hoặc h-*), component tự fill.
 */
export default function ImagePlaceholder({ src, alt, className = "", sizes = "100vw", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      {src ? (
        <Image src={src.startsWith("/") ? basePath + src : src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-line text-muted">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className="px-2 text-center text-[11px] tracking-wide uppercase">{alt}</span>
        </div>
      )}
    </div>
  );
}
