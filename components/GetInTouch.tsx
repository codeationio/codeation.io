import Image from 'next/image';
import Link from 'next/link';

const GetInTouch = () => {
  return (
    <div className="flex h-auto flex-col justify-around space-y-7 p-10 lg:h-64 lg:flex-row lg:p-0 xl:h-64  xl:flex-row xl:p-0">
      <h1 className="flex flex-col justify-center text-2xl font-semibold leading-10 text-secondary lg:text-4xl xl:text-4xl">
        Ready to work with us? <br /> <span className="text-primary">Get in touch </span>{' '}
      </h1>
      <div className="flex items-center">
        {/* <input className="h-16 w-64 bg-white px-3.5 text-description" placeholder="Your Email : " /> */}
        <Link href="mailto:info@codeation.io">
          <a>
            <div className="flex h-16 w-24 items-center justify-center rounded-full bg-primary">
              <Image alt="Get in touch" height={28} src="/images/send_icon.svg" width={28} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default GetInTouch;
