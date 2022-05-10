import Image from 'next/image';

const logo = [
  { id: 1, src: '/images/facebook-logo.png' },
  { id: 2, src: '/images/logo-twitter.png' },
  { id: 3, src: '/images/youtube-logo.svg' },
  { id: 4, src: '/images/instagram-logo.webp' },
];

const Footer = () => {
  return (
    <div className="flex justify-around bg-[#100052] text-white items-center h-96">
      <div className="text-center">
        <p className="text-6xl mb-3 ">myagency.</p>
        <div className="flex justify-center items-center ">
          {logo.map((item) => (
            <Image
              src={item.src}
              width="40"
              height="40"
              alt="/.../"
              key={item.id}
            />
          ))}
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
        <div className="p-7">
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
