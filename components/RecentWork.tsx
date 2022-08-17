import Image from 'next/future/image';
import { FC } from 'react';

export type RecentWorkProps = {
  description: string;
  imageUrl: string;
  platforms: string[];
  title: string;
};

const RecentWork: FC<RecentWorkProps> = ({ description, imageUrl, platforms, title }) => {
  return (
    <div className="flex gap-x-8 gap-y-5 lg:min-h-fit lg:gap-y-10">
      <h2 className="text-xl font-semibold text-secondary lg:hidden lg:text-3xl xl:text-4xl">{title}</h2>
      <div className="overflow-hidden rounded-lg lg:w-1/2 xl:w-1/2">
        <figure>
          <Image alt={title} className="object-cover" height={540} src={imageUrl} width={696} />
        </figure>
      </div>
      <div className="flex !w-full flex-col items-start gap-y-5 lg:!w-1/2  xl:!w-1/2 ">
        <h2 className="hidden text-2xl font-semibold text-secondary lg:block lg:text-3xl xl:text-4xl">{title}</h2>
        <p className="w-full text-sm text-grey lg:text-lg">{description}</p>
        <div className="flex text-base text-grey lg:text-lg">
          Platforms:
          <span className="ml-4 flex gap-x-3 text-sm font-bold text-primary lg:text-lg">
            <p>{platforms.join(', ')}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default RecentWork;
