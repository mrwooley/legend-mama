"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useForm, useFormState} from "react-hook-form";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {Conversation, Dialogue, Speaker} from "@/components/conversation";
import {DialogHeader, DialogTitle} from "@/components/ui/dialog";

interface FormValues {
  email: string;
}

export default function ResetPasswordForm() {
  const {register, handleSubmit, control,} = useForm<FormValues>();
  const {isSubmitted} = useFormState({control});

  const onSubmit = async (data: FormValues) => {
    // Firebase Auth stuff
    // Example: await sendLogin(data.email);
    console.log(data);
  };

  const confirmation = (
    <div className="">
      <DialogHeader className="pb-2">
        <DialogTitle className="text-4xl pb-4">Reset Password</DialogTitle>
        <div className="text-text-1">
          <Conversation className="text-text-5 text-base">
            <Speaker>TAVERNKEEP:</Speaker>
            <Dialogue>
              Hold tight, adventurer! We're sending a raven with password recovery instructions. Check your inbox
              shortly.
              <br/>
              <br/>
              In the meantime, safe travels and we hope to see you back at Legend Mama!
            </Dialogue>
          </Conversation>
        </div>
      </DialogHeader>
    </div>
  );

  const form = (
    <div className="">
      <DialogHeader className="pb-2">
        <DialogTitle className="text-4xl pb-4">Reset Password</DialogTitle>
        <div className="text-text-1">
          <Conversation className="text-text-5">
            <Speaker>TAVERNKEEP:</Speaker>
            <Dialogue>
              Forgotten your password, have you? Worry not, you aren't the first and I doubt you will be the last.
              We'll get you sorted!
            </Dialogue>
          </Conversation>
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              {...register('email', {required: true})}
              placeholder=""
            />
          </div>
          <Button className="mt-2" type="submit" size="lg">Reset Password</Button>
        </div>
      </form>
    </div>
  );


  return (
    <div>
      {!isSubmitted ? form : confirmation}
    </div>
  );
}

