import Footer from 'components/Footer';
import { HeroType2 } from 'components/Hero';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import Head from 'next/head';

const questions = Array.from({ length: 5 }).map((_, index) => ({
  answer:
    'this is the answer. some more stuff for flexibility. this is the answer. some more stuff for flexibility.',
  id: index,
  question: 'What is the purpose of this website?'
}));

const ContactUs = () => (
  <>
    <Head>
      <title>Contact | Codeation.io</title>
    </Head>
    <Wrapper className="alternate [&>div:first-child]:bg-cover [&>div:first-child]:bg-no-repeat [&>*:first-child]:bg-[url('/images/contact-us.png')]">
      <HeroType2
        description="Hey, we are a productive team of developers came together to deliver the best
        services for your company"
        img="/images/contact-hero.svg"
        title="Contact Us"
      />
      <Section className="grid grid-cols-2 gap-y-10">
        <header className="col-span-2">
          <h2 className="w-1/4 text-4xl capitalize">Frequently asked questions</h2>
        </header>
        <main>
          <ol className="relative border-l-2 border-dashed border-primary p-0 dark:border-primary">
            {questions.map(({ answer, id, question }) => (
              <li key={id} className="mb-10 ml-6 -translate-y-5 space-y-2 font-khula last:mb-0">
                <span className="absolute -left-[1.8rem] flex h-2 w-2 translate-y-2 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:bg-primary dark:ring-primary" />
                <h3 className="text-5.5 text-secondary">{question}</h3>
                <p className="text-lg capitalize text-description">{answer}</p>
              </li>
            ))}
          </ol>
        </main>
      </Section>
      <Footer />
    </Wrapper>
  </>
);

export default ContactUs;
