import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-serif ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-link bg-button-fill-1 text-text-1 hover:bg-button-fill-1/80",
        destructive:
          "border border-support bg-button-fill-3 text-text-1 hover:bg-button-fill-3/80",
        affirmative:
          "border border-link bg-button-fill-2 text-text-1 hover:bg-button-fill-2/80",
        link: "text-link underline-offset-4 hover:underline",
        icon: "text-text-1 bg-transparent border"
      },
      size: {
        default: "text-lg px-6 py-0.5 pb-2",
        sm: "text-md px-4 pb-1",
        lg: "text-2xl px-8 pb-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export {Button, buttonVariants}
