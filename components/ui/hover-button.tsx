"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  icon?: React.ReactNode;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ children, className, icon, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial="initial"
        whileHover="hovered"
        className={cn(
          "group relative flex items-center justify-center overflow-hidden rounded-full border border-gray-400 px-10 py-3 text-md font-medium text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background",
          className
        )}
        {...props}
      >
        <div className="relative flex items-center overflow-hidden">
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
          >
            {children}
            {icon && <span className="inline-flex">{icon}</span>}
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "150%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center gap-2"
          >
            {children}
            {icon && <span className="inline-flex">{icon}</span>}
          </motion.div>
        </div>
      </motion.button>
    );
  }
);

HoverButton.displayName = "HoverButton";

export { HoverButton };
