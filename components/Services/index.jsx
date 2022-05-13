import Card from '../Card';

const index = () => {
  const cardProps = [
    {
      id: 1,
      imageUrl: '/images/web-development.svg',
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      btnName: 'Read More',
    },
    {
      id: 2,
      imageUrl: '/images/app-development.svg',
      title: 'Application Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      btnName: 'Read More',
    },
    {
      id: 3,
      imageUrl: '/images/custom-development.svg',
      title: 'Custom Software Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      btnName: 'Read More',
    },
  ];
  const titleStyle = ' font-semibold text-xl';
  const btnStyle = 'bg-primary font-medium border-2 border-white rounded-md p-2 w-1/2';
  const cardStyle =
    'flex flex-col justify-around items-center w-[30%] bg-primary text-center text-white p-8 rounded-xl h-[500px]';
  const imageWidth = '70';
  const imageHeight = '70';

  return (
    <div className="mb-40 max-w-5xl ml-[12%] ">
      <p className="text-header text-gray-600/50">Our Services</p>
      <div className="flex justify-between mt-20">
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
