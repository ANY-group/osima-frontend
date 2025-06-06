import { AnimatePresence, motion } from "framer-motion"
import Swipeable from "../../../components/ui/swipeable";
import { useEffect, useState } from "react";
import Collapse from "../../../components/ui/collapse";
import Link from "@/app/components/ui/link";
import ArrowDownBoldIcon from "../../../components/ui/icons/arrow-down-bold-icon";
import InfoLinks from "../../../components/info-links";
import CategoryEntity from "@/lib/catalog/types/category";

export default function MobileCategoriesSidebar({ categories, isOpen, close }: {
  categories: Array<CategoryEntity>,
  isOpen: boolean,
  close: () => void,
}) {

  const [openCategory, setOpenCategory] = useState<CategoryEntity | null>(null);

  const isCategoryOpen = (category: CategoryEntity) => openCategory?.slug === category.slug;

  useEffect(() => {
    setOpenCategory(null);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Swipeable onLeftSwipe={close}>
          <motion.div
            key="sidebar"
            className="fixed top-0 bottom-0 left-0 right-0 md:hidden pt-20 bg-background overflow-y-auto scroll-smooth z-10"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            {categories.map((category, index) => (
              <div key={index}>
                <div className="px-6">
                  <button
                    onClick={() => setOpenCategory(isCategoryOpen(category) ? null : category)}
                    className={`flex items-center justify-between w-full py-2.5 border-transparent transition-colors text-2xl ${isCategoryOpen(category) && 'border-b-2  border-on-primary-muted!'}`}
                  >
                    {category.name}
                    <div className={`transition-transform ${isCategoryOpen(category) && 'rotate-180'}`}>
                      <ArrowDownBoldIcon />
                    </div>
                  </button>
                </div>
                <Collapse isOpen={isCategoryOpen(category)}>
                  <div className="pb-2">
                    <div className="px-6 py-8 border-b border-divider">
                      <h4 className="mb-5 font-bold uppercase">
                        Категории
                      </h4>
                      <div className="grid grid-cols-2 gap-5 text-sm">
                        <Link
                          key={index}
                          href={`/catalog/${openCategory?.slug}`}
                          onClick={close}
                        >
                          Все товары
                        </Link>
                        {(category?.subcategories ?? []).map((subcategory, index) => (
                          <Link
                            key={index}
                            href={`/catalog/${openCategory?.slug}/${subcategory.slug}`}
                            onClick={close}
                          >
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            ))}
            <div className="px-6 py-2.5">
              <Link
                href="/catalog/brands"
                className="text-2xl"
                onClick={close}
              >
                Бренды
              </Link>
            </div>
            <div className="px-6 pt-12 pb-16">
              <InfoLinks />
            </div>
          </motion.div>
        </Swipeable>
      )}
    </AnimatePresence>
  );
}