import Footer from 'components/Footer';
import { HeroType2 } from 'components/Hero';
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
        <br />
        <br />
        Codeation is an all-in-one platform for all your web development needs to your marketing needs. We are living in a world that does
        not work without a ‘smartphone in hand’. We assist our clients in leveraging technology to energize digital growth and harness a
        strong digital presence. Our team works together with you on every stage of the project, from comprehending your business
        objectives, and developing the ideal business development solution, to conversion rate optimization and testing it at every stage to
        ensure that you reach your business objectives through our services. We are a trusted agency, that hosts a plethora of services like
        Web design development, Software development, Mobile app development, Analytical dashboards, UI/UX, QA, AWS, GCP, Azure, Digital
        marketing solutions, ERP, CRM, Finance solutions, Business-to-Business applications, Business-to-Client applications, managed
        hosting and internet portal management. Satisfied clients around the globe bear testimony to the quality of our work and the
        inventive solutions we provide to them.
      </>
    ),
    img: '/images/our-story.svg',
    title: 'Our Story',
  },
  {
    content: (
      <>
        Our mission is derived from ‘Technological entrepreneurship’ also called ‘technopreneurship’ which involves tech-savvy, creative,
        innovative individuals who have a knack for taking calculated risks.
        <br />
        <br />
        Technopreneurship is an idea centered around creating a new product or coming up with a solution to some problem using highly
        innovative technology that facilitates prosperity in individuals, firms, regions, and nations by making their work technically
        sound, secure, and easy to do.
      </>
    ),
    img: '/images/our-mission.svg',
    reverse: true,
    title: 'Our Mission',
  },
];

const About = () => (
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
);

export default About;
