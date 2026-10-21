type IconProps = { className?: string };

export const ArrowUpRight = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowRight = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Chevron = ({ className = "h-4 w-4", dir = "right" }: IconProps & { dir?: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
    <path d={dir === "right" ? "m9 6 6 6-6 6" : "m15 6-6 6 6 6"} />
  </svg>
);

export const Sparkle = ({ className = "h-3 w-3" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
  </svg>
);

export const Plus = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
    <path d="M12 3v18M3 12h18" />
  </svg>
);

export const Mail = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Phone = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const SocialIcon = ({ name, className = "h-3.5 w-3.5" }: IconProps & { name: string }) => {
  const paths: Record<string, string> = {
    facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8Z",
    behance:
      "M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM20.33 11.25a2.077 2.077 0 0 0-1.632-.596 2.585 2.585 0 0 0-1.183.237 2.36 2.36 0 0 0-.75.587 2.169 2.169 0 0 0-.401.75 3.388 3.388 0 0 0-.137.708h4.773a3.39 3.39 0 0 0-.67-1.686ZM15.7 6.077h5.964v1.452H15.7V6.077ZM7.043 4.5c.66-.005 1.32.057 1.968.187.555.111 1.083.33 1.553.645.438.304.786.719 1.008 1.205.252.585.374 1.218.355 1.856a3.44 3.44 0 0 1-.537 1.983 3.983 3.983 0 0 1-1.588 1.307 3.736 3.736 0 0 1 2.164 1.461c.497.783.744 1.701.705 2.629a4.47 4.47 0 0 1-.477 2.124 4.215 4.215 0 0 1-1.286 1.468 5.71 5.71 0 0 1-1.843.843 8.18 8.18 0 0 1-2.123.274H0V4.5h7.043Zm-.42 6.087a2.44 2.44 0 0 0 1.452-.428 1.63 1.63 0 0 0 .563-1.396 1.81 1.81 0 0 0-.186-.88 1.373 1.373 0 0 0-.506-.534 2.067 2.067 0 0 0-.723-.264 4.68 4.68 0 0 0-.849-.068H3.29v3.57h3.333Zm.18 6.474a4.33 4.33 0 0 0 .916-.093c.274-.059.534-.17.766-.328.226-.16.41-.373.534-.62.146-.322.215-.674.2-1.027a2.047 2.047 0 0 0-.689-1.749 2.89 2.89 0 0 0-1.817-.524H3.29v4.34h3.513Z",
    linkedin:
      "M4 4h4v4H4V4Zm0 6h4v10H4V10Zm6 0h4v1.5c.6-1 2-1.8 3.5-1.8 3 0 4.5 1.8 4.5 5.3v5H18v-4.6c0-1.6-.6-2.5-1.9-2.5S14 13 14 14.6V20h-4V10Z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={paths[name]} />
    </svg>
  );
};

/** Ngôi sao 4 cánh tím có glow (dùng ở marquee và tiêu đề card) */
export const GlowStar = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`text-accent-soft drop-shadow-[0_0_5px_rgba(138,125,255,0.9)] ${className}`} aria-hidden>
    <path d="M12 1c.5 5.6 5.4 10.5 11 11-5.6.5-10.5 5.4-11 11-.5-5.6-5.4-10.5-11-11C6.6 11.5 11.5 6.6 12 1Z" />
  </svg>
);
