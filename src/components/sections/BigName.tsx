export default function BigName() {
  // 2 bản giống nhau nối tiếp, dịch -50% để chạy vòng lặp liền mạch
  const copies = [0, 1];
  return (
    <div aria-hidden className="overflow-hidden pt-6 pb-10 select-none md:pb-16">
      <div className="flex w-max animate-marquee-slow">
        {copies.map((i) => (
          <p
            key={i}
            className="pr-[0.3em] text-[16vw] leading-[0.8] font-medium tracking-tight whitespace-nowrap text-[#1b1b1f]"
          >
            HOANG HENRY
          </p>
        ))}
      </div>
    </div>
  );
}
