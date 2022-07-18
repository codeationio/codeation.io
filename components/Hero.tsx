import Image from 'next/image';
import { FC } from 'react';

import Navbar from './Navbar';
import Section from './Section';

const Hero: FC = () => {
  return (
    <Section className="mx-auto grid h-[calc(100vh_-_9rem)] grid-cols-2 lg:max-w-7xl lg:flex-row lg:justify-center">
      <div className="break-word flex flex-col justify-center gap-y-5">
        <h1 className="text-5xl font-bold text-black ">
          BRIDGING THE GAP BETWEEN
          <span className="ml-1 text-primary">TECHNOLOGY </span>
          AND
          <span className="ml-1 text-primary">BUSINESS</span>
        </h1>
        <span className="h-0.5 w-48 bg-primary" />
        <p className="text-5.5 font-normal text-grey">
        A trusted agency for your business needs <br></br> Invest in the right service and solution
        </p>
      </div>
      <figure className="translate-x-36 translate-y-28">
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
      <Section className="relative flex flex-col md:h-[400px] lg:flex-row">
        <div className="break-word flex flex-col justify-center gap-y-5 lg:w-1/2 lg:-translate-y-8">
          <h1 className="text-5xl font-bold text-black alternate:text-white">{title}</h1>
          <summary className="w-8/12 list-none text-5.5 font-thin text-white">
            {description}
          </summary>
        </div>
        <figure className={`lg:w-1/2 ${imgClassName}`}>
          {img && <Image alt={title} className="absolute" height={534} src={img} width={649} />}
        </figure>
      </Section>
    </Section>
  );
};

HeroType2.defaultProps = {
  imgClassName: ''
};

export default Hero;
