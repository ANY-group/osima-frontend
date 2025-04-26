import Image from "next/image";
import Link from "next/link";

export default function HomeSocials() {
  return (
    <>
      <div className="layout-container flex flex-col sm:flex-row gap-5 items-center justify-between py-5 md:py-10">
        <h3 className="text-3xl font-semibold">
          Мы в соц. сетях
        </h3>
        <div className="flex items-center gap-2">
          <Link href="#" className="px-6 py-2 bg-accent rounded-full font-semibold">
            TikTok
          </Link>
          <Link href="#" className="px-6 py-2 bg-accent rounded-full font-semibold">
            Instagram
          </Link>
        </div>
      </div>
      <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
        {[...Array(10)].map((e, i) => (
          <div key={i} className="relative h-31 sm:h-40 lg:h-60 xl:h-85 aspect-square">
            <Image
              src="/images/tmp/social.jpeg"
              alt="Social"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </>
  );
}