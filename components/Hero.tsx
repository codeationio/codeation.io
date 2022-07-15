import Image from 'next/image';

import Section from './Section';

const Hero = () => {
  return (
    <Section className="mx-auto flex h-[calc(100vh_-_96px)] flex-col-reverse justify-end lg:max-w-7xl lg:flex-row lg:justify-center">
      <div className="break-word flex flex-col justify-center gap-y-5 lg:w-1/2 lg:-translate-y-[10%]">
        <h1 className="text-5xl font-bold text-black ">
          BRIDGING THE GAP BETWEEN
          <span className="ml-1 text-primary">TECHNOLOGY </span>
          AND
          <span className="ml-1 text-primary">BUSINESS</span>
        </h1>
        <span className="h-0.5 w-48 bg-primary" />
        <p className="text-5.5 font-normal text-grey lg:w-inherit">
          An All-in-One Platform for all your website and mobile development Needs.
        </p>
      </div>
      <div className="items flex flex-col justify-center  lg:w-1/2 lg:-translate-y-[10%]">
        <Image alt="Hero_Section" height={500} src="/images/hero_section.svg" width={500} />
      </div>
    </Section>
  );
};
export default Hero;
