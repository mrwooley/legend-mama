"use client"

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {InputField, PromptField, Prompts, SelectField} from "@/components/ui/prompts";
import {useFormContext} from "react-hook-form";
import {skillsInfo, languages, tools} from "@/lib/dnd5e";

export default function BackgroundSection() {
  const form = useFormContext();

  return (
    <Card variant="form" className="flex-auto">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Background</h3>
      </CardHeader>
      <CardContent className="flex flex-row gap-3 place-items-center">
        <div className="flex flex-col basis-1/2 gap-3">
          <div className="flex flex-col gap-2">
            <div className="font-serif text-xl text-text-5">Overview</div>
            <FormField
              control={form.control}
              name="background.name"
              render={({field}) => (
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
              name="background.description"
              render={({field}) => (
                <FormItem>
                  <Prompts>
                    <PromptField><FormLabel>Description</FormLabel></PromptField>
                    <FormControl>
                      <InputField type="text" {...field}/>
                    </FormControl>
                  </Prompts>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
          <div className="font-serif text-xl text-text-5">Feature</div>
            <FormField
              control={form.control}
              name="background.feature.name"
              render={({field}) => (
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
              name="background.feature.description"
              render={({field}) => (
                <FormItem>
                  <Prompts>
                    <PromptField><FormLabel>Description</FormLabel></PromptField>
                    <FormControl>
                      <InputField type="text" {...field}/>
                    </FormControl>
                  </Prompts>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col basis-1/2 gap-3">
          <div className="flex flex-col gap-2">
            <div className="font-serif text-xl text-text-5">Skill Proficiency</div>
            <FormField
              control={form.control}
              name="background.skillProficiency[0]"
              render={({field}) => (
                <FormItem>
                  <Prompts>
                    <PromptField><FormLabel>Choice 1</FormLabel></PromptField>
                    <FormControl>
                      <SelectField items={Object.keys(skillsInfo)}
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
              name="background.skillProficiency[1]"
              render={({field}) => (
                <FormItem>
                  <Prompts>
                    <PromptField><FormLabel>Choice 2</FormLabel></PromptField>
                    <FormControl>
                      <SelectField items={Object.keys(skillsInfo)}
                                   onValueChange={field.onChange}
                                   defaultValue={field.value}
                                   placeholder="Required"
                                   {...field}/>
                    </FormControl>
                  </Prompts>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-serif text-xl text-text-5">Tool Proficiency/Language</div>
            <FormField
              control={form.control}
              name="background.other[0]"
              render={({field}) => (
                <FormItem>
                  <Prompts>
                    <PromptField><FormLabel>Choice 1</FormLabel></PromptField>
                    <FormControl>
                      <SelectField items={Object.keys(languages)}
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
              name="background.other[1]"
              render={({field}) => (
                <FormItem>
                  <Prompts>
                    <PromptField><FormLabel>Choice 2</FormLabel></PromptField>
                    <FormControl>
                      <SelectField items={Object.keys(languages)}
                                   onValueChange={field.onChange}
                                   defaultValue={field.value}
                                   placeholder="Required"
                                   {...field}/>
                    </FormControl>
                  </Prompts>
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}