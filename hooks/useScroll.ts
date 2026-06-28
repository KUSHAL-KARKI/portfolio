import { useState, useEffect } from "react";

export const useScroll = (sectionIds: string[], threshold: number = 0.5) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;

            setActiveId(newId);
            if (typeof window !== "undefined") {
              window.history.replaceState(null, "", `#${newId}`);
            }
          }
        });
      },
      { threshold }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return { activeId, setActiveId };
};