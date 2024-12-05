import * as React from "react"

import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils/utils"

const inputVariants = cva(
  "flex h-10 w-full border rounded-md px-3 py-2 text-sm file:border-0 select-none file:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input-fill-1/50 bg-background-2 text-text-1 file:bg-background-2 file:text-text-1 file:text-text-1 placeholder:text-text-1/65",
        light: "border-background-2/50 bg-input-fill-1 text-text-4 file:bg-input-fill-1 file:text-text-4 placeholder:text-text-4/65"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, variant, ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({variant}),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export {Input}
