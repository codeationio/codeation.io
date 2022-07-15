import Image from 'next/image';
import { FC } from 'react';

type Props = {
  description: string;
  imageUrl: string;
  platforms: string;
  title: string;
};

const RecentWork: FC<Props> = ({ description, imageUrl, platforms, title }) => {
  return (
    <div className="flex gap-x-40">
      <div className="w-1/2">
        <Image alt="G2" height="100%" layout="responsive" src={imageUrl} width="100%" />
      </div>
      <div className="flex w-1/2 flex-col justify-center gap-y-5">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="w-inherit text-2xl text-grey">{description}</p>
        <div className="flex text-xl text-grey">
          Platforms:
          <span className="ml-4 flex gap-x-3 text-lg font-bold text-primary">
            <p>{platforms}</p>
          </span>
        </div>
        <button className="w-fit rounded-md border border-primary py-2 px-10 text-xl text-primary">
          Demo
        </button>
      </div>
    </div>
  );
};
export default RecentWork;
