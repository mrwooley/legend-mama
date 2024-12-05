"use client"

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {InputField, PromptField, Prompts, SelectField} from "@/components/ui/prompts";
import {useFormContext} from "react-hook-form";

export default function CharacteristicsSection() {
  const form = useFormContext();

  return (
    <Card variant="form" className="flex-auto">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Basic Information</h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <FormField
          control={form.control}
          name="personalityTraits[0]"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Trait 1</FormLabel></PromptField>
                <FormControl>
                  <InputField type="text" {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="personalityTraits[1]"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Trait 2</FormLabel></PromptField>
                <FormControl>
                  <InputField type="text" {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ideal"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Ideal</FormLabel></PromptField>
                <FormControl>
                  <InputField type="text" {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bond"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Bond</FormLabel></PromptField>
                <FormControl>
                  <InputField type="text" {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="flaw"
          render={({ field }) => (
            <FormItem>
              <Prompts>
                <PromptField><FormLabel>Flaw</FormLabel></PromptField>
                <FormControl>
                  <InputField type="text" {...field}/>
                </FormControl>
              </Prompts>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}