"use client"
import {Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import {Conversation, SpeakerField, DialogueField} from "@/components/conversation";
import {Button} from "@/components/ui/button";
import * as React from "react";
import { useRouter } from 'next/navigation'
import {CharacterDetails} from "@/lib/types";
import {useFormContext} from "react-hook-form";

export default function SubmitForm(data: CharacterDetails | {}) {
  const form = useFormContext();
  const router = useRouter();

  return (
    <div className="flex-auto flex flex-col self-center max-md:w-full max-md:px-4">
      <Card className="flex-auto max-w-[550px] max-h-[350px]">
        <CardHeader>
          <Conversation className="text-text-5 text-base">
            <SpeakerField>TAVERNKEEP</SpeakerField>
            <DialogueField>
              You are seeking quite the adventurer! Our guild is full of brave souls, each with their own unique skills
              and stories. We’ll find someone who perfectly matches what you’re looking for.
              <br/>
              <br/>
              Of course, for the cost of just one gold coin. A paltry sum to keep the candles lit and the ale flowing.
              What do you say?
            </DialogueField>
          </Conversation>
        </CardHeader>
        <CardFooter className="justify-between">
          <Button variant="destructive" size={"lg"} onClick={() => router.push('/')}>Never mind</Button>
          <Button variant="affirmative" size={"lg"} type={"submit"}>Pay 1 GP</Button>
        </CardFooter>
      </Card>
    </div>
  );
}