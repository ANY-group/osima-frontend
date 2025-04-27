'use client';

import { AnimatePresence, motion } from "motion/react";
import { useLinkStatus } from "next/link";
import { useEffect, useState } from "react";
import LogoIcon from "./icons/logo-icon";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    if (pending) {
      setShowLoader(true);
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 400);
    }
  }, [pending]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key='loading'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-background z-50"
        >
          <motion.div
            key='loading'
            animate={{
              color: [
                'var(--color-foreground)',
                'var(--color-success)',
              ],
            }}
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            <LogoIcon />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}