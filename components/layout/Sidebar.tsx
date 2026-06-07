"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa";
import { useScroll } from "@/hooks/useScroll"; 

// 2. Used absolute paths (/#) so routing works from anywhere
const navItems = [
  { label: "Home", href: "/#home", Icon: FaHome },
  { label: "About", href: "/#about", Icon: FaUser },
  { label: "Project", href: "/#project", Icon: FaFolderOpen },
  { label: "Contact", href: "/#contact", Icon: FaEnvelope },
];

// Strip out the "/#" so the scroll hook gets pure IDs ("home", "about", etc.)
const sectionIds = navItems.map((item) => item.href.replace("/#", ""));

const Sidebar = () => {
  const pathname = usePathname(); // 3. Get the current URL path
  const { activeId, setActiveId } = useScroll(sectionIds);

  // 4. If we are on the /about page, DO NOT render the sidebar
  if (pathname === "/about") {
    return null;
  }

  return (
    <aside className="hidden md:flex fixed left-0 top-1/4 z-50">
      <div className="flex flex-col justify-evenly items-center gap-6 h-[50vh] w-14 px-2 py-4 rounded-e-3xl bg-white/[0.02] border border-white/[0.05] border-t-white/[0.1] border-r-white/[0.02] backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
        {navItems.map(({ label, href, Icon }) => {
          const key = href.replace("/#", "");
          
          return (
            <Link
              key={label}
              href={href}
              onClick={() => setActiveId(key)}
              className={`relative group flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:bg-zinc-800/80 ${
                activeId === key ? "bg-zinc-800 text-white" : "text-zinc-500"
              }`}
            >
              <Icon
                className={`text-xl transition-transform duration-300 group-hover:scale-110 ${
                  activeId === key ? "scale-110" : "scale-100"
                }`}
              />

              <span className="absolute left-14 opacity-0 pointer-events-none translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-200 px-3 py-1.5 rounded-md whitespace-nowrap shadow-xl">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;