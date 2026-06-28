"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaEnvelope, FaFolderOpen } from "react-icons/fa";
import { useScroll } from "@/hooks/useScroll";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarVariants, itemVariants } from "@/animations/variants";

const navItems = [
  { label: "Home",    href: "/#home",    Icon: FaHome },
  { label: "About",   href: "/#about",   Icon: FaUser },
  { label: "Project", href: "/#project", Icon: FaFolderOpen },
  { label: "Contact", href: "/#contact", Icon: FaEnvelope },
];

const sectionIds = navItems.map((item) => item.href.replace("/#", ""));



const Sidebar = () => {
  const pathname = usePathname();
  const { activeId, setActiveId } = useScroll(sectionIds);

  const hiddenRoutes = ["/about", "/project"];
  if (hiddenRoutes.some((r) => pathname.startsWith(r))) return null;

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="hidden md:flex fixed left-0 top-1/4 z-50"
    >
      <div className="flex flex-col justify-evenly items-center gap-6 h-[50vh] w-14 px-2 py-4 rounded-e-3xl bg-zinc-900/80 border border-white/[0.05] border-t-white/[0.08] border-r-white/[0.03] backdrop-blur-xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.6)]">
        {navItems.map(({ label, href, Icon }, i) => {
          const key = href.replace("/#", "");
          const isActive = activeId === key;

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
                href={href}
                onClick={() => setActiveId(key)}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300"
              >
                {/* Active background pill — animates between items */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl bg-zinc-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
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

              {/* Tooltip — slides in from left */}
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