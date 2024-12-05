"use client"
import * as React from "react";
import AccountForm from "@/app/@authenticated/account/components/account-form";
import title from '@/public/guild-membership.svg'
import Image from 'next/image';

export default function Account() {
  return (
    <div className={"h-full w-full flex flex-col gap-5 py-[3%] px-[5%] divide-y-2 divide-support"}>

      <header>
        <div className="h-28">
          <Image
            alt="Guild Membership"
            src={title}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>
        <h2>
          Manage your account
        </h2>
      </header>
      <div className="flex-auto p-[5%] overflow-y-auto">
        <AccountForm/>
      </div>
    </div>
  );
}