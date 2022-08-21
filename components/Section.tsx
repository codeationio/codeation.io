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
        <header className="mb-8 lg:mb-20 xl:mb-20">
          <h1 className="border-underline relative text-center text-3xl font-bold capitalize text-primary lg:text-5xl xl:text-5xl">
            {title}
          </h1>
        </header>
      )}
      <main className={`${head ? 'px-4' : 'p-4 '}${className}`}>
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
    <article className={reverse ? 'order-2 flex flex-col  justify-center' : 'order-1 flex flex-col  justify-center'}>
      <figure className="mr-10 flex -translate-y-20 flex-col ">
        <Image height={420} src={img} width={420} />
      </figure>
    </article>
    <article className={reverse ? 'order-1' : 'order-2'}>
      <p className="font-khula text-lg font-normal leading-9 text-grey lg:text-xl xl:text-xl">{content}</p>
    </article>
  </Section>
);

export default Section;
