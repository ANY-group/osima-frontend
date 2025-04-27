import SearchLgIcon from "@/app/components/ui/icons/search-lg-icon";
import TimesIcon from "@/app/components/ui/icons/times-icon";
import OverlayWrapper from "@/app/components/ui/overlay-wrapper";
import Swipeable from "@/app/components/ui/swipeable";
import { AnimatePresence, motion } from "motion/react";

export default function SearchSidebar({
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
          <OverlayWrapper onClick={close}>
            <Swipeable onLeftSwipe={close}>
              <motion.div
                key="search"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="relative h-full bg-background"
              >
                <form
                  className="layout-container flex items-center gap-2 py-3"
                  action="/catalog/search"
                >
                  <div className="flex-grow flex items-center">
                    <div className="-mr-5 translate-x-2.5 z-1">
                      <SearchLgIcon />
                    </div>
                    <input
                      type="text"
                      name="q"
                      placeholder="Хочу купить"
                      className="px-10 py-2 w-full rounded-full outline-0 bg-primary-muted placeholder-placeholder placeholder:font-normal"
                      autoFocus
                      required
                    />
                    <button
                      type="button"
                      className="-ml-5 -translate-x-2.5 z-1"
                      aria-label="Очистить"
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
          </OverlayWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}
