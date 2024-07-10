"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Conversation, Dialogue, Speaker} from "@/components/conversation";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm({children,}: Readonly<{ children: React.ReactNode; }>) {
  const {register, handleSubmit} = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Firebase Auth stuff
    // Example: await sendLogin(data.email);
    console.log(data);
  };

  return (
    <div className="">
      <DialogHeader className="pb-2">
        <DialogTitle className="text-4xl pb-4">Guild Registration</DialogTitle>
        <div className="text-text-1">
          <Conversation className="text-text-5">
            <Speaker>TAVERNKEEP:</Speaker>
            <Dialogue>
              A new face! Welcome to Legend Mama! Before you settle in, let's get you registered with the guild.
            </Dialogue>
          </Conversation>
          {children}
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register('name', {required: true})}
              placeholder=""
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {required: true})}
              placeholder=""
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register('password', {required: true})}
              placeholder=""
            />
          </div>
          <Button className="mt-2" type="submit" size="lg">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}