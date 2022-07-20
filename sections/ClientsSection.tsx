import Client, { ClientProps } from 'components/Client';
import Section from 'components/Section';

const clientsArr: Partial<ClientProps>[] = [
  {
    logo: '/images/client_1.svg'
  },
  {
    height: 24,
    logo: '/images/client_2.svg',
    width: 170
  },
  {
    logo: '/images/client_3.svg'
  },
  {
    height: 96,
    logo: '/images/client_4.svg'
  },
  {
    height: 51,
    logo: '/images/client_5.svg',
    width: 251
  },
  {
    height: 50,
    logo: '/images/client_6.svg',
    width: 190
  }
];

const ClientsSection = () => {
  return (
    <Section className="flex flex-wrap items-center justify-evenly [&>*]:mr-2	">
      {clientsArr.map((item, index) => (
        <Client
          key={index}
          height={item.height}
          logo={item.logo}
          name="client"
          width={item.width}
        />
      ))}
    </Section>
  );
};
export default ClientsSection;
