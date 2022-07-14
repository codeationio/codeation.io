import { FCC } from 'globalTypes';
import { Children } from 'react';

const Wrapper: FCC<{ className?: string }> = ({ children, className }) => {
  return (
    <main
      className={`bg-black lg:mx-0 [&>*:nth-child(odd)]:bg-light-grey [&>*:nth-child(even)]:bg-white ${className}`}>
      {Children.map(children, (child) => (
        <div className="alternate:first:bg-alternate flex w-screen snap-y snap-mandatory flex-col items-center [&>*]:w-full [&>*]:max-w-8xl [&>*]:snap-start [&>*]:snap-always">
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
