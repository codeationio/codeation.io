import Card from "../Card";

const cardProps = [
  {
    id: 1,
    imageUrl: "/images/profile1.jpg",
    name: "Jorge Gill",
    description: "Agency CEO",
    btnName: "Contact Me",
  },
  {
    id: 2,
    imageUrl: "/images/profile1.jpg",
    name: "Jorge Gill",
    description: "Agency CEO",
    btnName: "Contact Me",
  },
  {
    id: 3,
    imageUrl: "/images/profile1.jpg",
    name: "Jorge Gill",
    description: "Agency CEO",
    btnName: "Contact Me",
  },
];
const btnStyle = "p-2 w-36 rounded-lg border-primary text-primary border-2";
const titleStyle = " font-medium text-3xl text-primary";
const cardStyle =
  "flex flex-col bg-purple-50/50 justify-between items-center w-[25%] text-center text-black p-12  shadow-xl  shadow-gray-350 rounded-3xl h-[450px]";
const imageWidth = "170";
const imageHeight = "170";

const index = () => {
  return (
    <div className=" mb-32 max-w-5xl ml-[12%] ">
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
