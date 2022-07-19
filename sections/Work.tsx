import RecentWork from 'components/RecentWork';
import Section from 'components/Section';

type Props = {
  description: string;
  imageUrl: string;
  platforms: string;
  title: string;
};

const workArr: Props[] = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    imageUrl: '/images/g2_web.svg',
    platforms: 'Web  ios  Android',
    title: 'A Simple Marketing Site'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    imageUrl: '/images/g2_mobile.svg',
    platforms: 'Web  ios  Android',
    title: 'A Simple Marketing Site'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    imageUrl: '/images/dashboard_software.svg',
    platforms: 'Web  ios  Android',
    title: 'A Simple Marketing Site'
  }
];

const Work = () => (
  <Section
    className="lg:[&>*:nth-child(odd)]:flex-row lg:[&>*:nth-child(even)]:flex-row-reverse [&>*]:flex-col"
    title="Recent Work">
    {workArr?.map((item, index) => (
      <RecentWork
        key={index}
        description={item.description}
        imageUrl={item.imageUrl}
        platforms={item.platforms}
        title={item.title}
      />
    ))}
  </Section>
);

export default Work;
