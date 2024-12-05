"use client"

import {Card, CardContent, CardHeader, CardFooter} from "@/components/ui/card";
import * as React from "react";
import MinusCircled from "@/components/icons/minus-circled";
import PlusCircled from "@/components/icons/plus-circled";
import {FormField, FormItem, FormControl} from "@/components/ui/form";
import {useFormContext} from "react-hook-form";
import {useCharacterSheet} from "@/app/(providers)/CharacterSheetProvider";
import {pointBuyScoreCost, pointBuyBudget, validateAbilityScore} from "@/lib/dnd5e";

const abilityLabelProps = "self-start justify-self-end font-serif text-xl text-text-5";
const typeLabelProps = "self-end pb-2 row-span-2 leading-none font-serif text-xl text-text-5";
const abilityTypes = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

export default function AbilitiesSection() {
  const form = useFormContext();

  const [points, setPoints] = React.useState(27);
  const {characterSheet, newCharacterSheet, updateCharacterSheet} = useCharacterSheet();
  form.watch((data, { name, type }) => {
    console.log(data, name, type)
    updateCharacterSheet(data)
  })


  const handleScoreChange = (ability: string, score: number, by: number) => {
    const validScore = validateAbilityScore(score,score + by, points)
    const newPoints = points - pointBuyScoreCost[score] + pointBuyScoreCost[validScore];
    setPoints(newPoints);
    form.setValue(`abilityScores.${ability.toLowerCase()}`, validScore);
  }

  return (
    <Card variant="form" className="flex flex-col">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Abilities</h3>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-8 grid-flow-col -mt-6 gap-x-2 place-items-center text-sm">
          {/*Labels*/}
          {/*<div></div>*/}
          <div className="row-span-2"></div>
          {abilityTypes.map((ability: string) => (
            <div key={ability.toLowerCase()} className={abilityLabelProps}>
              {ability}
            </div>
          ))}

          {/*Scores*/}
          <div className={typeLabelProps}>Score</div>
          {abilityTypes.map((ability: string) => (
            <FormField
              key={ability.toLowerCase()}
              control={form.control}
              name={`abilityScores.${ability.toLowerCase()}`}
              render={({ field }) => (
                <FormItem
                key={ability.toLowerCase()}>
                  <FormControl>
                    <div className="inline-flex gap-1 fill-support">
                      <MinusCircled
                        onClick={() => handleScoreChange(ability, field.value, -1)}
                        className={(validateAbilityScore(field.value, field.value-1, points) === field.value) ? "cursor-not-allowed fill-support/50" :  "cursor-pointer" }/>
                      <div className="bg-input-fill-1 text-text-4 size-8 text-center align-center content-center rounded-md">
                        {field.value}
                      </div>
                      <PlusCircled
                        onClick={() => handleScoreChange(ability, field.value, 1)}
                        className={(validateAbilityScore(field.value, field.value+1, points) === field.value) ? "cursor-not-allowed fill-support/50" :  "cursor-pointer" }/>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          ))}

          {/*Modifiers*/}
          <div className={typeLabelProps}>Modifier</div>
          {abilityTypes.map((ability: string) => (
            <div key={ability.toLowerCase()}>
              {(characterSheet.abilityModifiers !== undefined) ? `${(characterSheet.abilityModifiers[ability.toLowerCase()] > 0) ? `+` : ''}${characterSheet.abilityModifiers[ability.toLowerCase()]}` : ""}
            </div>
          ))}

          {/*Saving Throws*/}
          <div className={typeLabelProps}>
            <p>
              Saving
              <br/>
              Throw
            </p>
          </div>
          {abilityTypes.map((ability: string) => (
            <div key={ability.toLowerCase()}>
              {(characterSheet.savingThrows !== undefined) ? `${(characterSheet.savingThrows[ability.toLowerCase()] > 0) ? `+` : ''}${characterSheet.savingThrows[ability.toLowerCase()]}` : ""}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className={points === pointBuyBudget ? "text-text-5": "text-accent-1"}>
        Remaining Points: {pointBuyBudget-points}
      </CardFooter>
    </Card>
  );
}