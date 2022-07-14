import { FCC } from 'globalTypes';
import React, { Children } from 'react';

const Wrapper: FCC = ({ children }) => {
  return (
    <div className="bg-black [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-light-grey">
      {React.Children.map(children, (child) => (
        <div className="flex w-screen snap-y snap-mandatory flex-col items-center [&>*]:w-full [&>*]:max-w-8xl [&>*]:snap-start [&>*]:snap-always">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Wrapper;
