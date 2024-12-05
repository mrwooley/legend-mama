"use client"
import * as React from "react";
import DashboardSidebar from "@/app/@authenticated/components/dashboard-sidebar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="flex-1 flex flex-row max-w-[2000px] max-md:flex-col">
      <aside className="hidden sm:block w-[28%] min-w-[300px] max-w-[450px] bg-background-2 max-md:w-full max-md:w-min-full">
        <DashboardSidebar/>
      </aside>
      <main className="flex flex-1 bg-background-1 overflow-y-auto items-center justify-center">
        {children}
      </main>
    </div>
  );
}
