import Image from 'next/image';
import Button from './Button';

const Card = ({imageUrl, imageHeight, imageWidth,  title, description, btnName, btnStyle, cardStyle, titleStyle}) => {
  return (
    <>
      <div className={cardStyle}>
        <Image
          src={imageUrl}
          alt={imageUrl}
          width={imageWidth}
          height={imageHeight}
        />
        <h2 className={titleStyle}>{title}</h2>
        <p className="text-lg">
          {description}
        </p>
        <Button  type="button" className={btnStyle}>{btnName}
        </Button>
      </div>
    </>
  );
};

export default Card;
