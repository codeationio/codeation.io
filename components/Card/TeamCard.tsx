import { FCC } from 'globalTypes';
import Image from 'next/image';

import Card, { CardDescription, CardTitle } from './Card';

export type TeamCardProps = {
  name: string;
  description: string;
  post: string;
  url: string;
};

export const TeamCard: FCC<TeamCardProps> = ({ description, name, post, url }) => {
  return (
    <Card className="box flex flex-col items-center justify-center gap-y-1  lg:min-w-fit xl:min-w-fit xl:pb-14 xl:pt-10" shadow={false}>
      <Image alt="Card" height={368} objectFit="fill" src={url} width={309} />
      <CardTitle>{name}</CardTitle>
      <p className="mb-2 text-center text-base font-medium text-black">{post}</p>
      <CardDescription className="text-center">{description}</CardDescription>
    </Card>
  );
};

export default TeamCard;
