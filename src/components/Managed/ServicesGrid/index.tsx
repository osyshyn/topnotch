import { Window } from '../../../page-components/Window';
import '../../../pages/Home/ServicesGrid/slider.css';
import square from '../../../assets/icon/sqaure.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  servicesData,
  settings,
} from '../../../pages/Home/ServicesGrid/constants';

export const ServicesGrid = () => {
  return (
    <Window className="relative mx-5 mb-10 max-w-7xl bg-[#4F78D6] !p-5 md:mx-10 md:mb-28 md:!p-10 xl:mx-auto xl:!p-20">
      <div className="mb-4 text-center">
        <h2 className="font-brand-title mb-6 text-3xl font-bold text-white sm:text-[80px]">
          Our Services
        </h2>
        <p className="font-brand text-[16px] text-white sm:text-2xl">
          We have a high list of services for any of your problems
        </p>
      </div>

      <div className="mt-8 hidden grid-cols-1 gap-6 sm:grid-cols-2 md:grid lg:grid-cols-3">
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

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="flex w-full">
              <div className="flex min-h-[321px] flex-col items-center justify-center rounded-[20px] bg-[#3559AD] p-5 sm:min-h-[500px] sm:justify-around">
                <div className="mb-4 flex items-center justify-center rounded-lg text-[#4F78D6]">
                  <img
                    className="h-12 w-12 sm:h-16 sm:w-16"
                    src={service.icon}
                    alt={service.title}
                  />
                </div>
                <h3 className="mb-2 text-center text-lg font-semibold text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-center text-[16px] leading-relaxed text-white/80 sm:text-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-10 text-center">
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
      <div className="absolute top-[5%] right-[20%] hidden xl:block">
        <img src={square} alt="Square" className="h-auto w-[71px] text-black" />
      </div>
    </Window>
  );
};

export default ServicesGrid;
