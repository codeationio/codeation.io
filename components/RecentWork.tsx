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
    <div className="flex min-h-[650px] gap-x-10 gap-y-10">
      <h2 className="text-2xl font-semibold text-secondary lg:hidden lg:text-3xl xl:text-4xl">{title}</h2>
      <div className="overflow-hidden rounded-lg lg:w-1/2 xl:w-1/2">
        <figure>
          <Image alt={title} className="object-cover" height={540} src={imageUrl} width={696} />
        </figure>
      </div>
      <div className="flex !w-full flex-col items-start gap-y-5 lg:!w-1/2  xl:!w-1/2 ">
        <h2 className="hidden text-2xl font-semibold text-secondary lg:block lg:text-3xl xl:text-4xl">{title}</h2>
        <p className="w-full text-lg text-grey lg:text-lg">{description}</p>
        <div className="flex text-lg text-grey">
          Platforms:
          <span className="ml-4 flex gap-x-3 text-lg font-bold text-primary">
            <p>{platforms.join(', ')}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default RecentWork;
