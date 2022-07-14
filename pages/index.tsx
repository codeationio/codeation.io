import { ServicesCard } from 'components/Card';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Head from 'next/head';
import { FC } from 'react';

import Hero from '../components/Hero';

const cards: any[] = Array.from({ length: 9 }).fill({
  description:
    'Lorem ipsum dolor sit amet, consectetur adipcing elit. Sit malesuada massa velit gravida hendrerit venenatis phasellus.',
  image: '/images/web_development.svg',
  title: 'web development'
});

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Codeation.io next-js template</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Section head>
        <Navbar />
        <Hero />
      </Section>
      <Section className="flex flex-wrap justify-between gap-8" title="Our Services">
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

export default Index;
