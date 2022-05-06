import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex justify-around bg-[#100052] text-white items-center h-96">
      <div className="text-center">
        <p className="text-6xl mb-3 ">myagency.</p>
        <div className="flex justify-center items-center " >
          <Image
            src="/images/facebook-logo.png"
            width="40"
            height="40"
            alt="Facebook"
          />
          <Image
            src="/images/logo-twitter.png"
            width="60"
            height="60"
            alt="Twitter"
          />
          <Image
            src="/images/youtube-logo.svg"
            width="60"
            height="50"
            alt="YouTube"
          />
          <Image
            src="/images/instagram-logo.webp"
            width="40"
            height="40"
            alt="Instagram"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="p-7">
          <p className="text-3xl mb-3">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
        </div>
        <div className="p-7">
          <p className="text-3xl mb-3 ">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
        </div>
        <div className="p-7" >
          <p className="text-3xl mb-3">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
          <p className="text-xl">Services</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
