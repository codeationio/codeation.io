import { FCC } from 'globalTypes';
import Image from 'next/future/image';

import Card, { CardDescription, CardTitle } from './Card';

export type TeamCardProps = {
  name: string;
  description: string;
  post: string;
  url: string;
};

export const TeamCard: FCC<TeamCardProps> = ({ description, name, post, url }) => {
  return (
    <Card className="box flex flex-col items-center justify-center gap-y-1 lg:min-w-fit xl:min-w-fit xl:pb-14 xl:pt-10" shadow={false}>
      <Image alt={`${name} | ${post} | ${description}`} className="object-fill" height={328} src={url} width={269} />
      <CardTitle>{name}</CardTitle>
      <p className="mb-2 text-center text-sm font-medium text-black">{post}</p>
      <CardDescription className="text-center">{description}</CardDescription>
    </Card>
  );
};

export default TeamCard;
