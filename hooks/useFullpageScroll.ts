"use client";

import { useEffect, useRef } from "react";

export const useFullPageScroll = (sectionIds: string[]) => {
  const isScrolling = useRef(false);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      const currentIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top < window.innerHeight / 2;
      });

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      if (e.deltaY > 0) {
        nextIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (nextIndex === currentIndex) return;

      isScrolling.current = true;

      sections[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sectionIds]);
};