import Image from "next/image";

export default function HomeBanners() {
  return (
    <div className="relative w-full aspect-[123/56] my-3 md:my-6">
      <Image
        src={'/images/tmp/banner.png'}
        alt="Banner"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}