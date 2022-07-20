import RecentWork, { RecentWorkProps } from 'components/RecentWork';
import Section from 'components/Section';

const workArr: RecentWorkProps[] = [
  {
    description:
      'Codeation has successfully built an education based app "OpenBook". It is a complete education management tool that encompasses the complete regulation and maintenance of  school administration and child learning. Carefully crafted with visually appealing designs, highly responsive technology and easy to move options for children, parents and teachers. While it includes educative and fun learning sessions for the children, the analytics and notifications also inform  the parents about the performance of students in various projects assigned to them and their overall progress in curricular and co-curricular activities. The app is an all-in-one platform with thoughtfully created features for school managements to facilitate attendance management, compensation calculation, leaves management, salary and provide kids with innovative learning solutions..',
    imageUrl:
      'https://images.unsplash.com/photo-1630011041146-04d179c6e215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    platforms: ['web', 'ios', 'android'],
    title: 'OpenBook - Education Management App'
  },
  {
    description:
      "Created the web app design for this AI based technology company that provides highly technical and data science  based services to fortune 500 companies. The web app design is user centric, minimalist, and free of clutter. We Have built a fully functional, responsive and sophisticated web app that would help build the company's showcase their brand identity. Every page is user engaging and covers the whole aspect of the business.",
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    platforms: ['web', 'ios', 'android'],
    title: 'AI - Dashboard'
  }
];

const RecentWorkSection = () => (
  <Section
    className="[&>*]:flex-col lg:[&>*:nth-child(odd)]:flex-row xl:[&>*:nth-child(odd)]:flex-row lg:[&>*:nth-child(even)]:flex-row-reverse xl:[&>*:nth-child(even)]:flex-row-reverse"
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
    <p className="mt-10 text-xs text-secondary">
      {/* Add Star before please */}
      &#9733; Please note that the images shown above are not to be taken as product images. These
      images are used purely for illustration purposes.
    </p>
  </Section>
);

export default RecentWorkSection;
