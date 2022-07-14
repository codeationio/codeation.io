import Image from 'next/image';

import Section from './Section';

const Hero = () => {
  return (
    <Section className="flex h-[calc(100vh_-_96px)] max-w-8xl flex-col-reverse justify-end lg:flex-row lg:justify-center">
      <div className="flex flex-col justify-center gap-y-5 break-all lg:w-1/2 lg:-translate-y-[10%]">
        <h1 className="text-5xl font-bold text-black ">
          BRIDGING THE GAP BETWEEN
          <span className="ml-3 text-primary">TECHNOLOGY </span>
          AND
          <span className="ml-3 text-primary">BUSINESS</span>
        </h1>
        <span className="h-0.5 w-48 bg-primary" />
        <p className="text-5.5 font-normal text-textColor lg:w-inherit">
          An All-in-One Platform for all your website and mobile development Needs.
        </p>
      </div>
      <div className="flex justify-center lg:w-1/2 lg:-translate-y-[10%]">
        <Image alt="Hero_Section" height={550} src="/images/hero_section.svg" width={550} />
      </div>
    </Section>
  );
};
export default Hero;
