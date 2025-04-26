import Image from "next/image";
import Link from "next/link";

export default function HomePartners() {
  return (
    <div className="flex flex-col gap-16 md:gap-10 py-12 md:py-20">
      <div className="flex flex-col items-center gap-6">
        <h4 className="text-lg">
          Наши партнеры
        </h4>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <Image
            src="/images/tmp/davines.png"
            alt="Davines"
            width={146}
            height={40}
          />
          <Image
            src="/images/tmp/the-act.png"
            alt="Davines"
            width={171}
            height={40}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 sm:gap-6">
        <Partner />
        <Partner />
      </div>
    </div>
  );
}

const Partner = () => {
  return (
    <div className="relative min-h-130 sm:min-h-150 lg:min-h-213">
      <Image
        src="/images/tmp/davines-bg.png"
        alt="Davines"
        fill
        className="object-cover rounded-xl brightness-50"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex flex-col p-5 sm:p-8 gap-8 divide-white">
          <Image
            src="/images/tmp/the-act-white.png"
            alt="Davines"
            width={292}
            height={80}
          />
          <hr />
          <p className="text-white font-semibold">
            Итальянская профессиональная косметика для волос DAVINES. Лидер по производству премиальных эко-продуктов для окрашивания, лечебного ухода за волосами
          </p>
          <div>
            <Link href="#" className="px-6 py-2 bg-background rounded-full font-semibold">
              Связаться с менеджером
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
