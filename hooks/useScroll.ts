import { useState, useEffect } from "react";

export const useScroll = (sectionIds: string[], threshold: number = 0.5) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            
            // 1. Update the React state (changes the active icon color)
            setActiveId(newId);

            // 2. Silently update the URL hash in the browser
            // We check `typeof window` to ensure Next.js doesn't crash during server-side rendering
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