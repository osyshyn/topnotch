import Checkmark from '../../../assets/icon/checkmark-square-02.svg';
import { VideoPlayer } from '../../../page-components/VideoPlayer';

export const Benefits = () => {
  return (
    <div className="mt-[150px] flex items-center justify-between gap-20">
      {/* <!-- Video --> */}
      <div>
        <VideoPlayer />
      </div>

      {/* <!-- Text --> */}
      <div>
        <div className="flex flex-col gap-4 text-white">
          <h2 className="font-brand-title text-[48px] font-[700]">
            Benefits You Can Expect from Using the Solutions of our Professional
            Engineers
          </h2>
          <p className="font-brand text-[18px] font-[400]">
            Leave it to the experts when it comes to network-related tasks. Some
            of the most common are:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 text-white">
          <ul className="font-brand space-y-4 text-[16px] font-[400]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Expansion or migration to a new facility
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Cybersecurity & fortification
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Requirements for better WiFi coverage
            </li>
          </ul>

          <ul>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Troubleshooting the inability to connect to resources such as
              servers, printers, or the Internet
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
