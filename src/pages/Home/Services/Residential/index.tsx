import { ButtonVariants } from '../../../../@types/button';
import ArrowUp from '../../../../assets/icon/carbon_arrow-up-right.svg';
import Checkmark from '../../../../assets/icon/checkmark-square-02.svg';

import Computer from '../../../../assets/img/comp2.png';
import { Button } from '../../../../page-components/Button';

export const Residential = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 xl:p-20">
      <div className="flex justify-center">
        <img
          src={Computer}
          alt=""
          className="h-auto md:max-w-[301px] lg:max-w-full"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="font-brand-title text-4xl font-bold text-white sm:text-5xl">
          Residential Services
        </h2>
        <p className="font-brand mt-4 max-w-xl text-lg text-white">
          Professional, personalized services in the Charlottesville, Richmond,
          and D.C. areas for PCs, Macs, and home networks.
        </p>
        <ul className="font-brand mt-10 grid grid-cols-1 gap-2 text-white lg:gap-8 lg:space-y-4">
          {[
            'Computer Diagnostics & Repairs',
            'New, Used, Refurbished, & Custom PCs',
            'Networking & Printing Solutions',
            'Virus & Spyware Removal',
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={Checkmark} alt="" width={24} height={24} />
              {text}
            </li>
          ))}
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
