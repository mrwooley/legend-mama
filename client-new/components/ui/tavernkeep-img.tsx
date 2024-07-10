import * as React from "react"
import Image from 'next/image'
import img from '@/public/tavernkeep.png'

import {cn} from "@/lib/utils"

const TavernkeepImg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    className={cn("aspect-[1.61] h-full w-auto rounded-lg overflow-hidden", className)}
    ref={ref}
    {...props}>
    <Image
      loading="lazy"
      src={img}
      className="object-cover"
      alt="Tavernkeep at bar"
    />
  </div>

))
TavernkeepImg.displayName = "TavernkeepImg"

export {TavernkeepImg}
