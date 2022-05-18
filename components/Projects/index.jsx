import Image from 'next/image';
import Button from '../Button';

const projects = [
  {
    id: 1,
    imageUrl: '/images/project1.svg',
    title: '#1 Next Js ',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing',
    btnName: 'Contact Us',
  },
  {
    id: 2,
    imageUrl: '/images/project2.svg',
    title: '#2 Tailwind CSS',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing',
    btnName: 'Contact Us',
  },
];

const index = () => {
  return (
    <div className="mb-40">
      <p className="text-big text-secondary mb-24 ml-32 ">RecentProjects</p>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex odd:flex-row odd:bg-slate-200 even:flex-row-reverse even:bg-slate-300/70"
          >
            <div className="w-1/2 ">
              <Image
                src={project.imageUrl}
                alt="/.../"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-around w-1/2">
              <p className=" text-big font-semibold text-primary ml-12">
                {project.title}
              </p>
              <p className="w-96 ml-12 text-textPrimary mb-40 text-xl">
                {project.description}
              </p>

              <Button
                type="button"
                className="border-2 ml-12 font-semibold p-2 w-36 rounded-lg border-primary text-primary"
              >
                {project.btnName}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
