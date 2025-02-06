import { Window } from '../../../page-components/Window';

const servicesData = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Managed IT Services',
    description:
      'Equipment outages, data loss, or loss of connectivity can be devasting to businesses. Our managed IT services are designed to safeguard our clients from these risks.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Network Management',
    description:
      "Our network services connect your team to each other, the internet, and essential tools. Top Notch's systems support your company's future vision, creating a blueprint for success.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Industry Specialties',
    description:
      "Whether you're a business, medical practice, or organization seeking tech insights, we can help. As a top managed IT provider, we offer expert IT support, managed services, remote access...",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Custom Computers',
    description:
      'We proudly offer a line of custom-built systems that excel in performance, reliability, upgradeability, and value. Each computer is designed and assembled to your specifications.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="currentColor" />
      </svg>
    ),
    title: 'Residential',
    description:
      'Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu nibh feugiat rhoncus. Et mauris tortor et tellus sed et pellentesque euismod, et tellus sed',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Computer Repair',
    description:
      'Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu nibh feugiat rhoncus. Et mauris tortor et tellus sed et pellentesque euismod, et tellus sed',
  },
];

export const ServicesGrid = () => {
  return (
    <Window className="w-[80%]">
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-4xl font-bold text-white">Our Services</h2>
        <p className="text-white/80">
          We have a high list of services for any of your problems
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`rounded-[20px] p-6 ${index === 2 ? 'bg-[#2B4FB0]' : ''}`}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#4F78D6]">
              {service.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-[#4F78D6] transition-colors hover:bg-blue-50">
          View All
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L12 4M12 4H5M12 4V11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Window>
  );
};

export default ServicesGrid;
