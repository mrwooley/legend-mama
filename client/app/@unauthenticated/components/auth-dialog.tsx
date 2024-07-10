"use client"
import {Dialog, DialogContent, DialogTrigger,} from "@/components/ui/dialog";

import * as React from "react";
import {Conversation, Dialogue, Speaker} from "@/components/conversation";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation";
import SignInForm from "@/app/@unauthenticated/components/sign-in-form";
import SignUpForm from "@/app/@unauthenticated/components/sign-up-form";
import ResetPasswordForm from "@/app/@unauthenticated/components/reset-password-form";


export default function AuthDialog({children, view, setView,}: Readonly<{
  children: React.ReactNode; view: string; setView: React.Dispatch<React.SetStateAction<string>>;
}>) {

  const renderDialog = () => {
    const navMenu = (
      <Conversation className={`mt-4 ${view !== "resetPassword" ? "visible" : "hidden"}`}>
        <Speaker>ADVENTURER:</Speaker>
        <Dialogue>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className={view === "signUp" ? "visible" : "hidden"}>
                <button className="text-left" onClick={() => setView("signIn")}>
                  Actually, I am already registered.
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem className={view === "signIn" ? "visible" : "hidden"}>
                <button className="text-left" onClick={() => setView("signUp")}>
                  Actually, I need to register.
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem className={view === "signIn" ? "visible" : "hidden"}>
                <button className="text-left" onClick={() => setView("resetPassword")}>
                  Err, I forgot the password.
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Dialogue>
      </Conversation>
    )

    switch (view) {
      case "signUp":
        return (<SignUpForm>{navMenu}</SignUpForm>);
      case "signIn":
        return (<SignInForm>{navMenu}</SignInForm>);
      case "resetPassword":
        return (<ResetPasswordForm/>);
      default:
        return (<div/>);
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {renderDialog()}
      </DialogContent>
    </Dialog>
  );
}