"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {ComponentList} from "@/app/@authenticated/adventurer-profile/components/readonly-component";
import {useCharacterSheet} from "@/app/(providers)/CharacterSheetProvider";

const labelProps = "font-serif text-text-5 text-xl";
const contentProps = "text-sm"

export default function ProficienciesSection() {
  const {characterSheet, newCharacterSheet, updateCharacterSheet} = useCharacterSheet();

  return (
    <Card variant="form" className="flex-auto flex flex-col">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Proficiencies</h3>
      </CardHeader>
      <CardContent className="flex-auto flex flex-col justify-between">
        <div>
          <div className={labelProps}>Armor</div>
          <div className={contentProps}>{ComponentList((characterSheet.armorProficiency !== undefined) ? characterSheet.armorProficiency : [], true)}</div>
        </div>
        <div>
          <div className={labelProps}>Weapon</div>
          <div className={contentProps}>{ComponentList((characterSheet.weaponProficiency !== undefined) ? characterSheet.weaponProficiency : [], true)}</div>
        </div>
        <div>
          <div className={labelProps}>Tool</div>
          <div className={contentProps}>{ComponentList((characterSheet.toolProficiency !== undefined) ? characterSheet.toolProficiency : [], true)}</div>
        </div>
        <div>
          <div className={labelProps}>Language</div>
          <div className={contentProps}>{ComponentList((characterSheet.languages !== undefined) ? characterSheet.languages : [], true)}</div>
        </div>
      </CardContent>
    </Card>
  );
}