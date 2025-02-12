import { ButtonVariants } from '../../../../@types/button';
import ArrowUp from '../../../../assets/icon/carbon_arrow-up-right.svg';
import Checkmark from '../../../../assets/icon/checkmark-square-02.svg';

import { Button } from '../../../../page-components/Button';

import ComputerBusiness from '../../../../assets/img/computer.png';

export const Company = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-12 md:grid-cols-2 lg:p-20">
      <div className="flex flex-col justify-center">
        <h2 className="font-brand-title text-4xl font-bold text-white sm:text-5xl">
          Commercial Services
        </h2>
        <p className="font-brand mt-4 max-w-xl text-lg text-white">
          Design, development, implementation, and support—all from one
          qualified provider. Your company or medical practice deserves the best
          in IT support.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 text-white sm:grid-cols-2">
          {[
            'Network Support & Systems Administration',
            'Staff Augmentation',
            'Computer Equipment & Repairs',
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              {text}
            </li>
          ))}
          {[
            'Management Software',
            'Cyber Security',
            'And many other services...',
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              {text}
            </li>
          ))}
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

      <div className="flex justify-center">
        <img src={ComputerBusiness} alt="" className="h-auto max-w-full" />
      </div>
    </div>
  );
};
