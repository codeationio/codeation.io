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
    <figure className="flex h-14 w-14 items-center lg:w-32 xl:w-32">
      <Image alt={name} height={height} src={logo} width={width} />
    </figure>
  );
};

Client.defaultProps = {
  height: 101,
  width: 101
};
export default Client;
