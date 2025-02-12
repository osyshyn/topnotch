import { ButtonVariants } from '../../../@types/button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import Checkmark from '../../../assets/icon/checkmark-square-02.svg';
import { Button } from '../../../page-components/Button';
import { VideoPlayer } from '../../../page-components/VideoPlayer';

export const WhotWeDo = () => {
  return (
    <div className="mt-[70px] flex items-center justify-between gap-20 pb-[80px]">
      {/* <!-- Video --> */}
      <div>
        <VideoPlayer  />
      </div>

      {/* <!-- Text --> */}
      <div>
        <div className="flex flex-col gap-4 text-white">
          <h2 className="font-brand-title text-[48px] font-[700]">
            Advantages of comprehensive managed IT plans
          </h2>
          <p className="font-brand text-[18px] font-[400]">
            Our routine managed customers, or “maintenance clients,” enjoy the
            premium, comprehensive IT experience with the following benefits:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 text-white">
          <ul className="font-brand space-y-4 text-[16px] font-[400]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              No extra charge for 24/7 emergency support in most cases
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Daily uptime, security, and backup checks on your physical site or
              cloud environment—performed by a real person in addition to
              monitoring software
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Pre-bundled, discounted base billing rate
            </li>
          </ul>

          <ul className="font-brand space-y-4 text-[16px] font-[400]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Guaranteed same-day service, even if no appointments are available
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Our proven stack of cybersecurity tools and compliance strategies
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Much, much more!
            </li>
          </ul>
          <Button
            className="mt-10 rounded-full"
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
      </div>
    </div>
  );
};
