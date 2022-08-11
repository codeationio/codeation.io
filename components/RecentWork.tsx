import Image from 'next/image';
import { FC } from 'react';

export type RecentWorkProps = {
  description: string;
  imageUrl: string;
  platforms: string[];
  title: string;
};

const RecentWork: FC<RecentWorkProps> = ({ description, imageUrl, platforms, title }) => {
  return (
    <div className="flex gap-x-40 gap-y-10">
      <h2 className="text-2xl font-semibold text-secondary md:hidden lg:text-3xl xl:text-4xl">{title}</h2>
      <div className="w-full overflow-hidden rounded-lg lg:w-1/2 xl:w-1/2">
        <Image alt="G2" height="100%" layout="responsive" src={imageUrl} width="100%" />
      </div>
      <div className="flex !w-full flex-col items-start gap-y-5 lg:!w-1/2  xl:!w-1/2 ">
        <h2 className="hidden text-2xl font-semibold text-secondary md:block lg:text-3xl xl:text-4xl">{title}</h2>
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
