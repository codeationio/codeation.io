import { ServicesCard } from 'components/Card';
import Section from 'components/Section';

const cards = [
  {
    description:
      'We are here to turn your ideas into reality. Every business is unique and so are its requirements. To provide end customers with improved technologies, we examine your demands and develop an extensive, detailed software implementation and deployment plan. We offer full-stack custom development services for web, desktop, and mobile that help to enhance the scalability of the business.',
    image: '/images/software_development.svg',
    title: 'SOFTWARE DEVELOPMENT'
  },
  {
    description:
      'Your website is the best armor you can wear to have a solid and appealing digital presence. Being in the business for so many years, we realize that every customer interaction matters and living in an era where the first thing that customer sees is your brand authenticity and digital presence. ',
    image: '/images/web_development.svg',
    title: 'WEB APP DEVELOPMENT'
  },
  {
    description:
      "Around 80% of the users, today wield mobile for viewing your website, using your app, or simply scrolling through your business online. Having an app that's digitally appealing and has high responsiveness is prominent to every business that wants to thrive digitally. Your mobile app is a gateway to let your client experience a digital shop for your business.",
    image: '/images/app_development.svg',
    title: 'MOBILE APP DEVELOPMENT'
  },
  {
    description:
      "Imagine if you have a tool that provided a bird's eye perspective of all your KPIs and automatically analyzed their current performance, how much of the headache it will save for you. Data that is not put to any use is redundant, analysing your data helps you to progress your business in the right direction by effectively analyzing the numbers.",
    image: '/images/analytical_development.svg',
    title: 'DASHBOARDS'
  },
  {
    description:
      'We revolutionize the way the end user connects with your product. Product sales and user retention can both grow with gorgeous and clever UX. When a mobile or web UI is easy to understand, product adoption is much smoother for new users.',
    image: '/images/ui_ux_dev.svg',
    title: 'UI/UX'
  },
  {
    description:
      'Our QA services will assist you in establishing tangible control over the life cycle of your product, monitoring each stage of development, and providing you with precise product quality data. Our QA specialists have been using the most recent techniques and tools to guarantee effective project execution and high performance, assisting in the timely delivery of reliable software.',
    image: '/images/QA.svg',
    title: 'QA'
  },
  {
    description:
      'Creating a product is a lot easier today than marketing your product. Marketing requires consistent effort and time to deliver the message of your product to its right consumer. With the overflowing of products in the market, it has become imperative to direct your product into the right frame and target audience.',
    image: '/images/digital_marketing.svg',
    title: 'DIGITAL MARKETING'
  },
  {
    description:
      'Today’s financial services industry is dynamic and competitive, your supporting software must be able to keep up with quick change. You required solutions that are quick and simple to access the data required throughout your business and departments.',
    image: '/images/finance.svg',
    title: 'ERP AND FINANCE'
  },
  {
    description:
      "We are an end-to-end platform that's can help you with all your cloud computing services. A consistent infrastructure from the data center to the cloud is necessary for business transformation. While an on-premises solution helps you satisfy particular workload requirements and keep control over your infrastructure, a hybrid cloud infrastructure lets you strategically decide where to operate your workloads.",
    image: '/images/devops.svg',
    title: 'AWS, GCP, AZURE'
  }
];

const Services = () => (
  <Section
    className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:gap-16"
    id="services"
    title="Our Services">
    {cards.map((card, index) => (
      <ServicesCard
        key={index}
        description={card.description}
        image={card.image}
        title={card.title}
      />
    ))}
  </Section>
);

export default Services;
