import { ApiResponse } from "@/types/api";
import { Character } from "@/types/character";
import { RICK_AND_MORTY_API_URL } from "@/utils/consts";

export const getAllCharacters = async (page: number) => {
  const res = await fetch(`${RICK_AND_MORTY_API_URL}/character/?page=${page}`);

  if (!res.ok) throw new Error("Failed to fetch data");

  const data: ApiResponse<Character> = await res.json();

  return data;
};

export const getCharacterById = async (characterIds: string) => {
  const res = await fetch(
    `${RICK_AND_MORTY_API_URL}/character/${characterIds}`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data: Character = await res.json();

  return data;
};
