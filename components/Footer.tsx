import Image from 'next/image';

const Footer = () => {
  return (
    <div className=" grid h-80 w-screen grid-cols-2 flex-row gap-10 text-white ">
      <div className="flex justify-evenly ">
        <div className="grid grid-flow-col grid-rows-3">
          <div className="col-span-4 mb-3 flex items-end">
            <Image alt="Codeation.io" height={20} src="/images/footer_logo.svg" width={187} />
          </div>
          <p className="col-span-4 flex items-end">
            3rd Floor, F-88 , Phase 7,
            <br /> Industrial Area, Sector 73,
            <br /> SAS nagar, Punjab,
            <br /> India. 160055
          </p>
          <div className="col-span-4 flex items-center">
            <Image alt="twitter" height={20} src="/images/twitter.svg" width={35} />
            <Image alt="linkedin" height={20} src="/images/linkedin.svg" width={35} />
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2">
          <div className="col-span-1 flex items-center">
            <h1 className="text-3xl  font-bold">Company</h1>
          </div>
          <div className="col-span-11 leading-8">
            <h3>Home</h3>
            <h3>About us</h3>
            <h3>Recent Work</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <div className="flex w-full items-center justify-evenly">
          <span className=" h-0.5 w-52 bg-white" />
          <h1 className="text-3xl font-bold">Services</h1>
          <span className=" h-0.5 w-52 bg-white" />
        </div>
        <div className="flex w-full justify-around leading-8">
          <div>
            <h3>Software Development</h3>
            <h3>Mobile App Development</h3>
            <h3>Web Development</h3>
          </div>
          <div>
            <h3>Analytical Dashboard</h3>
            <h3>UI / UX</h3>
            <h3>QA</h3>
          </div>
          <div>
            <h3>AWS, GCP, Azure</h3>
            <h3>Digital Marketing</h3>
            <h3>ERM And Finance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
