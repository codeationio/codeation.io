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
      <article className="mb-7 grid grid-cols-2 flex-row xl:gap-10">
        <div className="ml-5 flex flex-col justify-evenly lg:m-0 lg:!flex-row xl:m-0 xl:!flex-row">
          <div className="flex flex-col gap-y-4">
            <figure className="lg:mt-10 lg:-ml-1 xl:mt-10 xl:-ml-1">
              <Image alt="Codeation.io" height={28} src="/images/footer_logo.svg" width={267} />
            </figure>
            <p className="flex items-end text-xs leading-5 lg:col-span-4 lg:text-lg xl:col-span-4 xl:text-lg">
              3rd Floor, F-88 , Phase 7,
              <br /> Industrial Area, Sector 73,
              <br /> SAS nagar, Punjab,
              <br /> India. 160055
            </p>
            <div className="flex items-start lg:items-center xl:items-center">
              <figure className="h-7 w-8">
                <Image alt="twitter" height={20} src="/images/twitter.svg" width={35} />
              </figure>
              <figure className="h-7 w-8">
                <Image alt="twitter" height={20} src="/images/linkedin.svg" width={35} />
              </figure>
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-lg font-bold lg:mt-10 lg:text-3xl xl:mt-10 ">
              Site&nbsp;Links
            </h1>
            <div className="text-sm leading-6 lg:mt-10	lg:text-lg	xl:mt-10">
              <h3>Home</h3>
              <h3>About us</h3>
              <h3>Recent Work</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:gap-y-10 lg:leading-7 xl:gap-y-10 ">
          <div className="flex items-center justify-between lg:mt-10 xl:mt-10">
            <span className="hidden h-0.5 bg-white lg:flex lg:w-40 xl:flex  xl:w-52" />
            <h1 className="-mt-2 mb-4 text-lg font-bold lg:m-0 lg:text-3xl xl:text-3xl">
              Services
            </h1>
            <span className=" hidden h-0.5 bg-white lg:mr-3 lg:flex lg:w-40 xl:flex xl:w-52" />
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 xl:gap-x-10">
            {services.map((service, index) => (
              <h3
                key={index}
                className="leading-6 lg:w-max lg:text-xs lg:leading-7 xl:text-lg xl:leading-7 ">
                {service}
              </h3>
            ))}
          </div>
        </div>
      </article>
      <article className="flex w-full flex-col items-center justify-end">
        <span className="mb-6 h-0.5 w-[356px] bg-white lg:hidden xl:hidden" />
        <p className="flex text-lg">copyright © codeation 2022</p>
      </article>
    </footer>
  );
};
export default Footer;
