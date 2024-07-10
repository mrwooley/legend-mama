import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {cn} from "@/lib/utils";



const Speaker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-left",
      className
    )}
    {...props}
  />
))

Speaker.displayName = "Prompt"


const Dialogue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-left mt-1 ml-5 max-md:ml-3",
      className
    )}
    {...props}
  />
))

Dialogue.displayName = "Dialog"

const Conversation = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-left max-md:text-sm",
      className
    )}
    {...props}
  />
))

Conversation.displayName = "PromptDialog"

export {Conversation, Speaker, Dialogue}


