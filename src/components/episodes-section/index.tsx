"use client";

import { useCharacterSelection } from "@/hooks/useCharacterSelection";
import EpisodeList from "../episode-list";
import { useEpisodes } from "./useEpisodes";

const EpisodesSection = () => {
  const { selectedCharacters } = useCharacterSelection();
  const { episodes, loading } = useEpisodes(selectedCharacters);

  const { ch1, ch2 } = selectedCharacters;

  if (!(ch1 && ch2)) return null;

  if (loading)
    return (
      <div className="w-full h-80 flex items-center justify-center rounded-xl border">
        Cargando...
      </div>
    );

  return (
    <section className="grid gap-2 lg:grid-cols-3 my-3">
      <EpisodeList
        title="Character #1 - Only Episodes"
        episodes={episodes.ch1EpData ?? []}
      />
      <EpisodeList
        title="Character #1 & #2 - Shared Episodes"
        episodes={episodes.sharedEpData ?? []}
      />
      <EpisodeList
        title="Character #2 - Only Episodes"
        episodes={episodes.ch2EpData ?? []}
      />
    </section>
  );
};

export default EpisodesSection;
