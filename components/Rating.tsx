import { FC } from 'react';

const Rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <span className="inline-flex space-x-2 ">
      {[...Array(rating)].map((_, index) => (
        <svg key={index} className="h-4 w-4 transition-[fill] duration-200 ease-in-out" viewBox="0 0 51 48">
          <path
            className="fill-[gold] transition-[fill] duration-200 ease-in-out"
            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"></path>
        </svg>
      ))}
    </span>
  );
};

export default Rating;
