import * as React from "react"

import {cn} from "@/lib/utils/utils"
import {cva, type VariantProps} from "class-variance-authority";
import {Slot} from "@radix-ui/react-slot";


const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input-fill-1/50 bg-background-2 text-text-1 file:bg-background-2 placeholder:text-text-1/65",
        light: "border-background-2/50 bg-input-fill-1 text-text-4 file:bg-input-fill-1 placeholder:text-text-4/65"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  asChild?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, variant, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "textarea"
    return (
      <Comp
        className={cn(textareaVariants({variant, className}))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export {Textarea}
