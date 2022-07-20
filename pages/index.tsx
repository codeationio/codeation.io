import Footer from 'components/Footer';
import GetInTouch from 'components/GetInTouch';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import { FC } from 'react';
import ClientsSection from 'sections/ClientsSection';
import RecentWorkSection from 'sections/RecentWorkSection';
import Services from 'sections/Services';
import Team from 'sections/Team';
import TestimonialSection from 'sections/TestimonialSection';

const Index: FC = () => {
  return (
    <>
      <Wrapper>
        <Section head>
          <Navbar />
          <Hero />
        </Section>
        <Services />
        <RecentWorkSection />
        <Section>
          <TestimonialSection />
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
