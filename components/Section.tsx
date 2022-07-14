import { FCC } from 'globalTypes';
import { ReactNode } from 'react';

export type SectionProps = {
  className?: string;
  title?: ReactNode;
  head?: boolean;
};

const Section: FCC<SectionProps> = ({ children, className, head, title }) => {
  return (
    <section className={head ? '' : 'my-12'}>
      {title && (
        <header>
          <h1 className="relative mb-12 text-center text-5xl font-bold text-primary before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">
            {title}
          </h1>
        </header>
      )}
      <main className={`${head ? '' : 'p-4'} ${className}`}>{children}</main>
    </section>
  );
};

Section.defaultProps = {
  className: '',
  head: false
};

export default Section;
