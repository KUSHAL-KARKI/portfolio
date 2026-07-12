"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { usePathname } from "next/navigation";

export const useFullPageScroll = (sectionIds: string[]) => {
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);
  const idsRef = useRef(sectionIds);
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const pathname = usePathname();

  // Only intercept scroll on the home page
  const isHomePage = pathname === "/";

  const scrollToIndex = useCallback((index: number) => {
    const sections = idsRef.current
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const target = sections[index];
    if (!target) return;

    isScrolling.current = true;
    currentIndex.current = index;

    setActiveId(idsRef.current[index]);
    window.history.replaceState(null, "", `#${idsRef.current[index]}`);

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      isScrolling.current = false;
    }, 900);
  }, []);

  useEffect(() => {
    // Don't attach any listeners on /about, /project, etc.
    if (!isHomePage) return;

    const getCurrentIndex = (): number => {
      const sections = idsRef.current
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let closest = 0;
      let closestDist = Infinity;

      sections.forEach((section, i) => {
        const dist = Math.abs(section.getBoundingClientRect().top);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      return closest;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      const idx = getCurrentIndex();
      currentIndex.current = idx;

      const next =
        e.deltaY > 0
          ? Math.min(idx + 1, idsRef.current.length - 1)
          : Math.max(idx - 1, 0);

      if (next === idx) return;
      scrollToIndex(next);
    };

    const handleScrollEnd = () => {
      if (isScrolling.current) return;
      const idx = getCurrentIndex();
      setActiveId(idsRef.current[idx]);
      window.history.replaceState(null, "", `#${idsRef.current[idx]}`);
    };

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;

      const idx = getCurrentIndex();
      const next =
        delta > 0
          ? Math.min(idx + 1, idsRef.current.length - 1)
          : Math.max(idx - 1, 0);

      if (next === idx) return;
      scrollToIndex(next);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scrollend", handleScrollEnd);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup fires when route changes — listeners removed on /about, /project
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isHomePage, scrollToIndex]);

  return { activeId, setActiveId, scrollToIndex };
};