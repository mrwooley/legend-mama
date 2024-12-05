import * as React from "react";
import Image from "next/image";
import title from "@/public/enlist-adventurer.svg";
import NewCharacterForm from "@/app/@authenticated/enlist-adventurer/components/new-character-form";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";

export default function EnlistAdventurer() {


  return (
    <div className={"h-full w-full flex flex-col gap-5 py-[3%] px-[5%]"}>
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
      <Separator className="bg-support h-0.5"/>
      <ScrollArea className="flex-auto px-[5%]">
        <NewCharacterForm/>
      </ScrollArea>
    </div>
  );
}