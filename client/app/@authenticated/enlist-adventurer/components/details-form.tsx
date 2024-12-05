"use client"

import {TextareaSuggestion} from "@/components/ui/textarea-suggestion";
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {InputField, PromptField, Prompts, SelectField} from "@/components/ui/prompts";
import * as React from "react";
import {useFormContext} from "react-hook-form";
import {races, classes} from "@/lib/dnd5e"


export default function DetailsForm() {
  const form = useFormContext();

  // TODO: Randomly select suggestions
  const quirkSuggestion = "Chews on hair";
  const backstorySuggestion = "Woke up with no idea who you are or where you are."

  return (
    <div className="flex-auto flex flex-wrap gap-12 px-[5%] pb-[2%] max-md:gap-2">
      <div className="flex-auto flex flex-col gap-2 justify-between">
        <div>
          <FormField
            control={form.control}
            name="quirks"
            render={({ field }) => (
              <FormItem>
                <h3 className="pb-3">Quirks & Unique Traits <span className="text-sm">(optional)</span></h3>
                <FormControl>
                  <TextareaSuggestion {...field} suggestion={quirkSuggestion} placeholder="Optional"/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="backstory"
            render={({ field }) => (
              <FormItem>
                <h3 className="pb-3">Backstory <span className="text-sm">(optional)</span></h3>
                <FormControl>
                  <TextareaSuggestion {...field} suggestion={backstorySuggestion} placeholder="Optional"/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="flex-auto flex flex-col gap-2 self-center">
        <h3 className="text-2xl">Perhaps you already have someone in mind...</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField>Name</PromptField>
                <FormControl>
                  <InputField type="text" {...field} placeholder="Optional"/>
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
                               placeholder="Optional"
                               required={false}
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
                <PromptField>Class</PromptField>
                <FormControl>
                  <SelectField items={Object.keys(classes)}
                               onValueChange={field.onChange}
                               defaultValue={field.value}
                               placeholder="Optional"
                               required={false}
                               {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}