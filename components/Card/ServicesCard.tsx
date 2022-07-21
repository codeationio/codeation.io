import { FCC } from 'globalTypes';
import Image from 'next/image';

import Card, { CardDescription, CardTitle } from './Card';

export type ServicesCardProps = {
  title: string;
  description: string;
  image: string;
};
const ServicesCard: FCC<ServicesCardProps> = ({ description, image, title }) => {
  return (
    <Card className="flex flex-col items-center bg-white p-6 lg:min-w-fit xl:min-w-fit xl:px-10 xl:pb-14 xl:pt-10">
      <Image alt="Card" height={209} objectFit="fill" src={image} width={236} />
      <CardTitle>{title}</CardTitle>
      <CardDescription className="hidden !text-left lg:block">{description}</CardDescription>
    </Card>
  );
};

export default ServicesCard;
