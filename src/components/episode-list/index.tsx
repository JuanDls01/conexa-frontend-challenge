import { Episode } from "@/types/episode";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

type EpisodeListProps = {
  title: string;
  episodes: Episode[];
};

const EpisodeList = ({ title, episodes }: EpisodeListProps) => {
  if (!(episodes.length > 0))
    return (
      <div className="w-full h-full flex items-center justify-center rounded-xl border">
        No se encontraron episodios...
      </div>
    );
  return (
    <div className="p-2 border rounded-2xl">
      <h3 className="font-bold text-lg py-2.5">{title}</h3>
      <ul className="grid grid-cols-1 gap-y-3 overflow-x-hidden overflow-scroll max-h-80">
        {episodes.map(({ id, name, episode, air_date }) => (
          <li key={id}>
            <Card className="py-3">
              <CardHeader className="px-3">
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  <Badge>{episode}</Badge> - {air_date}
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
