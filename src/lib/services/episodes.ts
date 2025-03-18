import { Episode } from '@/types/episode';
import { RICK_AND_MORTY_API_URL } from '@/utils/consts';

export const getEpisodesById = async (episodesIds?: string[]) => {
  if (!episodesIds || !(episodesIds.length > 0)) return [];
  const res = await fetch(`${RICK_AND_MORTY_API_URL}/episode/${episodesIds}`);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data: Episode[] | Episode = await res.json();

  const normalizedData = Array.isArray(data) ? data : [data];

  return normalizedData;
};
