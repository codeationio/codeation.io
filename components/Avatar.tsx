import { FC } from 'react';

type Props ={
  children:any
}

const Avatar: FC<Props> = ({ children }) => {
  return (
    <div className="rounded-full h-24 w-24 flex items-center justify-center m-4 border-dashed border bg-blue-400">
      {children}
    </div>
  );
};

export default Avatar;
