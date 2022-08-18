import TeamCard, { TeamCardProps } from 'components/Card/TeamCard';
import Section from 'components/Section';
const teamArr: TeamCardProps[] = [
  {
    description: 'Former CEO & Founder @ Jnex Soft Solutions',
    name: 'Rishabh Jain',
    post: 'Founder, CEO',
    url: '/images/team_avatar.svg',
  },
  {
    description: 'Gamer, Developer, and Designer',
    name: 'Anoop Poonia',
    post: 'Frontend Engineer',
    url: '/images/team_avatar_copy.svg',
  },
  {
    description: 'Research Paper Writer, lover of technology',
    name: 'Ritika Bhardwaj',
    post: 'Lead Data Scientist',
    url: '/images/female_avatar.svg',
  },
];

const Team = () => {
  return (
    <Section className="grid grid-cols-2 gap-5 lg:grid-cols-2 xl:gap-0" title="Our core team">
      {teamArr.map((item, index) => (
        <TeamCard key={index} description={item.description} name={item.name} post={item.post} url={item.url} />
      ))}
    </Section>
  );
};
export default Team;
