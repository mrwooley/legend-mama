"use client"
import {Logo} from "@/components/ui/logo"
import {Sidebar, SidebarContent, SidebarHeader} from "@/components/ui/sidebar";
import {Conversation, DialogueField, SpeakerField} from "@/components/conversation";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation";
import * as React from "react";
import {useState} from "react";
import AuthDialog from "@/app/@unauthenticated/components/auth-dialog";


export default function HomeSidebar() {
  const [moreInfo, setMoreInfo] = useState(false);
  const [view, setView] = React.useState('login'); // 'login', 'signup', 'passwordReset'

  return (
    <Sidebar>
      <div>
        <SidebarHeader>
          <Logo/>
        </SidebarHeader>
        <SidebarContent className="text-text-1">
          <Conversation className="text-text-5">
            <SpeakerField>TAVERNKEEP:</SpeakerField>
            <DialogueField>Well met, adventurer!</DialogueField>
          </Conversation>
          <Conversation>
            <SpeakerField>ADVENTURER:</SpeakerField>
            <DialogueField>What is this place?</DialogueField>
          </Conversation>
          <Conversation className="text-text-5">
            <SpeakerField>TAVERNKEEP:</SpeakerField>
            <DialogueField>
              <p>
                This, my friend, is Legend Mama, the best tavern around! Known far
                and wide for our finest ale and the most daring adventurers guild.
              </p>
              <p className="mt-3">
                Look around and create an adventuring party of your own!
              </p>
            </DialogueField>
          </Conversation>
          <Conversation>
            <SpeakerField>ADVENTURER:</SpeakerField>
            <DialogueField>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <AuthDialog view={view} setView={setView}>
                      <div className="text-left hover:cursor-pointer" onClick={() => setView("signIn")}>
                        Sign In
                      </div>
                    </AuthDialog>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <AuthDialog view={view} setView={setView}>
                      <div className="text-left hover:cursor-pointer" onClick={() => setView("signUp")}>
                        Sign Up
                      </div>
                    </AuthDialog>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <div className="text-left hover:cursor-pointer" onClick={() => setMoreInfo(true)}>
                      No really, what is this place?
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </DialogueField>
          </Conversation>
          <div className={`MoreInfo ${moreInfo ? "visible" : "invisible"}`}>
            <Conversation className="text-text-5">
              <SpeakerField>TAVERNKEEP:</SpeakerField>
              <DialogueField>
                <p>
                  <span>*Sigh*</span> Alright, alright. Just
                  don’t tell the patrons or things get weird...
                </p>
                <p className="mt-3">
                  Legend Mama is a character sheet creator for tabletop roleplaying games.
                  If you give me a general idea for a character, I will return a fully
                  playable character sheet.
                </p>
                <p className="mt-3">
                  But don't let that spoil the magic — dive in and have some fun!
                </p>
              </DialogueField>
            </Conversation>
          </div>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}