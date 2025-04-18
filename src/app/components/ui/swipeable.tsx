'use client';

import { TouchEventHandler, useState } from "react";

export default function Swipeable({
  minSwipeDistance = 50,
  onLeftSwipe,
  onRightSwipe,
  children,
}: {
  minSwipeDistance?: number,
  onLeftSwipe?: () => void,
  onRightSwipe?: () => void,
  children: React.ReactNode,
}) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd

    if (distance > minSwipeDistance) {
      onLeftSwipe?.call({ distance });
    } else if (distance < -minSwipeDistance) {
      onRightSwipe?.call({ distance: -distance });
    }
  }

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {children}
    </div>
  );
}