"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import CrossedSwords from "@/components/icons/crossed-swords";
import Sword from "@/components/icons/sword";

const swordToggleVariants = cva(
  "group inline-flex items-center bg-transparent justify-center disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "w-50",
        sm: "w-27",
        lg: "w-75",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const CrossedSwordsToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof swordToggleVariants>
>(({className, size, ...props}, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(swordToggleVariants({size, className}))}
    {...props}
  >
    <CrossedSwords dim={Number(swordToggleVariants({size}).slice(-2))} shadow={true}/>
  </TogglePrimitive.Root>
))
CrossedSwordsToggle.displayName = "CrossedSwordsToggle"

const SwordToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof swordToggleVariants>
>(({className, size, ...props}, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(swordToggleVariants({size, className}))}
    {...props}
  >
    <Sword dim={Number(swordToggleVariants({size}).slice(-2))} shadow={true}/>
  </TogglePrimitive.Root>
))
SwordToggle.displayName = "SwordToggle"


export {CrossedSwordsToggle, SwordToggle, swordToggleVariants}
