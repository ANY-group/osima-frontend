import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link";

export default function DesktopCategoriesDropdown({ openCategory }: {
  openCategory: number | null,
}) {

  const subcategories = [...Array(20)];
  const chunkSize = 8;
  const chunks = [];
  for (let i = 0; i < subcategories.length; i += chunkSize) {
    const chunk = subcategories.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

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
                      <Link href="#" key={index}>
                        Кремы для кожи вокруг глаз
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