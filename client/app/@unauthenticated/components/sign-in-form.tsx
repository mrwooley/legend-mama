"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Conversation, DialogueField, SpeakerField} from "@/components/conversation";

interface FormValues {
  email: string;
  password: string;
}

export default function SignInForm({children,}: Readonly<{ children: React.ReactNode; }>) {
  const {register, handleSubmit} = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Firebase Auth stuff
    // Example: await sendLogin(data.email);
    console.log(data);
  };

  return (
    <div className="">
      <DialogHeader className="pb-2">
        <DialogTitle className="text-4xl pb-4">Sign In</DialogTitle>
        <div className="text-text-1">
          <Conversation className="text-text-5">
            <SpeakerField>TAVERNKEEP:</SpeakerField>
            <DialogueField>
              Ah, a familiar face! You know the drill.
            </DialogueField>
          </Conversation>
          {children}
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder=""
              {...register('email', {required: true})}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder=""
              {...register('password', {required: true})}
            />
          </div>
          <Button className="mt-2" type="submit" size="lg">Sign In</Button>
        </div>
      </form>
    </div>

  );
}