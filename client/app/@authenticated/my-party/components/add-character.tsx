"use client"
import * as React from 'react';
import PlusCircled from "@/components/icons/plus-circled";
import { useRouter } from 'next/navigation'

export default function AddCharacter() {
  const router = useRouter()
  return (
    <button
      className="flex flex-col w-48 h-64 p-5 justify-end items-center rounded-lg shadow-sm bg-accent-2 fill-text-1 text-text-1 gap-4 hover:scale-105 hover:bg-highlight"
      onClick={() => router.push('/enlist-adventurer')}
    >
      <PlusCircled dim={150} className="flex-auto"/>
      <div className="font-serif text-3xl text-center overflow-ellipsis">
        Add Character
      </div>
    </button>
  );
}