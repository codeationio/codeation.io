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
    <figure>
      <Image alt={name} height={height} src={logo} width={width} />
    </figure>
  );
};

Client.defaultProps = {
  height: 80,
  width: 80
};
export default Client;
