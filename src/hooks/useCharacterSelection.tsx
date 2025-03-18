"use client";

import { ListId } from "@/components/character-list";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

export type SelectedCharacters = Record<ListId, number | null>;

interface CharacterSelectionContextType {
  selectedCharacters: SelectedCharacters;
  selectCharacter: (characterId: number, listId: ListId) => void;
}

const CharacterSelectionContext = createContext<
  CharacterSelectionContextType | undefined
>(undefined);

export const CharacterSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedCharacters, setSelectedCharacters] = useState({
    ch1: null,
    ch2: null,
  });

  const selectCharacter = useCallback(
    (characterId: number, listId: "ch1" | "ch2") => {
      setSelectedCharacters({ ...selectedCharacters, [listId]: characterId });
    },
    [selectedCharacters]
  );

  return (
    <CharacterSelectionContext.Provider
      value={{
        selectedCharacters,
        selectCharacter,
      }}
    >
      {children}
    </CharacterSelectionContext.Provider>
  );
};

export const useCharacterSelection = () => {
  const context = useContext(CharacterSelectionContext);
  if (!context)
    throw new Error(
      "useCharacterSelection must be used within a CharacterSelectionProvider"
    );
  return context;
};
