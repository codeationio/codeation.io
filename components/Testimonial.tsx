import Image from 'next/image';

import { TestimonialCard } from './Card';

const Testimonial = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center gap-y-7">
        <h1 className="text-2xl lg:text-5xl text-secondary">
          What the People <br /> Think About Us
        </h1>
        <div>
          <Image alt="left_arrow" height={52} src="/images/left_arrow.svg" width={52} />
          <Image alt="right_arrow" height={52} src="/images/right_arrow.svg" width={52} />
        </div>
      </div>
      {/* //TODO: fix the testimonials cards */}
      {/*//! remember to bring them back later */}
      {/* <div className="flex gap-x-4">
        <TestimonialCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse."
          name="Person"
          post="CEO , Random Company"
          rating={4}
          url="/images/testimonial_avtar.svg"
        />
        <TestimonialCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, velit eros, mauris quis suspendisse."
          name="Person"
          post="CEO , Random Company"
          rating={4}
          url="/images/testimonial_avtar.svg"
        />
      </div> */}
    </div>
  );
};
export default Testimonial;
