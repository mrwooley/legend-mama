"use client"
import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import CrossedSwords from "@/components/icons/crossed-swords";
import Sword from "@/components/icons/sword";

const sizeProps: {[index: string]:any} = {
  sm: {
    titleSize: "text-sm",
    labelSize: "text-xs",
    swordSizes: [35, 40, 45]
  },
  default: {
    titleSize: "text-base",
    labelSize: "text-sm",
    swordSizes: [40, 45, 50]
  },
  lg: {
    titleSize: "text-lg",
    labelSize: "text-base",
    swordSizes: [45, 50, 55]
  }
};

export default function SwordGroupToggle({title = "Title", labelL = "Left", labelR = "Right", size="default"}) {
  const swordSizes = sizeProps[size].swordSizes;
  const sideLabelProps = `flex-1 w-20 min-w-20 text-text-1 ${sizeProps[size].labelSize} align-middle `;
  const toggleGroupItemClasses = 'group items-center justify-center ';

  return (
    <div className="flex flex-col gap-1 place-items-center">
      <label className={`align-center text-text-1 ${sizeProps[size].titleSize}`}>{title}</label>

      <div className="flex-auto flex flex-row gap-2">
        <div className={`text-right ${sideLabelProps}`}>{labelL}</div>
        <ToggleGroup.Root
          className="flex flex-row gap-1"
          type="single"
          aria-label="Sword Toggles"
        >
          <ToggleGroup.Item className={toggleGroupItemClasses} value="-2" aria-label="left-2">
            <div className={`-rotate-90`}>
              <Sword dim={swordSizes[2]} shadow={true}/>
            </div>
          </ToggleGroup.Item>
          <ToggleGroup.Item className={toggleGroupItemClasses} value="-1" aria-label="left-1">
            <div className={`-rotate-90`}>
              <Sword dim={swordSizes[1]} shadow={true}/>
            </div>
          </ToggleGroup.Item>
          <ToggleGroup.Item className={toggleGroupItemClasses} value="0" aria-label="neutral">
            <div>
              <CrossedSwords dim={swordSizes[0]} shadow={true}/>
            </div>
          </ToggleGroup.Item>
          <ToggleGroup.Item className={toggleGroupItemClasses} value="1" aria-label="right-1">
            <div>
              <Sword dim={swordSizes[1]} shadow={true}/>
            </div>
          </ToggleGroup.Item>
          <ToggleGroup.Item className={toggleGroupItemClasses} value="2" aria-label="right-2">
            <div>
              <Sword dim={swordSizes[2]} shadow={true}/>
            </div>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <div className={`${sideLabelProps}`}>{labelR}</div>
      </div>
    </div>
  );
}
