import { FCC } from 'globalTypes';
import { Children } from 'react';

const Wrapper: FCC = ({ children }) => {
  return (
    <main className="bg-black lg:mx-0 [&>*:nth-child(odd)]:bg-light-grey [&>*:nth-child(even)]:bg-white">
      {Children.map(children, (child) => (
        <div className="flex w-screen snap-y snap-mandatory flex-col items-center [&>*]:w-full [&>*]:max-w-8xl [&>*]:snap-start [&>*]:snap-always">
          {child}
        </div>
      ))}
    </main>
  );
};

export default Wrapper;
