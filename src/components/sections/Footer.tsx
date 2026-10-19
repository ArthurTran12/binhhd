import Link from "next/link";
import { LetsWorkTogether } from "./Hero";
import { ContactInfo } from "./About";

/** Khối "B" bo tròn trang trí 2 bên mép footer */
function SideMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 160 170" fill="none" aria-hidden className={`pointer-events-none absolute top-1/2 h-[170px] w-[160px] -translate-y-1/2 max-md:hidden ${className}`}>
      <rect x="11" y="11" width="138" height="68" rx="34" stroke="#1b1b1f" strokeWidth="22" />
      <rect x="11" y="91" width="138" height="68" rx="34" stroke="#1b1b1f" strokeWidth="22" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="relative">
        <SideMark className="-left-[60px]" />
        <SideMark className="-right-[60px]" />

        <div className="container-page relative">
          <div className="grid bg-bg md:grid-cols-[42%_1fr] md:border-x md:border-line">
            <div className="py-12 md:px-12 md:py-16">
              <p className="mb-8 text-[11px] tracking-widest text-muted uppercase md:mb-12">
                Designing meaningful digital experiences
              </p>
              <LetsWorkTogether />
            </div>
            <div className="pb-12 md:border-l md:border-line md:px-8 md:py-16">
              <h3 className="mb-6 text-lg">Contact Information</h3>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col items-center gap-3 py-6 text-center text-[11px] text-muted sm:flex-row sm:justify-between sm:text-left">
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} HenryHoang UI/UX Designer. All rights reserved.</p>
      </div>
    </footer>
  );
}
