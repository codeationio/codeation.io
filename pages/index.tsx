import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import Head from 'next/head';
import { FC } from 'react';
import Services from 'sections/Services';

import Hero from '../components/Hero';

const Index: FC = () => {
  return (
    <Wrapper>
      <Head>
        <title>Codeation.io - BRIDGING THE GAP BETWEEN TECHNOLOGY AND BUSINESS</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Section head>
        <Navbar />
        <Hero />
      </Section>
      <Services />
    </Wrapper>
  );
};

export default Index;
