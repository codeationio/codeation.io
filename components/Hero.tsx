import Image from 'next/image';

const Hero = () => {
  return (
    <section className="mx-auto flex h-[calc(100%_-_96px)] max-w-8xl justify-center">
      <div className="flex w-1/2 flex-col justify-center gap-y-5">
        <h1 className="text-5xl font-bold leading-54 text-black ">
          BRIDGING THE GAP BETWEEN
          <span className="ml-3 text-primary">TECHNOLOGY </span>
          AND
          <span className="ml-3 text-primary">BUSINESS</span>
        </h1>
        <span className="h-2px w-48 bg-primary" />
        <p className="text-22 w-inherit font-normal text-textColor">
          An All-in-One Platform for all your website and mobile development Needs.
        </p>
      </div>
      <div className="flex w-1/2 justify-center">
        <Image alt="Hero_Section" height={550} src="/images/hero_section.svg" width={550} />
      </div>
    </section>
  );
};
export default Hero;
