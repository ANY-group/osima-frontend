import InstagramIcon from "@/app/components/ui/icons/instagram-icon";
import Link from "next/link";

export default function BlogSocials() {
  return (
    <div className="py-5">
      <p className="text-sm">Подписывайтесь на нас:</p>
      <Link
        href="https://www.instagram.com/vegas_beautybar/"
        className="flex items-center font-bold"
        target="_blank"
      >
        <InstagramIcon />@vegas_beautybar
      </Link>
    </div>
  );
}