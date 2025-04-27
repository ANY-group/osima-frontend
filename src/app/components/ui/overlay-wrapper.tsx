import { motion } from "motion/react";

export default function OverlayWrapper({ children, onClick }: {
  children: React.ReactNode,
  onClick?: () => void,
}) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50">
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="max-md:hidden fixed top-0 bottom-0 left-0 right-0 bg-[#000000CC] -z-10"
        onClick={onClick}
      >
      </motion.div>
      {children}
    </div>
  );
}