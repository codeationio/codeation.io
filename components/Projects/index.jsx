import Image from 'next/image';
import Button from '../Button';

const index = () => {
  return (
    <div className="mb-40" >
      <p className="text-5xl text-gray-600 mb-24 ">RecentProjects</p>
      <div>
        <div className="flex odd:flex-row even:flex-row-reverse ">
          <div className="w-1/2">
            <Image
              src="/images/React-Projects.png"
              alt="project1"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="flex flex-col justify-around   w-1/2">
            <p className=" text-5xl font-semibold text-blue-700">
              #1 Web WebDesign{' '}
            </p>
            <p className="w-96 text-[#636363] text-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.nothing, Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.nothing
            </p>

            <Button
              type="button"
              className="border-2 font-semibold p-2 w-36 rounded-lg border-[#4B0CFF] text-[#4B0CFF]"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex justify-around odd:flex-row even:flex-row-reverse">
          <div className="w-1/2">
            <Image
              src="/images/React-Projects1.jpg"
              alt="project1"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="flex flex-col w-1/2 justify-evenly">
            <p className="text-5xl font-semibold text-blue-700">
              #2 Web WebDesign{' '}
            </p>
            <p className="w-96 text-[#636363] text-xl p-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.nothing, Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.nothing
            </p>
            <Button
              type="button"
              className="border-2 font-semibold p-2 w-36 rounded-lg border-[#4B0CFF] text-[#4B0CFF]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
