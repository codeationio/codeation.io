import Image from 'next/image';
const services: string[] = [
  'Software Development',
  'Analytical Dashboard',
  'AWS, GCP, Azure',
  'Mobile App Development',
  'UI / UX',
  'Digital Marketing',
  'Web Development',
  'QA',
  'ERM And Finance'
];

const Footer = () => {
  return (
    <footer className="text-white">
      <article className="mb-7 grid grid-cols-2 flex-row gap-10">
        <div className="ml-5 flex flex-col justify-evenly lg:m-0 lg:!flex-row">
          <div className="flex flex-col gap-y-4">
            <figure className="mt-10">
              <Image alt="Codeation.io" height={28} src="/images/footer_logo.svg" width={267} />
            </figure>
            <p className="flex items-end text-xs lg:col-span-4 lg:text-lg">
              3rd Floor, F-88 , Phase 7,
              <br /> Industrial Area, Sector 73,
              <br /> SAS nagar, Punjab,
              <br /> India. 160055
            </p>
            <figure className="flex items-start lg:items-center">
              <Image alt="twitter" height={20} src="/images/twitter.svg" width={35} />
              <Image alt="linkedin" height={20} src="/images/linkedin.svg" width={35} />
            </figure>
          </div>
          <div>
            <h1 className="text-lg font-bold lg:mt-10 lg:text-3xl">Site&nbsp;Links</h1>
            <div className="text-sm lg:mt-10	lg:text-lg">
              <h3>Home</h3>
              <h3>About us</h3>
              <h3>Recent Work</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:gap-y-10 lg:leading-7">
          <div className="flex items-center justify-between lg:mt-10">
            <span className="hidden h-0.5 w-52 bg-white lg:flex" />
            <h1 className="text-lg font-bold lg:text-3xl">Services</h1>
            <span className="hidden h-0.5 w-52 bg-white lg:flex" />
          </div>
          <div className="grid grid-cols-3 gap-x-10">
            {services.map((service, index) => (
              <h3 key={index}>{service}</h3>
            ))}
          </div>
        </div>
      </article>
      <article className="flex w-full flex-col items-center justify-end">
        <span className="mb-6 h-0.5 w-[356px] bg-white lg:hidden" />
        <p className="flex text-lg">copyright © codeation 2022</p>
      </article>
    </footer>
  );
};
export default Footer;
