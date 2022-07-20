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
    <div className="flex items-center gap-x-40">
      <div className="w-full overflow-hidden  rounded-lg lg:w-1/2 xl:w-1/2">
        <Image alt="G2" height="100%" layout="responsive" src={imageUrl} width="100%" />
      </div>
      <div className="flex !w-full flex-col items-start justify-center gap-y-5 lg:!w-1/2	 xl:!w-1/2	">
        <h2 className="text-2xl font-semibold text-secondary lg:text-3xl xl:text-4xl">{title}</h2>
        <p className="w-full text-lg text-grey lg:text-lg">{description}</p>
        <div className="flex text-lg text-grey">
          Platforms:
          <span className="ml-4 flex gap-x-3 text-lg font-bold text-primary">
            <p className="capitalize">{platforms.join(', ')}</p>
          </span>
        </div>
        {/* <button
          disabled
          className="w-fit rounded-md border border-primary py-2 px-10 text-xl text-primary disabled:cursor-not-allowed disabled:border-grey disabled:text-grey"
          title="Coming soon">
          Demo
        </button> */}
      </div>
    </div>
  );
};
export default RecentWork;
