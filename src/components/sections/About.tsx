import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import { ArrowRight, Mail, Phone, Plus, SocialIcon } from "@/components/ui/Icons";

export function ContactInfo() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
        <div>
          <p className="mb-1.5 flex items-center gap-1.5 text-white/60">
            <Mail /> Email
          </p>
          <a href={`mailto:${profile.email}`} className="break-all text-white/80 hover:text-white">
            {profile.email}
          </a>
        </div>
        <div>
          <p className="mb-1.5 flex items-center gap-1.5 text-white/60">
            <Phone /> Phone Number
          </p>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-white/80 hover:text-white">
            {profile.phone}
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex justify-center gap-2 max-sm:mb-2 sm:mr-auto">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-2 text-white/80 hover:bg-line hover:text-white"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
        <Button href="#contact" variant="solid" className="w-full sm:w-auto sm:min-w-28">
          Let&apos;s Work
        </Button>
        <Button href={profile.cvUrl} variant="solid" className="w-full sm:w-auto sm:min-w-28" download>
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="About"
        title={profile.headline}
        action={
          <Button href="#experience">
            Know More <ArrowRight />
          </Button>
        }
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Ảnh avatar đã có sẵn góc bo trang trí. Khi chưa có ảnh thì vẽ góc bằng CSS. */}
        <div className="relative self-center">
          <ImagePlaceholder
            src={profile.avatar}
            alt="Avatar / Portrait"
            fit="contain"
            sizes="(min-width:768px) 50vw, 100vw"
            className="aspect-[783/710] rounded-xl"
          />
          {!profile.avatar && (
            <>
              <div aria-hidden className="pointer-events-none absolute -top-px -left-px h-20 w-20 rounded-br-[60px] border-r-[14px] border-b-[14px] border-bg" />
              <div aria-hidden className="pointer-events-none absolute -right-px -bottom-px h-20 w-20 rounded-tl-[60px] border-t-[14px] border-l-[14px] border-bg" />
            </>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <Plus /> Introduction
            </h3>
            <p className="text-xs leading-relaxed text-muted">{profile.intro}</p>
          </div>
          <div className="flex-1 rounded-xl border border-line bg-surface p-6">
            <h3 className="mb-5 flex items-center gap-2 text-base">
              <Plus /> Contact Information
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
