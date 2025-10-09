import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "relative max-w-md",

        // Base text color (will be visible when shine passes)
        "text-highlight",

        // Shine effect
        "bg-clip-text text-transparent",
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient overlay
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",

        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
