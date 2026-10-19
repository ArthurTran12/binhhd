import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  action?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, action }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-[11px] tracking-widest text-muted uppercase">{eyebrow}</p>
        <h2 className="text-2xl font-medium tracking-tight uppercase md:text-4xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
