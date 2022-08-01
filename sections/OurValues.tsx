import Card, { CardDescription } from 'components/Card/Card';
import RoundedIcon from 'components/RoundedIcon';
import Section from 'components/Section';

const cards = [
  {
    content:
      'We take an inquisitive, methodical approach to every project to ensure we find the best solution possible. Keeping our clients best interests at heart is a way of work for us. We strive to provide exceptional customer service through flexible scheduling, quality products, efficient services, and innovative solutions resulting in value to the customer and company.',
    icon: '/images/lock.svg',
    id: 1,
  },
  {
    content:
      'Quality is a prerequisite to our development process. We are passionate about the minor details of the business. From concept to launch, our website and marketing projects are thoroughly tested and built to last. We ensure that every element and every increment of the solution reflects quality standards throughout the development lifecycle.',
    icon: '/images/heart.svg',
    id: 2,
  },
  {
    content: `Greek philosopher Heraclitus once said that “the only constant in life is change.”We strive to change with the latest technology and advancements. We value inspiring, original, and intelligent ideas. Our team works hard to redefine the standard of excellence to stay relevant and efficient with changing needs of tech. We try new things, iterate them, adapt them and come up with new solutions.`,
    icon: '/images/check.svg',
    id: 3,
  },
];

const OurValues = () => (
  <Section className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16" id="services" title="Our Values">
    {cards.map(({ content, icon, id }) => (
      <Card key={id} shadow={false}>
        <RoundedIcon className="mx-auto my-12" icon={icon} />
        <CardDescription className="block w-full max-w-fit text-5.5 leading-9 lg:text-justify xl:text-justify">{content}</CardDescription>
      </Card>
    ))}
  </Section>
);

export default OurValues;
