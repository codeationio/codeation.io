import Card from "../Card";

const index = () => {
  const cardProps = [
    {
      id: 1,
      imageUrl: "/images/web-development.svg",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      btnName: "Read More",
    },
    {
      id: 2,
      imageUrl: "/images/app-development.svg",
      title: "Application Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      btnName: "Read More",
    },
    {
      id: 3,
      imageUrl: "/images/custom-development.svg",
      title: "Custom Software Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      btnName: "Read More",
    },
  ];
  const titleStyle = "font-semibold text-xl";
  const btnStyle =
    "bg-primary font-medium border-2 border-white rounded-md p-2 w-1/2";
  const cardStyle =
    "flex flex-col justify-evenly items-center w-1/5 h-500 rounded-xl shadow-5xl bg-primary text-white text-center";
  const imageWidth = "70";
  const imageHeight = "70";

  return (
    <div id="services" className="mb-40">
      <p className="text-big text-primary/70 ml-12 mb-32">Our Services</p>
      <div className="flex justify-evenly">
        {cardProps.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
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
