import Image from 'next/image';
import { FC } from 'react';

import Navbar from './Navbar';
import Section from './Section';

const Hero: FC = () => {
  return (
    <Section className="mx-auto flex h-auto grid-cols-2 flex-col-reverse gap-y-10 lg:grid xl:grid xl:h-[calc(100vh_-_6rem)] xl:max-w-7xl xl:flex-row xl:justify-center">
      <div className="break-word flex flex-col justify-center gap-y-5 lg:-translate-y-20">
        <h1 className="text-2xl font-bold text-black md:text-4xl md:leading-10  lg:text-4xl xl:text-5xl">
          BRIDGING THE GAP BETWEEN
          <span className="ml-1 text-primary">TECHNOLOGY </span>
          AND
          <span className="ml-1 text-primary">BUSINESS</span>
        </h1>
        <span className="h-0.5 w-48 bg-primary" />
        <p className="text-lg font-normal text-grey lg:text-xl xl:text-5.5">
          A trusted agency for your business needs <br /> Invest in the right service and solution
        </p>
      </div>
      <figure className="align-center flex justify-end lg:m-0 lg:-translate-y-20 xl:m-0">
        <Image alt="Hero_Section" height={500} src="/images/hero_section.svg" width={500} />
      </figure>
    </Section>
  );
};

type HeroType2Props = {
  title: string;
  description: string;
  img: string;
  imgClassName?: string;
};

export const HeroType2: FC<HeroType2Props> = ({ description, img, imgClassName, title }) => {
  return (
    <Section head>
      <Navbar />
      <Section className="relative flex flex-col md:h-[400px] lg:flex-row xl:flex-row">
        <div className="break-word flex flex-col justify-center gap-y-5 lg:w-1/2 xl:w-1/2 xl:-translate-y-8">
          <h1 className="text-2xl font-bold text-black alternate:text-white lg:text-5xl xl:text-5xl">{title}</h1>
          <summary className="w-8/12 list-none text-lg font-thin text-white lg:text-5.5 xl:text-5.5">{description}</summary>
        </div>
        <figure className={`xl:w-1/2 ${imgClassName}`}>
          {img && <Image alt={title} className="absolute" height={534} src={img} width={649} />}
        </figure>
      </Section>
    </Section>
  );
};

HeroType2.defaultProps = {
  imgClassName: '',
};

export default Hero;
