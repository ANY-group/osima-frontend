import InstagramIcon from "@/app/components/ui/icons/instagram-icon";
import Link from "@/app/components/ui/link";

export default function BlogSocials() {
  return (
    <div className="py-5">
      <p className="text-sm">Подписывайтесь на нас:</p>
      <Link
        href="https://www.instagram.com/osima_cosmetics/"
        className="flex items-center font-bold"
        target="_blank"
      >
        <InstagramIcon />@osima_cosmetics
      </Link>
    </div>
  );
}