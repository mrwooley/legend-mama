"use client"
import * as React from "react";
import HomeSidebar from "@/app/@unauthenticated/components/home-sidebar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="flex-1 flex flex-row max-w-[2000px] overflow-hidden max-md:flex-col">
      <aside className="hidden sm:block overflow-y-auto w-[28%] min-w-[300px] max-w-[450px] bg-background-2 max-md:w-full max-md:w-min-full">
        <HomeSidebar/>
      </aside>
      <main className="flex flex-1 bg-background-1 items-center justify-center max-md:hidden">
        {children}
      </main>
    </div>
  );
}
