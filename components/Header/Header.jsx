import Image from 'next/image';
import Button from '../Button';

const Header = () => {
  return (
    <div className="flex justify-between mb-20 mr-10">
      <div className=" bg-[#4B0CFF] flex flex-col justify-evenly items-end text-white rounded-[80px] w-1/2 -translate-x-52 -translate-y-14 -rotate-[20deg]">
        <p className="text-4xl mr-14 mt-3 rotate-[20deg] ">myagency.</p>
        <p className="text-4xl mr-20 w-56 rotate-[20deg] ">
          We are the Best Agency For Web, App Development
        </p>
        <Button
          type="button"
          className="p-2 w-40 mr-56 rotate-[20deg] rounded-xl  border-white border-2"
        >
          Contact Us
        </Button>
      </div>

      <div className="w-1/2">
        <div className="text-2xl mt-8 flex justify-between items-baseline ">
          <p className="  ">Home</p>
          <p className="">About Us</p>
          <p className="">Services</p>
          <Button
            type="button"
            className="p-2 w-44 bg-purple-100 rounded-lg border-[#4B0CFF] text-[#4B0CFF]  border-2"
          >
            Contact Us
          </Button>
        </div>
        <Image
          src="/images/header_group.svg"
          alt="header_group"
          width="60%"
          height="60%"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Header;
