"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { Button } from "../ui/button";
import CharacterCard from "../character-card";
import { useCharacters } from "./useCharacters";

export type ListId = "ch1" | "ch2";

type CharactersListProps = {
  listId: ListId;
  title: string;
};

const CharactersList = ({ title, listId }: CharactersListProps) => {
  const { characters, page, totalPages, setPage, loading } = useCharacters();
  if (loading)
    return (
      <div className="w-full lg:h-[70vh] flex items-center justify-center rounded-xl border">
        Cargando...
      </div>
    );

  return (
    <div className="flex flex-col rounded-xl border p-2 lg:max-h-[70vh]">
      <h2 className="font-bold text-2xl py-3">{title}</h2>
      <ul
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-scroll py-3`}
      >
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            listId={listId}
            name={character.name}
            species={character.species}
            status={character.status}
            image={character.image}
          />
        ))}
      </ul>
      <Pagination className="py-3">
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              variant={page === 1 ? "secondary" : "default"}
              className="cursor-pointer"
            >
              Prev
            </Button>
          </PaginationItem>
          <PaginationItem>
            {page} / {totalPages}
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              variant={page === totalPages ? "secondary" : "default"}
              className="cursor-pointer"
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CharactersList;
