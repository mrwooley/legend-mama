"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {InputField, PromptField, Prompts, SelectField} from "@/components/ui/prompts";
import * as React from "react";
import {useFormContext} from "react-hook-form";
import {races, classes, alignments} from "@/lib/dnd5e"

export default function BasicInformationSection() {
  const form = useFormContext();

  return (
    <Card variant="form" className="flex-auto">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Basic Information</h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Name</FormLabel></PromptField>
                <FormControl>
                  <InputField type="text" {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="race"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Race</FormLabel></PromptField>
                <FormControl>
                  <SelectField items={Object.keys(races)}
                               onValueChange={field.onChange}
                               defaultValue={field.value}
                               placeholder="Required"
                               {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Class</FormLabel></PromptField>
                <FormControl>
                  <SelectField items={Object.keys(classes)}
                               onValueChange={field.onChange}
                               defaultValue={field.value}
                               placeholder="Required"
                               {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alignment"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Alignment</FormLabel></PromptField>
                  <SelectField items={Object.keys(alignments)}
                               onValueChange={field.onChange}
                               defaultValue={field.value}
                               placeholder="Required"
                               {...field}/>
              </Prompts>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}