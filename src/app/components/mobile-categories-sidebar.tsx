import { AnimatePresence, motion } from "framer-motion"
import Swipeable from "./ui/swipeable";
import { useEffect, useState } from "react";
import Collapse from "./ui/collapse";
import Link from "next/link";
import ArrowDownBoldIcon from "./ui/icons/arrow-down-bold-icon";
import InfoLinks from "./info-links";
import { useOnRouteChange } from "../hooks/route_change";

export default function MobileCategoriesSidebar({ isOpen, close }: {
  isOpen: boolean,
  close: () => void,
}) {
  useOnRouteChange(close);

  const categories = [...Array(4)];

  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const isCategoryOpen = (index: number) => openCategory === index;

  useEffect(() => {
    setOpenCategory(null);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Swipeable onLeftSwipe={close}>
          <motion.div
            key="sidebar"
            className="fixed top-0 bottom-0 left-0 right-0 pt-20 bg-background overflow-y-auto scroll-smooth z-10"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
          >
            {categories.map((category, index) => (
              <div key={index}>
                <div className="px-6">
                  <button
                    onClick={() => setOpenCategory(isCategoryOpen(index) ? null : index)}
                    className={`flex items-center justify-between w-full py-2.5 border-transparent transition-colors text-2xl ${isCategoryOpen(index) && 'border-b-2  border-on-primary-muted!'}`}
                  >
                    Уход за лицом
                    <div className={`transition-transform ${isCategoryOpen(index) && 'rotate-180'}`}>
                      <ArrowDownBoldIcon />
                    </div>
                  </button>
                </div>
                <Collapse open={isCategoryOpen(index)}>
                  <div className="pb-2">
                    <div className="px-6 py-8 border-b border-divider">
                      <h4 className="mb-5 font-bold uppercase">
                        Категории
                      </h4>
                      <SubcategoriesMenu />
                    </div>
                  </div>
                </Collapse>
              </div>
            ))}
            <div className="px-6 pt-12 pb-16">
              <InfoLinks />
            </div>
          </motion.div>
        </Swipeable>
      )}
    </AnimatePresence>
  );
}

const SubcategoriesMenu = () => {
  const subcategories = [...Array(16)];
  return (
    <div className="grid grid-cols-2 gap-5 text-sm">
      {subcategories.map((subcategory, index) => (
        <Link
          key={index}
          href="/catalog/category/subcategory"
          className=""
        >
          Праймер для лица
        </Link>
      ))}
    </div>
  );
}