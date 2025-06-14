'use client';

import SearchLgIcon from "@/app/components/ui/icons/search-lg-icon";
import TimesIcon from "@/app/components/ui/icons/times-icon";
import OverlayWrapper from "@/app/components/ui/overlay-wrapper";
import Swipeable from "@/app/components/ui/swipeable";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchSidebar({
  isOpen,
  close,
}: {
  isOpen: boolean,
  close: () => void,
}) {
  const { push } = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const q = formData.get('q')?.toString() || '';

    const newParams = new URLSearchParams(query.toString());
    newParams.set('q', q);

    const url = `${(pathname.startsWith('/catalog') ? pathname : '/catalog')}?${newParams}`;

    close();
    push(url);
  };

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
                className="relative layout-container h-full bg-background overflow-y-auto"
              >
                <form
                  className="sticky top-0 flex items-center gap-2 py-3 bg-background"
                  action="/catalog"
                  onSubmit={onSubmit}
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
                      defaultValue={query.get('q') || ''}
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
