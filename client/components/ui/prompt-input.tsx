import * as React from "react"
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";


export default function PromptInput({className="", prompt = "Prompt", type="text", fill="accent-2", width=""}) {
  return (
    <div
      className={cn(`flex flex-row w-full rounded-md bg-${fill} border-${fill} border-4`, className)}
    >
      <label className={`min-w-fit ${width} h-auto pl-3 pr-4 py-2 text-md text-text-1 bg-inherit text-nowrap `}>{prompt}</label>
      <Input variant="light" type={type} className="flex-auto h-10 rounded-none rounded-r-md border-none"/>
    </div>
  );
}
