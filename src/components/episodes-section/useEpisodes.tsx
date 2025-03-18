import { useEffect, useState } from "react";
import { SelectedCharacters } from "@/hooks/useCharacterSelection";
import { getCharacterById } from "@/lib/services/characters";
import { getEpisodesById } from "@/lib/services/episodes";
import { Episode } from "@/types/episode";

type EpisodesState = {
  ch1EpData: Episode[] | null;
  ch2EpData: Episode[] | null;
  sharedEpData: Episode[] | null;
};

export const useEpisodes = (selectedCharacters: SelectedCharacters) => {
  const [episodes, setEpisodes] = useState<EpisodesState>({
    ch1EpData: null,
    ch2EpData: null,
    sharedEpData: null,
  });
  const [loading, setLoading] = useState(false);
  const { ch1, ch2 } = selectedCharacters;

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);

      // Get episodes by fetching characters data:
      const [character1, character2] = await Promise.all([
        getCharacterById(String(ch1)),
        getCharacterById(String(ch2)),
      ]);

      // TODO: Move this logic to an utils fc
      // Get episodes ids from episodes urls:
      const ch1EpIds = character1.episode.map(
        (epUrl) => epUrl.split("/").pop() ?? ""
      );
      const ch2EpIds = character2.episode.map(
        (epUrl) => epUrl.split("/").pop() ?? ""
      );

      // Filter episodes by shared and not shared:
      const sharedEpIds = ch1EpIds.filter((ep) => ch2EpIds.includes(ep));
      const ch1OnlyEpIds = ch1EpIds.filter((ep) => !ch2EpIds.includes(ep));
      const ch2OnlyEpIds = ch2EpIds.filter((ep) => !ch1EpIds.includes(ep));
      console.log({ sharedEpIds, ch1OnlyEpIds, ch2OnlyEpIds });

      const [sharedEpisodes, ch1Episodes, ch2Episodes] = await Promise.all([
        getEpisodesById(sharedEpIds),
        getEpisodesById(ch1OnlyEpIds),
        getEpisodesById(ch2OnlyEpIds),
      ]);

      setEpisodes({
        sharedEpData: sharedEpisodes,
        ch1EpData: ch1Episodes,
        ch2EpData: ch2Episodes,
      });
      setLoading(false);
    };
    if (ch1 && ch2) fetchEpisodes();
  }, [ch1, ch2]);

  return { episodes, loading };
};
