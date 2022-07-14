import { FCC } from 'globalTypes';
import React, { Children } from 'react';

const Wrapper: FCC = ({ children }) => {
  return (
    <div className="bg-black [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-light-grey">
      {React.Children.map(children, (child) => (
        <div className="[&>*]:max-w-8xl flex w-screen flex-col items-center">{child}</div>
      ))}
    </div>
  );
};

export default Wrapper;
