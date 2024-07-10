import * as React from "react";
import AddCharacter from "@/app/@authenticated/my-party/components/add-character";
import CharacterSheetCard from "@/app/@authenticated/my-party/components/character-sheet-card";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function CharacterGrid() {
  //TODO: Get account character sheets with Legend Mama API
  const characterSheets = ["Cornelius Prime", "Mr. Potato Head", "Vampire Witch", "Duchess of Ham"];

  const cards = [];
  for (let i=0; i < characterSheets.length; i++) {
    cards.push(<CharacterSheetCard name={characterSheets[i]} key={i}/>);
  }

  return (
      <div className="flex flex-wrap gap-10">
        {cards}
        <AddCharacter/>
      </div>
  );
}