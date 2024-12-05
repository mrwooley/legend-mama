"use client"

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import ExclamationTriangle from "@/components/icons/exclamation-triangle";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Heart from "@/components/icons/heart";
import CoreIdentityForm from "@/app/@authenticated/enlist-adventurer/components/core-identity-form";
import Head from "@/components/icons/head";
import PersonalityForm from "@/app/@authenticated/enlist-adventurer/components/personality-form";
import Sparkles from "@/components/icons/sparkles";
import DetailsForm from "@/app/@authenticated/enlist-adventurer/components/details-form";
import Scroll from "@/components/icons/scroll";
import SubmitForm from "@/app/@authenticated/enlist-adventurer/components/submit-form";
import * as React from "react";
import {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {charDetails} from "@/data/dummyData";
import { zodResolver } from "@hookform/resolvers/zod"
import {Form} from "@/components/ui/form"
import {useRouter} from "next/navigation";
import {useCharacterSheet} from "@/app/(providers)/CharacterSheetProvider";


export const formSchema = z.object({
  name: z.string().optional(),
  race: z.string().optional(),
  class: z.string().optional(),
  worldview: z.string().optional(),
  ethicalTraits: z.object({
    integrity: z.number(),
    fairness: z.number(),
    charity: z.number(),
    loyalty: z.number(),
    obedience: z.number(),
  }),
  personality: z.object({
    openness: z.number(),
    conscientiousness: z.number(),
    extroversion: z.number(),
    agreeableness: z.number(),
    neuroticism: z.number(),
  }),
  quirks: z.array(z.string()).optional(),
  motivations: z.array(z.string()),
  fears: z.array(z.string()),
  likes: z.array(z.string()).optional(),
  dislikes: z.array(z.string()).optional(),
  backstory: z.string().optional(),
})

export default function NewCharacterForm() {
  const router = useRouter();
  const [missing, setMissing] = useState([]);
  const [characterDetails, setCharacterDetails] = useState(charDetails);
  const {characterSheet, newCharacterSheet, updateCharacterSheet} = useCharacterSheet();
  // TODO: Create characterDetails data to pass to the adventurer profile and send to backend

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: characterDetails,
  })

  form.watch((data, { name, type }) => {
    console.log(data, name, type)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: print or save
    console.log(values)
    newCharacterSheet(values)
    router.push('/adventurer-profile')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="inline-flex items-center gap-4">
                  <div className="flex bg-text-1 rounded-full aspect-square place-content-center">
                    <Heart className="p-1 fill-accent-2"/>
                  </div>
                  Core Identity
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CoreIdentityForm/>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="inline-flex items-center gap-4">
                  <div className="flex bg-text-1 rounded-full aspect-square place-content-center">
                    <Head className="p-1 fill-accent-2"/>
                  </div>
                  Personality
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <PersonalityForm/>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="inline-flex items-center gap-4">
                  <div className="flex bg-text-1 rounded-full aspect-square place-content-center">
                    <Sparkles className="p-1.5 fill-accent-2"/>
                  </div>
                  Details
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <DetailsForm/>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex-auto flex flex-col gap-8">
            <div className="inline-flex items-center gap-4">
              <div className="flex bg-text-1 rounded-full aspect-square place-content-center">
                <Scroll className="p-1 fill-accent-2"/>
              </div>
              <h3 className="text-text-1 ">Submit</h3>
              <Alert variant="destructive" className={`${missing.length > 0 ? "visible" : "hidden"}`}>
                <ExclamationTriangle dim={20}/>
                <AlertTitle>Missing Required</AlertTitle>
                <AlertDescription>
                  Please fill out all required inputs: {missing}
                </AlertDescription>
              </Alert>
            </div>
            <SubmitForm />
          </div>
        </div>
      </form>
    </Form>
  );
}