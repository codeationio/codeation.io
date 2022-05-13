import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import {useState} from 'react';

const carouselContent = [
  {
    id: 1,
    profilePicture: "/images/profile1.jpg",
    companyName: "Company Name 1",
    clientName: "Client Name 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit natus ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    profilePicture: "/images/profile1.jpg",
    companyName: "Company Name 2",
    clientName: "Client Name 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit natus ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    profilePicture: "/images/profile1.jpg",
    companyName: "Company Name 3",
    clientName: "Client Name 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit natus ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Carousel = () => {

  const [ratings, setRatings] = useState(0)

  const ratingChanged = (newRating) => {
    console.log({newRating});
    setRatings(newRating)
  };

  return (
    // <>
      <div className="carousel w-full h-[500px] mb-28 ">
        {carouselContent.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className="carousel-item relative w-full "
          >
            <div className="w-full flex flex-col justify-center  items-center">
              <div className="border shadow-2xl shadow-slate-500/70 p-14 rounded-2xl">
                <div className="flex items-center mb-5 ">
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
                  size={24}
                  activeColor="#ffd700"
                  value={ratings}
                />
                <p className="text-[#636363] max-w-2xl text-md mt-5">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href=""
                className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white "
              >
                ❮
              </a>
              <a
                href=""
                className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    // </>
  );
};

export default Carousel;
{
  /* <div id="slide2" className="carousel-item relative w-full">
  <div className="w-full flex flex-col justify-center  items-center">
    <div className="border  shadow-2xl shadow-slate-500/70 p-10 rounded-2xl">
      <div className="flex items-center mb-5 ">
        <Image
          src="/images/profile1.jpg"
          alt="../"
          width="100px"
          height="100px"
        />
        <div>
          <div className="ml-10 text-2xl font-extrabold text-primary ">
            <p> company Name 2</p>
            <p>- client Name 2</p>
          </div>
        </div>
      </div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <p className="text-[#636363] max-w-2xl text-md ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        velit natus ratione Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga velit natus ratione
      </p>
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a
      href="#slide1"
      className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
    >
      ❮
    </a>
    <a
      href="#slide3"
      className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide3" className="carousel-item relative w-full">
  <div className="w-full flex flex-col justify-center  items-center">
    <div className="border  shadow-2xl shadow-slate-500/70 p-10 rounded-2xl">
      <div className="flex items-center mb-5 ">
        <Image
          src="/images/profile1.jpg"
          alt="../"
          width="100px"
          height="100px"
        />
        <div>
          <div className="ml-10 text-2xl font-extrabold text-primary ">
            <p> company Name 3</p>
            <p>- client Name 3</p>
          </div>
        </div>
      </div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <p className="text-[#636363] max-w-2xl text-md ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        velit natus ratione Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga velit natus ratione
      </p>
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a
      href="#slide2"
      className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
    >
      ❮
    </a>
    <a
      href="#slide4"
      className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide4" className="carousel-item relative w-full">
  <div className="w-full flex flex-col justify-center  items-center">
    <div className="border  shadow-2xl shadow-slate-500/70 p-10 rounded-2xl">
      <div className="flex items-center mb-5">
        <Image
          src="/images/profile1.jpg"
          alt="../"
          width="100px"
          height="100px"
        />
        <div>
          <div className="ml-10 text-2xl font-extrabold text-primary ">
            <p> company Name 4</p>
            <p>- client Name 4</p>
          </div>
        </div>
      </div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <p className="text-[#636363] max-w-2xl text-md ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        velit natus ratione Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga velit natus ratione
      </p>
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a
      href="#slide3"
      className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
    >
      ❮
    </a>
    <a
      href="#slide1"
      className="btn btn-square bg-primary hover:bg-primary h-20 w-12 text-3xl text-white"
    >
      ❯
    </a>
  </div>
</div> */
}
