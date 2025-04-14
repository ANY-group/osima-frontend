import Image from "next/image";

export default function HomeBanners() {
  return (
    <div className="relative w-full h-39 md:h-[560px] md:my-6">
      <Image
        src={'/images/tmp/banner.png'}
        alt="Banner"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}