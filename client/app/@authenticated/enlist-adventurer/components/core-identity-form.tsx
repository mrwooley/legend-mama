import {TextareaSuggestion} from "@/components/ui/textarea-suggestion";
import SwordGroup from "@/components/sword-group";
import {FormControl, FormField, FormItem} from "@/components/ui/form";
import * as React from "react";
import {useFormContext} from "react-hook-form";
import {skillsInfo, validateAbilityScore} from "@/lib/dnd5e";
import MinusCircled from "@/components/icons/minus-circled";
import PlusCircled from "@/components/icons/plus-circled";

const ethicalTraits = [
    {
      title: "Integrity",
      left: "Deceptive",
      right: "Honest",
    },
    {
      title: "Fairness",
      left: "Merciful",
      right: "Just",
    },
    {
      title: "Charity",
      left: "Egotistic",
      right: "Altruistic",
    },
    {
      title: "Loyalty",
      left: "Fickle",
      right: "Steadfast",
    },
    {
      title: "Obedience",
      left: "Rebellious",
      right: "Compliant",
    },
  ]

export default function CoreIdentityForm() {
  const form = useFormContext();

  // TODO: Randomly select suggestions
  const motivationSuggestion = "Accumulating great wealth";
  const fearSuggestion = "Being attacked by cheese wheels"
  return (
    <div className="flex-auto flex flex-wrap gap-12 px-[5%] pb-[2%] max-md:gap-2">
      <div className="flex-auto flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="motivations"
            render={({ field }) => (
              <FormItem>
                <h3>Motivations</h3>
                <FormControl>
                  <TextareaSuggestion {...field} suggestion={motivationSuggestion} placeholder="Required"/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="fears"
            render={({ field }) => (
              <FormItem>
                <h3>Weaknesses & Fears</h3>
                <FormControl>
                  <TextareaSuggestion {...field} suggestion={fearSuggestion} placeholder="Required"/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="flex flex-col justify-items-start gap-3">
        <h3>Ethical Values</h3>
        {ethicalTraits.map((trait: { title: string, left: string, right: string }) => (
            <FormField
              key={trait.title.toLowerCase()}
              control={form.control}
              name={`ethicalTraits.${trait.title.toLowerCase()}`}
              render={({field}) => (
                <FormItem
                  key={trait.title.toLowerCase()}>
                  <FormControl>
                    <div className="flex flex-col gap-3 origin-top-left max-md:scale-[90%]">
                      <SwordGroup title={trait.title} labelL={trait.left}
                                  labelR={trait.right} size="default"/>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          )
        )}
      </div>
    </div>
  )
    ;
}