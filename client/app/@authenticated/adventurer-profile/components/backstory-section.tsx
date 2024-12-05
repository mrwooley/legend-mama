"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {Textarea} from "@/components/ui/textarea";
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {useFormContext} from "react-hook-form";

export default function BackstorySection() {
  const form = useFormContext();

  return (
    <Card variant="form" className="flex-auto flex flex-col">
      <CardHeader className="py-4">
        <h3 className="text-text-5">Backstory</h3>
      </CardHeader>
      <CardContent className="flex-auto">
        <FormField
          control={form.control}
          name="backstory"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className="flex-auto" variant="light" {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}