import Footer from 'components/Footer';
import { HeroType2 } from 'components/Hero';
import Meta from 'components/Meta';
import { TwoColSection } from 'components/Section';
import Wrapper from 'components/Wrapper';
import OurValues from 'sections/OurValues';

const sections = [
  {
    content: (
      <>
        Rishabh comes from a generation when technology was far forlorn and the internet was seeping its primary roots in India. As someone
        who did not fit into that set of shared expectations of society, he wanted to do something innovative and solve the problems of
        people with his analytical mindset.
        <br />
        While everyone was scrubbing their hands into this digital enigma, he was excited to play with it and devise technologies that would
        help to ease the business flex. His grit, passion, and dedication to solving business problems through technology led to the
        foundation of &ldquo;CODEATION&rdquo;.
      </>
    ),
    img: '/images/our-story.svg',
    title: 'Our Story',
  },
  {
    content: (
      <>
        Our mission is derived from ‘Technological entrepreneurship’ also called ‘technopreneurship’ which involves tech-savvy, creative,
        innovative individuals who have a knack for taking calculated risks. Technopreneurship is an idea centered around creating a new
        product or coming up with a solution to some problem using highly innovative technology that facilitates prosperity in individuals,
        firms, regions, and nations by making their work technically sound, secure, and easy to do.
      </>
    ),
    img: '/images/our-mission.svg',
    reverse: true,
    title: 'Our Mission',
  },
];

const meta = [
  { content: 'BRIDGING THE GAP BETWEEN TECHNOLOGY AND BUSINESS', name: 'description' },
  { content: 'Web development, App Development, Mobile, Data Science, Dashboards, Analytics', name: 'keywords' },
];

const About = () => (
  <>
    <Meta meta={meta} title="About us | Codeation.io" />
    <Wrapper className="alternate [&>div:first-child]:bg-cover [&>div:first-child]:bg-no-repeat [&>*:first-child]:bg-[url('/images/contact-us.png')]">
      <HeroType2
        description="Hey, we are a productive team of developers came together to deliver the best services for your company"
        img="/images/about-us-hero.svg"
        title="About Us"
      />

      {sections.map((section) => (
        <TwoColSection key={section.title} {...section} />
      ))}

      <OurValues />
      <Footer />
    </Wrapper>
  </>
);

export default About;
