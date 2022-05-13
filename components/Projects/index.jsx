import Image from 'next/image';
import Button from '../Button';

const projects = [
  {
    id: 1,
    imageUrl: '/images/React-Projects.png',
    title: '#1 Web WebDesign',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing',
    btnName: 'Contact Us',
  },
  {
    id: 2,
    imageUrl: '/images/React-Projects1.jpg',
    title: '#2 Web WebDesign',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.nothing',
    btnName: 'Contact Us',
  },
];

const index = () => {
  return (
    <div className="mb-40">
      <p className="text-header text-gray-600/50 mb-24 ml-32 ">RecentProjects</p>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex odd:flex-row even:flex-row-reverse "
          >
            <div className="w-1/2">
              <Image
                src={project.imageUrl}
                alt="/.../"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-around w-1/2">
              <p className=" text-header font-semibold text-blue-700 ml-12">
                {project.title}
              </p>
              <p className="w-96 ml-12 text-[#636363] mb-40 text-xl">
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
