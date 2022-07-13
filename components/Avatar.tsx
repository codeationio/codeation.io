import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Avatar: FC<Props> = ({ children }) => {
  return (
    <div className="bg-blue-400 m-4 flex h-24 w-24 items-center justify-center rounded-full border border-dashed">
      {children}
    </div>
  );
};

export default Avatar;
