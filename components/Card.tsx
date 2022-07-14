import { FCC } from 'globalTypes';
import Image from 'next/image';

export type CardProps = {
  className?: string;
};

const Card: FCC<CardProps> = ({ children, className }) => {
  return <article className={`rounded-lg shadow-card ${className}`}>{children}</article>;
};

Card.defaultProps = {
  className: ''
};

export const CardTitle: FCC = ({ children }) => {
  return (
    <h4 className="mt-4 text-center text-card-title-sm capitalize text-primary lg:mb-3 lg:text-card-title">
      {children}
    </h4>
  );
};

export const CardDescription: FCC = ({ children }) => {
  return (
    <p className="hidden max-w-[250px] text-center text-card-description text-description lg:block">
      {children}
    </p>
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

export default Card;
