import CompSearch from '../../../assets/img/compSearch.png';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import { Button } from '../../../page-components/Button';
import { ButtonVariants } from '../../../@types/button';
import { InputField } from '../../../page-components/InputField';
import { TextareaField } from '../../../page-components/TextareaField';

export const Form = () => {
  return (
    <div className="bg-brand-black mt-[375px] w-full py-16 pl-6">
      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-[662px] pl-[52px]">
          <h2 className="font-brand-title mb-8 text-[48px] font-bold text-white">
            Begin Your Journey Today
          </h2>
          <p className="font-brand mt-4 max-w-[620px] text-[18px] font-normal text-white">
            Get started today by contacting one of our experienced consultants.
            We'll guide you step by step to modernize your IT, drive meaningful
            business outcomes, and achieve your goals.
          </p>

          {/* Form */}
          <form className="mt-10 w-full space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputField type="text" placeholder="Name" />
              <InputField type="tel" placeholder="Phone" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField type="text" placeholder="Address" />
              <InputField type="email" placeholder="Email" />
            </div>
            <TextareaField placeholder="Message*" rows={6} />
          </form>

          {/* Submit Button */}
          <Button
            className="mt-10 rounded-full"
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

        {/* Right Image */}
        <div>
          <img src={CompSearch} alt="CompSearch" />
        </div>
      </div>
    </div>
  );
};
