import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';

import Image from 'next/image';

const valueItems = [
    {id: 1, icon: '/images/value1.svg', content: 'We take an inquisitive, methodical approach to every project to ensure we find the best solution possible. Keeping our clients’ best interests at heart is a way of work for us. We strive to provide exceptional customer service through flexible scheduling, quality products, efficient services, and innovative solutions resulting in value to the customer and company.'},
    {id: 2, icon: '/images/value2.svg', content: 'Quality is a prerequisite to our development process. We are passionate about the minor details of the business. From concept to launch, our website and marketing projects are thoroughly tested and built to last. We ensure that every element and every increment of the solution reflects quality standards throughout the development lifecycle.'},
    {id: 3, icon: '/images/value3.svg', content: 'We rely on the latest technology for our work. We host a team that is fountains of new ideas, fueling better products, services, and processes. The company embraces laughter, humor, and having fun while working toward a common goal. It pools a diverse set of perspectives and experiences by assembling cross-functional teams to collaborate on a project.'}
];
const content = valueItems.map((post) =>
    <div key={post.id} className="flex flex-col items-center">
        <span className='mb-10	'>
            <Image alt="values" height={20} src={`${post.icon}`} width={35} />
        </span>
        <p className='w-2/4 text-card-description'>{post.content}</p>
    </div>
);

const About = () => (
    <div className='bg-alternate'>
        <Section head>
            <Navbar />
            <div className=" relative mx-auto flex-col-reverse justify-end  lg:flex-row lg:justify-center">
                <div className='my-20 mx-16 flex flex-col space-y-20 text-white'>
                    <div className=' flex flex-col	 space-y-10'>
                        <h1 className='text-5xl font-bold '>
                            About Us
                        </h1>
                        <p className='text-5.5 font-normal w-3/6'>
                            Hey, we are a productive team of <br></br> developers came together to deliever the <br /> best services for your company
                        </p>
                    </div>
                    <div className='flex space-x-6'>
                        <div className='grayscale-0	'>
                            <Image alt="twitter" height={20} src="/images/twitter.svg" width={35} />
                            <Image alt="linkedin" height={20} src="/images/linkedin.svg" width={35} />
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 right-0 mr-16 translate-y-1/3'>
                    <Image alt="Hero_Section" height={450} src="/images/about_hero.svg" width={450} />
                </div>
            </div>
            <div className="bg-white py-20 mx-auto flex flex-col-reverse justify-end  lg:flex-row lg:justify-center">
                <div className='mx-16 flex flex-col justify-items-center	'>
                    <h4 className="relative text-center capitalize text-5xl mb-20 text-primary font-bold	before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">Our Story</h4>
                    <div className='flex items-center justify-between'>
                        <div className='w-2/4 text-5.5 text-grey'>
                            <p>Rishabh came from a generation when technology was far forlorn and the internet was seeping its primary roots in India. As someone who did not fit into that set of shared expectations of society, he wanted to do something innovative and solve the problems of people with his analytical mindset.</p><br />
                            <p>While everyone was scrubbing their hands into this digital enigma, he was excited to play with it and devise technologies that would help to ease the business flex. His grit, passion, and dedication to solving business problems through technology led to the foundation of ‘CODEATION’.</p>
                        </div>
                        <div><Image alt="Hero_Section" height={500} src="/images/story.svg" width={500} /></div>
                    </div>
                </div>
            </div>
            <div className="bg-light-grey py-20 mx-auto flex flex-col-reverse justify-end  lg:flex-row lg:justify-center">
                <div className='mx-16 flex flex-col justify-items-center	'>
                    <h4 className="relative text-center capitalize text-5xl mb-20 text-primary font-bold	before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">Our mission</h4>
                    <div className='flex flex-row-reverse items-center justify-between'>
                        <div className='w-2/4 text-5.5 text-grey'>
                            <p>Our mission is derived from ‘Technological entrepreneurship’ that facilitates prosperity in individuals, firms, regions, and nations by making their work technically sound, secure, and easy to do.</p><br></br>
                            <p>For the past 5 years, we have been providing top-notch business solutions to our customers that have helped us to be ‘partners of trust and choice ‘for them. Our highly technical team of designers, strategists, and developers works with you to optimize the best business model for you. 
                                We believe that digital transformation is less about technology and more about people. We are geared to use the insights brought by technology to envision new business models, and markets and transform them into efficient ways of attracting, engaging, and delivering value to customers. We house a huge team of experts who are proficient in their forties and have razor-sharp insight that is result-driven and offers high returns on your marketing spend. So, no matter whatever business solutions we seek, we are here to provide you with the best solutions.</p>
                        </div>
                        <div><Image alt="Hero_Section" height={500} src="/images/missio.svg" width={500} /></div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-20 mx-auto flex flex-col-reverse justify-end  lg:flex-row lg:justify-center">
                <div className='mx-16'>
                    <h4 className="relative text-center capitalize text-5xl mb-20 text-primary font-bold	before:absolute before:-bottom-4 before:left-1/2 before:w-40 before:-translate-x-1/2 before:border-b-2 before:content-['_']">Our Story</h4>
                    <div className='flex justify-center text-grey'>
                        {content}
                    </div>
                </div>
            </div>
        </Section>
        <Footer/>
    </div>
);

export default About;
