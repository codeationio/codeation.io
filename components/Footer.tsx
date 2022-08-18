import Image from 'next/image';
import Link from 'next/link';
const servicesList1: string[] = ['Software Development', 'App Development', 'Web Development'];
const servicesList2: string[] = ['Dashboard', 'UI / UX', 'QA'];
const servicesList3: string[] = ['AWS, GCP, Azure', 'Digital Marketing', 'ERM And Finance'];

const Footer = () => {
  return (
    <footer className="text-white">
      <section className="mb-7 grid grid-cols-2 flex-row lg:mr-6 xl:mr-12 xl:gap-10">
        <div className="ml-5 flex flex-col justify-evenly lg:m-0 lg:!flex-row xl:m-0 xl:!flex-row">
          <article className="flex flex-col gap-y-4">
            <figure className="mr-5 lg:mt-10 lg:-ml-1  xl:mt-10   xl:-ml-1">
              <Image alt="Codeation.io" height={28} src="/images/footer_logo.svg" width={267} />
            </figure>
            <p className="flex items-end text-xs leading-5 lg:col-span-4 lg:text-lg xl:col-span-4 xl:text-lg">
              3rd Floor, F-88 , Phase 7,
              <br /> Industrial Area, Sector 73,
              <br /> SAS nagar, Punjab,
              <br /> India. 160055
            </p>
            <div className="flex items-start lg:items-center xl:items-center">
              {/* <figure className="h-7 w-8">
                <Image alt="twitter" height={20} src="/images/twitter.svg" width={35} />
              </figure> */}
              <Link href="https://www.linkedin.com/company/codeation/">
                <a>
                  <figure className="h-7 w-8">
                    <Image
                      alt="linkdin"
                      // className="hover:text-primary"
                      height={20}
                      src="/images/linkedin.svg"
                      width={35}
                    />
                  </figure>
                </a>
              </Link>
            </div>
          </article>
          <article>
            <h1 className="mt-4 text-lg font-bold lg:mt-10 lg:text-3xl xl:mt-10 ">Site&nbsp;Links</h1>
            <main className="text-xs leading-6 lg:mt-10 lg:text-lg xl:mt-10">
              <div>
                <Link href="/">Home</Link>
              </div>
              <div>
                <Link href="/about">About us</Link>
              </div>
              <div>
                <Link href="/#services">Services</Link>
              </div>
            </main>
          </article>
        </div>
        <article className="flex flex-col lg:gap-y-10 lg:leading-7 xl:m-0  xl:gap-y-6 ">
          <header className="flex items-center justify-between lg:mt-10 xl:mt-10">
            <span className="hidden h-0.5 bg-white lg:flex lg:w-36 xl:flex xl:w-52" />
            <h1 className="-mt-1 mb-1 text-lg font-bold lg:m-0 lg:mb-4 lg:text-3xl xl:text-3xl">Services</h1>
            <span className=" hidden h-0.5 bg-white lg:mr-3 lg:flex lg:w-36 xl:flex xl:w-52" />
          </header>
          <main className="lg:flex lg:flex-wrap lg:gap-x-10 xl:gap-x-24">
            <div>
              {servicesList1.map((service, index) => (
                <h3 key={index} className="text-xs leading-6 lg:w-max lg:text-base lg:leading-7 xl:text-lg xl:leading-7 ">
                  {service}
                </h3>
              ))}
            </div>
            <div>
              {servicesList2.map((service, index) => (
                <h3 key={index} className="text-xs leading-6 lg:w-max lg:text-base lg:leading-7 xl:text-lg xl:leading-7 ">
                  {service}
                </h3>
              ))}
            </div>
            <div>
              {servicesList3.map((service, index) => (
                <h3 key={index} className="text-xs leading-6 lg:w-max lg:text-base lg:leading-7 xl:text-lg xl:leading-7 ">
                  {service}
                </h3>
              ))}
            </div>
          </main>
        </article>
      </section>
      <section className="flex w-full flex-col items-center justify-end">
        <span className="mb-6 h-0.5 w-[356px] bg-white lg:hidden xl:hidden" />
        <p className="flex lg:text-lg">Copyright © codeation 2022</p>
      </section>
    </footer>
  );
};
export default Footer;
