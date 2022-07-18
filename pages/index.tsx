import Footer from 'components/Footer';
import GetInTouch from 'components/GetInTouch';
import Hero from 'components/Hero';
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

const Index: FC = () => {
  return (
    <>
      <Wrapper>
        <Section head>
          <Navbar />
          <Hero />
        </Section>
        <Services />
        <Work />
        <Section>
          <Testimonials />
          <ClientsSection />
        </Section>
        <Team />
        <GetInTouch />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Index;
