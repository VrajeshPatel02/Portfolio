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

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Framer Motion scroll tracking
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 200], ["100%", "60%"]); // shrink effect
  const blur = useTransform(scrollY, [0, 200], [0, 20]);          // blur effect
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 1]);      // full opacity on scroll for solid background

  // Background color tied to theme (changes automatically with CSS variables updated by theme toggle)
  const backgroundColor = useMotionTemplate`hsl(var(--background) / ${bgOpacity})`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky left-0 right-0 top-0 z-50 w-full px-0 py-4 text-primary pointer-events-none"
    >
      <motion.nav
        style={{ 
          width, 
          backdropFilter: useMotionTemplate`blur(${blur}px)`, 
          backgroundColor 
        }}
        className="mx-auto flex items-center justify-between gap-6 rounded-full px-4 py-3 sm:px-6 sm:pr-4 pointer-events-auto transition-all duration-500 ease-in-out"
      >
        <div className="text-lg font-sans">VNP</div>

        <div className="navbar flex justify-center px-3">
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="inline-block px-3 py-2 text-sm font-sans hover:underline underline-offset-4"
              >
                <Link href={link.link} className="flex items-center gap-2">
                  {pathname === link.link && (
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping-once"></span>
                      <span className="relative inline-flex size-1.5 rounded-full bg-sky-500"></span>
                    </span>
                  )}
                  <TextRoll key={index}>{link.name}</TextRoll>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ThemeToggleButton2 className="h-7 w-7" />
      </motion.nav>
    </motion.header>
  )
}

export default Navbar;