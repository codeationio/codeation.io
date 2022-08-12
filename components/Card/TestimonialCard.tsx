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
      className="carousel-item flex min-w-fit scroll-m-16 flex-col items-center justify-center bg-white p-5 pt-0 lg:w-80 xl:w-80 xl:min-w-fit xl:pb-14 [&>span]:!overflow-visible"
      id={id}>
      <Image
        alt={`${name}${company ? ` | ${company}` : ''}`}
        className="-translate-y-16 rounded-full object-fill"
        height={132}
        src={url}
        width={132}
      />
      <Image alt="comma" className="-mt-7 -translate-y-8" height={25} src="/images/comma.svg" width={32} />
      <CardTitle className="-mt-3 mb-0 text-[28px] text-black">{name}</CardTitle>
      <p className="my-2 h-5 text-sm font-medium text-description lg:mt-0">
        {designation}
        {company && ', ' + company}
      </p>
      <CardDescription className="text-lg text-black/80 lg:flex-grow">{description}</CardDescription>
      <Rating rating={rating} />
    </Card>
  );
};

export default TestimonialCard;
