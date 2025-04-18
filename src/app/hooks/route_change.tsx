import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from "react";

export const useOnRouteChange = (handler: (url: string) => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      setTimeout(() => {
        isInitialMount.current = false;
      }, 10)
    } else {
      const url = `${pathname}?${searchParams}`;
      handler(url);
    }
  }, [pathname, searchParams]);
}