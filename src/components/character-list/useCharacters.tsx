import { useEffect, useState } from 'react';
import { Character } from '@/types/character';
import { getAllCharacters } from '@/lib/services/characters';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);

      const data = await getAllCharacters(page);

      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  return { characters, page, setPage, totalPages, loading };
};
