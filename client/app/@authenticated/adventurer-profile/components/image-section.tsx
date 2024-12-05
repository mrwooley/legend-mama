
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

export default function ImageSection() {
  return (
    <Card variant="form" className="size-[296px] py-8 px-4 content-end text-center  max-md: self-center">
        <Button className="rounded-full text-5xl aspect-square bg-accent-2 hover:bg-accent-2/80">
          1 GP
        </Button>
        <div className="pt-4 text-text-5 text-2xl font-serif text-center" >Generate character illustration</div>
    </Card>
  );
}