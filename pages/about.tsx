import Footer from 'components/Footer';
import { HeroType2 } from 'components/Hero';
import { TwoColSection } from 'components/Section';
import Wrapper from 'components/Wrapper';
import OurValues from 'sections/OurValues';

const valueItems = [
  {
    content:
      'We take an inquisitive, methodical approach to every project to ensure we find the best solution possible. Keeping our clients best interests at heart is a way of work for us. We strive to provide exceptional customer service through flexible scheduling, quality products, efficient services, and innovative solutions resulting in value to the customer and company.',
    icon: '/images/value1.svg',
    id: 1
  },
  {
    content:
      'Quality is a prerequisite to our development process. We are passionate about the minor details of the business. From concept to launch, our website and marketing projects are thoroughly tested and built to last. We ensure that every element and every increment of the solution reflects quality standards throughout the development lifecycle.',
    icon: '/images/value2.svg',
    id: 2
  },
  {
    content: `Greek philosopher Heraclitus once said that “the only constant in life is change.”We strive to change with the latest technology and advancements. We value inspiring, original, and intelligent ideas. Our team works hard to redefine the standard of excellence to stay relevant and efficient with changing needs of tech. We try new things, iterate them, adapt them and come up with new solutions.`,
    icon: '/images/value3.svg',
    id: 3
  }
];

const sections = [
  {
    content: (
      <>
        Rishabh comes from a generation when technology was far forlorn and the internet was seeping
        its primary roots in India. As someone who did not fit into that set of shared expectations
        of society, he wanted to do something innovative and solve the problems of people with his
        analytical mindset.
        <br />
        While everyone was scrubbing their hands into this digital enigma, he was excited to play
        with it and devise technologies that would help to ease the business flex. His grit,
        passion, and dedication to solving business problems through technology led to the
        foundation of &ldquo;CODEATION&rdquo;.
      </>
    ),
    img: '/images/our-story.svg',
    title: 'Our Story'
  },
  {
    content: (
      <>
        Our mission is always guided towards creating interactive and consumer-focused web and
        mobile experiences that help to enhance brand presence and make the journey of the user
        simple, fast, and more communicable.
        <br />
        <br />
        We believe that digital transformation is less about technology and more about people and
        that’s why we house a huge team of experts who are proficient in their fortes and have
        razor-sharp insight that is result-driven and offers high returns on your marketing spend.
        So, no matter whatever business solutions we seek, we are here to provide you with the best
        solutions.
      </>
    ),
    img: '/images/our-mission.svg',
    reverse: true,
    title: 'Our Mission'
  }
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
