import { Window } from '../../../page-components/Window';
import icon1 from '../../../assets/icon/Services1.png';
import icon2 from '../../../assets/icon/Services2.png';
import icon3 from '../../../assets/icon/Services3.png';
import icon4 from '../../../assets/icon/Services4.png';
import icon5 from '../../../assets/icon/Services5.png';
import icon6 from '../../../assets/icon/Services6.png';
import square from '../../../assets/icon/sqaure.svg';

const servicesData = [
  {
    icon: icon1,
    title: 'Managed IT Services',
    description:
      'Equipment outages, data loss, or loss of connectivity can be devastating to businesses. Our managed IT services are designed to safeguard our clients from these risks.',
  },
  {
    icon: icon2,
    title: 'Network management',
    description:
      "Our network services connect your team to each other, the Internet, and essential tools. Top Notch's systems support your company’s future vision, creating a blueprint for success.",
  },
  {
    icon: icon3,
    title: 'Industry Specialties',
    description:
      "Whether you're a business, medical practice, or organization seeking tech insights, we can help. As a top managed IT provider, we offer expert IT support, managed services, remote access...",
  },
  {
    icon: icon4,
    title: 'Custom Computers',
    description:
      'We proudly offer a line of custom-built systems that excel in performance, reliability, upgradeability, and value. Each computer is designed and assembled to your specifications.',
  },
  {
    icon: icon5,
    title: 'Residential',
    description:
      'Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu nibh feugiat rhoncus. Et mauris tortor et tellus sed et pellentesque euismod.  et tellus sed et pellentesque euismod.',
  },
  {
    icon: icon6,
    title: 'Computer Repair',
    description:
      'Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu nibh feugiat rhoncus. Et mauris tortor et tellus sed et pellentesque euismod.  et tellus sed et pellentesque euismod.',
  },
];

export const ServicesGrid = () => {
  return (
    <Window className="relative mx-auto w-full max-w-7xl bg-[#4F78D6] p-6 sm:p-8 md:mb-28 md:p-12">
      <div className="mb-4 text-center">
        <h2 className="font-brand-title mb-6 text-3xl font-bold text-white sm:text-[80px]">
          Our Services
        </h2>
        <p className="font-brand font-brand-weight text-sm text-white sm:text-2xl">
          We have a high list of services for any of your problems
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`rounded-[20px] p-6 ${index === 2 ? 'bg-[#3559AD]' : 'bg-none'}`}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-[#4F78D6] max-sm:hidden">
              {typeof service.icon === 'string' ? (
                <img src={service.icon} />
              ) : (
                service.icon
              )}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
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
      <div className="absolute top-[5%] right-[20%]">
        <img src={square} alt="" className="h-auto w-[71px] text-black" />
      </div>
    </Window>
  );
};

export default ServicesGrid;
