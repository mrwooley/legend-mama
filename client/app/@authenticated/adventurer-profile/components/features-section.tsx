"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {ComponentList} from "@/app/@authenticated/adventurer-profile/components/readonly-component";
import {useCharacterSheet} from "@/app/(providers)/CharacterSheetProvider";

export default function FeaturesSection() {
  const {characterSheet, newCharacterSheet, updateCharacterSheet} = useCharacterSheet();

  return (
    <Card variant="form" className="flex-auto flex flex-col">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Features</h3>
      </CardHeader>
      <CardContent className="flex-auto flex text-sm">
        <div>
          {ComponentList((characterSheet.features !== undefined) ? characterSheet.features : [], false)}
        </div>
      </CardContent>
    </Card>
  );
}