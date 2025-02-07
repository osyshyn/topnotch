import { ButtonVariants } from '../../../../@types/button';
import ArrowUp from '../../../../assets/icon/carbon_arrow-up-right.svg';
import Checkmark from '../../../../assets/icon/checkmark-square-02.svg';

import Computer from '../../../../assets/img/comp2.png';
import { Button } from '../../../../page-components/Button';

export const Residential = () => {
  return (
    <div className="flex items-center justify-between space-y-6">
      <div className="mt-6">
        <img src={Computer} alt="" width={500} height={400} />
      </div>

      <div>
        <h2 className="font-brand-title text-5xl font-bold text-white">
          Residential Services
        </h2>
        <p className="font-brand mt-4 max-w-[550px] text-[18px] font-[400] text-white">
          Professional, personalized services in the Charlottesville, Richmond,
          and D.C. areas for PCs, Macs, and home networks.
        </p>
        <ul className="font-brand mt-10 space-y-4 text-[16px] font-[400] text-white">
          <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24} />
            Computer Diagnostics & Repairs
          </li>
          <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24} />
            New, Used, Refurbished, & Custom PCs
          </li>
          <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24} />
            Networking & Printing Solutions
          </li>
          <li className="flex items-center gap-2">
            <img src={Checkmark} alt="" width={24} height={24} />
            Virus & Spyware Removal
          </li>
        </ul>
        <Button className="mt-10 rounded-full" variant={ButtonVariants.PRIMARY}>
          Residential
          <img
            src={ArrowUp}
            className="ml-2 h-4 w-4"
            alt=""
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};
