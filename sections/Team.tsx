import { TeamCard } from 'components/Card';
import Section from 'components/Section';
const teamArr: any[] = [
  {
    avatar: '/images/team_avatar.svg',
    description: 'Former Co-Founder & CEO @ Allscreen (acquired)',
    name: 'Jason Malik',
    post: 'Co-Founder'
  },
  {
    avatar: '/images/team_avatar.svg',
    description: 'Former Co-Founder & CEO @ Allscreen (acquired)',
    name: 'Jason Malik',
    post: 'Co-Founder'
  },
  {
    avatar: '/images/team_avatar.svg',
    description: 'Former Co-Founder & CEO @ Allscreen (acquired)',
    name: 'Jason Malik',
    post: 'Co-Founder'
  },
  {
    avatar: '/images/team_avatar.svg',
    description: 'Former Co-Founder & CEO @ Allscreen (acquired)',
    name: 'Jason Malik',
    post: 'Co-Founder'
  },
  {
    avatar: '/images/team_avatar.svg',
    description: 'Former Co-Founder & CEO @ Allscreen (acquired)',
    name: 'Jason Malik',
    post: 'Co-Founder'
  },
  {
    avatar: '/images/team_avatar.svg',
    description: 'Former Co-Founder & CEO @ Allscreen (acquired)',
    name: 'Jason Malik',
    post: 'Co-Founder'
  }
];

const Team = () => {
  return (
    <Section className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-20" title="Our Team">
      {teamArr.map((item, index) => (
        <TeamCard
          key={index}
          description={item.description}
          name={item.name}
          post={item.post}
          url={item.avatar}
        />
      ))}
    </Section>
  );
};
export default Team;
