import { ServicesCard, ServicesCardProps } from 'components/Card';
import Section from 'components/Section';

const cards = Array.from({ length: 9 }).fill({
  description:
    'Lorem ipsum dolor sit amet, consectetur adipcing elit. Sit malesuada massa velit gravida hendrerit venenatis phasellus.',
  image: '/images/web_development.svg',
  title: 'web development'
}) as ServicesCardProps[];

const Card = () => {
  return (
    <>
      <Section className="flex flex-wrap justify-between gap-8">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            description={card.description}
            image={card.image}
            title={card.title}
          />
        ))}
      </Section>
      <Section className="flex flex-wrap justify-between gap-8">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            description={card.description}
            image={card.image}
            title={card.title}
          />
        ))}
      </Section>
    </>
  );
};

export default Card;
