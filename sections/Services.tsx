import { ServicesCard } from 'components/Card';
import Section from 'components/Section';

const cards: any[] = Array.from({ length: 9 }).fill({
  description:
    'Lorem ipsum dolor sit amet, consectetur adipcing elit. Sit malesuada massa velit gravida hendrerit venenatis phasellus.',
  image: '/images/web_development.svg',
  title: 'web development'
});

const Services = () => (
  <Section
    className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-16"
    id="services"
    title="Our Services">
    {cards.map((card, index) => (
      <ServicesCard
        key={index}
        description={card.description}
        image={card.image}
        title={card.title}
      />
    ))}
  </Section>
);

export default Services;
