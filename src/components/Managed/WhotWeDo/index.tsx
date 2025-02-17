import { ButtonVariants } from '../../../@types/button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import Checkmark from '../../../assets/icon/checkmark-square-02.svg';
import { Button } from '../../../page-components/Button';
import { VideoPlayer } from '../../../page-components/VideoPlayer';
import square from '../../../assets/icon/sqaure.svg';

export const WhotWeDo = () => {
  return (
    <div className="relative mt-[70px] flex flex-col items-start justify-between gap-8 px-4 pb-[40px] md:flex-row md:px-20 md:pb-[80px]">
      <div className="w-full md:w-1/2">
        <VideoPlayer />
      </div>

      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex flex-col gap-4 text-white">
          <h2 className="font-brand-title text-[36px] font-[700] md:text-[48px]">
            Advantages of comprehensive managed IT plans
          </h2>
          <p className="font-brand text-[16px] font-[400] md:text-[24px]">
            Our routine managed customers, or “maintenance clients,” enjoy the
            premium, comprehensive IT experience with the following benefits:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 text-white md:grid-cols-2">
          <ul className="font-brand space-y-3 text-[14px] font-[400] md:text-[16px]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={20} height={20} />
              No extra charge for 24/7 emergency support in most cases
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={20} height={20} />
              Daily uptime, security, and backup checks on your physical site or
              cloud environment—performed by a real person in addition to
              monitoring software
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={20} height={20} />
              Pre-bundled, discounted base billing rate
            </li>
          </ul>

          <ul className="font-brand space-y-3 text-[14px] font-[400] md:text-[16px]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={20} height={20} />
              Guaranteed same-day service, even if no appointments are available
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={20} height={20} />
              Our proven stack of cybersecurity tools and compliance strategies
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={20} height={20} />
              Much, much more!
            </li>
          </ul>
        </div>

        <Button
          className="mt-8 self-start rounded-full"
          variant={ButtonVariants.PRIMARY}
        >
          Contact Us
          <img
            src={ArrowUp}
            className="ml-2 h-4 w-4"
            alt=""
            aria-hidden="true"
          />
        </Button>
      </div>

      {/* Adjusted absolute positioning for mobile */}
      <div className="absolute bottom-0 left-[21%] hidden h-28 md:block">
        <img src={square} alt="" />
      </div>
    </div>
  );
};
