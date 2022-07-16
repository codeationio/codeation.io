import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import Head from 'next/head';
import Image from 'next/image';

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
      <Section head>
        <Navbar />
        <Section className="relative mx-auto flex h-[40vh] lg:flex-row">
          <div className="break-word flex flex-col justify-center gap-y-5 lg:w-1/2 lg:-translate-y-[10%]">
            <h1 className="text-5xl font-bold text-black alternate:text-white">Contact Us</h1>
            <p className="w-8/12 text-5.5 font-thin text-white">
              Hey, we are a productive team of developers came together to deliever the best
              services for your company
            </p>
          </div>
          <div className="items absolute right-0 flex flex-col justify-center lg:w-1/2 lg:translate-y-[6%]">
            <Image
              alt="Contact hero section"
              className="absolute"
              height={534}
              src="/images/contact-hero.svg"
              width={649}
            />
          </div>
        </Section>
      </Section>
      <Section className="grid grid-cols-2 gap-y-10">
        <header className="col-span-2">
          <h2 className="w-1/4 text-4xl capitalize">Frequently asked questions</h2>
        </header>
        {/* <main className="grid gap-y-6">
          {questions.map(({ answer, id, question }) => (
            <article
              key={id}
              className="space-y-2 font-khula before:absolute before:left-0 before:h-10 before:w-4 before:bg-primary before:content-[_]">
              <h3 className="text-5.5 text-secondary">{question}</h3>
              <p className="text-lg capitalize text-description">{answer}</p>
            </article>
          ))}
        </main> */}
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
