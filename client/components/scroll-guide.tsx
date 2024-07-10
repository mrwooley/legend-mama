import * as React from "react"

import Head from "@/components/icons/head";
import Scroll from "@/components/icons/scroll";
import Sparkles from "@/components/icons/sparkles";
import Heart from "@/components/icons/heart";


const ScrollGuide = ({active = 0, color = "accent-2"}) => {
  const lineProps = `justify-self-center h-12 w-0 bg-transparent border-2 border-${color}`;
  const inactiveIconProps = `fill-${color}`;
  const inactiveCircleProps = "flex size-16 bg-text-1 rounded-full place-content-center";
  const activeIconProps = `fill-text-1`;
  const activeCircleProps = `flex size-16 bg-${color} rounded-full place-content-center`;


  return (
    <div className="inline-flex m-4 text-text-1 font-serif text-xl">
      <div className="flex flex-col place-items-center">
        <div className={active == 1 ? activeCircleProps : inactiveCircleProps}>
          <Heart className={`pt-1 ${active == 1 ? activeIconProps : inactiveIconProps}`}/>
        </div>
        <div className={lineProps}/>
        <div className={active == 2 ? activeCircleProps : inactiveCircleProps}>
          <Head className={`p-0 ${active == 2 ? activeIconProps : inactiveIconProps}`}/>
        </div>
        <div className={lineProps}/>
        <div className={active == 3 ? activeCircleProps : inactiveCircleProps}>
          <Sparkles className={`p-1 ${active == 3 ? activeIconProps : inactiveIconProps}`}/>
        </div>
        <div className={lineProps}/>
        <div className={active == 3 ? activeCircleProps : inactiveCircleProps}>
          <Scroll className={`pr-0.5 pt-0.5 ${active == 3 ? activeIconProps : inactiveIconProps}`}/>
        </div>
      </div>
      <div className="flex flex-col pl-3 justify-items-start">
        <div className="h-16 content-center">Core Identity</div>
        <div className="h-12"/>
        <div className="h-16 content-center">Personality</div>
        <div className="h-12"/>
        <div className="h-16 content-center">Details</div>
        <div className="h-12"/>
        <div className="h-16 content-center">Submit</div>
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