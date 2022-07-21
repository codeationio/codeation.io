import Image from 'next/image';

export type RoundedIconProps = {
  icon: string;
  className?: string;
};

const RoundedIcon = ({ className, icon }) => (
  <span className={`flex h-32 w-32 items-center justify-center rounded-full bg-primary ${className}`}>
    <Image alt="icon" height={70} src={icon} width={70} />
  </span>
);

RoundedIcon.defaultProps = {
  className: '',
};

export default RoundedIcon;
