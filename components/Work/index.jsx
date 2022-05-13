import Image from 'next/image';

const images = [
  {
    id: 1,
    title: '/images/Adidas_Logo.svg',
    width: 100,
    height: 100,
  },
  {
    id: 2,
    title: '/images/Flaticon_logo.svg',
  },
  {
    id: 3,
    title: '/images/image_3.svg',
  },
];

const index = () => {
  return (
    <div className=" p-4 bg-gray-300 flex justify-around  mb-32 ">
      {images.map((img) => (
        <Image key={img.id} src={img.title} alt={img.title} width={img.width ?? '200'} height={img.height ?? '200'} />
      ))}
    </div>
  );
};

export default index;
