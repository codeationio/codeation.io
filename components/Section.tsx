import { FCC } from 'globalTypes';
import Image from 'next/image';
import { FC, ReactNode, Suspense } from 'react';

import SkeletonLoading from './SkeletonLoading';

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
        <header className="mb-8 lg:mb-10 xl:mb-10">
          <h1 className="border-underline relative text-center text-3xl font-bold capitalize text-primary lg:text-5xl xl:text-5xl">
            {title}
          </h1>
        </header>
      )}
      <main className={`${head ? '' : 'p-4 '}${className}`}>
        <Suspense fallback={<SkeletonLoading />}>{children}</Suspense>
      </main>
    </section>
  );
};

Section.defaultProps = {
  className: '',
  head: false,
};

export type TwoColSectionProps = {
  title: string;
  img: string;
  content: ReactNode;
  reverse?: boolean;
};

export const TwoColSection: FC<TwoColSectionProps> = ({ content, img, reverse = false, title }) => (
  <Section key={title} className="grid lg:grid-cols-2 xl:grid-cols-2" title={title}>
    <article className={reverse ? 'order-2' : 'order-1'}>
      <figure className="mx-6 flex -translate-y-10 justify-center">
        <Image height={420} src={img} width={420} />
      </figure>
    </article>
    <article className={reverse ? 'order-1' : 'order-2'}>
      <p className="font-khula text-lg font-normal capitalize leading-9 text-grey lg:text-2xl xl:text-2xl">{content}</p>
    </article>
  </Section>
);

export default Section;
