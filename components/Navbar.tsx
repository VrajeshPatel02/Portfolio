"use client"
import { TextRoll } from "@/components/ui/skiper-ui/skiper58"
import { ThemeToggleButton2 } from "@/components/ui/skiper-ui/skiper4"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import "./styles/navbar.css"

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Project", link: "/projects" },
  { name: "Contact", link: "/contact" }
];

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Framer Motion scroll tracking
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 200], ["100%", "70%"]); // shrink effect
  const blur = useTransform(scrollY, [0, 200], [0, 10]);          // blur effect
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.8]);      // background opacity

  const backgroundColor = useMotionTemplate`hsl(var(--background) / ${bgOpacity})`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-1/2 -translate-x-1/2 top-0 z-50 w-full max-w-7xl px-4 md:px-14 lg:px-18 py-4 text-primary pointer-events-none"
    >
      <motion.nav
        style={{ 
          width, 
          backdropFilter: useMotionTemplate`blur(${blur}px)`, 
          backgroundColor 
        }}
        className="mx-auto flex items-center justify-between gap-6 rounded-full px-6 py-3 pointer-events-auto transition-all duration-500 ease-in-out border border-white/10 shadow-lg"
      >
        <div className="text-xl font-bold font-sans tracking-tight">VNP</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="px-3 py-2 text-sm font-medium hover:text-highlight transition-colors"
              >
                <Link href={link.link} className="flex items-center gap-2">
                  {pathname === link.link && (
                    <motion.span 
                      layoutId="nav-active"
                      className="size-1.5 rounded-full bg-highlight"
                    />
                  )}
                  <TextRoll key={index}>{link.name}</TextRoll>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggleButton2 className="h-8 w-8" />
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl pointer-events-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.link} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-semibold flex items-center justify-between ${pathname === link.link ? 'text-highlight' : 'text-primary/70'}`}
              >
                {link.name}
                {pathname === link.link && <span className="size-2 rounded-full bg-highlight" />}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default Navbar;