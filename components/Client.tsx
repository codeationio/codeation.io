import Image from 'next/image';
import { FC } from 'react';

export type ClientProps = {
  width?: number;
  logo: string;
  height?: number;
  name: string;
};

const Client: FC<ClientProps> = ({ height, logo, name, width }) => {
  return (
    <figure className="flex h-full w-full max-w-[150px] items-center justify-evenly">
      <Image alt={name} height={height} src={logo} width={width} />
    </figure>
  );
};

Client.defaultProps = {
  height: 71,
  width: 71,
};
export default Client;
