import * as React from "react";
import Image from "next/image";
import title from "@/public/my-party.svg";
import CharacterGrid from "@/app/@authenticated/my-party/components/character-grid";

export default function MyParty() {

  return (
    <div className={"h-full w-full flex flex-col gap-10 py-[3%] px-[5%]"}>
      <header>
        <div className="h-28">
          <Image
            alt="My Party"
            src={title}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>
        <h2>
          Manage your character sheets
        </h2>
      </header>
      <div className="flex-auto px-[5%]">
        <CharacterGrid/>
      </div>
    </div>
  );
}
