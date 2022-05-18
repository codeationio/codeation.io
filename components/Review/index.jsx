import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const carouselContent = [
  {
    id: 1,
    profilePicture: "/images/client.svg",
    companyName: "Company Name 1",
    clientName: "Client Name 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit natus ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    profilePicture: "/images/client.svg",
    companyName: "Company Name 2",
    clientName: "Client Name 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit natus ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    profilePicture: "/images/client.svg",
    companyName: "Company Name 3",
    clientName: "Client Name 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit natus ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Carousel = () => {
  const [ratings, setRatings] = useState(0);
  const ratingChanged = (newRating) => {
    console.log({ newRating });
    setRatings(newRating);
  };

  return (
    <div className="h-[500px] flex items-center  " >
      <div className="swiffy-slider h-full p-20 ">
        <ul className="slider-container w-auto ">
          {carouselContent.map((item) => (
            <li key={item.id} className="flex flex-col items-center">
              <div className="border shadow-lg  shadow-slate-700/20 p-12 w-1/2 rounded-2xl">
                <div className="flex items-center  ">
                  <Image
                    src={item.profilePicture}
                    alt="../"
                    width="100px"
                    height="100px"
                  />
                  <div>
                    <div className="ml-10 text-2xl font-extrabold text-primary ">
                      <p> {item.companyName}</p>
                      <p>- {item.clientName}</p>
                    </div>
                  </div>
                </div>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={30}
                  activeColor="#ffd700"
                  value={ratings}
                />
                <p className="text-textPrimary max-w-2xl text-md mt-5">{item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <button type="button" className="slider-nav"></button>
        <button type="button" className="slider-nav slider-nav-next"></button>

        <div className="slider-indicators">
          <button className="active"></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
