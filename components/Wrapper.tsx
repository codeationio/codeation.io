import { FCC } from 'globalTypes';
import { Children } from 'react';

const Wrapper: FCC<{ className?: string }> = ({ children, className: $className }) => {
  const alternate = $className.includes('alternate');
  const className = `${$className} ${
    alternate
      ? '[&>*:nth-child(odd)]:bg-light-grey [&>*:nth-child(even)]:bg-white'
      : '[&>*:nth-child(even)]:bg-light-grey [&>*:nth-child(odd)]:bg-white'
  }`;
  return (
    <main className={`xl:mx-0 ${className}`}>
      {Children.map(children, (child, i) => (
        <div
          className={`flex w-screen max-w-full snap-y snap-mandatory flex-col items-center last:!bg-black alternate:first:bg-secondary [&>*]:w-full [&>*]:max-w-8xl [&>*]:snap-start [&>*]:snap-always ${
            i === 0 ? 'pb-12' : 'py-12'
          }`}>
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
