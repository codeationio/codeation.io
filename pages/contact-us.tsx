import Footer from 'components/Footer';
import { HeroType2 } from 'components/Hero';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import Head from 'next/head';
import Script from 'next/script';
import Contact from 'sections/contact';

const questions = [
  {
    answer:
      'We combine the power of design and cutting-edge technology to deliver a solution that not only fulfills your needs but contributes to brand value.',
    id: 1,
    question: 'Why choose us?',
  },
  {
    answer: 'We have been trusted by our customers for our knack for designing and providing customer-centric solutions.',
    id: 2,
    question: 'Why are customers love us?',
  },
  {
    answer:
      'We at Codeation make the tech work for you and your business. The digital revolution has forced every organization to reinvent and rethink how it goes about doing business. IT services are inevitably expanding in the age of connectivity. Businesses of all sizes are working hard to improve the quality of their online presence, frequently by outsourcing IT services from agencies that are top-notch in managing business technology needs.  ',
    id: 3,
    question: 'What do we do?',
  },
  {
    answer: (
      <ol className="ml-5 list-decimal">
        <li>Rigorous quality Testing</li>
        <li>Shorter development times translate to lower costs</li>
        <li>Work in a warm, professional, approachable, and collaborative manner Visually</li>
        <li>appealing and interactive web experiences</li>
      </ol>
    ),
    id: 4,
    question: 'How do we guarantee product quality?',
  },
];

const ContactUs = () => (
  <>
    <Head>
      <title>Contact us | Codeation.io</title>
    </Head>
    <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}`} />
    <Wrapper className="alternate [&>div:first-child]:bg-cover [&>div:first-child]:bg-no-repeat [&>*:first-child]:bg-[url('/images/contact-us.png')]">
      <HeroType2
        description="Hey, we are a productive team of developers came together to deliver the best
        services for your company"
        img="/images/contact-hero.svg"
        title="Contact Us"
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Section className="order-2 grid gap-y-10 md:order-1">
          <header>
            <h2 className="w-full text-lg font-semibold capitalize text-secondary md:w-3/4 lg:text-4xl xl:text-4xl ">
              Frequently asked questions
            </h2>
          </header>
          <main className="flex">
            <ol className="relative border-l-2 border-dashed border-primary p-0 dark:border-primary">
              {questions.map(({ answer, id, question }) => (
                <li key={id} className="mb-10 ml-6 -translate-y-5 space-y-2 font-khula last:mb-0">
                  <span className="absolute -left-[1.8rem] flex h-2 w-2 translate-y-2 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:bg-primary dark:ring-primary" />
                  <h3 className="text-5.5 capitalize text-secondary">{question}</h3>
                  <summary className="text-lg capitalize text-description">{answer}</summary>
                </li>
              ))}
            </ol>
          </main>
        </Section>
        <Section className="order-1 mt-20 md:order-2">
          <Contact />
        </Section>
      </div>
      <Footer />
    </Wrapper>
  </>
);

export default ContactUs;
