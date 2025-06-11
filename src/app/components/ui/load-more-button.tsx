'use client';

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function LoadMoreButton({
  onClick,
}: {
  onClick?: () => void,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      onClick?.call([]);
    }
  }, [isInView]);

  return (
    <button
      ref={ref}
      className="px-5 py-2"
      onClick={onClick}
      disabled={onClick == undefined}
    >
      Загрузить еще
    </button>
  );
}