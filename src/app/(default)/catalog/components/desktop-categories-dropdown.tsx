import { AnimatePresence, motion } from "framer-motion"
import Link from "@/app/components/ui/link";
import { CategoryEntity } from "@/lib/catalog/types/category";
import { chunk } from "@/lib/utils/helpers";

export default function DesktopCategoriesDropdown({ openCategory, close }: {
  openCategory: CategoryEntity | null,
  close: () => void,
}) {

  const subcategories = openCategory?.subcategories ?? [];
  const chunks = chunk(subcategories, 8);

  return (
    <div className="relative">
      <AnimatePresence>
        {(openCategory != null) && (
          <motion.div
            key="menu"
            className="absolute top-0 left-0 right-0 overflow-hidden bg-background shadow-md"
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 600 }}
            exit={{ maxHeight: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <div className="layout-container py-8">
              <h4 className="font-bold uppercase">
                Категории
              </h4>
              <nav className="flex gap-20 overflow-auto py-10">
                {chunks.map((subcategories, chunkIndex) => (
                  <div key={chunkIndex} className="flex flex-col gap-6">
                    {subcategories.map((subcategory, index) => (
                      <Link
                        key={index}
                        href={`/catalog/${openCategory.slug}/${subcategory.slug}`}
                        onClick={close}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}