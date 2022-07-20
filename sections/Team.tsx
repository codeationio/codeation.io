import { TeamCard, TeamCardProps } from 'components/Card';
import Section from 'components/Section';
const teamArr: TeamCardProps[] = [
  {
    description: 'Former CEO & Founder @ Jnex Soft Solutions',
    name: 'Rishabh Jain',
    post: 'Founder',
    url: '/images/team_avatar.svg'
  },
  {
    description: 'Gamer, Developer, and Designer',
    name: 'Anoop Poonia',
    post: 'Frontend Engineer',
    url: '/images/team_avatar_copy.svg'
  },
  {
    description: 'Research Paper Writer, lover of technology',
    name: 'Ritika Bhardwaj',
    post: 'Lead Data scientist',
    url: '/images/female_avatar.svg'
  }
];

const Team = () => {
  return (
    <Section className="grid grid-cols-2 gap-5 xl:grid-cols-3 xl:gap-20" title="Our Team">
      {teamArr.map((item, index) => (
        <TeamCard
          key={index}
          description={item.description}
          name={item.name}
          post={item.post}
          url={item.url}
        />
      ))}
    </Section>
  );
};
export default Team;
