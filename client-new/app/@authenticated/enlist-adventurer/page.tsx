import * as React from "react";
import Image from "next/image";
import title from "@/public/enlist-adventurer.svg";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function EnlistAdventurer() {
  return (
    <div className={"h-full w-full flex flex-col gap-10 py-[3%] px-[5%]"}>
      <header>
        <div className="h-28">
          <Image
            alt="Enlist Adventurer"
            src={title}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>
        <h2>
          Create a new character
        </h2>
      </header>
      <div className="flex-auto p-[5%]">
        <ScrollArea className="h-full w-full rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            <div> stuff</div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}