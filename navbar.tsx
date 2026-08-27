"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Clapperboard } from "./ui/Clapperboard";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/#projects" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 ${scrolled ? "pt-4" : "pt-5"}`}
    >
      <div
        className={`flex flex-col items-center px-6 sm:px-8 py-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] border ${scrolled || isOpen ? "w-[95%] max-w-5xl rounded-3xl backdrop-blur-xl md:backdrop-blur-3xl bg-white/5 border-white/10 shadow-2xl" : "w-full max-w-7xl bg-transparent border-transparent"}`}
      >
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? "bg-white/5 group-hover:bg-red-600" : "bg-white/10 group-hover:bg-red-600"}`}>
              <Clapperboard />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-200 transition-colors">JASPAL</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : item.href.includes("#") ? false : pathname === item.href;
                return (
                  <Link key={item.name} href={item.href} className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden">
                    <span className={`relative z-10 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>{item.name}</span>
                    {isActive && <m.div layoutId="nav-pill" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                    <span className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 rounded-full transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen((v) => !v)} aria-label="Toggle navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden w-full overflow-hidden">
              <div className="flex flex-col gap-2 pt-4 pb-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.nav>
  );
}
