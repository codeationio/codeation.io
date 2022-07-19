import { FCC } from 'globalTypes';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

export type SectionProps = {
  className?: string;
  head?: boolean;
  id?: string;
  title?: ReactNode;
};

const Section: FCC<SectionProps> = ({ children, className, head, id, title }) => {
  return (
    <section className="scroll-m-12" id={id}>
      {title && (
        <header className="mb-8 lg:mb-10">
          <h1 className="relative text-center text-3xl font-bold text-primary before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']  lg:text-5xl">
            {title}
          </h1>
        </header>
      )}
      <main className={`${head ? '' : 'p-4 '}${className}`}>{children}</main>
    </section>
  );
};

Section.defaultProps = {
  className: '',
  head: false
};

export type TwoColSectionProps = {
  title: string;
  img: string;
  content: ReactNode;
  reverse?: boolean;
};

export const TwoColSection: FC<TwoColSectionProps> = ({ content, img, reverse = false, title }) => (
  <Section key={title} className="grid lg:grid-cols-2" title={title}>
    <article className={reverse ? 'order-2' : 'order-1'}>
      <figure className="mx-6 flex -translate-y-10 justify-center">
        <Image height={420} src={img} width={420} />
      </figure>
    </article>
    <article className={reverse ? 'order-1' : 'order-2'}>
      <p className="font-khula text-lg font-normal capitalize leading-9 text-grey lg:text-2xl">
        {content}
      </p>
    </article>
  </Section>
);

export default Section;
