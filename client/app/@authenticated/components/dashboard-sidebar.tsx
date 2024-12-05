"use client"

import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader} from "@/components/ui/sidebar";
import {Conversation, DialogueField, SpeakerField} from "@/components/conversation";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink} from "@/components/ui/navigation";
import * as React from "react";
import {Logo} from "@/components/ui/logo";
import {CoinPouch} from "@/components/coin-pouch";
import {User} from "@/lib/types";


export default function DashboardSidebar() {
  //TODO: handle sign out

  //TODO: Get user data from Firebase, should use React memoization to avoid duplicate calls
  const user: User = {
    token: "1234",
    name: "Megan",
    goldBalance: 3,
  };

  return (
    <Sidebar>
      <div>
        <SidebarHeader>
          <Logo/>
        </SidebarHeader>
        <SidebarContent className="text-text-1">
          <Conversation className="text-text-5">
            <SpeakerField>TAVERNKEEP:</SpeakerField>
            <DialogueField>
              <p>
                Welcome back, {user.name}! It's always a pleasure to see you at Legend Mama.
              </p>
              <p className="mt-3">
                So, what shall we do today? Enlist a new adventurer, check on your party, or maybe enjoy some ale by the fire?
              </p>
            </DialogueField>
          </Conversation>
          <Conversation>
            <SpeakerField>ADVENTURER:</SpeakerField>
            <DialogueField>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/enlist-adventurer">
                      Enlist Adventurer
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/my-party">
                      Check on my Party
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/account">
                      Manage Guild Membership
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/">
                      Leave the Tavern
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </DialogueField>
          </Conversation>
        </SidebarContent>
      </div>
      <SidebarFooter>
        <CoinPouch coins={`${user.goldBalance}`}/>
      </SidebarFooter>
    </Sidebar>
  );
}