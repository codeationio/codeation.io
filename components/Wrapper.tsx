import { FCC } from 'globalTypes';
import { Children } from 'react';

const Wrapper: FCC<{ className?: string }> = ({ children, className }) => {
  return (
    <main
      className={`bg-black lg:mx-0 [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-light-grey ${className}`}>
      {Children.map(children, (child) => (
        <div className="flex w-screen snap-y snap-mandatory flex-col items-center last:!bg-black alternate:first:bg-alternate [&>*]:w-full [&>*]:max-w-8xl [&>*]:snap-start [&>*]:snap-always">
          {child}
        </div>
      ))}
    </main>
  );
};

Wrapper.defaultProps = {
  className: ''
};

export default Wrapper;
