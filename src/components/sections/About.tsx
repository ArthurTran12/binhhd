import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import IconGroup, { iconCircle } from "@/components/ui/IconGroup";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { ArrowRight, Mail, Phone, SocialIcon } from "@/components/ui/Icons";

/** Icon ngôi sao (public/svgs/ic_star.svg) cạnh tiêu đề card */
const StarIcon = () => (
  <Image
    src={asset("/svgs/ic_star.svg")}
    alt=""
    width={20}
    height={20}
    className="h-5 w-auto"
  />
);

export function ContactInfo() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 text-[13px] sm:grid-cols-2">
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-white/70">
            <Mail /> Email
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="break-all text-white/80 hover:text-white"
          >
            {profile.email}
          </a>
        </div>
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-white/70">
            <Phone /> Phone Number
          </p>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="text-white/80 hover:text-white"
          >
            {profile.phone}
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <IconGroup className="self-center sm:mr-auto max-sm:mb-2">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className={iconCircle}
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </IconGroup>
        <Button
          href="#contact"
          className="w-full sm:w-auto sm:min-w-[120px] lg:min-w-[150px]"
        >
          Let&apos;s Work
        </Button>
        <Button
          href={profile.cvUrl}
          className="w-full sm:w-auto sm:min-w-[120px] lg:min-w-[150px]"
          download={profile.cvFileName}
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="container-page pt-16 pb-12 md:pt-[100px] md:pb-[50px]"
    >
      <SectionHeading
        eyebrow="About"
        title={profile.headline}
        action={
          <Button href="#experience">
            Know More <ArrowRight />
          </Button>
        }
      />

      <div className="mt-10 grid gap-5 md:mt-[60px] md:grid-cols-2 md:items-center">
        {/* Ảnh avatar đã có sẵn góc bo trang trí. Khi chưa có ảnh thì vẽ góc bằng CSS. */}
        <div className="relative">
          <ImagePlaceholder
            src={profile.avatar}
            alt="Avatar / Portrait"
            fit="contain"
            sizes="(min-width:768px) 50vw, 100vw"
            className="aspect-[783/710] rounded-xl"
          />
          {!profile.avatar && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute -top-px -left-px h-20 w-20 rounded-br-[60px] border-r-[14px] border-b-[14px] border-bg"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-px -bottom-px h-20 w-20 rounded-tl-[60px] border-t-[14px] border-l-[14px] border-bg"
              />
            </>
          )}
        </div>

        {/* 1 card, 2 phần ngăn bằng đường kẻ */}
        <div className="rounded-xl border border-line">
          <div className="p-6 md:p-8">
            <h3 className="mb-4 flex items-center gap-2.5 text-lg lg:text-xl">
              <StarIcon /> Introduction
            </h3>
            <p className="text-[13px] leading-relaxed text-muted">
              {profile.intro}
            </p>
          </div>
          <div className="border-t border-line p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-2.5 text-lg lg:text-xl">
              <StarIcon /> Contact Information
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
