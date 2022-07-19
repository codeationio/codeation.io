import Image from 'next/image';

import { TestimonialCard } from './Card';

const Testimonial = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center gap-y-7 lg:min-w-fit">
        <h1 className="text-2xl text-secondary lg:text-5xl">
          What the People <br /> Think About Us
        </h1>
        <div className="!space-x-2">
          <a href="#test-1">
            <Image alt="left_arrow" height={52} src="/images/left_arrow.svg" width={52} />
          </a>
          <a href="#test-4">
            <Image alt="right_arrow" height={52} src="/images/right_arrow.svg" width={52} />
          </a>
        </div>
      </div>
      <div className="carousel flex justify-start space-x-4 py-20 lg:ml-20">
        <TestimonialCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse."
          id="test-1"
          name="Person"
          post="CEO , Random Company"
          rating={4}
          url="/images/testimonial_avtar.svg"
        />
        <TestimonialCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse."
          id="test-2"
          name="Person"
          post="CEO , Random Company"
          rating={4}
          url="/images/testimonial_avtar.svg"
        />
        <TestimonialCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse."
          id="test-3"
          name="Person"
          post="CEO , Random Company"
          rating={4}
          url="/images/testimonial_avtar.svg"
        />
        <TestimonialCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse."
          id="test-4"
          name="Person"
          post="CEO , Random Company"
          rating={4}
          url="/images/testimonial_avtar.svg"
        />
      </div>
    </div>
  );
};
export default Testimonial;
