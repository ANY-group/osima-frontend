import TimesIcon from "@/app/components/ui/icons/times-icon";
import OverlayWrapper from "@/app/components/ui/overlay-wrapper";
import Swipeable from "@/app/components/ui/swipeable";
import { AnimatePresence, motion } from "motion/react";
import AuthController from "./auth-controller";

export default function AuthSidebar({ isOpen, close }: {
  isOpen: boolean,
  close: () => void,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <OverlayWrapper onClick={close}>
          <Swipeable onRightSwipe={close}>
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className="relative float-right sm:max-w-md md:max-w-xl lg:max-w-2xl h-full bg-background"
            >
              <button
                className="absolute top-5 right-5 p-2 rounded-full"
                aria-label="Закрыть окно авторизации"
                onClick={close}
              >
                <TimesIcon />
              </button>
              <div className="max-sm:p-12 sm:max-w-7/10 mx-auto">
                <AuthController close={close} />
              </div>
            </motion.div>
          </Swipeable>
        </OverlayWrapper>
      )}
    </AnimatePresence>
  );
}