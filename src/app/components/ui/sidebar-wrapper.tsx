'use client';

import { useClickOutside } from "@/app/hooks/click_outside";
import { useOnRouteChange } from "@/app/hooks/route_change";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion"

export default function SidebarWrapper({
  isOpen,
  close,
  children,
  className,
  fullScreen = true,
  overlay = true,
}: {
  isOpen: boolean,
  close: () => void,
  children: React.ReactNode,
  className?: string,
  fullScreen?: boolean,
  overlay?: boolean,
}) {

  const ref = useRef(null);
  const parentRef = useRef(null);
  useClickOutside(ref, close, parentRef);
  useOnRouteChange(close);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={parentRef}
          className={`${fullScreen ? 'fixed' : 'absolute h-max'} top-0 ${(overlay || fullScreen) && 'bottom-0'} left-0 right-0 overflow-y-auto z-50`}
        >
          {overlay && (
            <motion.div
              key="sidebar"
              className={`${fullScreen ? 'fixed' : 'absolute'} top-0 bottom-0 left-0 right-0 bg-[#000000CC] -z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            ></motion.div>
          )}
          <div ref={ref} className={`min-h-screen w-min overflow-y-auto ${className}`}>
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}