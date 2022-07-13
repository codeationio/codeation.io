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
  "flex flex-col justify-evenly items-center w-1/6 h-400 rounded-3xl shadow-5xl";
const imageWidth = "170";
const imageHeight = "170";

const index = () => {
  return (
    <div id="aboutUs" className=" mb-32 ">
      <p className="text-big text-primary mb-20 ml-12">Our Team</p>
      <div className="flex justify-evenly">
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
