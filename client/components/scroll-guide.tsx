import * as React from "react"

import Head from "@/components/icons/head";
import Scroll from "@/components/icons/scroll";
import Sparkles from "@/components/icons/sparkles";
import Heart from "@/components/icons/heart";


const ScrollGuide = ({active = 0, color = "accent-2"}) => {
  const iconSize = 48;
  const spacing = 14;

  const circleProps = "flex rounded-full aspect-square place-content-center";
  const inactiveCircleProps = `bg-text-1`;
  const activeCircleProps = `bg-${color}`;

  const iconProps = "p-1"
  const inactiveIconProps = `fill-${color}`;
  const activeIconProps = `fill-text-1`;

  const lineProps = `justify-self-center h-${spacing} w-0 bg-transparent border-2 border-${color}`;


  return (
    <div className="inline-flex m-4 text-text-1 font-serif text-xl gap-2">
      <div className="flex flex-col place-items-center">
        <div className={`${circleProps} ${active == 1 ? activeCircleProps : inactiveCircleProps}`}>
          <Heart dim={iconSize} className={`${iconProps} ${active == 1 ? activeIconProps : inactiveIconProps}`}/>
        </div>
        <div className={lineProps}/>
        <div className={`${circleProps} ${active == 2 ? activeCircleProps : inactiveCircleProps}`}>
          <Head dim={iconSize} className={`${iconProps} ${active == 2 ? activeIconProps : inactiveIconProps}`}/>
        </div>
        <div className={lineProps}/>
        <div className={`${circleProps} ${active == 3 ? activeCircleProps : inactiveCircleProps}`}>
          <Sparkles dim={iconSize} className={`${iconProps} ${active == 3 ? activeIconProps : inactiveIconProps}`}/>
        </div>
        <div className={lineProps}/>
        <div className={`${circleProps} ${active == 4 ? activeCircleProps : inactiveCircleProps}`}>
          <Scroll dim={iconSize} className={`${iconProps} ${active == 4 ? activeIconProps : inactiveIconProps}`}/>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex-auto h-[${iconSize}] min-h-[${iconSize}] content-center">
          <div className="align-middle">Core Identity</div>
        </div>
        <div className={`h-${spacing}`}/>
        <div className="flex-auto h-[${iconSize}] min-h-[${iconSize}] content-center">
          <div className="align-middle">Personality</div>
        </div>
        <div className={`h-${spacing}`}/>
        <div className="flex-auto h-[${iconSize}] min-h-[${iconSize}] content-center">
          <div className="align-middle">Details</div>
        </div>
        <div className={`h-${spacing}`}/>
        <div className="flex-auto h-[${iconSize}] min-h-[${iconSize}] content-center">
          <div className="align-middle">Submit</div>
        </div>
      </div>
    </div>
  )
}
ScrollGuide.displayName = "ScrollGuide"

export {ScrollGuide}

// <div className="grid gap-y-0 gap-x-0 grid-cols-2 place-items-center m-4 text-text-1 font-serif text-xl">
//   <div className="flex size-16 bg-text-1 rounded-full place-content-center">
//     <Heart className={`${iconProps} pt-1`}/>
//   </div>
//   <div className="justify-self-start">Core Identity</div>
//   <div className={lineProps}/>
//   <div/>
//   <div className="flex size-16 bg-text-1 rounded-full place-content-center">
//     <Head className={`${iconProps} p-0`}/>
//   </div>
//   <div className="justify-self-start">Personality</div>
//   <div className={lineProps}/>
//   <div/>
//   <div className=" flex size-16 bg-text-1 rounded-full place-content-center">
//     <Sparkles className={`${iconProps} p-1`}/>
//   </div>
//   <div className="justify-self-start">Details</div>
//   <div className={lineProps}/>
//   <div/>
//   <div className="flex size-16 bg-text-1 rounded-full place-content-center">
//     <Scroll className={`${iconProps} p-0`}/>
//   </div>
//   <div className="justify-self-start">Submit</div>
//   <div/>
// </div>