import Card, { CardDescription, ServicesCard } from 'components/Card';
import RoundedIcon from 'components/RoundedIcon';
import Section from 'components/Section';

const cards: any[] = Array.from({ length: 3 }).fill({
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, tristique id lacinia vel. Enim ultrices elementum odio magnis risus nec. Nec bibendum imperdiet purus quis iaculis ipsum.',
  icon: '/images/lock.svg'
});

const OurValues = () => (
  <Section
    className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-16"
    id="services"
    title="Our Values">
    {cards.map(({ description, icon }) => (
      <Card key={icon} shadow={false}>
        <RoundedIcon className="mx-auto my-12" icon={icon} />
        <CardDescription className="mx-auto">{description}</CardDescription>
      </Card>
    ))}
  </Section>
);

export default OurValues;
