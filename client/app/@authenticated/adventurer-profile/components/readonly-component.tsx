import * as React from "react";
import {ReactNode} from "react";

export function ComponentList(arr: Array<string>, inline: boolean = false) {
  if (!arr) {
    return <span>None</span>
  }

  const compList = [];
  let comp: ReactNode;
  for (let index=0; index < arr.length; index++) {
    if (inline) {
      if (index < arr.length-1) {
        comp = <span key={`${index}`}>{`${arr[index]}, `}</span>;
      } else {
        comp = <span key={`${index}`}>{arr[index]}</span>;
      }
    } else {
      comp = <div key={`${index}`}>{arr[index]}</div>;
    }
    compList.push(comp);
  }

  return compList;
}