import * as React from "react"
import {Textarea} from "@/components/ui/textarea";
import Shuffle from "@/components/icons/shuffle";
import PlusCircled from "@/components/icons/plus-circled";

const TextareaSuggestion = ({suggestion = "Suggestion", placeholder = "Placeholder", color = "accent-2"}) => {
  const props = `flex flex-col w-full rounded-md bg-${color} border-${color} border-3`
  return (
    <div className={props}>
      <div className="flex justify-center content-center w-full">
        <Textarea placeholder={placeholder} variant="light" className="rounded-none rounded-t-md border-none min-h-32"/>
      </div>
      <div className="flex flex-row justify-between gap-2 h-10 w-full px-3 text-text-1 text-sm fill-text-1">
        <div className="h-full w-full">
          <button
            className="group inline-flex h-full items-center justify-start text-left align-middle gap-x-2 origin-left hover:scale-105 hover:text-highlight max-md:text-xs">
            <PlusCircled dim={20} className="group-hover:fill-highlight"/>
            {suggestion}
          </button>
        </div>
        <button className="group h-full items-center justify-end hover:scale-110">
          <Shuffle dim={20} className="group-hover:fill-highlight"/>
        </button>
      </div>
    </div>
  )
}
TextareaSuggestion.displayName = "TextareaSuggestion"

export {TextareaSuggestion}
