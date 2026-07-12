"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import socialLinks from "@/data/social";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scrolling when the full-screen menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function just in case
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#project" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-6 md:px-10 py-2 flex justify-between items-center z-[100] pointer-events-none">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-[0.2em] uppercase text-white pointer-events-auto hover:text-zinc-300 transition-colors"
        >
          KARKI
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900/50 border border-zinc-800 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-zinc-800"
        >
          {isOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </nav>

      {/* 2. Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 w-full h-screen bg-[#18181B] z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-200"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 md:gap-12">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              className={`overflow-hidden transition-all duration-500`}
              style={{ transitionDelay: `${isOpen ? index * 100 + 200 : 0}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl md:text-5xl font-bold tracking-tight text-zinc-500 hover:text-white transition-all duration-500 transform ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional: Minimalist Footer at the bottom of the menu */}
        <div
          className={`absolute bottom-12 text-zinc-500 text-sm tracking-widest uppercase transition-all duration-700 ${
            isOpen ? "opacity-100 delay-700" : "opacity-0"
          }`}
        >
          {socialLinks[0].email}
        </div>
      </div>
    </>
  );
};

export default Navbar;
