import Link from "next/link";
import { LetsWorkTogether } from "./Hero";
import { ContactInfo } from "./About";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-8 text-[11px] tracking-widest text-muted uppercase">Designing meaningful digital experiences</p>
          <LetsWorkTogether />
        </div>
        <div>
          <h3 className="mb-6 text-base">Contact Information</h3>
          <ContactInfo />
        </div>
      </div>

      <div className="container-page flex flex-col items-center gap-3 border-t text-center sm:flex-row sm:justify-between sm:text-left border-line py-6 text-[11px] text-muted">
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} HenryHoang UI/UX Designer. All rights reserved.</p>
      </div>
    </footer>
  );
}
