import Image from "next/image";
import Button from "../Button";

const Header = () => {
  return (
    <div className="flex justify-between mb-20 mr-10">
      <div className=" bg-primary flex flex-col justify-evenly items-end text-white rounded-[80px] w-1/2 -translate-x-52 -translate-y-14 -rotate-[20deg]">
        <p className="text-4xl mr-6 mt-12 rotate-[20deg] ">myagency.</p>
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
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Services</p>
          <Button
            type="button"
            className="p-2 w-2/6 bg-purple-100 rounded-lg border-primary text-primary  border-2"
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
