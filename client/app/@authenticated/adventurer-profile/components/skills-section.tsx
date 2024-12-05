"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import * as React from "react";
import {FieldValue, useFormContext} from "react-hook-form";
import {skillsInfo} from "@/lib/dnd5e";
import {CheckedState} from "@radix-ui/react-checkbox";
import {useCharacterSheet} from "@/app/(providers)/CharacterSheetProvider";

function SkillComponent(id: string, label: string) {
  const form = useFormContext();
  const {characterSheet, updateCharacterSheet} = useCharacterSheet();
  const skillProficiency = form.getValues("skillProficiency");

  return (
    <div>
      <FormField
        key={id}
        control={form.control}
        name="skillProficiency"
        render={({ field }) => {
          let skillValue: number | undefined, skillModifier: number;
          if (characterSheet.skills !== undefined) {
            skillModifier = characterSheet.skills[label];
            skillValue = skillProficiency?.includes(label) ? skillModifier + characterSheet.proficiencyBonus : skillModifier;
          }

          function handleOnChange(id: string, field: FieldValue<any>, checked: CheckedState) {
            if (checked) {
              field.onChange([...field.value, label])
            } else {
              field.onChange(field.value?.filter((value: string) => value !== label))
            }
          }

          return (
            <FormItem
              key={id}
              className="space-x-3"
            >
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(label)}
                  onCheckedChange={(checked) => {handleOnChange(id, field, checked)}}
                />
              </FormControl>
              <FormLabel>
                <span className="pr-4 align-text-top">{(skillValue !== undefined) ? ((skillValue >= 0) ? `+${skillValue}` : skillValue) : ''}</span>
                <span className="font-serif text-xl text-text-5 align-text-bottom">{label}</span>
              </FormLabel>
            </FormItem>
          )
        }}
      />
    </div>
  );
}

function SkillComponentList() {
  const compList = [];
  for (let skill in skillsInfo) {
    compList.push(SkillComponent(skill.toLowerCase().replace(/\s/g, '-'), skill));
  }

  return compList;
}

export default function SkillsSection() {
  const form = useFormContext();

  return (
    <Card variant="form" className="min-w-fit flex flex-col">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Skills</h3>
      </CardHeader>
      <CardContent className="flex-auto flex">
        <FormField
          control={form.control}
          name="skillProficiency"
          render={() => (
            <FormItem
              className ={`flex-auto grid grid-rows-${Object.keys(skillsInfo).length} content-between`}>
              {SkillComponentList()}
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}