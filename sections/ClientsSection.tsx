import Client, { ClientProps } from 'components/Client';
import Section from 'components/Section';

const clientsArr: Partial<ClientProps>[] = [
  {
    logo: '/images/client_1.svg'
  },
  {
    logo: '/images/client_2.svg',
    width: 140
  },
  {
    logo: '/images/client_3.svg'
  },
  {
    logo: '/images/client_4.svg'
  },
  {
    logo: '/images/client_5.svg',
    width: 140
  },
  {
    logo: '/images/client_6.svg',
    width: 120
  }
];

const ClientsSection = () => {
  return (
    <Section className="flex flex-wrap justify-evenly [&>*]:mr-2	">
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
