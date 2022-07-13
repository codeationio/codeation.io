import Navbar from 'components/Navbar';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h1></h1>
        </div>
        <div>
          <Image alt="Hero_Section" height={470} src="/images/hero_section.svg" width={460} />
        </div>
      </section>
    </>
  );
};
export default Hero;
