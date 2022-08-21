import Image from 'next/future/image';
import Link from 'next/link';

import TestimonialCard, { TestimonialProps } from './Card/TestimonialCard';

const data: TestimonialProps[] = [
  {
    company: 'Deuglo',
    description: `We connected with Codeation after a long time of searching for a company's can help us with a customized dashboard solution. We are an education company and wanted a customized dashboard solution to set up the complete process and make the in-house communication and operational work easy. They work very professionally and within deadlines`,
    designation: 'CEO',
    id: 'test-1',
    name: 'Sujit thakur',
    rating: 5,
    url: '/images/male_icon.png',
  },
  {
    description: `We decided to work with Codeation after having a detailed brainstorming session with the Codeation team. They were very detailed and provided us with various insightful feedback for our project and we are more than happy to choose them. Their hands-on work experience and ability to tailor our dashboard according to our specific needs have been exemplary. We highly recommend them for website solutions.`,
    id: 'test-2',
    name: 'Meng',
    rating: 5,
    url: '/images/male_icon.png',
  },
  {
    company: 'Adi Shree Udyog',
    description: `Codeation has been spectacular in every way possible. We hired this agency for multiple projects and they have been able to justify themselves at every point. There were no delays in communication and they had these complete processes for every project that made it very easy to coordinate.`,
    designation: 'Co-Founder',
    id: 'test-3',
    name: 'Uday Jain ',
    rating: 5,
    url: '/images/male_icon.png',
  },
  {
    description: `The web team's efforts to use AWS to design our app and launch it has been amazing. They were able to understand what we needed and wanted to communicate as a brand. The passion and dedication they work with are truly appreciable.`,
    id: 'test-4',
    name: 'Sneha',
    rating: 5,
    url: '/images/female_icon.png',
  },
  {
    company: 'VK Soft Solutions',
    description: `I got a reference for Rishabh from one of my clients. He is a super amazing guy and knows what he is working at. We had various meetings and detailed calls on the app that I wanted them to make. The complete team is very apt in their work. The feedback was always taken on board and implemented without any hesitation.`,
    designation: 'CEO & Founder',
    id: 'test-5',
    name: 'Varun Kumar',
    rating: 5,
    url: '/images/vkSoft.png',
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row xl:flex-row">
      <div className="flex flex-col justify-center gap-y-7 lg:min-w-fit xl:min-w-fit ">
        <h1 className="max-w-sm text-base font-semibold text-secondary lg:text-4xl xl:text-4xl">
          DON’T JUST TAKE OUR WORD FOR US, LET OUR CLIENTS TELL OUR STORY
        </h1>
        <div className="flex items-center !space-x-2">
          <Link href="#test-1">
            <a>
              <Image alt="left_arrow" height={52} src="/images/left_arrow.svg" width={52} />
            </a>
          </Link>
          <Link href="#test-5">
            <a>
              <Image alt="right_arrow" height={52} src="/images/right_arrow.svg" width={52} />
            </a>
          </Link>
          <p className="mb-2 text-xs text-description">There are many more</p>
        </div>
      </div>
      <div className="carousel justify-start gap-x-4 py-20 lg:ml-20">
        {data.map((item, index) => (
          <TestimonialCard
            key={index}
            company={item.company}
            description={item.description}
            designation={item.designation}
            id={item.id}
            name={item.name}
            rating={item.rating}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
