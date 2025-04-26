import SearchLgIcon from "@/app/components/ui/icons/search-lg-icon";
import TimesIcon from "@/app/components/ui/icons/times-icon";
import Swipeable from "@/app/components/ui/swipeable";
import { AnimatePresence, motion } from "motion/react";

export default function SearchModalPage({
  isOpen,
  close,
}: {
  isOpen: boolean,
  close: () => void,
}) {
  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {isOpen && (
          <Swipeable onLeftSwipe={close}>
            <motion.div
              key="search"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-background z-10"
            >
              <form
                className="layout-container flex items-center gap-2 my-3"
                action="/catalog"
              >
                <div className="flex-grow flex items-center">
                  <div className="z-1 translate-x-8">
                    <SearchLgIcon />
                  </div>
                  <input
                    type="text"
                    name="q"
                    placeholder="Хочу купить"
                    className="px-14 py-2 w-full rounded-full outline-0 bg-primary-muted placeholder-placeholder placeholder:font-normal"
                    autoFocus
                    required
                  />
                  <button
                    type="button"
                    className="z-1 -translate-x-4 -ml-4"
                  >
                    <TimesIcon />
                  </button>
                </div>
                <button
                  type="button"
                  className="text-sm font-semibold"
                  onClick={close}
                >
                  Отмена
                </button>
              </form>
            </motion.div>
          </Swipeable>
        )}
      </AnimatePresence>
    </div>
  );
}
