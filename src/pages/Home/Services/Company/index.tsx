import { ButtonVariants } from '../../../../@types/button';
import ArrowUp from '../../../../assets/icon/carbon_arrow-up-right.svg';
import Checkmark from '../../../../assets/icon/checkmark-square-02.svg';

import Computer from '../../../../assets/img/computer.png';
import { Button } from '../../../../page-components/Button';

export const Company = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-brand-title text-5xl font-bold text-white">
          Commercial Services
        </h2>
        <p className="font-brand mt-4 max-w-[660px] text-[18px] font-[400] text-white">
          Design, development, implementation, and support-all from one
          qualified provider. Your company or medical practice deserves the best
          in IT support.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 text-white">
          {/* Перша колонка */}
          <ul className="font-brand space-y-4 text-[16px] font-[400]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Network Support & Systems Administration
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Staff Augmentation
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Computer Equipment & Repairs
            </li>
          </ul>

          {/* Друга колонка */}
          <ul className="font-brand space-y-4 text-[16px] font-[400]">
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Management Software
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              Cyber Security
            </li>
            <li className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              And many other services...
            </li>
          </ul>
        </div>

        <Button className="mt-10 rounded-full" variant={ButtonVariants.PRIMARY}>
          Contact Us
          <img
            src={ArrowUp}
            className="ml-2 h-4 w-4"
            alt=""
            aria-hidden="true"
          />
        </Button>
      </div>

      <div className="mt-6">
        <img src={Computer} alt="" width={500} height={400} />
      </div>
    </div>
  );
};
