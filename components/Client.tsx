import Image from 'next/image';

const Client = ({ height, url, width }: any) => {
  return (
    <div>
      <Image alt="Client" height={height} src={url} width={width} />
    </div>
  );
};
export default Client;
