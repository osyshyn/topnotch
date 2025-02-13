import CompSearch from '../../../assets/img/compSearch.png';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import { Button } from '../../../page-components/Button';
import { ButtonVariants } from '../../../@types/button';
import { InputField } from '../../../page-components/InputField';
import { TextareaField } from '../../../page-components/TextareaField';
import daimond from '../../../assets/icon/daimond.svg';

export const Form = () => {
  return (
    <>
      <div className="bg-brand-black relative mt-[-2px] w-full px-4 py-10 md:px-20 md:py-16 md:pr-0 md:pb-[150px]">
        <div className="flex flex-wrap items-center justify-center overflow-hidden md:justify-between">
          <div className="max-w-full text-center md:max-w-[662px] md:text-left">
            <h2 className="font-brand-title mb-6 text-[32px] font-bold text-white md:text-[48px]">
              Begin Your Journey Today
            </h2>
            <p className="font-brand text-[16px] font-normal text-white md:text-[18px]">
              Get started today by contacting one of our experienced
              consultants. We'll guide you step by step to modernize your IT,
              drive meaningful business outcomes, and achieve your goals.
            </p>

            <form className="mt-8 w-full space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField type="text" placeholder="Name" />
                <InputField type="tel" placeholder="Phone" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField type="text" placeholder="Address" />
                <InputField type="email" placeholder="Email" />
              </div>
              <TextareaField placeholder="Message*" rows={6} />
            </form>

            <Button
              className="mt-8 w-full rounded-full md:w-auto"
              variant={ButtonVariants.PRIMARY}
            >
              Submit Now
              <img
                src={ArrowUp}
                className="ml-2 h-4 w-4"
                alt=""
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="hidden max-w-[40%] lg:block">
            <img
              src={CompSearch}
              alt="CompSearch"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        <div className="absolute top-[5%] right-[35%]">
          <img src={daimond} alt="" className="h-[124px] w-[125px]" />
        </div>
      </div>
    </>
  );
};
