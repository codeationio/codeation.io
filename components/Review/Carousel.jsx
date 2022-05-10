import Image from "next/image";

const carouselContent = [
  {
    id: 1,
    profilePicture: "",
    companyName: "",
    clientName: "",
    rating: "",
    description: "",
  },
  {
    id: 2,
    profilePicture: "",
    companyName: "",
    clientName: "",
    rating: "",
    description: "",
  },
  {
    id: 3,
    profilePicture: "",
    companyName: "",
    clientName: "",
    rating: "",
    description: "",
  },
];

const Carousel = () => {
  return (
    <div>
      <p className="text-8xl"> Carousel </p>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 bg-pr">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden border-4 border-yellow-500">
          <div className="carousel-item border-4 p-10 border-slate-50 active relative  w-1/2">
            {/* <div className="border-4 p-10  border-red-700 "> */}
            <div className="flex items-start">
              <Image
                src="/images/profile1.jpg"
                alt="..."
                width="100px"
                height="100px"
                // width="20%"
                // height="20%"
                // layout="responsive"
              />
              <div className="p-10">
                <p>Doogie App development</p>
                <p className="flex items-start">- jay veer</p>
              </div>
            </div>
            <p>Ratings</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo
              architecto quasi consectetur doloribus. Odit incidunt perferendis
              iusto dolorum debitis praesentium est quam dolorem. Doloremque
              natus architecto dolor magnam sequi.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center  border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
