"use client";

import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaEnvelope, FaFolderOpen } from "react-icons/fa";
import { useFullPageScroll } from "@/hooks/useFullpageScroll";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarVariants, itemVariants } from "@/animations/variants";
import Link from "next/link";

const navItems = [
  { label: "Home", sectionId: "#home", Icon: FaHome },
  { label: "About", sectionId: "#about", Icon: FaUser },
  { label: "Project", sectionId: "#project", Icon: FaFolderOpen },
  { label: "Contact", sectionId: "#contact", Icon: FaEnvelope },
];

const sectionIds = navItems.map((i) => i.sectionId.replace("#", ""));

const Sidebar = () => {
  const pathname = usePathname();

  // Single source of truth — activeId and scrollToIndex from the same hook
  const { activeId, setActiveId, scrollToIndex } =
    useFullPageScroll(sectionIds);

  const hiddenRoutes = ["/about", "/project"];
  if (hiddenRoutes.some((r) => pathname.startsWith(r))) return null;

  const handleClick = (sectionId: string) => {
    const index = sectionIds.indexOf(sectionId);
    setActiveId(sectionId); // instant highlight
    scrollToIndex(index); // smooth scroll
  };

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="hidden md:flex fixed left-0 top-1/4 z-50"
    >
      <div className="flex flex-col justify-evenly items-center gap-6 h-[50vh] w-14 px-2 py-4 rounded-e-3xl bg-zinc-900/80 border border-white/5 border-t-white/8 border-r-white/3 backdrop-blur-xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.6)]">
        {navItems.map(({ label, sectionId, Icon }, i) => {
          const isActive = activeId === sectionId.replace("#", "");

          return (
            <motion.div
              key={label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              <Link
                href={sectionId}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(sectionId.replace("#", ""));
                }}
                aria-label={label}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl bg-zinc-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  )}
                </AnimatePresence>

                <motion.span
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    color: isActive ? "#ffffff" : "#71717a",
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Icon className="text-xl" />
                </motion.span>
              </Link>

              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-200 px-3 py-1.5 rounded-md whitespace-nowrap shadow-xl"
              >
                {label}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
