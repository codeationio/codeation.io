import { FCC } from 'globalTypes';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';

export type CardProps = {
  className?: string;
  shadow?: boolean;
};

const Card: FCC<CardProps> = ({ children, className, shadow }) => {
  return (
    <article className={`rounded-lg${shadow ? ' shadow-card ' : ''}${className}`}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  className: '',
  shadow: true
};

export const CardTitle: FCC = ({ children, className }) => {
  return (
    <h4
      className={`mt-4 text-center text-card-title-sm capitalize text-primary lg:mb-3 lg:text-card-title ${className}`}>
      {children}
    </h4>
  );
};

export const CardDescription: FCC<{ className?: string }> = ({ children, className }) => {
  return (
    <summary
      className={`hidden max-w-xs list-none text-center text-card-description text-description lg:block ${className}`}>
      {children}
    </summary>
  );
};

export type ServicesCardProps = {
  title: string;
  description: string;
  image: string;
};
export const ServicesCard: FCC<ServicesCardProps> = ({ description, image, title }) => {
  return (
    <Card className="flex flex-col items-center justify-center bg-white p-6 lg:min-w-fit lg:px-14 lg:pb-14 lg:pt-10">
      <Image alt="Card" height={209} objectFit="fill" src={image} width={236} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

type TeamCardProps = {
  name: string;
  description: string;
  post: string;
  url: string;
};

export const TeamCard: FCC<TeamCardProps> = ({ description, name, post, url }) => {
  return (
    <Card
      className="box flex flex-col items-center justify-center lg:min-w-fit lg:pb-14 lg:pt-10"
      shadow={false}>
      <Image alt="Card" height={368} objectFit="fill" src={url} width={309} />
      <CardTitle>{name}</CardTitle>
      <p className="mb-2 text-xl font-medium text-black">{post}</p>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

type TestimonialProps = {
  name: string;
  description: string;
  post: string;
  url: string;
  rating: number;
};

export const TestimonialCard: FCC<TestimonialProps> = ({
  description,
  name,
  post,
  rating,
  url
}) => {
  return (
    <Card className="box flex w-80 flex-col items-center justify-center gap-y-2 bg-white lg:min-w-fit lg:px-5 lg:pb-14 [&>span]:!overflow-visible">
      <Image
        alt="Card"
        className="-translate-y-16"
        height={132}
        objectFit="fill"
        src={url}
        width={132}
      />
      <Image
        alt="comma"
        className="-translate-y-8"
        height={25}
        src="/images/comma.svg"
        width={32}
      />
      <CardTitle className="mt-0 text-black">{name}</CardTitle>
      <p className="mb-2 text-xl font-medium text-grey">{post}</p>
      <CardDescription>{description}</CardDescription>
      <StarRatings rating={rating} starDimension="17px" starRatedColor="gold" starSpacing="5px" />
    </Card>
  );
};

export default Card;
