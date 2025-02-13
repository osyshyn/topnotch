import robot from '../../../assets/img/robot.png';
import Checkmark from '../../../assets/icon/checkmark-square-02.svg';

export const Specialize = () => {
  return (
    <div className="mt-[70px] flex items-center justify-between gap-20 pb-[80px]">
      <div>
        <img src={robot} alt="" className="h-full w-full" />
      </div>
      <div>
        <div className="flex flex-col gap-4 text-white">
          <h2 className="font-brand-title text-[48px] font-[700]">
            We Specializein
            <br /> the Following:
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 text-white">
          <ul className="font-brand space-y-4 text-[16px] font-[400]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Business Workstations
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Server Systems
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Point of Sale Terminals and Serversge
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Home PCs for the Entire Family
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              All Types of Laptops
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
