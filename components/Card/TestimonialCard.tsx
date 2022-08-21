import Rating from 'components/Rating';
import { FCC } from 'globalTypes';
import Image from 'next/future/image';

import Card, { CardDescription, CardTitle } from './Card';

export type TestimonialProps = {
  name: string;
  company?: string;
  description: string;
  id: string;
  designation?: string;
  url: string;
  rating: number;
};

const TestimonialCard: FCC<TestimonialProps> = ({ company, description, designation, id, name, rating, url }) => {
  return (
    <Card
      className="carousel-item flex min-w-fit scroll-m-16 flex-col items-center justify-center gap-y-1 bg-white p-4 pt-0 lg:w-80 xl:w-80 xl:min-w-fit xl:pb-6 [&>span]:!overflow-visible"
      id={id}>
      <Image
        alt={`${name}${company ? ` | ${company}` : ''}`}
        className="h-24 w-24 -translate-y-16 rounded-full object-fill lg:h-32 lg:w-32"
        height={96}
        loading="lazy"
        src={url}
        width={132}
      />
      <Image alt="comma" className="-mt-8 -translate-y-5 lg:-translate-y-2" height={25} src="/images/comma.svg" width={32} />
      <CardTitle className="-mt-3 mb-0 text-xl text-black lg:text-[28px]">{name}</CardTitle>
      <p className="my-2 h-5 text-xs font-medium text-description lg:mt-0">
        {designation}
        {company && ', ' + company}
      </p>
      <CardDescription className="text-xs text-black/80 lg:flex-grow">{description}</CardDescription>
      <Rating rating={rating} />
    </Card>
  );
};

export default TestimonialCard;
