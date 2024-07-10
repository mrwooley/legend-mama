"use client"
import * as React from "react";
import DashboardSidebar from "@/app/@authenticated/components/dashboard-sidebar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="flex-auto flex flex-row max-w-[2000px] max-md:flex-col">
      <aside className="w-[28%] min-w-[300px] max-w-[450px] bg-background-2 overflow-none max-md:w-full max-md:w-min-full">
        <DashboardSidebar/>
      </aside>
      <main className="flex-auto flex bg-background-1 items-center justify-center max-md:hidden">
        {children}
      </main>
    </div>
  );
}
