import * as React from "react"
import GPToken from "@/components/icons/gp-token"
import PlusCircled from "@/components/icons/plus-circled";
import QuestionCircled from "@/components/icons/question-circled";

const CoinPouch = ({coins = "3", color = "accent-2"}) => {

  return (
    <div className="flex flex-row h-82 place-content-center w-full fill-accent-2">
      <GPToken dim={45} className="content-center"/>
      <label className="text-text-1 text-2xl justify-center content-center p-2">{coins} GP</label>
      <PlusCircled dim={24}/>
      <QuestionCircled dim={24} className="m-1"/>
    </div>
  )
}
CoinPouch.displayName = "CoinPouch"

export {CoinPouch}

