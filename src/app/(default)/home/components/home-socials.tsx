import Image from "next/image";
import Link from "@/app/components/ui/link";
import SocialEntity from "@/lib/types/social";

export default function HomeSocials({ socials }: {
  socials: Array<SocialEntity>,
}) {
  if (!socials.length) {
    return;
  }

  return (
    <>
      <div className="layout-container flex flex-col sm:flex-row gap-5 items-center justify-between py-5 md:py-10">
        <h3 className="text-3xl font-semibold">
          Мы в соц. сетях
        </h3>
        <div className="flex items-center gap-2">
          <Link
            href="https://www.tiktok.com/@osima_cosmetics"
            className="px-6 py-2 bg-accent rounded-full font-semibold"
            target="_blank"
          >
            TikTok
          </Link>
          <Link
            href="https://www.instagram.com/osima_cosmetics/"
            className="px-6 py-2 bg-accent rounded-full font-semibold"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.linkUrl?.replace('https://osimacosmetics.kz', '') || '#'}
            className="relative block h-31 sm:h-40 lg:h-60 xl:h-85 aspect-square"
            transition={Boolean(social.linkUrl)}
          >
            <Image
              src={social.image}
              alt={social.name}
              fill
              className="object-cover rounded-xl"
            />
          </Link>
        ))}
      </div>
    </>
  );
}