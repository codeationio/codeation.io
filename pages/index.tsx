import Footer from 'components/Footer';
import GetInTouch from 'components/GetInTouch';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import Head from 'next/head';
import { FC } from 'react';
import ClientsSection from 'sections/ClientsSection';
import Services from 'sections/Services';
import Team from 'sections/Team';
import Testimonials from 'sections/Testimonials';
import Work from 'sections/Work';

import Hero from '../components/Hero';

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Codeation.io - BRIDGING THE GAP BETWEEN TECHNOLOGY AND BUSINESS</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Wrapper>
        <Section head>
          <Navbar />
          <Hero />
        </Section>
        <Services />
        <Work />
        <Testimonials />
        <ClientsSection />
        <Team />
        <GetInTouch />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Index;
