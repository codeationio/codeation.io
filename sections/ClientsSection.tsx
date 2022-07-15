import Client from 'components/Client';
import Section from 'components/Section';

const clientsArr: any[] = [
  {
    height: '80',
    url: '/images/client_1.svg',
    width: '80'
  },
  {
    height: '80',
    url: '/images/client_2.svg',
    width: '160'
  },
  {
    height: '80',
    url: '/images/client_3.svg',
    width: '80'
  },
  {
    height: '80',
    url: '/images/client_4.svg',
    width: '80'
  },
  {
    height: '80',
    url: '/images/client_5.svg',
    width: '160'
  },
  {
    height: '80',
    url: '/images/client_6.svg',
    width: '160'
  }
];

const ClientsSection = () => {
  return (
    <Section className="flex justify-evenly">
      {clientsArr.map((item, index) => (
        <Client key={index} height={item.height} url={item.url} width={item.width} />
      ))}
    </Section>
  );
};
export default ClientsSection;
