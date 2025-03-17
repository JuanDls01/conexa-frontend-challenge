import Image from "next/image";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";

type CharacterCardProps = {
  id?: number;
  listId?: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

const CharacterCard = ({
  name,
  status,
  species,
  image,
}: CharacterCardProps) => {
  return (
    <li className="flex flex-col border-2 rounded-2xl max-w-48">
      <Image
        src={image}
        alt={`${name} image`}
        width={180}
        height={140}
        className="rounded-t-2xl min-w-full"
      />
      <div className="p-2 gap-y-1.5">
        <h3 className="font-semibold text-base truncate">{name}</h3>
        <div className="flex flex-row gap-x-2 items-center">
          <Badge>{status}</Badge>
          <Badge variant={"secondary"}>{species}</Badge>
          <Checkbox />
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
