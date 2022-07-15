import Image from 'next/image';

const GetInTouch = () => {
  return (
    <div className="flex h-64 justify-around">
      <h1 className="flex flex-col justify-center text-4xl font-semibold leading-10">
        Ready to work with us? <br /> <span className="text-primary">Get in touch </span>{' '}
      </h1>
      <div className="flex items-center">
        <input className="h-16 w-64 bg-white text-description" placeholder="Your Email : " />
        <div className="flex h-16 w-24 justify-center bg-primary">
          <Image alt="/.../" height={28} src="/images/send_icon.svg" width={28} />
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
