import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import apostrophe from '../../../assets/img/“-blue.png';

export const Info = () => {
  return (
    <div className="mx-[80px] my-[150px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <img src={apostrophe} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
          <p className="text-brand-black font-brand px-[100px] text-[18px] font-[400]">
            I sleep easier at night knowing Top Notch is only a few blocks away.{' '}
            <br />
            Whenever I have a problem or just need advice, I am 110% satisfied
            with the service I receive.
          </p>
          <p className="font-brand text-brand-black text-center text-2xl font-[600]">
            Bill Howard, Real Estate III Commercial Properties
          </p>
        </div>
        <Button
          className="!max-w-[270px] rounded-full"
          variant={ButtonVariants.SECONDARY}
        >
          Our Industry Specialties
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
