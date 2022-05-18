import Card from "../Card";

const cardProps = [
  {
    id: 1,
    imageUrl: "/images/profile.svg",
    name: "Jorge Gill",
    description: "Agency CEO",
    btnName: "Contact Me",
  },
  {
    id: 2,
    imageUrl: "/images/profile.svg",
    name: "Jorge Gill",
    description: "Agency CEO",
    btnName: "Contact Me",
  },
  {
    id: 3,
    imageUrl: "/images/profile.svg",
    name: "Jorge Gill",
    description: "Agency CEO",
    btnName: "Contact Me",
  },
];
const btnStyle = "p-2 w-36 rounded-lg border-primary text-primary border-2";
const titleStyle = " font-medium text-2xl text-primary";
const cardStyle =
  "flex flex-col justify-between items-center w-1/4 text-center text-black p-12  shadow-xl  hover:shadow-2xl shadow-gray-350 rounded-3xl h-440";
const imageWidth = "170";
const imageHeight = "170";

const index = () => {
  return (
    <div id="aboutUs" className=" mb-32 max-w-5xl ml-12 ">
      <p className="text-big text-secondary mb-28 ">Our Team</p>
      <div className="flex justify-around shadow- mt-12 ">
        {cardProps.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.name}
            description={item.description}
            btnName={item.btnName}
            btnStyle={btnStyle}
            cardStyle={cardStyle}
            titleStyle={titleStyle}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
