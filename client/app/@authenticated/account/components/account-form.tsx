"use client"

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import DeleteAlert from "@/app/@authenticated/account/components/delete-alert";
import {useForm} from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
}

export default function AccountForm() {
  //TODO: Fetch default values from Legend Mama API routes
  const user = {
    name: "Megan Wooley",
    email: "meganwooley@example.com",
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: {isDirty, dirtyFields}} = useForm<FormValues>({defaultValues: user});

  const onSubmit = async (data: FormValues) => {
    // Update user info Firebase Auth, send dirty fields
    console.log(data);
    reset(data);
  };

  return (
    <div className="flex-auto flex flex-col w-[60%] min-w-[400px] max-w-[600px] gap-4">
      <h3>Account Details</h3>
      <form className="flex-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Name</Label>
          <Input variant={"light"} {...register('name', {required: true})}></Input>
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" variant={"light"} {...register('email', {required: true})}></Input>
        </div>
        <Button size="lg" type="submit" className={isDirty ? "" : "invisible"}>Save Changes</Button>
      </form>
      <h3 className="mt-10">Danger Zone</h3>
      <DeleteAlert>
        <Button variant="destructive" size="lg">Delete Account</Button>
      </DeleteAlert>
    </div>
  );
}