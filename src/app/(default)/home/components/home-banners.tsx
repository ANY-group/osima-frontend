import Image from "next/image";

export default function HomeBanners() {
  return (
    <div className="relative w-full h-[560px] py-6">
      <Image
        src={'/images/tmp/banner.png'}
        alt="Banner"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}