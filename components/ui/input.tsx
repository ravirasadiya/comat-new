import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffix, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        <input
          type={type}
          className={cn(
            // Base styles
            "flex h-9 w-full",
            
            // Border and background
            "rounded-md border border-neutral-200 dark:border-neutral-700",
            "bg-transparent",
            
            // Padding and text
            "px-3 py-1",
            "text-base md:text-sm",
            
            // Effects
            "shadow-sm",
            "transition-colors",
            
            // File input styles
            "file:border-0 file:bg-transparent",
            "file:text-sm file:font-medium",
            "file:text-neutral-950",
            
            // Hide number input spinners
            "[appearance:textfield]",
            "[&::-webkit-outer-spin-button]:appearance-none",
            "[&::-webkit-inner-spin-button]:appearance-none",
            
            // Placeholder
            "placeholder:text-neutral-500",
            
            // Focus styles
            "focus-visible:outline-none",
            "focus-visible:ring-1 focus-visible:ring-brand-600",
            
            // Disabled state
            "disabled:cursor-not-allowed disabled:opacity-50",
            
            // Dark mode
            "dark:file:text-neutral-50",
            "dark:placeholder:text-neutral-400", 
            "dark:focus-visible:ring-brand-600",

            // Suffix padding
            suffix && "pr-8",
            
            className
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3 flex items-center pointer-events-none text-neutral-500 dark:text-neutral-400">
            {suffix}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
