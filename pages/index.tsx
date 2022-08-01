import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import SkeletonLoading from 'components/SkeletonLoading';
import dynamic from 'next/dynamic';
import { FC, Suspense } from 'react';
const Wrapper = dynamic(() => import('components/Wrapper'), {
  suspense: true,
});
const Footer = dynamic(() => import('components/Footer'), {
  suspense: true,
});
const GetInTouch = dynamic(() => import('components/GetInTouch'), {
  suspense: true,
});
const ClientsSection = dynamic(() => import('sections/ClientsSection'), {
  suspense: true,
});
const RecentWorkSection = dynamic(() => import('sections/RecentWorkSection'), {
  suspense: true,
});
const Services = dynamic(() => import('sections/Services'), {
  suspense: true,
});
const Team = dynamic(() => import('sections/Team'), {
  suspense: true,
});
const TestimonialSection = dynamic(() => import('sections/TestimonialSection'), {
  suspense: true,
});

const Index: FC = () => {
  return (
    <>
      <Suspense fallback={<SkeletonLoading />}>
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
      </Suspense>
    </>
  );
};

export default Index;
