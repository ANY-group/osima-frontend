import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Collapse({
  children,
  open,
}: {
  children: React.ReactNode,
  open: boolean,
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <div aria-expanded={open}>
        <m.div
          style={{ overflow: "hidden" }}
          initial={{ height: 0, opacity: 1 }}
          animate={{
            transition: { type: "tween", duration: 0.2, delay: 0, },
            height: open ? "auto" : 0,
            opacity: open ? 1 : .8
          }}
          exit={{ height: 0, opacity: 1 }}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
};
