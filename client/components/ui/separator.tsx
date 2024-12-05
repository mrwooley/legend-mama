"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import {cn} from "@/lib/utils/utils"
import {cva, type VariantProps} from "class-variance-authority";

const separatorVariants = cva(
  "shrink-0",
  {
    variants: {
      variant: {
        default: "bg-input-fill-1/50",
        light: "bg-background-2/50"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>
>(
  (
    {className, orientation = "horizontal", decorative = true, variant, ...props},
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorVariants({variant}),//"shrink-0 bg-slate-200 dark:bg-slate-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export {Separator}
