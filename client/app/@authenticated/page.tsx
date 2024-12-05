import * as React from "react";
import {CharacterSheetProvider} from "@/app/(providers)/CharacterSheetProvider";
import DashboardMain from "@/app/@authenticated/components/dashboard-main";

export default function Dashboard() {
  return (
    <CharacterSheetProvider>
      <DashboardMain/>
    </CharacterSheetProvider>
  );
}
