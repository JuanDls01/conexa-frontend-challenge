import { useEffect, useState } from "react";
import { RICK_AND_MORTY_API_URL } from "@/utils/consts";
import { Character } from "@/types/character";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);

      const res = await fetch(
        `${RICK_AND_MORTY_API_URL}/character?page=${page}`
      );
      if (!res.ok) throw new Error("Failed to fetch characters");

      const data = await res.json();

      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  return { characters, page, setPage, totalPages, loading };
};
