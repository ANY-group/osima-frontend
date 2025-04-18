import { AnimatePresence, motion } from "framer-motion"

export default function SlidingPage({
  isOpen,
  className,
  children,
}: {
  isOpen: boolean,
  className?: string,
  children: React.ReactNode,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          key="aside"
          className={`absolute left-0 top-0 bottom-0 right-0 bg-background ${className} z-50 overflow-y-auto`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        >
          {children}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}