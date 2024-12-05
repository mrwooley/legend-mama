import * as React from "react";
import Image from "next/image";
import title from "@/public/adventurer-profile.svg";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import EditCharacterSheet from "@/app/@authenticated/adventurer-profile/components/edit-character-sheet";


export default function AdventurerProfile() {
  let isLoading = true;

  return (
    <div className={"h-full w-full flex flex-col gap-5 py-[3%] px-[5%]"}>
      <header>
        <div className="h-28">
          <Image
            alt="Adventurer Profile"
            src={title}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>
        <h2>
          Edit a character
        </h2>
      </header>
      <Separator className="bg-support h-0.5"/>
      <ScrollArea className="flex-auto px-[5%]">
        <EditCharacterSheet/>
      </ScrollArea>
    </div>
  );
}