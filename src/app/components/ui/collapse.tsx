'use client';

import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Collapse({
  children,
  isOpen,
  minHeight = 0,
}: {
  children: React.ReactNode,
  isOpen: boolean,
  minHeight?: number,
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <div aria-expanded={isOpen}>
        <m.div
          style={{ overflow: "hidden" }}
          initial={{ height: 0, opacity: 1 }}
          animate={{
            transition: { type: "tween", duration: 0.2, delay: 0, },
            height: isOpen ? "auto" : minHeight,
            opacity: isOpen ? 1 : .8
          }}
          exit={{ height: 0, opacity: 1 }}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
};
