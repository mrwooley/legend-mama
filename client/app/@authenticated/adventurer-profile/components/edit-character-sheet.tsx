"use client"
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import BasicInformationSection from "@/app/@authenticated/adventurer-profile/components/basic-information-section";
import ImageSection from "@/app/@authenticated/adventurer-profile/components/image-section";
import AbilitiesSection from "@/app/@authenticated/adventurer-profile/components/abilities-section";
import ProficienciesSection from "@/app/@authenticated/adventurer-profile/components/proficiencies-section";
import SkillsSection from "@/app/@authenticated/adventurer-profile/components/skills-section";
import BackgroundSection from "@/app/@authenticated/adventurer-profile/components/background-section";
import FeaturesSection from "@/app/@authenticated/adventurer-profile/components/features-section";
import CharacteristicsSection from "@/app/@authenticated/adventurer-profile/components/characteristics-section";
import BackstorySection from "@/app/@authenticated/adventurer-profile/components/backstory-section";
import {useCharacterSheet} from "@/app/(providers)/CharacterSheetProvider";
import LoadingAnimation from "@/app/@authenticated/adventurer-profile/components/loading-animation";
import {Suspense} from "react";

const abilityScoreObj = z.object({
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
});

const formSchema = z.object({
  name: z.string(),
  race: z.string(),
  class: z.string(),
  alignment: z.string(),
  background: z.object({
    name: z.string(),
    description: z.string(),
    skillProficiency: z.string().array(),
    otherProficiency: z.string().array(),
    feature: z.object({
      name: z.string(),
      description: z.string(),
    })
  }),
  abilityScores: abilityScoreObj,
  racialStatBonus: abilityScoreObj,
  skillProficiency: z.array(z.string()),
  toolProficiency: z.array(z.string()),
  languages: z.array(z.string()),
  personalityTraits: z.array(z.string()).length(2),
  ideal: z.string(),
  bond: z.string(),
  flaw: z.string(),
  backstory: z.string(),
  quote: z.string()
})

const gap = 2;
export default function EditCharacterSheet() {
  const {characterSheet, updateCharacterSheet} = useCharacterSheet();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: characterSheet,
  })

  form.watch((data, { name, type }) => {
    console.log(data, name, type)
    updateCharacterSheet(data)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: print or save
    console.log(values)
  }

  return (
    <Suspense fallback={<LoadingAnimation/>}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={`flex flex-col gap-${gap}`}>
            <div className={`flex-auto flex flex-row gap-${gap} max-md:flex-col`}>
              <ImageSection/>
              <BasicInformationSection/>
            </div>
            <div className={`flex-auto flex flex-row gap-${gap} max-md:flex-col`}>
              <div className={`flex-auto flex flex-col gap-${gap}`}>
                <AbilitiesSection/>
                <ProficienciesSection/>
              </div>
              <SkillsSection/>
            </div>
            <BackgroundSection/>
            <div className={`flex-auto flex flex-row gap-${gap} max-md:flex-col`}>
              <FeaturesSection/>
              <CharacteristicsSection/>
            </div>
            <BackstorySection/>
          </div>
        </form>
      </Form>
    </Suspense>
  );
}
