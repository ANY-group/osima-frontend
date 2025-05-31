import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  handler: () => void,
  parentRef?: RefObject<HTMLElement | null>,
  shouldRegister = true,
) => {
  useEffect(() => {
    if (!shouldRegister) {
      return;
    }

    const handleOutSideClick = (event: MouseEvent) => {
      if (!parentRef || parentRef.current?.contains(event.target as Node)) {
        if (!ref.current?.contains(event.target as Node)) {
          handler()
        }
      }
    };

    window.addEventListener("click", handleOutSideClick);

    return () => {
      window.removeEventListener("click", handleOutSideClick);
    };
  }, [ref, shouldRegister]);
}