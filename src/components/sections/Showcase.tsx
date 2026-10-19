import { showcaseBanner, showcaseImages } from "@/data/portfolio";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Showcase() {
  if (showcaseBanner.image) {
    return (
      <section className="container-page py-6">
        <ImagePlaceholder
          src={showcaseBanner.image}
          alt={showcaseBanner.alt}
          priority
          fit="contain"
          sizes="(min-width:1200px) 1200px, 100vw"
          className="aspect-[1596/512]"
        />
      </section>
    );
  }

  const [large, topRight, bottomRight, smallLeft, smallRight] = showcaseImages;
  return (
    <section className="container-page py-6">
      {/* Mobile: dải ảnh ngang thấp (3 ảnh đầu) */}
      <div className="grid h-28 grid-cols-[2fr_1fr_1fr] gap-1.5 md:hidden">
        <ImagePlaceholder src={large.image} alt={large.alt} priority sizes="50vw" />
        <ImagePlaceholder src={topRight.image} alt={topRight.alt} sizes="25vw" />
        <ImagePlaceholder src={bottomRight.image} alt={bottomRight.alt} sizes="25vw" />
      </div>

      {/* Desktop: lưới 5 ô */}
      <div className="hidden h-[420px] grid-cols-4 grid-rows-2 gap-2 md:grid">
        <ImagePlaceholder src={large.image} alt={large.alt} priority sizes="50vw" className="col-span-2 row-span-2" />
        <ImagePlaceholder src={topRight.image} alt={topRight.alt} sizes="50vw" className="col-span-2" />
        <ImagePlaceholder src={bottomRight.image} alt={bottomRight.alt} sizes="25vw" />
        <div className="grid grid-cols-2 gap-2">
          <ImagePlaceholder src={smallLeft.image} alt={smallLeft.alt} sizes="12vw" />
          <ImagePlaceholder src={smallRight.image} alt={smallRight.alt} sizes="12vw" />
        </div>
      </div>
    </section>
  );
}
