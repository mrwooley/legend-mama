import * as React from "react";
import {cn} from "@/lib/utils/utils"

const Sidebar = ({
                          className,
                          ...props
                        }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col h-full justify-between gap-5 bg-background-2 p-[5%] pt-[2.5%] overflow-y", className)}
    {...props}
  />

)
Sidebar.displayName = "Sidebar"

const SidebarContent = ({
                   className,
                   ...props
                 }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col p-[2.5%] gap-4", className)}
    {...props}
  />
)
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = ({
                         className,
                         ...props
                       }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col mb-4", className)}
    {...props}
  />
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = ({
                        className,
                        ...props
                      }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
)
SidebarFooter.displayName = "SidebarFooter"


export {Sidebar, SidebarHeader, SidebarContent, SidebarFooter};