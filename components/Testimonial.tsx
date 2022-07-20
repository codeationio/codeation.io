import Image from 'next/image';
import Link from 'next/link';

import { TestimonialCard } from './Card';
import { TestimonialProps } from './Types/Testimonials';

const data: TestimonialProps[] = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse.',
    id: 'test-1',
    name: 'Person',
    post: 'CEO , Random Company',
    rating: 4,
    url: '/images/testimonial_avtar.svg'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse.',
    id: 'test-2',
    name: 'Person',
    post: 'CEO , Random Company',
    rating: 4,
    url: '/images/testimonial_avtar.svg'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse.',
    id: 'test-3',
    name: 'Person',
    post: 'CEO , Random Company',
    rating: 4,
    url: '/images/testimonial_avtar.svg'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse.',
    id: 'test-4',
    name: 'Person',
    post: 'CEO , Random Company',
    rating: 4,
    url: '/images/testimonial_avtar.svg'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse.',
    id: 'test-5',
    name: 'Person',
    post: 'CEO , Random Company',
    rating: 4,
    url: '/images/testimonial_avtar.svg'
  }
];

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col justify-center gap-y-7 lg:min-w-fit ">
        <h1 className="text-2xl font-semibold text-secondary lg:text-4xl	">
          DON’T JUST TAKE <br /> OUR WORD FOR US,
          <br /> LET OUR CLIENTS <br />
          TELL OUR STORY
        </h1>
        <div className="!space-x-2">
          <Link href="#test-1">
            <a>
              <Image alt="left_arrow" height={52} src="/images/left_arrow.svg" width={52} />
            </a>
          </Link>
          <Link href="#test-4">
            <a>
              <Image alt="right_arrow" height={52} src="/images/right_arrow.svg" width={52} />
            </a>
          </Link>
        </div>
      </div>
      <div className="carousel justify-start gap-x-4 py-20 lg:ml-20">
        {data.map((item, index) => (
          <TestimonialCard
            key={index}
            description={item.description}
            id={item.id}
            name={item.name}
            post={item.post}
            rating={item.rating}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
