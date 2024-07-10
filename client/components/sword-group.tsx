"use client"
import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import CrossedSwords from "@/components/icons/crossed-swords";
import Sword from "@/components/icons/sword";

const swordSizes = [35, 45, 55];
const iconState = "group-hover:fill-highlight group-hover:scale-110 group-data-[state=on]:fill-accent-2"
const toggleGroupItemClasses =
  'group flex items-center justify-center bg-transparent leading-4 ';

const SwordGroupToggle = ({title = "Title", labelL = "Left", labelR = "Right"}) => (
  <div className="flex flex-row">
    <label className="content-center justify-center text-text-1 mr-4 mt-4">{labelL}</label>
    <div>
      <label className="flex items-center justify-center text-text-1">{title}</label>
      <ToggleGroup.Root
        className="inline-flex space-x-3"
        type="single"
        aria-label="Sword Toggles"
      >
        <ToggleGroup.Item className={toggleGroupItemClasses} value="left-2" aria-label="left-2">
          <div className={`-rotate-90 ${iconState}`}>
            <Sword dim={swordSizes[2]} shadow={true}/>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item className={toggleGroupItemClasses} value="left-1" aria-label="left-1">
          <div className={`-rotate-90 ${iconState}`}>
            <Sword dim={swordSizes[1]} shadow={true}/>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item className={toggleGroupItemClasses} value="neutral" aria-label="neutral">
          <div className={iconState}>
            <CrossedSwords dim={swordSizes[0]} shadow={true}/>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item className={toggleGroupItemClasses} value="right-1" aria-label="right-1">
          <div className={iconState}>
            <Sword dim={swordSizes[1]} shadow={true}/>
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item className={toggleGroupItemClasses} value="right-2" aria-label="right-2">
          <div className={iconState}>
            <Sword dim={swordSizes[2]} shadow={true}/>
          </div>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
    <label className="content-center justify-center text-text-1 ml-4 mt-4">{labelR}</label>
  </div>
);

export default SwordGroupToggle;