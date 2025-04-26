import { usePathname } from 'next/navigation'
import { useEffect, useRef } from "react";

export const useOnRouteChange = (handler: () => void) => {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      setTimeout(() => {
        isInitialMount.current = false;
      }, 10)
    } else {
      handler();
    }
  }, [pathname]);
}