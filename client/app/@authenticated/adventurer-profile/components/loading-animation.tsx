import Image from "next/image";
import loading from "@/public/loading.svg";
import * as React from "react";
import Sword from "@/components/icons/sword";
//https://tailwindflex.com/@anonymous/loading-dots

function LeftLoadingSwords() {
  return (
    <div className="flex flex-row items-end">
      <div className="flex max-w-14 min-w-10 animate-bounce [animation-duration:2s] [animation-delay:-0.3s]">
        <Sword shadow={true} className="fill-support -rotate-90 w-full h-auto"/>
      </div>
      <div className="flex max-w-20 min-w-14 animate-bounce [animation-duration:2s] [animation-delay:-0.6s]">
        <Sword shadow={true} className="fill-support -rotate-90 w-full h-auto"/>
      </div>
    </div>
  );
}


function RightLoadingSwords() {
  return (
    <div className="flex flex-row items-end">
      <div className="flex max-w-20 min-w-14 animate-bounce [animation-duration:2s] [animation-delay:-0.6s]">
        <Sword shadow={true} className="fill-support w-full h-auto"/>
      </div>
      <div className="flex max-w-14 min-w-10 animate-bounce [animation-duration:2s] [animation-delay:-0.3s]">
        <Sword shadow={true} className="fill-support w-full h-auto"/>
      </div>
    </div>
  );
}


export default function LoadingAnimation() {
  return (
    <div className="flex-auto flex flex-col place-items-center">
      <div className="flex-auto flex flex-row gap-4 pt-10">
        <LeftLoadingSwords/>
        <div className="flex h-24 min-h-16">
          <Image
            alt="Loading"
            src={loading}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>
        <RightLoadingSwords/>
      </div>
      <div className="relative w-full font-serif text-3xl text-text-3">
        <div className="absolute inset-0 text-center opacity-0 animate-switch">Checking guild records...</div>
        <div className="absolute inset-0 text-center opacity-0 animate-switch [animation-delay:5s]">Sharpening swords...</div>
        <div className="absolute inset-0 text-center opacity-0 animate-switch [animation-delay:10s]">Packing bags...</div>
      </div>
    </div>

  );
}