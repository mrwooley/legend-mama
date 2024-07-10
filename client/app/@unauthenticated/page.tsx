import * as React from "react";
import HomeSidebar from "@/app/@unauthenticated/components/home-sidebar";
import HomeMain from "@/app/@unauthenticated/components/home-main";

export default function Homepage() {
  return (
    <div className="flex-auto flex flex-row max-w-[2000px] max-md:flex-col">
      <aside className="w-[28%] min-w-[26%] bg-background-2 overflow-none max-md:w-full max-md:w-min-full">
        <HomeSidebar/>
      </aside>
      <main className="flex-auto flex bg-background-1 items-center justify-center max-md:hidden">
        <HomeMain/>
      </main>
    </div>
  );
}
