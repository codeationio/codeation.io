import AboutHero from 'components/AboutHero';
import Footer from 'components/Footer';
import Mission from 'components/mission';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Story from 'components/story';
import Value from 'components/value';
import Wrapper from 'components/Wrapper';

import Image from 'next/image';

const valueItems = [
  {id: 1, icon: 'icon', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, tristique id lacinia vel. Enim ultrices elementum odio magnis risus nec. Nec bibendum imperdiet purus quis iaculis ipsum.'},
  {id: 2, icon: 'icon', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, tristique id lacinia vel. Enim ultrices elementum odio magnis risus nec. Nec bibendum imperdiet purus quis iaculis ipsum.'},
  {id: 3, icon: 'icon', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, tristique id lacinia vel. Enim ultrices elementum odio magnis risus nec. Nec bibendum imperdiet purus quis iaculis ipsum.'}
];
const content = valueItems.map((post) =>
  <div key={post.id}>
  <h3>{post.icon}</h3>
  <p className='w-2/4 text-card-description'>{post.content}</p>
  </div>
);

const About = () => (
  
  <Wrapper className="alternate">
    <Section head>
      <Navbar />
      <div className="relative mx-auto flex-col-reverse justify-end  lg:flex-row lg:justify-center">
            <div className='my-20 mx-16 flex flex-col space-y-20 '>
                <div className=' flex flex-col	 space-y-10'>
                    <h1 className='text-5xl font-bold text-white'>
                        About Us
                    </h1>
                    <p className='text-5.5 font-normal text-white  w-3/6'>
                        Hey, we are a productive team of developers came together to deliever the best services for your company
                    </p>
                </div>
                <div className='flex space-x-6'>
                    <div>
                        <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9381 4.85177H9.82807C8.83184 4.85177 8.08628 5.25932 8.08628 6.28951V8.08628H12.9381L12.5515 12.9381H8.08628V25.8761H3.23451V12.9381H0V8.08628H3.23451V4.9763C3.23451 1.70621 4.95527 0 8.83184 0H12.9381V4.85177Z" fill="white"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6442 12.9381C19.6442 9.2685 16.6685 6.29436 13.0006 6.29436C9.331 6.29436 6.35686 9.2685 6.35686 12.9381C6.35686 16.6076 9.33261 19.5817 13.0006 19.5817C16.6701 19.5817 19.6442 16.6076 19.6442 12.9381ZM13.0006 17.2513C15.3828 17.2513 17.3138 15.3203 17.3138 12.9381C17.3138 10.5558 15.3828 8.62483 13.0006 8.62483C10.6183 8.62483 8.68733 10.5558 8.68733 12.9381C8.68733 15.3219 10.6183 17.2513 13.0006 17.2513Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9386 12.9381C25.9386 9.42537 25.9241 8.98386 25.861 7.60434C25.6491 2.91106 23.0389 0.29434 18.3359 0.0792451C16.9547 0.0145548 16.5149 0 13.0006 0C9.48625 0 9.04798 0.0145551 7.66684 0.0776281C2.96709 0.292723 0.356841 2.89974 0.140128 7.60272C0.0770551 8.98386 0.0625 9.42537 0.0625 12.9381C0.0625 16.4524 0.0770551 16.8922 0.140128 18.2718C0.356841 22.9715 2.96386 25.5834 7.66684 25.7985C9.04798 25.8616 9.48625 25.8761 13.0006 25.8761C16.5149 25.8761 16.9547 25.8616 18.3359 25.7985C23.0292 25.5834 25.6491 22.9764 25.861 18.2718C25.9241 16.8922 25.9386 16.4524 25.9386 12.9381ZM23.6081 12.9381C23.6081 9.48359 23.5952 9.07443 23.5337 7.71108C23.372 4.23074 21.7354 2.56659 18.2291 2.40648C16.8658 2.34502 16.455 2.33208 13.0006 2.33208C9.54609 2.33208 9.13693 2.34502 7.77196 2.4081C4.26252 2.56659 2.62909 4.23074 2.46898 7.71108C2.40752 9.07443 2.39297 9.48359 2.39297 12.9381C2.39297 16.3925 2.40752 16.8017 2.4706 18.1683C2.62909 21.6405 4.25766 23.3111 7.77358 23.4712C9.13531 23.5327 9.54609 23.5456 13.0006 23.5456C16.4566 23.5456 16.8658 23.5311 18.2308 23.4696C21.7402 23.3111 23.372 21.6437 23.5337 18.1666C23.5952 16.8017 23.6081 16.3925 23.6081 12.9381Z" fill="white"/>
                            <path d="M21.4588 6.03237C21.4588 5.17522 20.7634 4.4798 19.9062 4.4798C19.0491 4.4798 18.3537 5.17522 18.3537 6.03237C18.3537 6.88951 19.0491 7.58493 19.9062 7.58493C20.765 7.58493 21.4588 6.88951 21.4588 6.03237Z" fill="white"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2915 5.65933C23.6279 13.1262 18.0597 21.4518 8.20249 21.4518C5.20409 21.4518 2.41433 20.5737 0.0644531 19.0664C2.88171 19.3979 5.69251 18.6168 7.92432 16.8685C5.60032 16.8249 3.64021 15.2901 2.96581 13.1812C3.7987 13.3397 4.61703 13.2928 5.36259 13.0906C2.80894 12.578 1.04775 10.2782 1.10435 7.81836C1.81918 8.21621 2.63913 8.45556 3.50759 8.48306C1.14478 6.903 0.475237 3.78169 1.86446 1.39462C4.4828 4.60649 8.39494 6.72025 12.8068 6.94181C12.0322 3.62158 14.5518 0.424267 17.9788 0.424267C19.5055 0.424267 20.885 1.06794 21.8538 2.10136C23.0635 1.86363 24.2004 1.42211 25.2257 0.814026C24.8295 2.05446 23.9869 3.09436 22.892 3.75096C23.9659 3.62158 24.9896 3.33695 25.9406 2.91484C25.229 3.97576 24.3282 4.91054 23.2915 5.65933Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 mr-16 translate-y-1/3'>
              <Image alt="Hero_Section" height={500} src="/images/hero_section.svg" width={500} />
            </div>
      </div>
        <div className="bg-white py-20 mx-auto flex flex-col-reverse justify-end  lg:flex-row lg:justify-center">
            <div className='mx-16 flex flex-col justify-items-center	'>
                <h4 className="relative text-center capitalize text-5xl mb-10 text-primary font-bold	before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">Our Story</h4>
                <div className='flex items-center'>
                    <div className='w-2/4 text-5.5 text-grey'>
                        <p>Our mission is always guided towards creating interactive and consumer-focused web and mobile experiences that help to enhance brand presence and make the journey of the user simple, fast, and more communicable.</p>
                        <p>We believe that digital transformation is less about technology and more about people and that’s why we house a huge team of experts who are proficient in their fortes and have razor-sharp insight that is result-driven and offers high returns on your marketing spend. So, no matter whatever business solutions we seek, we are here to provide you with the best solutions.</p>
                    </div>
                    <div><Image alt="Hero_Section" height={500} src="/images/hero_section.svg" width={500} /></div>
                </div>
                
            </div>
        </div>
        <div className="bg-light-grey py-20 mx-auto flex flex-col-reverse justify-end  lg:flex-row lg:justify-center">
            <div className='mx-16 flex flex-col justify-items-center	'>
                <h4 className="relative text-center capitalize text-5xl mb-10 text-primary font-bold	before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">Our mission</h4>
                <div className='flex flex-row-reverse items-center'>
                    <div className='w-2/4 text-5.5 text-grey'>
                        <p>Our mission is always guided towards creating interactive and consumer-focused web and mobile experiences that help to enhance brand presence and make the journey of the user simple, fast, and more communicable.</p>
                        <p>We believe that digital transformation is less about technology and more about people and that’s why we house a huge team of experts who are proficient in their fortes and have razor-sharp insight that is result-driven and offers high returns on your marketing spend. So, no matter whatever business solutions we seek, we are here to provide you with the best solutions.</p>
                    </div>
                    <div><Image alt="Hero_Section" height={500} src="/images/hero_section.svg" width={500} /></div>
                </div>
            </div>
        </div>
        <div className="bg-white py-20 mx-auto flex flex-col-reverse justify-end  lg:flex-row lg:justify-center">
            <div className='mx-16'>
                <h4 className="relative text-center capitalize text-5xl mb-10 text-primary font-bold	before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">Our Story</h4>
                <div className='flex justify-center text-grey'>
                    {content}
                </div>
            </div>
        </div>
    </Section>
    <Footer/>
  </Wrapper>
);

export default About;
