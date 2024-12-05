import * as React from "react"
import Image from 'next/image'
import img from '@/public/tavern.png'

import {cn} from "@/lib/utils/utils"

const TavernImg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    className={cn("aspect-square h-full w-auto overflow-hidden content-start", className)}
    ref={ref}
    {...props}>
    <Image
      loading="lazy"
      src={img}
      className="object-cover scale-110"
      alt="Tavern"
    />
  </div>

))
TavernImg.displayName = "TavernImg"

export {TavernImg}
