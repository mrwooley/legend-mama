import * as React from "react"
import Image from 'next/image'
import img from '@/public/logo.png'

import {cn} from "@/lib/utils"

const Logo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    className={cn("aspect-[1.79] h-full w-auto max-w-[850px]", className)}
    ref={ref}
    {...props}>
    <Image
      loading="lazy"
      src={img}
      className="object-contain"
      alt="Tavernkeep at bar"
    />
  </div>

))
Logo.displayName = "Logo"

export {Logo}