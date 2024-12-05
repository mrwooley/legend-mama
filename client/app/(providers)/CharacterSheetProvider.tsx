"use client"
import {useReducer, createContext, useContext, useCallback, useEffect, ReactNode, Dispatch} from "react";
import {characterSheet as charSheetDummyData} from "@/data/dummyData.js"
import {CharacterDetails, CharacterSheetObj} from "@/lib/types";

// https://medium.com/@DcKesler/typescript-for-createcontext-and-usereducer-in-react-with-custom-hooks-bc3b19a4b942
// https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

// Define types
type CharacterSheetState = CharacterSheetObj;
type GeneratedCharacterState = CharacterDetails;

type Actions =
  | { type: "create"; data: GeneratedCharacterState }
  | { type: "update"; data: Partial<GeneratedCharacterState> };

// Set up reducer
function characterSheetReducer(
  state: CharacterSheetState,
  action: Actions
): CharacterSheetState {
  switch (action.type) {
    case "create":
      //TODO: Fetch new character from Legend Mama routes
      return charSheetDummyData;
    case "update":
      //TODO: Fetch updated character from Legend Mama routes
      return charSheetDummyData;
    default:
      return state;
  }
}

// Set up context
type CharacterSheetContextInterface = readonly [
  CharacterSheetState,
  Dispatch<Actions>
];

const initialState = {
  level: 1,
  proficiencyBonus: 2,
};
export const CharacterSheetContext = createContext<CharacterSheetContextInterface>([
  initialState,
  () => {}
]);

// Set up provider
interface CharacterSheetProviderProps {
  children: ReactNode;
}

export function CharacterSheetProvider({children}: CharacterSheetProviderProps) {
  const [state, dispatch] = useReducer(characterSheetReducer, initialState);

  return (
    <CharacterSheetContext.Provider value={[state, dispatch]}>
      {children}
    </CharacterSheetContext.Provider>
  );
}

// Set up hook
export function useCharacterSheet() {
  const context = useContext(CharacterSheetContext);

  if (!context) {
    throw new Error(
      "useCharacterSheet must be used within a CharacterSheetProvider"
    );
  }

  const [characterSheet, dispatch] = context;

  const newCharacterSheet = useCallback(
    (data: GeneratedCharacterState) =>
      dispatch({ type: "create", data }),
    [dispatch]
  );

  const updateCharacterSheet = useCallback(
    (data: Partial<GeneratedCharacterState>) =>
      dispatch({ type: "update", data }),
    [dispatch]
  );

  return {
    characterSheet,
    newCharacterSheet,
    updateCharacterSheet,
  };
}