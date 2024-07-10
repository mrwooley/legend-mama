import * as React from 'react';
import Person from "@/components/icons/person";

export default function CharacterSheetCard({name="Character Name"}) {
  return (
    <button className="flex flex-col w-48 h-64 p-5 justify-end items-center rounded-lg shadow-sm bg-accent-2 fill-text-1 text-text-1 gap-4 hover:scale-105 hover:bg-highlight">
      <Person dim={150} className="flex-auto"/>
      <div className="font-serif text-3xl text-center overflow-ellipsis">
        {name}
      </div>
    </button>
  );
}